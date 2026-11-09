import { labels } from "@/content/labels";
import { resume } from "@/content/resume";
import { Band } from "@/components/ui/Band";
import { Reveal } from "@/components/ui/Reveal";
import { formatYearMonth } from "@/lib/dates";
import { kpis } from "@/lib/kpis";

/** Talks, panels, articles and press. Shows a "coming soon" note while the list is empty. */
export function PublicPresenceSection() {
  const s = labels.sections.presence;
  const items = resume.publicPresence ?? [];
  return (
    <Band
      id="presence"
      tone="plain"
      eyebrow={s.eyebrow}
      title={s.title}
      intro={s.intro}
      kpis={kpis.presence()}
    >
      {items.length === 0 ? (
        <Reveal>
          <div className="flex items-center gap-4 rounded-3xl border-2 border-dashed border-line p-8 text-muted">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-8 shrink-0 text-warm"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3" />
            </svg>
            <p className="text-lg">{s.empty}</p>
          </div>
        </Reveal>
      ) : (
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <li key={`${item.title}-${item.date ?? i}`}>
              <Reveal delay={(i % 3) * 100} className="h-full">
                <article className="flex h-full flex-col rounded-3xl bg-card p-6">
                  <p className="text-xs font-semibold tracking-wider text-link uppercase">
                    {labels.presenceTypes[item.type]}
                    {item.date ? ` · ${formatYearMonth(item.date)}` : ""}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold">
                    {item.url ? (
                      <a href={item.url} className="hover:text-link">
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  {item.venue && <p className="mt-1 text-sm text-muted">{item.venue}</p>}
                  {item.description && <p className="mt-3 text-pretty">{item.description}</p>}
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </Band>
  );
}
