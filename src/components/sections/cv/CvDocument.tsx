import { getContent, type Locale } from "@/content/i18n";
import { formatRange, formatYearMonth } from "@/lib/dates";
import { groupByCompany } from "@/lib/experience";
import { groupByIssuer } from "@/lib/certifications";

function CvSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-7 first:mt-0 print:mt-4">
      <h2 className="mb-3 border-b border-line pb-1.5 text-xs font-bold tracking-[0.18em] text-link uppercase print:mb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}

/** The whole CV, laid out for an A4 sheet. On screen it shows as a paper card. */
export function CvDocument({ locale }: { locale: Locale }) {
  const { t, r } = getContent(locale);
  const { name, headline, location, profiles, summary } = r.basics;
  return (
    <article
      aria-label={name}
      className="tone-plain mx-auto max-w-[210mm] rounded-sm bg-band p-6 text-[0.95rem] leading-snug text-fg shadow-xl ring-1 ring-line sm:p-12 print:max-w-none print:p-0 print:shadow-none print:ring-0"
    >
      <header className="border-b-2 border-warm pb-5 print:pb-3">
        <h1 className="font-display text-3xl font-bold tracking-tight">{name}</h1>
        <p className="mt-1 text-lg text-muted">{headline}</p>
        <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
          <span>{location}</span>
          {profiles.map((p) => (
            <a key={p.url} href={p.url} className="text-link">
              {p.url.replace(/^https?:\/\/(www\.)?/, "")}
            </a>
          ))}
        </p>
      </header>

      <div className="mt-6 grid gap-x-10 md:grid-cols-[1fr_15rem] print:mt-4 print:grid-cols-[1fr_52mm] print:gap-x-8">
        <div>
          <CvSection title={t.cv.profile}>
            <p className="text-pretty">{summary}</p>
          </CvSection>

          <CvSection title={t.cv.experience}>
            <div className="space-y-4 print:space-y-3">
              {groupByCompany(r.experience).map((g) => (
                <article key={`${g.company}-${g.start}`}>
                  <h3 className="font-semibold">{g.company}</h3>
                  {g.roles.map((job) => (
                    <div key={`${job.role}-${job.start}`} className="mt-1.5">
                      <p className="flex flex-wrap justify-between gap-x-3">
                        <span className="font-medium">{job.role}</span>
                        <span className="text-xs text-muted tabular-nums">
                          {formatRange(job.start, job.end, t.dates, false)}
                        </span>
                      </p>
                      {job.summary && <p className="mt-0.5 text-sm text-pretty">{job.summary}</p>}
                      {job.highlights.length > 0 && (
                        <ul className="mt-1 list-disc space-y-0.5 pl-4 text-sm marker:text-warm">
                          {job.highlights.map((h) => (
                            <li key={h}>{h}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </article>
              ))}
            </div>
          </CvSection>

          {r.collaborations?.length ? (
            <CvSection title={t.cv.teaching}>
              <ul className="space-y-2">
                {r.collaborations.map((c) => (
                  <li key={`${c.organization}-${c.role}`}>
                    <p className="flex flex-wrap justify-between gap-x-3">
                      <span className="font-medium">
                        {c.role}, {c.organization}
                      </span>
                      <span className="text-xs text-muted tabular-nums">
                        {formatRange(c.start, c.end, t.dates, false)}
                      </span>
                    </p>
                    {c.description && <p className="text-sm">{c.description}</p>}
                  </li>
                ))}
              </ul>
            </CvSection>
          ) : null}
        </div>

        <aside>
          <CvSection title={t.cv.education}>
            <ul className="space-y-2.5 text-sm">
              {r.education.map((e) => (
                <li key={`${e.institution}-${e.degree}`}>
                  <p className="font-medium">
                    {e.degree}
                    {e.field ? `${t.education.fieldJoiner}${e.field}` : ""}
                  </p>
                  <p className="text-muted">{e.institution}</p>
                  {(e.start || e.end) && (
                    <p className="text-xs text-muted tabular-nums">
                      {[e.start, e.end]
                        .filter(Boolean)
                        .map((d) => formatYearMonth(d!, t.dates))
                        .join(" – ")}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </CvSection>

          <CvSection title={t.cv.skills}>
            <div className="space-y-2 text-sm">
              {r.skills.map((g) => (
                <p key={g.category}>
                  <span className="font-medium">{g.category}: </span>
                  <span className="text-muted">{g.items.join(", ")}</span>
                </p>
              ))}
            </div>
          </CvSection>

          <CvSection title={t.cv.languages}>
            <ul className="space-y-0.5 text-sm">
              {r.languages.map((l) => (
                <li key={l.language}>
                  <span className="font-medium">{l.language}</span>{" "}
                  <span className="text-muted">· {l.level}</span>
                </li>
              ))}
            </ul>
          </CvSection>
          <CvSection title={t.cv.certifications}>
            <div className="space-y-2 text-xs">
              {groupByIssuer(r.certifications, t.otherIssuer).map(([issuer, certs]) => (
                <div key={issuer}>
                  <p className="font-semibold">{issuer}</p>
                  <ul className="text-muted">
                    {certs.map((c) => (
                      <li key={c.name}>{c.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CvSection>
        </aside>
      </div>
    </article>
  );
}
