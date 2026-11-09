import { simpleIcons } from "./simple-icons";

/** Microsoft's four-squares mark (simple geometry, official colors). */
function MicrosoftMark({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="1" y="1" width="10.5" height="10.5" fill="#F25022" />
      <rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00" />
      <rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF" />
      <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900" />
    </svg>
  );
}

const iconByIssuer: Record<string, keyof typeof simpleIcons> = {
  "Google Cloud": "googlecloud",
  Databricks: "databricks",
  Atlassian: "atlassian",
  Cloudera: "cloudera",
};

/** Text badge for issuers without a freely usable logo. */
const badgeByIssuer: Record<string, string> = {
  "Amazon Web Services": "aws",
  Cambridge: "FCE",
};

/**
 * Logo for a certification issuer. Falls back to a text badge, then to initials.
 * Purely decorative: the issuer name is always shown as text next to it.
 */
export function IssuerLogo({
  issuer,
  className = "size-8",
}: {
  issuer?: string;
  className?: string;
}) {
  if (issuer === "Microsoft") return <MicrosoftMark className={className} />;
  const key = issuer ? iconByIssuer[issuer] : undefined;
  const icon = key ? simpleIcons[key] : undefined;
  if (icon) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill={icon.hex} aria-hidden="true">
        <path d={icon.path} />
      </svg>
    );
  }
  if (!issuer || issuer === "Other") {
    // Generic certificate mark when the issuer is unknown.
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="#29707A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="9" r="6" />
        <path d="m8.5 14-1.5 8 5-3 5 3-1.5-8" />
      </svg>
    );
  }
  const text =
    (issuer && badgeByIssuer[issuer]) ??
    (issuer ?? "Other")
      .split(/\s+/)
      .map((w) => w[0])
      .join("")
      .slice(0, 3);
  return (
    <span
      aria-hidden="true"
      className={`grid place-items-center rounded-md bg-stone font-display text-[0.7rem] font-bold tracking-wide text-white ${className}`}
    >
      {text}
    </span>
  );
}
