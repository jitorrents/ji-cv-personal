const variants = {
  /** Quiet outline pills (sector tags in Experience). */
  default: {
    list: "gap-1.5",
    item: "rounded-full border border-line bg-band px-2.5 py-0.5 text-xs font-medium text-muted",
  },
  /** Profile tags (About): brand navy text on a faint tint of the same color (pale blue in dark). */
  brand: {
    list: "gap-2",
    item: "rounded-full bg-link/10 px-3.5 py-1 text-sm font-medium text-link",
  },
};

export function TagList({
  items,
  className = "",
  variant = "default",
}: {
  items: string[];
  className?: string;
  variant?: keyof typeof variants;
}) {
  if (!items.length) return null;
  const v = variants[variant];
  return (
    <ul className={`flex flex-wrap ${v.list} ${className}`}>
      {items.map((t) => (
        <li key={t} className={v.item}>
          {t}
        </li>
      ))}
    </ul>
  );
}
