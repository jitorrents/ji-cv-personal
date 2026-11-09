import { resume } from "@/content/resume";
import { formatRange } from "@/lib/dates";

export function TeachingList() {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {(resume.collaborations ?? []).map((c) => (
        <li key={`${c.organization}-${c.role}`}>
          <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <p className="text-sm font-medium text-accent">{formatRange(c.start, c.end)}</p>
            <h2 className="mt-2 font-display text-xl font-semibold tracking-tight">{c.role}</h2>
            <p className="mt-1 text-sm text-muted">
              {c.url ? <a href={c.url}>{c.organization}</a> : c.organization}
              {c.location ? ` · ${c.location}` : ""}
            </p>
            {c.description && <p className="mt-4 text-pretty">{c.description}</p>}
          </article>
        </li>
      ))}
    </ul>
  );
}
