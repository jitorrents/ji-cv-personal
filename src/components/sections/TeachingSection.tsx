import { labels } from "@/content/labels";
import { resume } from "@/content/resume";
import { Band } from "@/components/ui/Band";
import { Reveal } from "@/components/ui/Reveal";
import { formatRange } from "@/lib/dates";

export function TeachingSection() {
  if (!resume.collaborations?.length) return null;
  const s = labels.sections.teaching;
  return (
    <Band id="teaching" tone="skye" eyebrow={s.eyebrow} title={s.title}>
      <ul className="grid gap-5 md:grid-cols-3">
        {resume.collaborations.map((c, i) => (
          <li key={`${c.organization}-${c.role}`}>
            <Reveal delay={i * 100} className="h-full">
              <article className="flex h-full flex-col rounded-3xl bg-card p-6 shadow-sm transition-transform hover:-translate-y-1 sm:p-7">
                <p className="text-sm font-semibold text-link">{formatRange(c.start, c.end)}</p>
                <h3 className="mt-2 font-display text-xl font-bold tracking-tight">{c.role}</h3>
                <p className="mt-1 text-sm text-muted">
                  {c.url ? <a href={c.url}>{c.organization}</a> : c.organization}
                  {c.location ? ` · ${c.location}` : ""}
                </p>
                {c.description && <p className="mt-4 text-pretty">{c.description}</p>}
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Band>
  );
}
