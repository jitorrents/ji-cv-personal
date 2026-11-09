export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="animate-rise pt-14 pb-10 sm:pt-20">
      <p className="text-sm font-semibold tracking-widest text-accent uppercase">{eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
        {title}
      </h1>
      {intro && <p className="mt-4 max-w-2xl text-lg text-pretty text-muted">{intro}</p>}
      {children}
    </header>
  );
}
