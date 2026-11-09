import { Reveal } from "./Reveal";

export type Tone = "plain" | "cloud" | "skye" | "stone" | "spruce" | "earth" | "red";

/**
 * A full-width colored page section. The tone sets the band's colors (see globals.css),
 * so everything inside uses the semantic text-fg / text-title / bg-card classes.
 */
export function Band({
  id,
  tone,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id: string;
  tone: Tone;
  eyebrow?: string;
  title: string;
  intro?: string;
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
        <Reveal>
          {eyebrow && (
            <p className="text-sm font-semibold tracking-[0.2em] text-muted uppercase">{eyebrow}</p>
          )}
          <h2
            id={`${id}-title`}
            className="mt-2 font-display text-4xl font-bold tracking-tight text-balance text-title sm:text-5xl"
          >
            {title}
          </h2>
          {intro && <p className="mt-4 max-w-2xl text-lg text-pretty text-muted">{intro}</p>}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
