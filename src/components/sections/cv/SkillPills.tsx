/**
 * Profile tags as rounded pale-blue pills with bold navy text, in two rows (e.g. 3 + 2).
 * Each row fills the column: pills grow from their natural width to take the spare space.
 */
export function SkillPills({ items, className = "" }: { items: string[]; className?: string }) {
  if (!items.length) return null;
  const split = Math.ceil(items.length / 2);
  const rows = [items.slice(0, split), items.slice(split)].filter((row) => row.length);
  return (
    <ul className={`space-y-[2mm] ${className}`}>
      {rows.map((row) => (
        <li key={row.join()} className="flex gap-[2.5mm]">
          {row.map((item) => (
            <span
              key={item}
              className="flex-auto rounded-full bg-skye px-[3mm] py-[1.6mm] text-center text-[7.5pt] leading-none font-bold text-spruce"
            >
              {item}
            </span>
          ))}
        </li>
      ))}
    </ul>
  );
}
