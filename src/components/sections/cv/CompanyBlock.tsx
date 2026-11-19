import type { Experience } from "@/content/types";
import { formatYearRange } from "@/lib/dates";
import type { Labels } from "@/content/types";
import { achievements, highlights, type CompanyGroup } from "@/lib/experience";
import { KeyAchievements } from "./KeyAchievements";
import { SquareBullets } from "./SquareBullets";

/**
 * Company (or "Earlier career") header of the A4 sheets: name in the heading font and the
 * date range on the right, both navy and bold; the dates are a touch larger than role text.
 */
export function CompanyHeader({ name, dates }: { name: string; dates: string }) {
  return (
    <div className="flex items-baseline justify-between gap-[3mm]">
      <h3 className="min-w-0 font-display text-[11.5pt] font-bold text-title">{name}</h3>
      <span className="shrink-0 text-[8.5pt] font-bold text-title tabular-nums">{dates}</span>
    </div>
  );
}

/**
 * One company on the A4 sheets (/cv/ and /one-pager/ share it): header → roles → key
 * achievements. Roles are indented under a thin vertical rule (bold title, smaller muted
 * dates, summary and, when `showHighlights`, the role's highlights). The company's key
 * achievements follow in a pale-blue card across the full column width.
 */
export function CompanyBlock({
  group,
  t,
  roleDates,
  showHighlights = false,
  linkLabel,
}: {
  group: CompanyGroup;
  t: Labels;
  /** Date text of a role (years on the one-pager, month and year on /cv/). */
  roleDates: (role: Experience) => string;
  showHighlights?: boolean;
  /** When set, items with a url end with a "View →" link (/cv/). */
  linkLabel?: string;
}) {
  return (
    <section className="break-inside-avoid border-t border-line pt-[2mm] pb-[2mm] first:border-0 first:pt-0">
      <CompanyHeader
        name={group.company}
        dates={formatYearRange(group.start, group.end, t.dates)}
      />
      <div className="mt-[1.2mm] space-y-[1.3mm] border-l-[0.6mm] border-line pl-[4.4mm]">
        {group.roles.map((job) => (
          <div key={`${job.role}-${job.start}`}>
            <div className="flex items-baseline justify-between gap-[3mm]">
              <h4 className="min-w-0 font-bold text-fg">{job.role}</h4>
              <span className="shrink-0 text-[7.3pt] text-muted tabular-nums">
                {roleDates(job)}
              </span>
            </div>
            {job.summary && <p className="mt-[0.6mm] text-pretty">{job.summary}</p>}
            {showHighlights && (
              <SquareBullets items={highlights(job)} linkLabel={linkLabel} className="mt-[1.2mm]" />
            )}
          </div>
        ))}
      </div>
      <KeyAchievements
        title={t.keyAchievements}
        items={achievements(group)}
        linkLabel={linkLabel}
        className="mt-[2mm]"
      />
    </section>
  );
}
