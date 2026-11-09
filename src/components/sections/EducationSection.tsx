import { labels } from "@/content/labels";
import { resume } from "@/content/resume";
import Image from "next/image";
import { Band } from "@/components/ui/Band";
import { Reveal } from "@/components/ui/Reveal";
import { formatYearMonth } from "@/lib/dates";
import { kpis } from "@/lib/kpis";
import { asset } from "@/lib/site";

/** Institution logo on a white tile; a graduation cap when there is no logo. */
function SchoolLogo({ logo }: { logo?: string }) {
  return (
    <span className="tone-plain grid size-14 shrink-0 place-items-center rounded-2xl bg-band p-2 shadow-sm ring-1 ring-line">
      {logo ? (
        <Image
          src={asset(logo)}
          alt=""
          width={96}
          height={96}
          className="size-full object-contain"
        />
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-7 text-spruce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 10 12 5 2 10l10 5 10-5Z" />
          <path d="M6 12v5c3 2 9 2 12 0v-5" />
        </svg>
      )}
    </span>
  );
}

export function EducationSection() {
  const s = labels.sections.education;
  return (
    <Band id="education" tone="cloud" eyebrow={s.eyebrow} title={s.title} kpis={kpis.education()}>
      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div>
          <h3 className="sr-only">{labels.education.degrees}</h3>
          <ol className="grid gap-5 sm:grid-cols-2">
            {resume.education.map((e, i) => (
              <li key={`${e.institution}-${e.degree}`}>
                <Reveal delay={(i % 2) * 100} className="h-full">
                  <article className="flex h-full gap-4 rounded-3xl bg-card p-6">
                    <SchoolLogo logo={e.logo} />
                    <div className="min-w-0">
                      {(e.start || e.end) && (
                        <p className="font-display text-sm font-bold text-link">
                          {[e.start, e.end]
                            .filter((d) => d !== undefined)
                            .map(formatYearMonth)
                            .join(" – ")}
                        </p>
                      )}
                      <h4 className="mt-2 font-display text-lg font-bold">
                        {e.degree}
                        {e.field ? ` in ${e.field}` : ""}
                      </h4>
                      <p className="mt-1 text-sm text-muted">{e.institution}</p>
                      {e.notes && <p className="mt-3">{e.notes}</p>}
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal>
          <h3 className="font-display text-xl font-bold">{labels.education.languages}</h3>
          <dl className="mt-5 space-y-3">
            {resume.languages.map((l) => (
              <div
                key={l.language}
                className="flex items-baseline justify-between gap-4 border-b border-line pb-3"
              >
                <dt className="font-semibold">{l.language}</dt>
                <dd className="text-right text-sm text-muted">{l.level}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Band>
  );
}
