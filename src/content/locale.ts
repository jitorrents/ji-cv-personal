// Language helpers with no content imports, so client components can use them
// without pulling the CV text into the browser bundle.

/** Supported languages. English is the default and lives at the site root. */
export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** Route for a language: "/cv/" -> "/cv/" (en) or "/es/cv/" (es). `path` starts with "/". */
export function localePath(locale: Locale, path: string): string {
  return locale === defaultLocale ? path : `/${locale}${path}`;
}

/** Locale of a pathname. */
export function localeFromPath(pathname: string): Locale {
  return /^\/es(\/|$)/.test(pathname) ? "es" : "en";
}

/** The same page in another language, from a pathname (with or without trailing slash). */
export function switchLocalePath(pathname: string, to: Locale): string {
  const bare = pathname.replace(/^\/es(?=\/|$)/, "") || "/";
  return localePath(to, bare.endsWith("/") ? bare : `${bare}/`);
}

/** True on a language's home page ("/", "/es", "/es/"). */
export function isHomePath(pathname: string): boolean {
  return /^\/(es\/?)?$/.test(pathname);
}
