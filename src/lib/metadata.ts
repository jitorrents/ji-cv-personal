import type { Metadata } from "next";
import { getContent, localePath, locales, type Locale } from "@/content/i18n";
import { siteUrl } from "./site";

/** Absolute URL of a page in a language (siteUrl already includes the base path). */
const abs = (locale: Locale, path: string) => `${siteUrl}${localePath(locale, path)}`;

/** Page metadata with canonical URL and hreflang alternates for every language. */
export function pageMetadata(locale: Locale, path: "/" | "/cv/"): Metadata {
  const { t, r } = getContent(locale);
  const { name, headline } = r.basics;
  const title = path === "/" ? `${name} — ${headline}` : `${t.cvPage.title} · ${name}`;
  const url = abs(locale, path);
  return {
    metadataBase: new URL(`${siteUrl}/`),
    title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, abs(l, path)])),
        "x-default": abs("en", path),
      },
    },
    openGraph: {
      type: "profile",
      title: name,
      description: headline,
      url,
      locale: locale === "es" ? "es_ES" : "en_US",
    },
    twitter: { card: "summary_large_image", title: name, description: headline },
  };
}
