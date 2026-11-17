import type { Achievement, Experience, YearMonth } from "@/content/types";
import { monthsBetween } from "./dates";

export interface CompanyGroup {
  company: string;
  companyUrl?: string;
  companyLogo?: string;
  sectors?: string[];
  achievements?: Achievement[];
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
      last.sectors ??= role.sectors;
      last.achievements ??= role.achievements;
      if (role.start < last.start) last.start = role.start;
    } else {
      groups.push({
        company: role.company,
        companyUrl: role.companyUrl,
        companyLogo: role.companyLogo,
        sectors: role.sectors,
        achievements: role.achievements,
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

/** Whole years since the earliest role flagged `leadsTeam` started. */
export function yearsLeadingTeams(experience: Experience[]): number {
  return yearsOfExperience(experience.filter((e) => e.leadsTeam));
}

/** Number of different sectors across all companies' sector tags. */
export function sectorCount(experience: Experience[]): number {
  return new Set(experience.flatMap((e) => e.sectors ?? [])).size;
}

/** One bullet of a role: its text and an optional link shown as "View →" after it. */
export interface Bullet {
  text: string;
  url?: string;
}

/** A role's highlights as bullets. */
export function highlights(role: Experience): Bullet[] {
  return role.highlights.map((text) => ({ text }));
}

/**
 * A company's achievements as bullets (listed under "Key achievements" after its roles). An
 * optional metric is written in front of the text ("+40% revenue · …"); an optional url
 * becomes a "View →" link.
 */
export function achievements(group: CompanyGroup): Bullet[] {
  return (group.achievements ?? []).map((a) => ({
    text: a.metric ? `${a.metric.value} ${a.metric.label} · ${a.text}` : a.text,
    url: a.url,
  }));
}

/** Roles that started before this year go to the one-pager's compact "Earlier career" block. */
export const EARLIER_CAREER_BEFORE = 2017;

const startYear = (e: Experience) => Number(e.start.slice(0, 4));

/**
 * One-pager split: companies with a role started in or after EARLIER_CAREER_BEFORE get a full
 * block; the roles of every other company are listed one per row as "earlier career".
 */
export function splitCareer(experience: Experience[]): {
  main: CompanyGroup[];
  earlier: { role: Experience; sectors: string[] }[];
} {
  const groups = groupByCompany(experience);
  const isMain = (g: CompanyGroup) => g.roles.some((r) => startYear(r) >= EARLIER_CAREER_BEFORE);
  return {
    main: groups.filter(isMain),
    earlier: groups
      .filter((g) => !isMain(g))
      .flatMap((g) => g.roles.map((role) => ({ role, sectors: g.sectors ?? [] }))),
  };
}
