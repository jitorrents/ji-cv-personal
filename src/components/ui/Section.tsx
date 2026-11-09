export function Section({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-24 py-10 ${className}`}>
      <h2 id={`${id}-title`} className="mb-6 font-display text-2xl font-semibold tracking-tight">
        {title}
        <span aria-hidden="true" className="mt-2 block h-1 w-10 rounded-full bg-warm" />
      </h2>
      {children}
    </section>
  );
}
