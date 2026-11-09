"use client";

import { useState } from "react";
import { labels, type SectionId } from "@/content/labels";

export function MobileMenu({ ids }: { ids: SectionId[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? labels.closeMenu : labels.openMenu}
        onClick={() => setOpen((o) => !o)}
        className="rounded-md p-2 text-muted hover:text-fg focus-visible:outline-2 focus-visible:outline-accent"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      {open && (
        <ul
          id="mobile-nav"
          className="absolute inset-x-0 top-full border-b border-border bg-bg px-4 py-2"
        >
          {ids.map((id) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className="block py-2 text-fg">
                {labels.nav[id]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
