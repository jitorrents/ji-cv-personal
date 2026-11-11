export const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

/** Public origin + base path, no trailing slash. Set NEXT_PUBLIC_SITE_URL in CI. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
  /\/$/,
  "",
);

export const repoUrl = "https://github.com/jitorrents/ji-cv-personal";

/**
 * GoatCounter site code for visit statistics (cookieless, no consent banner needed).
 * Empty = disabled. Set it to the code chosen at goatcounter.com, e.g. "jitorrents"
 * for https://jitorrents.goatcounter.com. Only production builds count visits.
 */
export const goatcounterCode = "jitorrents";

/** Build timestamp, used for the "last updated" footer. */
export const buildDate = new Date();

/** Prefix a /public asset path with the base path (next/link handles routes itself). */
export function asset(path: string): string {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
