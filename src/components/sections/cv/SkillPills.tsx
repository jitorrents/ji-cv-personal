/**
 * Profile tags as rounded pills with bold navy text.
 * - "rows" (default): pale-blue pills in two rows (e.g. 3 + 2); each row fills the column,
 *   pills grow from their natural width to take the spare space (/cv/ main column).
 * - "stack": white pills, one per line, full width of the column (one-pager sidebar).
 */
export function SkillPills({
  items,
  layout = "rows",
  className = "",
}: {
  items: string[];
  layout?: "rows" | "stack";
  className?: string;
}) {
  if (!items.length) return null;
  if (layout === "stack") {
    return (
      <ul className={`space-y-[1.6mm] ${className}`}>
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full bg-band px-[3mm] py-[1.5mm] text-center text-[7.5pt] leading-none font-bold text-spruce"
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }
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
