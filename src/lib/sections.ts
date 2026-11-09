import type { SectionId } from "@/content/labels";
import { resume } from "@/content/resume";

/** Sections shown in the nav, in page order, skipping empty ones. */
export function navSections(): SectionId[] {
  const has: Record<SectionId, boolean> = {
    about: Boolean(resume.basics.summary),
    experience: resume.experience.length > 0,
    collaborations: Boolean(resume.collaborations?.length),
    skills: resume.skills.length > 0,
    projects: Boolean(resume.projects?.length),
    education: resume.education.length > 0,
    certifications: resume.certifications.length > 0,
    languages: resume.languages.length > 0,
    contact: true,
  };
  return (Object.keys(has) as SectionId[]).filter((id) => has[id]);
}
