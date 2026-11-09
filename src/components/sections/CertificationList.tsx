import { resume } from "@/content/resume";
import { groupByIssuer } from "@/lib/certifications";
import { formatYearMonth } from "@/lib/dates";

export function CertificationList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {groupByIssuer(resume.certifications).map(([issuer, certs]) => (
        <article key={issuer} className="rounded-2xl border border-border bg-surface p-6">
          <h3 className="font-display font-semibold">{issuer}</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {certs.map((c) => (
              <li key={c.name} className="flex gap-2.5">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="mt-0.5 size-4 shrink-0 text-accent"
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
                    <a href={c.url} className="hover:text-accent">
                      {c.name}
                    </a>
                  ) : (
                    c.name
                  )}
                  {c.date && <span className="text-muted"> · {formatYearMonth(c.date)}</span>}
                </span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
