import { RichText } from "@/components/ui/RichText";
import { getContent, type Locale } from "@/content/i18n";
import { groupByIssuer } from "@/lib/certifications";
import { formatRange, formatYearMonth, formatYearRange } from "@/lib/dates";
import { achievements, groupByCompany, highlights } from "@/lib/experience";
import { CompactRow } from "./CompactRow";
import { ContactList } from "./ContactList";
import { KeyAchievements } from "./KeyAchievements";
import { SectionHeading } from "./SectionHeading";
import { SheetIdentity } from "./SheetIdentity";
import { SidebarSection } from "./SidebarSection";
import { SkillPills } from "./SkillPills";
import { SquareBullets } from "./SquareBullets";

/**
 * The whole CV in the one-pager's visual language, for up to two A4 pages: a sand sidebar
 * (identity, profile, education, languages, contact, skills, certifications) and a main
 * column (top skills, every company and role with highlights and key achievements,
 * teaching, public presence). Blocks never split across pages (`break-inside-avoid`); on
 * paper the sidebar simply continues on page 2. Sizes in mm/pt so screen and print match.
 */
export function CvDocument({ locale }: { locale: Locale }) {
  const { t, r } = getContent(locale);
  const { name, summary, topSkills } = r.basics;
  const presence = [...(r.publicPresence ?? [])].sort((a, b) =>
    (b.date ?? "").localeCompare(a.date ?? ""),
  );

  return (
    <article
      aria-label={name}
      className="cv-sheet tone-plain sheet-light grid min-h-[297mm] w-[210mm] shrink-0 grid-cols-[67mm_minmax(0,1fr)] bg-band text-[7.9pt] leading-[1.27] text-fg shadow-xl ring-1 ring-line print:min-h-0 print:shadow-none print:ring-0"
    >
      <aside className="cv-col flex flex-col gap-[5.5mm] bg-cloud px-[7.5mm] pt-[12mm] pb-[10mm]">
        <SheetIdentity basics={r.basics} />

        <SidebarSection title={t.cvHeadings.profile} className="break-inside-avoid">
          <p className="text-[7.5pt] leading-[1.3]">
            <RichText text={summary} />
          </p>
        </SidebarSection>

        <SidebarSection title={t.cvHeadings.education}>
          <ul className="space-y-[1.8mm] text-[7.3pt]">
            {r.education.map((e) => (
              <li key={`${e.institution}-${e.degree}`} className="break-inside-avoid">
                <p className="font-bold">
                  {e.degree}
                  {e.field ? `${t.education.fieldJoiner}${e.field}` : ""}
                </p>
                <p className="text-muted">{e.institution}</p>
                {e.start && (
                  <p className="text-muted tabular-nums">
                    {formatYearRange(e.start, e.end, t.dates)}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </SidebarSection>

        <SidebarSection title={t.cvHeadings.languages} className="break-inside-avoid">
          <ul className="space-y-[0.8mm] text-[7.3pt]">
            {r.languages.map((l) => (
              <li key={l.language}>
                <span className="font-bold">{l.language}</span>
                <span className="text-muted"> · {l.level}</span>
              </li>
            ))}
          </ul>
        </SidebarSection>

        <SidebarSection title={t.nav.contact} className="break-inside-avoid">
          <ContactList basics={r.basics} locale={locale} />
        </SidebarSection>

        <SidebarSection title={t.cvHeadings.skills}>
          <ul className="space-y-[1.6mm] text-[7.3pt]">
            {r.skills.map((g) => (
              <li key={g.category} className="break-inside-avoid">
                <p className="font-bold">{g.category}</p>
                <p className="text-muted">{g.items.join(" · ")}</p>
              </li>
            ))}
          </ul>
        </SidebarSection>

        <SidebarSection title={t.cvHeadings.certifications}>
          <ul className="space-y-[1.6mm] text-[7.3pt]">
            {groupByIssuer(r.certifications, t.otherIssuer).map(([issuer, certs]) => (
              <li key={issuer} className="break-inside-avoid">
                <p className="font-bold">{issuer}</p>
                <ul className="text-muted">
                  {certs.map((c) => (
                    <li key={c.name}>{c.name}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </SidebarSection>
      </aside>

      <div className="cv-col flex min-w-0 flex-col px-[10mm] pt-[12mm] pb-[10mm]">
        <SkillPills items={topSkills ?? []} />

        <section className="mt-[7mm]">
          <SectionHeading>{t.cvHeadings.experience}</SectionHeading>
          <div className="mt-[3.5mm]">
            {groupByCompany(r.experience).map((g) => (
              <section
                key={`${g.company}-${g.start}`}
                className="break-inside-avoid border-t border-line pt-[2.6mm] pb-[2.6mm] first:border-0 first:pt-0"
              >
                <CompactRow date={formatYearRange(g.start, g.end, t.dates)}>
                  <span className="font-display text-[11.5pt] font-bold text-title">
                    {g.company}
                  </span>
                </CompactRow>
                {g.roles.map((job) => (
                  <div key={`${job.role}-${job.start}`} className="mt-[1.6mm]">
                    <CompactRow date={formatRange(job.start, job.end, t.dates, false)}>
                      <span className="font-bold">{job.role}</span>
                    </CompactRow>
                    {job.summary && <p className="mt-[0.6mm] text-pretty">{job.summary}</p>}
                    <SquareBullets
                      items={highlights(job)}
                      linkLabel={t.presenceLink}
                      className="mt-[1.2mm]"
                    />
                  </div>
                ))}
                <KeyAchievements
                  title={t.keyAchievements}
                  items={achievements(g)}
                  linkLabel={t.presenceLink}
                  className="mt-[2.4mm]"
                />
              </section>
            ))}
          </div>
        </section>

        {r.collaborations?.length ? (
          <section className="mt-[4mm]">
            <SectionHeading>{t.cvHeadings.teaching}</SectionHeading>
            <ul className="mt-[3mm] space-y-[1.4mm]">
              {r.collaborations.map((c) => (
                <li key={`${c.organization}-${c.role}`} className="break-inside-avoid">
                  <CompactRow date={formatYearRange(c.start, c.end, t.dates)}>
                    <span className="font-bold">{c.role}</span>
                    <span className="text-muted"> · {c.organization}</span>
                  </CompactRow>
                  {c.description && <p className="mt-[0.4mm] text-pretty">{c.description}</p>}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {presence.length > 0 && (
          <section className="mt-[4mm]">
            <SectionHeading>{t.nav.presence}</SectionHeading>
            <ul className="mt-[3mm] space-y-[1mm]">
              {presence.map((p) => (
                <li key={`${p.title}-${p.date}`} className="break-inside-avoid">
                  <CompactRow date={p.date ? formatYearMonth(p.date, t.dates) : undefined}>
                    {p.event && <span className="font-bold">{p.event}</span>}
                    <span className="text-muted">
                      {p.event ? " · " : ""}
                      {t.presenceTypes[p.type]} · {p.title}
                    </span>
                    {p.url && (
                      <>
                        {" "}
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold whitespace-nowrap text-warm-ink"
                        >
                          {t.presenceLink}
                          <span aria-hidden="true"> →</span>
                        </a>
                      </>
                    )}
                  </CompactRow>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
