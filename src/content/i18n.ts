import { content } from "./content";
import { locales, type Locale } from "./locale";
import type { Labels, Localized, Resume, Translated } from "./types";

export * from "./locale";

/** An object with exactly the keys of the supported languages is a translation pair. */
function isTranslated(v: unknown): v is Translated<unknown> {
  if (!v || typeof v !== "object" || Array.isArray(v)) return false;
  const keys = Object.keys(v);
  return keys.length === locales.length && locales.every((l) => keys.includes(l));
}

/** Picks one language out of a bilingual value (see content.ts). */
export function localize<T>(value: Localized<T>, locale: Locale): T {
  const pick = (v: unknown): unknown => {
    if (isTranslated(v)) return pick((v as Record<Locale, unknown>)[locale]);
    if (Array.isArray(v)) return v.map(pick);
    if (v && typeof v === "object") {
      return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, pick(x)]));
    }
    return v;
  };
  return pick(value) as T;
}

const cache = Object.fromEntries(
  locales.map((l) => [
    l,
    { t: localize<Labels>(content.ui, l), r: localize<Resume>(content.cv, l) },
  ]),
) as Record<Locale, { t: Labels; r: Resume }>;

/** UI strings (t) and CV content (r) for a language. Server components only. */
export function getContent(locale: Locale): { t: Labels; r: Resume } {
  return cache[locale];
}
