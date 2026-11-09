import { labels } from "@/content/labels";
import type { YearMonth } from "@/content/types";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parse(ym: YearMonth): { year: number; month: number } {
  const [y, m] = ym.split("-").map(Number);
  return { year: y ?? 0, month: m ?? 1 };
}

export function formatYearMonth(ym: YearMonth): string {
  const { year, month } = parse(ym);
  return `${MONTHS[month - 1]} ${year}`;
}

/** Whole months between two dates, counting both ends (LinkedIn style). */
export function monthsBetween(start: YearMonth, end?: YearMonth, now = new Date()): number {
  const s = parse(start);
  const e = end ? parse(end) : { year: now.getFullYear(), month: now.getMonth() + 1 };
  return Math.max(1, (e.year - s.year) * 12 + (e.month - s.month) + 1);
}

export function formatDuration(totalMonths: number): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  return parts.join(" ");
}

/** "Mar 2021 – Present · 3 yrs 8 mos" */
export function formatRange(start: YearMonth, end?: YearMonth, withDuration = true): string {
  const range = `${formatYearMonth(start)} – ${end ? formatYearMonth(end) : labels.present}`;
  return withDuration ? `${range} · ${formatDuration(monthsBetween(start, end))}` : range;
}
