import Image from "next/image";
import { RichText } from "@/components/ui/RichText";
import { getContent, localePath, type Locale } from "@/content/i18n";
import { issuerSummary } from "@/lib/certifications";
import { formatYearMonth, formatYearRange } from "@/lib/dates";
import { achievements, splitCareer } from "@/lib/experience";
import { languagesByLevel } from "@/lib/languages";
import { asset, siteUrl } from "@/lib/site";
import { CompactRow } from "./CompactRow";
import { KeyAchievements } from "./KeyAchievements";
import { SectionHeading } from "./SectionHeading";
import { SidebarSection } from "./SidebarSection";
import { SkillPills } from "./SkillPills";

const bare = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
const lowerFirst = (s: string, locale: Locale) =>
  s.charAt(0).toLocaleLowerCase(locale) + s.slice(1);

/**
 * The CV on one A4 page (210 × 297 mm), built from content.ts: a sand sidebar (photo, name,
 * profile, education, certifications, languages, contact) and a main column (top skills,
 * recent companies with their key achievements, earlier career, public presence).
 * Sizes are in mm/pt so the screen card and the printed page match. The sheet always uses
 * the light palette (`sheet-light`), also in dark mode.
 */
export function OnePager({ locale }: { locale: Locale }) {
  const { t, r } = getContent(locale);
  const { name, headline, tagline, summary, topSkills, location, profiles, photo } = r.basics;
  const { main, earlier } = splitCareer(r.experience);
  const linkedin = profiles.find((p) => p.network === "LinkedIn");
  const site = `${siteUrl}${localePath(locale, "/")}`;
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
        <div>
          {photo && (
            <Image
              src={asset(photo)}
              alt=""
              width={320}
              height={320}
              sizes="35mm"
              className="aspect-square w-[35mm] object-cover"
            />
          )}
          <h1 className="mt-[5mm] font-display text-[17pt] leading-[1.1] font-bold text-title">
            {name}
          </h1>
          <p className="mt-[1.8mm] text-[7.8pt] text-muted">{headline}</p>
          {tagline && (
            <p className="mt-[3mm] border-l-[0.9mm] border-warm pl-[2.4mm] text-[7.8pt] leading-[1.3] font-bold text-title">
              {tagline}
            </p>
          )}
        </div>

        <SidebarSection title={t.cvHeadings.profile}>
          <p className="text-[7.5pt] leading-[1.3]">
            <RichText text={summary} />
          </p>
        </SidebarSection>

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
          <ul className="space-y-[0.8mm] text-[7.3pt]">
            <li>{location}</li>
            {linkedin && (
              <li>
                <a href={linkedin.url}>{bare(linkedin.url)}</a>
              </li>
            )}
            <li>
              <a href={site}>{bare(site)}</a>
            </li>
          </ul>
        </SidebarSection>
      </aside>

      <div className="flex min-w-0 flex-col px-[10mm] pt-[12mm] pb-[8mm]">
        <SkillPills items={topSkills ?? []} />

        <section className="mt-[7mm]">
          <SectionHeading>{t.cvHeadings.experience}</SectionHeading>
          <div className="mt-[4mm]">
            {main.map((g) => (
              <section
                key={`${g.company}-${g.start}`}
                className="border-t border-line pt-[3.2mm] pb-[3.2mm] first:border-0 first:pt-0"
              >
                <CompactRow date={formatYearRange(g.start, g.end, t.dates)}>
                  <span className="font-display text-[11.5pt] font-bold text-title">
                    {g.company}
                  </span>
                </CompactRow>
                {g.roles.map((job) => (
                  <div key={`${job.role}-${job.start}`} className="mt-[2mm]">
                    <CompactRow date={formatYearRange(job.start, job.end, t.dates)}>
                      <span className="font-bold">{job.role}</span>
                    </CompactRow>
                    {job.summary && <p className="mt-[0.6mm] text-pretty">{job.summary}</p>}
                  </div>
                ))}
                <KeyAchievements
                  title={t.keyAchievements}
                  items={achievements(g)}
                  className="mt-[3mm]"
                />
              </section>
            ))}

            {earlier.length > 0 && earlierStart && (
              <section className="border-t border-line pt-[3.2mm]">
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
          <section className="mt-[6mm]">
            <SectionHeading>{t.nav.presence}</SectionHeading>
            <div className="mt-[3.5mm] space-y-[1mm]">
              {presence.map((p) => (
                <CompactRow
                  key={`${p.title}-${p.date}`}
                  date={p.date ? formatYearMonth(p.date, t.dates) : undefined}
                  truncate
                >
                  {p.event && <span className="font-bold">{p.event}</span>}
                  <span className="text-muted">
                    {p.event ? " · " : ""}
                    {t.presenceTypes[p.type]} · {p.title}
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
