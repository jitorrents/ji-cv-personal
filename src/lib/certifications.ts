import type { Certification } from "@/content/types";

/** Certifications grouped by issuer, in the order issuers first appear. */
export function groupByIssuer(
  certs: Certification[],
  otherLabel = "Other",
): [string, Certification[]][] {
  const map = new Map<string, Certification[]>();
  for (const c of certs) {
    const key = c.issuer ?? otherLabel;
    map.set(key, [...(map.get(key) ?? []), c]);
  }
  return [...map];
}
