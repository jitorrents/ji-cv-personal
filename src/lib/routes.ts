import type { SectionId } from "@/content/labels";
import { resume } from "@/content/resume";

/** Home page sections in page order; sections without content are skipped. */
export const sections: SectionId[] = (
  [
    ["about", Boolean(resume.basics.summary)],
    ["experience", resume.experience.length > 0],
    ["teaching", Boolean(resume.collaborations?.length)],
    ["skills", resume.skills.length > 0 || resume.certifications.length > 0],
    ["education", resume.education.length > 0 || resume.languages.length > 0],
    // Shown even when empty, with a "coming soon" note.
    ["presence", true],
    ["contact", true],
  ] as const
)
  .filter(([, has]) => has)
  .map(([id]) => id);

/** Pages for the sitemap. */
export const pages = ["/", "/cv/"];
