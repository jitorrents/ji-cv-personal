/**
 * Shared button styles, matching the header's "View CV" button (Stockagile-style):
 * rectangles with soft corners, no pills.
 */
const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors";

export const buttonClass = {
  /** Solid accent (terracotta) with its contrast text. */
  primary: `${base} bg-warm text-ink hover:opacity-90`,
  /** Solid dark (deep navy) with white text, for use on the accent-colored contact band. */
  dark: `${base} bg-stone text-white hover:opacity-90`,
  /** Outline in the band's text color. */
  outline: `${base} border border-current/40 text-fg hover:border-current hover:bg-fg/10`,
};
