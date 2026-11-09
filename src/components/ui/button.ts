const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5";

export const buttonClass = {
  /** Warm red with near-black text (AA). */
  primary: `${base} bg-warm text-ink hover:shadow-lg hover:shadow-warm/30`,
  /** Dark Stone with white text, for use on the red band. */
  dark: `${base} bg-stone text-white hover:shadow-lg`,
  /** Outline in the band's text color. */
  outline: `${base} border border-current text-fg hover:bg-fg/10`,
};
