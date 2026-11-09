import { labels } from "@/content/labels";
import { resume } from "@/content/resume";
import { companyCount, yearsOfExperience } from "./experience";

/** A headline figure shown in a section header, always computed from resume.ts. */
export interface Kpi {
  value: number;
  suffix?: string;
  label: string;
}

const k = labels.kpis;
const distinct = (values: (string | undefined)[]) =>
  new Set(values.filter((v): v is string => Boolean(v))).size;

export const kpis = {
  experience: (): Kpi[] => [
    { value: yearsOfExperience(resume.experience), suffix: "+", label: k.yearsInIt },
    { value: companyCount(resume.experience), label: k.companies },
    { value: resume.experience.length, label: k.roles },
  ],
  teaching: (): Kpi[] => {
    const c = resume.collaborations ?? [];
    return [
      { value: c.length, label: k.roles },
      { value: distinct(c.map((x) => x.organization)), label: k.institutions },
    ];
  },
  skills: (): Kpi[] => [
    { value: resume.certifications.length, label: k.certifications },
    { value: distinct(resume.certifications.map((c) => c.issuer)), label: k.issuers },
    { value: resume.skills.length, label: k.skillAreas },
  ],
  education: (): Kpi[] => [
    { value: resume.education.length, label: k.degrees },
    { value: resume.languages.length, label: k.languages },
  ],
  presence: (): Kpi[] => {
    const n = resume.publicPresence?.length ?? 0;
    return n ? [{ value: n, label: k.items }] : [];
  },
};
