import type { Certification } from "@/content/types";

/** Certifications grouped by issuer, in the order issuers first appear. */
export function groupByIssuer(certs: Certification[]): [string, Certification[]][] {
  const map = new Map<string, Certification[]>();
  for (const c of certs) {
    const key = c.issuer ?? "Other";
    map.set(key, [...(map.get(key) ?? []), c]);
  }
  return [...map];
}
