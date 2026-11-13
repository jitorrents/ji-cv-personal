import type { Kpi } from "@/lib/kpis";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

export type Tone = "plain" | "cloud" | "skye" | "stone" | "spruce" | "earth" | "red";

/**
 * A full-width colored page section. The tone sets the band's colors (see globals.css),
 * so everything inside uses the semantic text-fg / text-title / bg-card classes.
 * Optional KPIs (computed from the data) are shown next to the title and count up on scroll.
 */
export function Band({
  id,
  tone,
  eyebrow,
  title,
  intro,
  kpis,
  children,
  className = "",
}: {
  id: string;
  tone: Tone;
  eyebrow?: string;
  title: string;
  intro?: string;
  kpis?: Kpi[];
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`tone-${tone} bg-band text-fg ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <Reveal className="flex flex-col gap-8 xl:flex-row xl:items-center xl:gap-12">
          <div className="xl:shrink-0">
            {eyebrow && (
              <p className="text-sm font-semibold tracking-[0.2em] text-muted uppercase">
                {eyebrow}
              </p>
            )}
            <h2
              id={`${id}-title`}
              className="mt-2 font-display text-4xl font-bold tracking-tight text-balance text-title sm:text-5xl"
            >
              {title}
            </h2>
            {intro && (
              <p className="mt-4 max-w-2xl text-justify text-lg text-pretty hyphens-auto text-muted">
                {intro}
              </p>
            )}
          </div>
          {kpis && kpis.length > 0 && (
            // Equal-width columns filling the space right of the text from xl (full width when
            // stacked below it); long labels wrap inside their column instead of widening it,
            // and numbers stay top-aligned (justify-end on the reversed column).
            <dl
              className="grid flex-1 gap-x-6"
              style={{ gridTemplateColumns: `repeat(${kpis.length}, minmax(0, 1fr))` }}
            >
              {kpis.map((kpi) => (
                <div key={kpi.label} className="flex min-w-0 flex-col-reverse justify-end">
                  <dt className="text-xs font-semibold tracking-wider text-muted uppercase">
                    {kpi.label}
                  </dt>
                  <dd className="font-display text-4xl font-bold tracking-tight text-title sm:text-5xl">
                    <CountUp value={kpi.value} suffix={kpi.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
