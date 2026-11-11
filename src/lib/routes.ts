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

/** A top-level header link, or a dropdown grouping several sections. */
export type NavItem = { id: SectionId } | { group: "career"; ids: SectionId[] };

/**
 * Header navigation (Stockagile-style: few centered items, one dropdown):
 * About · Career ▾ (Experience, Education, Teaching) · Skills · Public presence.
 * Contact is a separate action on the right. A group with one section becomes a plain link.
 */
export function navTree(ids: SectionId[]): NavItem[] {
  const has = (id: SectionId) => ids.includes(id);
  const career = (["experience", "education", "teaching"] as SectionId[]).filter(has);
  const items: NavItem[] = [];
  if (has("about")) items.push({ id: "about" });
  if (career.length > 1) items.push({ group: "career", ids: career });
  else career.forEach((id) => items.push({ id }));
  for (const id of ["skills", "presence"] as SectionId[]) if (has(id)) items.push({ id });
  return items;
}

/** Every page in every language, for the sitemap. */
export const pages = locales.flatMap((l) => ["/", "/cv/"].map((p) => localePath(l, p)));
