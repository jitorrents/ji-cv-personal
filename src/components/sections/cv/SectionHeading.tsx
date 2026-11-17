/**
 * Main-column section title for the A4 layouts: large uppercase navy text over a full-width
 * hairline, with a short accent segment under its start.
 */
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="relative border-b border-line pb-[1.6mm] font-display text-[12.5pt] leading-none font-bold tracking-wide text-title uppercase">
      {children}
      <span
        aria-hidden="true"
        className="absolute -bottom-[0.5mm] left-0 h-[0.9mm] w-[14mm] bg-warm"
      />
    </h2>
  );
}
