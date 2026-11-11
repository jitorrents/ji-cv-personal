import { IssuerLogo, IssuerWordmark, hasWordmark } from "@/components/logos/IssuerLogo";
import { getContent, type Locale } from "@/content/i18n";
import { groupByIssuer } from "@/lib/certifications";

/**
 * Endless strip of certification issuer logos under the hero.
 * Decorative: the certifications section carries the same content as text.
 */
export function LogoStripSection({ locale }: { locale: Locale }) {
  const { t, r } = getContent(locale);
  // Only issuers with at least one featured certification (see Certification.featured).
  const issuers = groupByIssuer(
    r.certifications.filter((c) => c.featured !== false && c.issuer),
  ).map(([issuer]) => issuer);
  if (!issuers.length) return null;
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-12 pr-12">
      {issuers.map((issuer) => (
        <li key={issuer} className="flex items-center gap-3 text-muted">
          {hasWordmark(issuer) ? (
            <IssuerWordmark issuer={issuer} className="h-5" />
          ) : (
            <>
              <IssuerLogo issuer={issuer} className="size-7" />
              <span className="font-display text-lg font-bold whitespace-nowrap">{issuer}</span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
  return (
    <section aria-label={t.logoStrip} className="tone-cloud no-print bg-band text-fg">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-muted uppercase">
          {t.logoStrip}
        </p>
        <div className="group mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {row(false)}
            {row(true)}
          </div>
        </div>
      </div>
    </section>
  );
}
