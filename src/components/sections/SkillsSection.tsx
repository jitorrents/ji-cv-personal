import { Band } from "@/components/ui/Band";
import { getContent, type Locale } from "@/content/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { kpis } from "@/lib/kpis";
import { CertificationGrid } from "./CertificationGrid";

/** Rotating palette accents for the skill cards (warm red stays decorative). */
const accents = ["bg-warm", "bg-spruce", "bg-earth", "bg-dark-earth", "bg-stone", "bg-warm"];

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-6 font-display text-2xl font-bold text-title">{children}</h3>;
}

/** Skills and certifications in one band: skill cards, then certification cards by issuer. */
export function SkillsSection({ locale }: { locale: Locale }) {
  const { t, r } = getContent(locale);
  const s = t.sections.skills;
  return (
    <Band id="skills" tone="earth" eyebrow={s.eyebrow} title={s.title} kpis={kpis(t, r).skills()}>
      {r.skills.length > 0 && (
        <>
          <SubHeading>{t.skillsSection.skills}</SubHeading>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {r.skills.map((g, i) => (
              <Reveal key={g.category} delay={(i % 3) * 100} className="h-full">
                <article className="tone-plain h-full rounded-3xl bg-band p-6 text-fg shadow-lg shadow-black/10 sm:p-7">
                  <span
                    aria-hidden="true"
                    className={`block h-1.5 w-10 rounded-full ${accents[i % accents.length]}`}
                  />
                  <h4 className="mt-4 font-display text-xl font-bold">{g.category}</h4>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li key={item} className="rounded-full bg-card px-3 py-1 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </>
      )}
      {r.certifications.length > 0 && (
        <div className="mt-16">
          <SubHeading>{t.skillsSection.certifications}</SubHeading>
          <CertificationGrid locale={locale} />
        </div>
      )}
    </Band>
  );
}
