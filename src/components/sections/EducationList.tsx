import { resume } from "@/content/resume";
import { formatYearMonth } from "@/lib/dates";

export function EducationList() {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {resume.education.map((e) => (
        <li key={`${e.institution}-${e.degree}`}>
          <article className="h-full rounded-2xl border border-border bg-surface p-6">
            {(e.start || e.end) && (
              <p className="text-sm font-medium text-warm-ink">
                {[e.start, e.end]
                  .filter(Boolean)
                  .map((d) => formatYearMonth(d!))
                  .join(" – ")}
              </p>
            )}
            <h3 className="mt-2 font-display text-lg font-semibold">
              {e.degree}
              {e.field ? ` in ${e.field}` : ""}
            </h3>
            <p className="mt-1 text-sm text-muted">{e.institution}</p>
            {e.notes && <p className="mt-3">{e.notes}</p>}
          </article>
        </li>
      ))}
    </ol>
  );
}
