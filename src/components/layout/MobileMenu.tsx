"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { labels } from "@/content/labels";
import { isActive, type Route } from "@/lib/routes";

export function MobileMenu({ routes }: { routes: Route[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? labels.closeMenu : labels.openMenu}
        onClick={() => setOpen((o) => !o)}
        className="grid size-9 place-items-center rounded-full text-muted hover:bg-accent-soft hover:text-fg"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      {open && (
        <ul
          id="mobile-nav"
          className="absolute inset-x-0 top-full border-b border-border bg-surface px-4 py-3 shadow-lg"
        >
          {routes.map((r) => {
            const active = isActive(r.href, pathname);
            return (
              <li key={r.key}>
                <Link
                  href={r.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 ${active ? "bg-accent-soft font-medium text-accent" : "text-fg"}`}
                >
                  {labels.nav[r.key]}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
