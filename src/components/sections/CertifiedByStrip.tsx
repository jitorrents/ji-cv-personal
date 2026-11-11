import { IssuerLogo, IssuerWordmark, hasWordmark } from "@/components/logos/IssuerLogo";
import { getContent, type Locale } from "@/content/i18n";
import { groupByIssuer } from "@/lib/certifications";

/**
 * "Certified by" marquee of issuer logos, shown at the top of the certifications part of
 * the Skills & Certifications section. Each logo sits on a white pill (the band is dark).
 * Decorative: the certification cards below carry the same content as text.
 */
export function CertifiedByStrip({ locale }: { locale: Locale }) {
  const { t, r } = getContent(locale);
  // Only issuers with at least one featured certification (see Certification.featured).
  const issuers = groupByIssuer(
    r.certifications.filter((c) => c.featured !== false && c.issuer),
  ).map(([issuer]) => issuer);
  if (!issuers.length) return null;
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-4 pr-4">
      {issuers.map((issuer) => (
        <li
          key={issuer}
          className="flex h-12 items-center gap-2.5 rounded-full bg-white px-5 whitespace-nowrap text-[var(--p-ink)]"
        >
          {hasWordmark(issuer) ? (
            <IssuerWordmark issuer={issuer} className="h-4" />
          ) : (
            <>
              <IssuerLogo issuer={issuer} className="size-6" />
              <span className="font-display text-sm font-bold">{issuer}</span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
  return (
    <div aria-label={t.logoStrip} role="group" className="no-print mb-10">
      <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">{t.logoStrip}</p>
      <div className="group mt-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}
