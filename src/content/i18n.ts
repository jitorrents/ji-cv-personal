import { labels, type Labels } from "./labels";
import { labelsEs } from "./labels.es";
import type { Locale } from "./locale";
import { resume } from "./resume";
import { resumeEs } from "./resume.es";
import type { Resume } from "./types";

export * from "./locale";

/** UI strings (t) and CV content (r) for a language. Server components only. */
export function getContent(locale: Locale): { t: Labels; r: Resume } {
  return locale === "es" ? { t: labelsEs, r: resumeEs } : { t: labels, r: resume };
}
