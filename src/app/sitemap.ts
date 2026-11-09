import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";
import { buildDate, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `${siteUrl}${r.href}`, lastModified: buildDate }));
}
