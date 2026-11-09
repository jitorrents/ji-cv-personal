"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { labels } from "@/content/labels";
import { isActive, type Route } from "@/lib/routes";

export function NavLinks({ routes }: { routes: Route[] }) {
  const pathname = usePathname();
  return (
    <ul className="hidden items-center gap-1 text-sm md:flex">
      {routes.map((r) => {
        const active = isActive(r.href, pathname);
        return (
          <li key={r.key}>
            <Link
              href={r.href}
              aria-current={active ? "page" : undefined}
              className={`rounded-full px-3 py-1.5 transition-colors ${
                active ? "bg-accent-soft font-medium text-accent" : "text-muted hover:text-fg"
              }`}
            >
              {labels.nav[r.key]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
