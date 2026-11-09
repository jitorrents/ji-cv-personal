import Link from "next/link";
import { labels } from "@/content/labels";
import { routes } from "@/lib/routes";
import { Section } from "@/components/ui/Section";

export function Explore() {
  const cards = routes.filter((r) => r.key !== "home");
  return (
    <Section id="explore" title={labels.home.explore} className="no-print">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((r) => (
          <li key={r.key}>
            <Link
              href={r.href}
              className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <span className="flex items-center justify-between font-display text-lg font-semibold">
                {labels.nav[r.key]}
                <span
                  aria-hidden="true"
                  className="text-accent transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
              <span className="mt-2 text-sm text-muted">
                {labels.home.exploreCards[r.key as keyof typeof labels.home.exploreCards]}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
