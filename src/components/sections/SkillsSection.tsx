import { labels } from "@/content/labels";
import { resume } from "@/content/resume";
import { Band } from "@/components/ui/Band";
import { Reveal } from "@/components/ui/Reveal";

/** Rotating palette accents for the skill cards (warm red stays decorative). */
const accents = ["bg-warm", "bg-spruce", "bg-earth", "bg-dark-earth", "bg-stone", "bg-warm"];

export function SkillsSection() {
  const s = labels.sections.skills;
  return (
    <Band id="skills" tone="plain" eyebrow={s.eyebrow} title={s.title}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {resume.skills.map((g, i) => (
          <Reveal key={g.category} delay={(i % 3) * 100} className="h-full">
            <article className="h-full rounded-3xl bg-card p-6 sm:p-7">
              <span
                aria-hidden="true"
                className={`block h-1.5 w-10 rounded-full ${accents[i % accents.length]}`}
              />
              <h3 className="mt-4 font-display text-xl font-bold">{g.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item} className="rounded-full bg-band px-3 py-1 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Band>
  );
}
