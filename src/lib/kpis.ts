import type { Labels } from "@/content/types";
import type { Resume } from "@/content/types";
import { sectorCount, yearsLeadingTeams, yearsOfExperience } from "./experience";

/** A headline figure shown in a section header, always computed from the CV data. */
export interface Kpi {
  value: number;
  suffix?: string;
  label: string;
}

const distinct = (values: (string | undefined)[]) =>
  new Set(values.filter((v): v is string => Boolean(v))).size;

/** KPIs per section, for one language's labels and CV content. */
export function kpis(t: Labels, r: Resume) {
  const k = t.kpis;
  return {
    experience: (): Kpi[] => [
      { value: yearsOfExperience(r.experience), suffix: "+", label: k.yearsInIt },
      { value: yearsLeadingTeams(r.experience), suffix: "+", label: k.yearsLeadingTeams },
      { value: sectorCount(r.experience), label: k.sectors },
    ],
    teaching: (): Kpi[] => {
      const c = r.collaborations ?? [];
      return [
        { value: c.length, label: k.roles },
        { value: distinct(c.map((x) => x.organization)), label: k.institutions },
      ];
    },
    skills: (): Kpi[] => [
      { value: r.certifications.length, label: k.certifications },
      { value: distinct(r.certifications.map((c) => c.issuer)), label: k.issuers },
      { value: r.skills.length, label: k.skillAreas },
    ],
    education: (): Kpi[] => [
      { value: r.education.length, label: k.degrees },
      { value: r.languages.length, label: k.languages },
    ],
    presence: (): Kpi[] => {
      const n = r.publicPresence?.length ?? 0;
      return n ? [{ value: n, label: k.items }] : [];
    },
  };
}
