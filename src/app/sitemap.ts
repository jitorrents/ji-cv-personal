import type { MetadataRoute } from "next";
import { pages } from "@/lib/routes";
import { buildDate, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({ url: `${siteUrl}${p}`, lastModified: buildDate }));
}
