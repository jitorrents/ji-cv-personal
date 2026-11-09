import { labels } from "@/content/labels";
import { resume } from "@/content/resume";
import { buildDate, repoUrl } from "@/lib/site";

export function Footer() {
  const updated = buildDate.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <footer className="tone-stone no-print bg-band text-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>
          © {buildDate.getFullYear()} {resume.basics.name}
          <span aria-hidden="true"> · </span>
          <span className="whitespace-nowrap">
            {labels.lastUpdated} {updated}
          </span>
        </p>
        <a href={repoUrl} className="text-link underline-offset-4 hover:underline">
          {labels.sourceCode}
        </a>
      </div>
    </footer>
  );
}
