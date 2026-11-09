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
    <footer className="mt-12 border-t border-border py-8 text-center text-sm text-muted">
      <p>
        © {buildDate.getFullYear()} {resume.basics.name} · {labels.lastUpdated} {updated}
      </p>
      <p className="no-print mt-1">
        <a href={repoUrl} className="underline underline-offset-4">
          {labels.sourceCode}
        </a>
      </p>
    </footer>
  );
}
