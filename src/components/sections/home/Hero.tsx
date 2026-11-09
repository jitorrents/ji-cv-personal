import Link from "next/link";
import { labels } from "@/content/labels";
import { resume } from "@/content/resume";
import { Monogram } from "@/components/ui/Monogram";
import { buttonClass } from "@/components/ui/button";

export function Hero() {
  const { name, headline, location, profiles } = resume.basics;
  const linkedin = profiles.find((p) => p.network === "LinkedIn");

  return (
    <section aria-labelledby="hero-title" className="relative pt-14 pb-12 sm:pt-24 sm:pb-16">
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="no-print pointer-events-none absolute -top-24 right-0 -z-10 size-[28rem] rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="no-print pointer-events-none absolute top-24 right-40 -z-10 size-72 rounded-full bg-warm/15 blur-3xl"
      />
      <div className="flex animate-rise flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-4 text-warm"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {location}
          </p>
          <h1
            id="hero-title"
            className="mt-5 font-display text-4xl font-bold tracking-tight text-balance sm:text-6xl"
          >
            {name}
          </h1>
          <p className="mt-4 text-lg text-pretty text-muted sm:text-xl">{headline}</p>
          <div className="no-print mt-8 flex flex-wrap gap-3">
            <Link href="/cv/" className={buttonClass.primary}>
              {labels.viewCv}
            </Link>
            <a href="#contact" className={buttonClass.secondary}>
              {labels.contactMe}
            </a>
            {linkedin && (
              <a href={linkedin.url} className={buttonClass.secondary}>
                LinkedIn
              </a>
            )}
          </div>
        </div>
        <Monogram size="lg" />
      </div>
    </section>
  );
}
