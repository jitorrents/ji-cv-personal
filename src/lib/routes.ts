import type { RouteKey } from "@/content/labels";
import { resume } from "@/content/resume";

export interface Route {
  key: RouteKey;
  href: string;
}

const all: Route[] = [
  { key: "home", href: "/" },
  { key: "experience", href: "/experience/" },
  { key: "teaching", href: "/teaching/" },
  { key: "education", href: "/education/" },
  { key: "cv", href: "/cv/" },
];

/** Routes shown in the nav and sitemap; pages without content are skipped. */
export const routes: Route[] = all.filter(
  (r) => r.key !== "teaching" || Boolean(resume.collaborations?.length),
);

/** Compare paths ignoring the trailing slash. */
export function isActive(href: string, pathname: string): boolean {
  const strip = (p: string) => (p.length > 1 ? p.replace(/\/$/, "") : p);
  return strip(href) === strip(pathname);
}
