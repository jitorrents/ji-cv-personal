import { Band } from "@/components/ui/Band";
import { getContent, type Locale } from "@/content/i18n";
import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { Reveal } from "@/components/ui/Reveal";
import { TagList } from "@/components/ui/Tag";
import { formatDuration, formatRange, monthsBetween } from "@/lib/dates";
import { groupByCompany } from "@/lib/experience";
import { kpis } from "@/lib/kpis";

export function ExperienceSection({ locale }: { locale: Locale }) {
  const { t, r } = getContent(locale);
  const s = t.sections.experience;
  const groups = groupByCompany(r.experience);
  return (
    <Band
      id="experience"
      tone="cloud"
      eyebrow={s.eyebrow}
      title={s.title}
      intro={s.intro}
      kpis={kpis(t, r).experience()}
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
                    {formatDuration(monthsBetween(g.start, g.end), t.dates)}
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
                        {formatRange(job.start, job.end, t.dates)}
                        {job.location ? ` · ${job.location}` : ""}
                        {job.employmentType ? ` · ${job.employmentType}` : ""}
                      </p>
                      {job.summary && <p className="mt-3 text-pretty">{job.summary}</p>}
                      {job.achievements && job.achievements.length > 0 && (
                        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                          {job.achievements.map((a) => (
                            <li
                              key={a.text}
                              className="flex items-start gap-4 rounded-2xl border-l-4 border-warm bg-band p-4"
                            >
                              {a.metric ? (
                                <span className="shrink-0">
                                  <span className="block font-display text-2xl leading-none font-bold text-warm-ink tabular-nums">
                                    {a.metric.value}
                                  </span>
                                  <span className="mt-1 block text-[0.7rem] font-semibold tracking-wider text-muted uppercase">
                                    {a.metric.label}
                                  </span>
                                </span>
                              ) : (
                                <svg
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  className="mt-0.5 size-5 shrink-0 text-warm-ink"
                                  fill="currentColor"
                                >
                                  <path d="m12 2 2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 20.9l1.6-7L2 9.2l7.1-.6L12 2Z" />
                                </svg>
                              )}
                              <p className="font-semibold text-pretty">{a.text}</p>
                            </li>
                          ))}
                        </ul>
                      )}
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
