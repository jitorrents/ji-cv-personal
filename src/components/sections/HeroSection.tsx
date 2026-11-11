import Image from "next/image";
import { getContent, localePath, type Locale } from "@/content/i18n";
import Link from "next/link";
import { Monogram } from "@/components/ui/Monogram";
import { buttonClass } from "@/components/ui/button";
import { asset } from "@/lib/site";

function Portrait({ locale }: { locale: Locale }) {
  const { r } = getContent(locale);
  const { photo, name } = r.basics;
  return (
    <div className="relative mx-auto shrink-0 md:mx-0">
      {/* Decorative orbit */}
      <div
        aria-hidden="true"
        className="no-print absolute -inset-6 rounded-full border-2 border-dashed border-skye/25 motion-safe:animate-[spin_60s_linear_infinite]"
      />
      <div
        aria-hidden="true"
        className="no-print absolute -top-2 -right-2 size-6 rounded-full bg-warm"
      />
      <div
        aria-hidden="true"
        className="no-print absolute -bottom-3 left-2 size-4 rounded-full bg-skye"
      />
      {photo ? (
        <Image
          src={asset(photo)}
          alt={name}
          width={448}
          height={448}
          loading="eager"
          fetchPriority="high"
          className="relative size-40 rounded-full object-cover ring-8 ring-white/10 sm:size-56"
        />
      ) : (
        <Monogram size="lg" name={name} />
      )}
    </div>
  );
}

export function HeroSection({ locale }: { locale: Locale }) {
  const { t, r } = getContent(locale);
  const { name, headline, location, profiles } = r.basics;
  // Current role = first entry without an end date; its logo sits next to the headline.
  const current = r.experience.find((e) => !e.end);
  const linkedin = profiles.find((p) => p.network === "LinkedIn");

  return (
    <section
      aria-labelledby="hero-title"
      className="tone-stone relative overflow-hidden bg-band text-fg"
    >
      {/* Drifting color shapes */}
      <div aria-hidden="true" className="no-print pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-24 size-96 animate-drift rounded-full bg-spruce/40 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 size-80 animate-drift rounded-full bg-warm/25 blur-3xl [animation-delay:-7s]" />
        <div className="absolute top-1/3 -left-24 size-64 animate-drift rounded-full bg-earth/25 blur-3xl [animation-delay:-3s]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl animate-rise flex-col-reverse gap-12 px-4 py-20 sm:px-6 sm:py-28 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-3 py-1 text-sm text-muted">
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
            className="mt-6 font-display text-5xl font-bold tracking-tight text-balance sm:text-7xl"
          >
            {name}
          </h1>
          <p className="mt-5 text-xl text-pretty text-muted sm:text-2xl">
            {headline}
            {current?.companyWordmark && (
              <Image
                src={asset(current.companyWordmark)}
                alt={current.company}
                width={126}
                height={40}
                className="ml-3 inline-block h-[1.1em] w-auto align-[-0.2em]"
              />
            )}
          </p>
          <div className="no-print mt-10 flex flex-wrap gap-3">
            <Link href={localePath(locale, "/cv/")} className={buttonClass.primary}>
              {t.viewCv}
            </Link>
            <Link href={localePath(locale, "/#contact")} className={buttonClass.outline}>
              {t.contactMe}
            </Link>
            {linkedin && (
              <a href={linkedin.url} className={buttonClass.outline}>
                LinkedIn
              </a>
            )}
          </div>
        </div>
        <Portrait locale={locale} />
      </div>
    </section>
  );
}
