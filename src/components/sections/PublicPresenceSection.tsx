import Image from "next/image";
import { Band } from "@/components/ui/Band";
import { Reveal } from "@/components/ui/Reveal";
import { buttonClass } from "@/components/ui/button";
import { getContent, type Locale } from "@/content/i18n";
import { formatYearMonth } from "@/lib/dates";
import { kpis } from "@/lib/kpis";
import { asset } from "@/lib/site";

/**
 * Talks, panels, events and press as photo cards (newest first): photo, event tag and
 * type, title, venue and date, short description and a link to the post or article.
 * Shows a "coming soon" note while the list is empty.
 */
export function PublicPresenceSection({ locale }: { locale: Locale }) {
  const { t, r } = getContent(locale);
  const s = t.sections.presence;
  const items = [...(r.publicPresence ?? [])].sort((a, b) =>
    (b.date ?? "").localeCompare(a.date ?? ""),
  );
  return (
    <Band
      id="presence"
      tone="plain"
      eyebrow={s.eyebrow}
      title={s.title}
      intro={s.intro}
      kpis={kpis(t, r).presence()}
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
        <ul className="grid gap-8 md:grid-cols-2">
          {items.map((item, i) => (
            <li key={`${item.title}-${item.date ?? i}`}>
              <Reveal delay={(i % 2) * 100} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-md shadow-black/5 transition-shadow hover:shadow-xl">
                  {item.image && (
                    <div className="relative aspect-video overflow-hidden bg-line">
                      <Image
                        src={asset(item.image)}
                        alt=""
                        width={1200}
                        height={675}
                        sizes="(min-width: 768px) 560px, 100vw"
                        className="size-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <p className="flex flex-wrap items-center gap-3 text-xs font-bold tracking-[0.15em] uppercase">
                      {item.event && (
                        <span className="rounded-full bg-spruce px-3 py-1 text-white">
                          {item.event}
                        </span>
                      )}
                      <span className="text-warm-ink">{t.presenceTypes[item.type]}</span>
                    </p>
                    <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-pretty">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">
                      {item.venue}
                      {item.venue && item.date ? " · " : ""}
                      {item.date ? formatYearMonth(item.date, t.dates) : ""}
                    </p>
                    {item.description && <p className="mt-4 text-pretty">{item.description}</p>}
                    {item.url && (
                      <div className="mt-auto pt-6">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonClass.outline}
                        >
                          {t.presenceLink}
                          <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </Band>
  );
}
