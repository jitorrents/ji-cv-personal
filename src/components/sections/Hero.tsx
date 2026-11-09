import { labels } from "@/content/labels";
import { resume } from "@/content/resume";

export function Hero() {
  const { name, headline, location, profiles } = resume.basics;
  const linkedin = profiles.find((p) => p.network === "LinkedIn");

  return (
    <section aria-labelledby="hero-title" className="pt-16 pb-8">
      <h1 id="hero-title" className="text-4xl font-bold tracking-tight sm:text-5xl">
        {name}
      </h1>
      <p className="mt-3 text-lg text-muted">{headline}</p>
      <p className="mt-1 text-sm text-muted">{location}</p>
      <div className="no-print mt-6 flex flex-wrap gap-3">
        <a
          href="#contact"
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-fg"
        >
          {labels.contactMe}
        </a>
        {linkedin && (
          <a
            href={linkedin.url}
            className="rounded-md border border-border px-4 py-2 text-sm font-medium"
          >
            LinkedIn
          </a>
        )}
        {/* TODO: Download CV (print dialog) — client component in the print step */}
      </div>
    </section>
  );
}
