export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
      {children}
    </li>
  );
}

export function TagList({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {items.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </ul>
  );
}
