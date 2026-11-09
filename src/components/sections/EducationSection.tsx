import { labels } from "@/content/labels";
import { resume } from "@/content/resume";
import { Band } from "@/components/ui/Band";
import { Reveal } from "@/components/ui/Reveal";
import { formatYearMonth } from "@/lib/dates";

export function EducationSection() {
  const s = labels.sections.education;
  return (
    <Band id="education" tone="cloud" eyebrow={s.eyebrow} title={s.title}>
      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div>
          <h3 className="sr-only">{labels.education.degrees}</h3>
          <ol className="grid gap-5 sm:grid-cols-2">
            {resume.education.map((e, i) => (
              <li key={`${e.institution}-${e.degree}`}>
                <Reveal delay={(i % 2) * 100} className="h-full">
                  <article className="h-full rounded-3xl bg-card p-6">
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
