export function TagList({ items, className = "" }: { items: string[]; className?: string }) {
  if (!items.length) return null;
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((t) => (
        <li
          key={t}
          className="rounded-full border border-line bg-band px-2.5 py-0.5 text-xs font-medium text-muted"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}
