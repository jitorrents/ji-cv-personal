import type { Experience, YearMonth } from "@/content/types";
import { monthsBetween } from "./dates";

export interface CompanyGroup {
  company: string;
  companyUrl?: string;
  start: YearMonth;
  end?: YearMonth;
  roles: Experience[];
}

/** Groups consecutive roles at the same company (input is newest first). */
export function groupByCompany(experience: Experience[]): CompanyGroup[] {
  const groups: CompanyGroup[] = [];
  for (const role of experience) {
    const last = groups.at(-1);
    if (last && last.company === role.company) {
      last.roles.push(role);
      if (role.start < last.start) last.start = role.start;
    } else {
      groups.push({
        company: role.company,
        companyUrl: role.companyUrl,
        start: role.start,
        end: role.end,
        roles: [role],
      });
    }
  }
  return groups;
}

/** Whole years since the earliest role started. */
export function yearsOfExperience(experience: Experience[]): number {
  const first = experience.map((e) => e.start).sort()[0];
  return first ? Math.floor(monthsBetween(first) / 12) : 0;
}

/** Number of different employers. */
export function companyCount(experience: Experience[]): number {
  return new Set(experience.map((e) => e.company)).size;
}
