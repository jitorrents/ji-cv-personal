import { RichText } from "@/components/ui/RichText";
import { getContent, type Locale } from "@/content/i18n";
import { issuerSummary } from "@/lib/certifications";
import { formatYearMonth, formatYearRange } from "@/lib/dates";
import { achievements, splitCareer } from "@/lib/experience";
import { languagesByLevel } from "@/lib/languages";
import { CompactRow } from "./CompactRow";
import { ContactList } from "./ContactList";
import { KeyAchievements } from "./KeyAchievements";
import { SectionHeading } from "./SectionHeading";
import { SheetIdentity } from "./SheetIdentity";
import { SidebarSection } from "./SidebarSection";
import { SkillPills } from "./SkillPills";

const lowerFirst = (s: string, locale: Locale) =>
  s.charAt(0).toLocaleLowerCase(locale) + s.slice(1);

/**
 * The CV on one A4 page (210 × 297 mm), built from content.ts: a sand sidebar (photo, name,
 * tagline, top skills as stacked pills, education, certifications, languages, contact) and a
 * main column (profile summary as the lead paragraph, recent companies with their key
 * achievements, earlier career, public presence).
 * Sizes are in mm/pt so the screen card and the printed page match. The sheet always uses
 * the light palette (`sheet-light`), also in dark mode.
 */
export function OnePager({ locale }: { locale: Locale }) {
  const { t, r } = getContent(locale);
  const { name, summary, topSkills } = r.basics;
  const { main, earlier } = splitCareer(r.experience);
  const presence = [...(r.publicPresence ?? [])].sort((a, b) =>
    (b.date ?? "").localeCompare(a.date ?? ""),
  );
  const earlierStart = earlier.map((e) => e.role.start).sort()[0];
  // Every earlier role has ended; undefined would read "Present".
  const earlierEnd = earlier
    .map((e) => e.role.end)
    .filter((d) => d !== undefined)
    .sort()
    .at(-1);

  return (
    <article
      aria-label={name}
      className="one-pager-sheet tone-plain sheet-light grid h-[297mm] w-[210mm] shrink-0 grid-cols-[67mm_minmax(0,1fr)] overflow-hidden bg-band text-[8.2pt] leading-[1.32] text-fg shadow-xl ring-1 ring-line print:shadow-none print:ring-0"
    >
      <aside className="flex flex-col gap-[5.5mm] bg-cloud px-[7.5mm] pt-[12mm] pb-[8mm]">
        <SheetIdentity basics={r.basics} />

        {topSkills?.length ? (
          <SidebarSection title={t.cvHeadings.topSkills}>
            <SkillPills items={topSkills} layout="stack" />
          </SidebarSection>
        ) : null}

        <SidebarSection title={t.cvHeadings.education}>
          <ul className="space-y-[1.2mm] text-[7.3pt]">
            {r.education.map((e) => (
              <li key={`${e.institution}-${e.degree}`}>
                {e.degree}
                {e.field ? `${t.education.fieldJoiner}${e.field}` : ""} ·{" "}
                {e.shortName ?? e.institution}
              </li>
            ))}
          </ul>
        </SidebarSection>

        <SidebarSection title={t.cvHeadings.certifications}>
          <p className="text-[7.3pt]">{issuerSummary(r.certifications)}</p>
        </SidebarSection>

        <SidebarSection title={t.cvHeadings.languages}>
          <ul className="space-y-[0.8mm] text-[7.3pt]">
            {languagesByLevel(r.languages).map(([names, level]) => (
              <li key={names}>
                {names} · {lowerFirst(level, locale)}
              </li>
            ))}
          </ul>
        </SidebarSection>

        <SidebarSection title={t.nav.contact}>
          <ContactList basics={r.basics} locale={locale} />
        </SidebarSection>
      </aside>

      <div className="flex min-w-0 flex-col px-[10mm] pt-[11mm] pb-[7mm]">
        {/* Profile summary as the lead paragraph of the page (no title). */}
        <p className="text-pretty">
          <RichText text={summary} />
        </p>

        <section className="mt-[5mm]">
          <SectionHeading>{t.cvHeadings.experience}</SectionHeading>
          <div className="mt-[3.5mm]">
            {main.map((g) => (
              <section
                key={`${g.company}-${g.start}`}
                className="border-t border-line pt-[2.6mm] pb-[2.6mm] first:border-0 first:pt-0"
              >
                <CompactRow date={formatYearRange(g.start, g.end, t.dates)}>
                  <span className="font-display text-[11.5pt] font-bold text-title">
                    {g.company}
                  </span>
                </CompactRow>
                {g.roles.map((job) => (
                  <div key={`${job.role}-${job.start}`} className="mt-[1.6mm]">
                    <CompactRow date={formatYearRange(job.start, job.end, t.dates)}>
                      <span className="font-bold">{job.role}</span>
                    </CompactRow>
                    {job.summary && <p className="mt-[0.6mm] text-pretty">{job.summary}</p>}
                  </div>
                ))}
                <KeyAchievements
                  title={t.keyAchievements}
                  items={achievements(g)}
                  className="mt-[2.4mm]"
                />
              </section>
            ))}

            {earlier.length > 0 && earlierStart && (
              <section className="border-t border-line pt-[2.6mm]">
                <CompactRow date={formatYearRange(earlierStart, earlierEnd, t.dates)}>
                  <span className="font-display text-[11.5pt] font-bold text-title">
                    {t.earlierCareer}
                  </span>
                </CompactRow>
                <div className="mt-[1.6mm] space-y-[1mm]">
                  {earlier.map(({ role, sectors }) => (
                    <CompactRow
                      key={`${role.company}-${role.start}`}
                      date={formatYearRange(role.start, role.end, t.dates)}
                    >
                      <span className="font-bold">{role.company}</span>
                      <span className="text-muted">
                        {" · "}
                        {role.role}
                        {sectors.length ? ` · ${lowerFirst(sectors.join(", "), locale)}` : ""}
                      </span>
                    </CompactRow>
                  ))}
                </div>
              </section>
            )}
          </div>
        </section>

        {presence.length > 0 && (
          <section className="mt-[5mm]">
            <SectionHeading>{t.nav.presence}</SectionHeading>
            <div className="mt-[3mm] space-y-[1mm]">
              {presence.map((p) => (
                <CompactRow
                  key={`${p.title}-${p.date}`}
                  date={p.date ? formatYearMonth(p.date, t.dates) : undefined}
                  truncate
                >
                  {p.event && <span className="font-bold">{p.event}</span>}
                  <span className="text-muted">
                    {p.event ? " · " : ""}
                    {t.presenceTypes[p.type]} · {p.shortTitle ?? p.title}
                  </span>
                </CompactRow>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
