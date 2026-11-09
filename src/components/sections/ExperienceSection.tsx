import { labels } from "@/content/labels";
import { resume } from "@/content/resume";
import { Band } from "@/components/ui/Band";
import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { Reveal } from "@/components/ui/Reveal";
import { TagList } from "@/components/ui/Tag";
import { formatDuration, formatRange, monthsBetween } from "@/lib/dates";
import { groupByCompany } from "@/lib/experience";
import { kpis } from "@/lib/kpis";

export function ExperienceSection() {
  const s = labels.sections.experience;
  const groups = groupByCompany(resume.experience);
  return (
    <Band
      id="experience"
      tone="cloud"
      eyebrow={s.eyebrow}
      title={s.title}
      intro={s.intro}
      kpis={kpis.experience()}
    >
      <ol className="space-y-6">
        {groups.map((g) => (
          <li key={`${g.company}-${g.start}`}>
            <Reveal>
              <article className="rounded-3xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
                <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                  <div className="flex items-center gap-4">
                    <CompanyLogo company={g.company} logo={g.companyLogo} />
                    <h3 className="font-display text-2xl font-bold tracking-tight">
                      {g.companyUrl ? (
                        <a href={g.companyUrl} className="hover:text-link">
                          {g.company}
                        </a>
                      ) : (
                        g.company
                      )}
                    </h3>
                  </div>
                  <p className="rounded-full bg-band px-3 py-0.5 text-sm text-muted">
                    {formatDuration(monthsBetween(g.start, g.end))}
                  </p>
                </header>

                <ol className="mt-6 space-y-8 border-l-2 border-line pl-6">
                  {g.roles.map((job) => (
                    <li key={`${job.role}-${job.start}`} className="relative">
                      <span
                        aria-hidden="true"
                        className={`absolute top-1.5 -left-[31px] size-3 rounded-full ring-4 ring-card ${
                          job.end ? "bg-earth" : "bg-warm motion-safe:animate-pulse"
                        }`}
                      />
                      <h4 className="font-semibold">{job.role}</h4>
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
                                className="mt-2.5 h-0.5 w-3 shrink-0 rounded-full bg-spruce"
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
            </Reveal>
          </li>
        ))}
      </ol>
    </Band>
  );
}
