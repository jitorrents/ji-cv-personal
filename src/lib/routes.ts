import type { SectionId } from "@/content/labels";
import { locales, localePath } from "@/content/i18n";
import type { Resume } from "@/content/types";

/** Home page sections in page order; sections without content are skipped. */
export function sections(r: Resume): SectionId[] {
  return (
    [
      ["about", Boolean(r.basics.summary)],
      ["experience", r.experience.length > 0],
      ["education", r.education.length > 0 || r.languages.length > 0],
      ["skills", r.skills.length > 0 || r.certifications.length > 0],
      ["teaching", Boolean(r.collaborations?.length)],
      // Shown even when empty, with a "coming soon" note.
      ["presence", true],
      ["contact", true],
    ] as const
  )
    .filter(([, has]) => has)
    .map(([id]) => id);
}

/** Every page in every language, for the sitemap. */
export const pages = locales.flatMap((l) => ["/", "/cv/"].map((p) => localePath(l, p)));
