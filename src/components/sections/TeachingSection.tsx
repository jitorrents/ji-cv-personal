import { Band } from "@/components/ui/Band";
import { getContent, type Locale } from "@/content/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { formatRange } from "@/lib/dates";
import { kpis } from "@/lib/kpis";

export function TeachingSection({ locale }: { locale: Locale }) {
  const { t, r } = getContent(locale);
  if (!r.collaborations?.length) return null;
  const s = t.sections.teaching;
  return (
    <Band
      id="teaching"
      tone="cloud"
      eyebrow={s.eyebrow}
      title={s.title}
      intro={s.intro}
      kpis={kpis(t, r).teaching()}
    >
      <ul className="grid gap-5 md:grid-cols-3">
        {r.collaborations.map((c, i) => (
          <li key={`${c.organization}-${c.role}`}>
            <Reveal delay={i * 100} className="h-full">
              <article className="flex h-full flex-col rounded-3xl bg-card p-6 shadow-sm transition-transform hover:-translate-y-1 sm:p-7">
                <p className="text-sm font-semibold text-link">
                  {formatRange(c.start, c.end, t.dates)}
                </p>
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
