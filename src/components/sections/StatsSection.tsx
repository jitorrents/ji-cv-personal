import { labels } from "@/content/labels";
import { resume } from "@/content/resume";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { companyCount, yearsOfExperience } from "@/lib/experience";

export function StatsSection() {
  const stats = [
    { value: yearsOfExperience(resume.experience), suffix: "+", label: labels.stats.years },
    { value: companyCount(resume.experience), suffix: "", label: labels.stats.companies },
    { value: resume.certifications.length, suffix: "", label: labels.stats.certifications },
    { value: resume.languages.length, suffix: "", label: labels.stats.languages },
  ];
  return (
    <section aria-label="Key figures" className="tone-spruce bg-band text-fg">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 100}
            className="flex flex-col-reverse items-center text-center"
          >
            <dt className="mt-2 text-sm font-medium tracking-wide text-muted uppercase">
              {s.label}
            </dt>
            <dd className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
              <CountUp value={s.value} suffix={s.suffix} />
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
