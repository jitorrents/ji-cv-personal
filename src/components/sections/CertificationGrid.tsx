import { IssuerLogo, IssuerWordmark, hasWordmark } from "@/components/logos/IssuerLogo";
import { getContent, type Locale } from "@/content/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { groupByIssuer } from "@/lib/certifications";
import { formatYearMonth } from "@/lib/dates";

/** Certification cards grouped by issuer, each with the issuer's logo. */
export function CertificationGrid({ locale }: { locale: Locale }) {
  const { t, r } = getContent(locale);
  const groups = groupByIssuer(r.certifications, t.otherIssuer);
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map(([issuer, certs], i) => (
        <Reveal key={issuer} delay={(i % 3) * 100} className="h-full">
          <article className="tone-plain h-full rounded-3xl bg-band p-6 text-fg shadow-lg shadow-black/10">
            <header className="flex items-center gap-3">
              {hasWordmark(issuer) ? (
                <h4 className="flex h-9 items-center">
                  <IssuerWordmark issuer={issuer} className="h-5" />
                </h4>
              ) : (
                <>
                  <span className="shrink-0 rounded-lg dark:bg-white dark:p-1">
                    <IssuerLogo issuer={certs[0]?.issuer} className="size-9" />
                  </span>
                  <h4 className="font-display text-lg font-bold">{issuer}</h4>
                </>
              )}
            </header>
            <ul className="mt-4 space-y-2.5 text-sm">
              {certs.map((c) => (
                <li key={c.name} className="flex gap-2.5">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="mt-0.5 size-4 shrink-0 text-link"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 12 5 5L19 7" />
                  </svg>
                  <span>
                    {c.url ? (
                      <a href={c.url} className="text-link underline-offset-4 hover:underline">
                        {c.name}
                      </a>
                    ) : (
                      c.name
                    )}
                    {c.date && (
                      <span className="text-muted"> · {formatYearMonth(c.date, t.dates)}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
