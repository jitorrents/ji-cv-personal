import type { Labels } from "@/content/labels";
import type { PartialDate, YearMonth } from "@/content/types";

type DateLabels = Labels["dates"];

function parse(ym: PartialDate): { year: number; month: number } {
  const [y, m] = ym.split("-").map(Number);
  return { year: y ?? 0, month: m ?? 1 };
}

/** "Mar 2021" / "mar 2021", or just "2021" when no month is stored. */
export function formatYearMonth(ym: PartialDate, d: DateLabels): string {
  const { year, month } = parse(ym);
  return ym.includes("-") ? `${d.months[month - 1]} ${year}` : String(year);
}

/** Whole months between two dates, counting both ends (LinkedIn style). */
export function monthsBetween(start: YearMonth, end?: YearMonth, now = new Date()): number {
  const s = parse(start);
  const e = end ? parse(end) : { year: now.getFullYear(), month: now.getMonth() + 1 };
  return Math.max(1, (e.year - s.year) * 12 + (e.month - s.month) + 1);
}

export function formatDuration(totalMonths: number, d: DateLabels): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} ${years === 1 ? d.yr : d.yrs}`);
  if (months) parts.push(`${months} ${months === 1 ? d.mo : d.mos}`);
  return parts.join(" ");
}

/**
 * "Mar 2021 – Present · 3 yrs 8 mos". The duration is left out when either end
 * has no month, because it would not be accurate.
 */
export function formatRange(
  start: PartialDate,
  end: PartialDate | undefined,
  d: DateLabels,
  withDuration = true,
): string {
  const range = `${formatYearMonth(start, d)} – ${end ? formatYearMonth(end, d) : d.present}`;
  const exact = start.includes("-") && (!end || end.includes("-"));
  return withDuration && exact
    ? `${range} · ${formatDuration(monthsBetween(start as YearMonth, end as YearMonth | undefined), d)}`
    : range;
}
