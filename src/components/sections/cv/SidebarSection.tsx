/** A block of the one-pager sidebar: small uppercase navy title over a hairline, then content. */
export function SidebarSection({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <h2 className="border-b border-line pb-[1mm] text-[7pt] font-bold tracking-[0.12em] text-title uppercase">
        {title}
      </h2>
      <div className="mt-[2mm]">{children}</div>
    </section>
  );
}
