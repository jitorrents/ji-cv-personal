import { resume } from "@/content/resume";
import { TagList } from "@/components/ui/Tag";
import { formatDuration, formatRange, monthsBetween } from "@/lib/dates";
import { groupByCompany } from "@/lib/experience";

export function ExperienceTimeline() {
  const groups = groupByCompany(resume.experience);
  return (
    <ol className="space-y-6">
      {groups.map((g) => (
        <li key={`${g.company}-${g.start}`}>
          <article className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                {g.companyUrl ? (
                  <a href={g.companyUrl} className="hover:text-accent">
                    {g.company}
                  </a>
                ) : (
                  g.company
                )}
              </h2>
              {g.roles.length > 1 && (
                <p className="text-sm text-muted">
                  {formatDuration(monthsBetween(g.start, g.end))}
                </p>
              )}
            </header>

            <ol className="mt-6 space-y-8 border-l-2 border-border pl-6">
              {g.roles.map((job) => (
                <li key={`${job.role}-${job.start}`} className="relative">
                  <span
                    aria-hidden="true"
                    className={`absolute top-1.5 -left-[31px] size-3 rounded-full ring-4 ring-surface ${
                      job.end ? "bg-border" : "bg-warm"
                    }`}
                  />
                  <h3 className="font-semibold">{job.role}</h3>
                  <p className="mt-0.5 text-sm text-muted">
                    {formatRange(job.start, job.end)}
                    {job.location ? ` · ${job.location}` : ""}
                    {job.employmentType ? ` · ${job.employmentType}` : ""}
                  </p>
                  {job.summary && <p className="mt-3 text-pretty">{job.summary}</p>}
                  {job.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {job.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-pretty">
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-0.5 w-3 shrink-0 rounded-full bg-warm"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  <TagList items={job.tech ?? []} className="mt-4" />
                </li>
              ))}
            </ol>
          </article>
        </li>
      ))}
    </ol>
  );
}
