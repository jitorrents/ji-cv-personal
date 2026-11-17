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

/**
 * One-line issuer summary: "Google Cloud · Microsoft (×5) · AWS…", in the order issuers first
 * appear. Certifications with `featured: false` (Cambridge) or `onePager: false` (Atlassian) are
 * left out; one with no
 * issuer is named by the first word of its name ("ITIL® Foundation…" → "ITIL").
 */
export function issuerSummary(certs: Certification[]): string {
  const counts = new Map<string, number>();
  for (const c of certs) {
    if (c.featured === false || c.onePager === false) continue;
    const key = c.issuer ?? c.name.split(/[\s®]/)[0] ?? c.name;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return [...counts].map(([k, n]) => (n > 1 ? `${k} (×${n})` : k)).join(" · ");
}
