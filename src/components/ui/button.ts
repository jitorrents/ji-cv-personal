const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors";

export const buttonClass = {
  primary: `${base} bg-accent text-accent-fg hover:opacity-90`,
  secondary: `${base} border border-border bg-surface text-fg hover:border-accent hover:text-accent`,
};
