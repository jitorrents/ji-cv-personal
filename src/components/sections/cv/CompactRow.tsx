/**
 * One line of the A4 layouts: content on the left, a muted date on the right. With
 * `truncate`, overlong content is cut with an ellipsis so the row never wraps.
 */
export function CompactRow({
  children,
  date,
  truncate = false,
  className = "",
}: {
  children: React.ReactNode;
  date?: string;
  truncate?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-baseline justify-between gap-[3mm] ${className}`}>
      <p className={`min-w-0 ${truncate ? "truncate" : ""}`}>{children}</p>
      {date && <span className="shrink-0 text-[7.5pt] text-muted tabular-nums">{date}</span>}
    </div>
  );
}
