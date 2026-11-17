import type { Language } from "@/content/types";

/** Languages that share a level, joined: [["Spanish, Catalan", "Native or bilingual"], …]. */
export function languagesByLevel(languages: Language[]): [string, string][] {
  const map = new Map<string, string[]>();
  for (const l of languages) map.set(l.level, [...(map.get(l.level) ?? []), l.language]);
  return [...map].map(([level, names]) => [names.join(", "), level]);
}
