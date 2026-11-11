import Image from "next/image";
import { getContent, type Locale } from "@/content/i18n";
import type { Labels } from "@/content/labels";
import type { PartialDate } from "@/content/types";
import { Band } from "@/components/ui/Band";
import { Reveal } from "@/components/ui/Reveal";
import { formatYearMonth } from "@/lib/dates";
import { kpis } from "@/lib/kpis";
import { asset } from "@/lib/site";

/** Institution logo on a white tile; a graduation cap when there is no logo. */
function SchoolLogo({ logo }: { logo?: string }) {
  return (
    <span className="tone-plain grid size-14 shrink-0 place-items-center rounded-2xl bg-band p-2">
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

function years(
  start: PartialDate | undefined,
  end: PartialDate | undefined,
  d: Labels["dates"],
): string {
  return [start, end]
    .filter((d) => d !== undefined)
    .map((x) => formatYearMonth(x, d))
    .join(" – ");
}

/** Rotating palette accents for the language cards (decorative). */
const accents = ["bg-warm", "bg-spruce", "bg-earth", "bg-dark-earth"];

/** Academic timeline (newest first), then the languages as a row of cards. */
export function EducationSection({ locale }: { locale: Locale }) {
  const { t, r } = getContent(locale);
  const s = t.sections.education;
  return (
    <Band
      id="education"
      tone="skye"
      eyebrow={s.eyebrow}
      title={s.title}
      kpis={kpis(t, r).education()}
    >
      {r.education.length > 0 && (
        <>
          <h3 className="sr-only">{t.education.degrees}</h3>
          <ol className="relative">
            {r.education.map((e, i) => {
              const last = i === r.education.length - 1;
              return (
                <li
                  key={`${e.institution}-${e.degree}`}
                  className="grid grid-cols-[1.25rem_1fr] gap-x-4 sm:grid-cols-[7.5rem_1.25rem_1fr] sm:gap-x-6"
                >
                  {/* Years: own column on larger screens, above the card on phones */}
                  <p className="hidden pt-5 text-right font-display text-lg font-bold text-title tabular-nums sm:block">
                    {years(e.start, e.end, t.dates)}
                  </p>

                  {/* Line and dot */}
                  <div className="relative flex justify-center" aria-hidden="true">
                    {r.education.length > 1 && (
                      <span
                        className={`absolute w-0.5 bg-line ${
                          i === 0 ? "top-7 bottom-0" : last ? "top-0 h-7" : "top-0 bottom-0"
                        }`}
                      />
                    )}
                    <span
                      className={`relative mt-6 size-3.5 rounded-full ring-4 ring-band ${i === 0 ? "bg-warm" : "bg-spruce"}`}
                    />
                  </div>

                  <Reveal className={last ? "" : "pb-6"}>
                    <article className="flex gap-4 rounded-3xl bg-card p-5 shadow-sm sm:p-6">
                      <SchoolLogo logo={e.logo} />
                      <div className="min-w-0">
                        <p className="font-display text-sm font-bold text-title tabular-nums sm:hidden">
                          {years(e.start, e.end, t.dates)}
                        </p>
                        <h4 className="font-display text-lg font-bold text-pretty sm:text-xl">
                          {e.degree}
                          {e.field ? `${t.education.fieldJoiner}${e.field}` : ""}
                        </h4>
                        <p className="mt-1 text-sm text-muted">{e.institution}</p>
                        {e.notes && <p className="mt-3">{e.notes}</p>}
                      </div>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </>
      )}

      {r.languages.length > 0 && (
        <div className="mt-16">
          <h3 className="mb-6 font-display text-2xl font-bold text-title">
            {t.education.languages}
          </h3>
          <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {r.languages.map((l, i) => (
              <Reveal key={l.language} delay={i * 100} className="h-full">
                <div className="h-full rounded-3xl bg-card p-5 shadow-sm sm:p-6">
                  <dt className="font-display text-2xl font-bold">
                    <span
                      aria-hidden="true"
                      className={`mb-4 block h-1.5 w-10 rounded-full ${accents[i % accents.length]}`}
                    />
                    {l.language}
                  </dt>
                  <dd className="mt-1 text-sm text-muted">{l.level}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      )}
    </Band>
  );
}
