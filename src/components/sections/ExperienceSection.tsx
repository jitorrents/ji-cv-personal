import { Band } from "@/components/ui/Band";
import { getContent, type Locale } from "@/content/i18n";
import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { Reveal } from "@/components/ui/Reveal";
import { RichText } from "@/components/ui/RichText";
import { TagList } from "@/components/ui/Tag";
import { formatDuration, formatRange, monthsBetween } from "@/lib/dates";
import { groupByCompany } from "@/lib/experience";
import { kpis } from "@/lib/kpis";
import { achievements, highlights, type Bullet } from "@/lib/experience";

/** A role's bullets: a short dash marker (navy by default) and an optional "View →" link. */
function BulletList({
  items,
  linkLabel,
  marker = "bg-spruce",
  className = "mt-3",
}: {
  items: Bullet[];
  linkLabel: string;
  marker?: string;
  className?: string;
}) {
  if (!items.length) return null;
  return (
    <ul className={`space-y-1.5 ${className}`}>
      {items.map((h) => (
        <li key={h.text} className="flex gap-3 text-pretty">
          <span aria-hidden="true" className={`mt-2.5 h-0.5 w-3 shrink-0 rounded-full ${marker}`} />
          <span>
            <RichText text={h.text} />
            {h.url && (
              <>
                {" "}
                <a
                  href={h.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold whitespace-nowrap text-warm-ink underline-offset-4 hover:underline"
                >
                  {linkLabel}
                  <span aria-hidden="true"> →</span>
                </a>
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

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
                <TagList items={g.sectors ?? []} className="mt-4" />

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
                      <BulletList items={highlights(job)} linkLabel={t.presenceLink} />
                      {/* Private reminders: dev server only, stripped from production builds. */}
                      {process.env.NODE_ENV === "development" &&
                        job.todo?.map((note) => (
                          <p
                            key={note}
                            className="mt-4 rounded-lg border-2 border-dashed border-warm p-3 text-sm text-pretty"
                          >
                            <strong>TODO:</strong> {note}
                          </p>
                        ))}
                    </li>
                  ))}
                </ol>
                {achievements(g).length > 0 && (
                  // Company results stand out on a faint accent tint (no border or shadow).
                  <div className="mt-8 rounded-2xl bg-warm/10 p-5 sm:p-6">
                    <h4 className="text-xs font-bold tracking-[0.2em] text-warm-ink uppercase">
                      {t.keyAchievements}
                    </h4>
                    <BulletList
                      items={achievements(g)}
                      linkLabel={t.presenceLink}
                      marker="bg-warm"
                      className="mt-3"
                    />
                  </div>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Band>
  );
}
