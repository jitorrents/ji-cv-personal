import Link from "next/link";
import { labels } from "@/content/labels";
import { resume } from "@/content/resume";
import { routes } from "@/lib/routes";
import { buildDate, repoUrl } from "@/lib/site";

export function Footer() {
  const updated = buildDate.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <footer className="no-print mt-24 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>
          © {buildDate.getFullYear()} {resume.basics.name}
          <span aria-hidden="true"> · </span>
          <span className="whitespace-nowrap">
            {labels.lastUpdated} {updated}
          </span>
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {routes.map((r) => (
            <li key={r.key}>
              <Link href={r.href} className="hover:text-fg">
                {labels.nav[r.key]}
              </Link>
            </li>
          ))}
          <li>
            <a href={repoUrl} className="hover:text-fg">
              {labels.sourceCode}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
