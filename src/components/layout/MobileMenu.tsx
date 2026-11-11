"use client";

import Link from "next/link";
import { useState } from "react";
import type { SectionId } from "@/content/labels";
import { localePath, type Locale } from "@/content/locale";
import { useActiveSection } from "./useActiveSection";

export function MobileMenu({
  ids,
  locale,
  labels,
  cvLabel,
  openLabel,
  closeLabel,
}: {
  ids: SectionId[];
  locale: Locale;
  labels: Record<SectionId, string>;
  cvLabel: string;
  openLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const close = () => setOpen(false);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((o) => !o)}
        className="grid size-9 place-items-center rounded-full text-fg hover:bg-card"
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
          className="absolute inset-x-0 top-full border-b border-line bg-band px-4 py-3 shadow-xl"
        >
          {ids.map((id) => (
            <li key={id}>
              <Link
                href={localePath(locale, `/#${id}`)}
                onClick={close}
                aria-current={active === id ? "location" : undefined}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 ${active === id ? "bg-card font-semibold" : ""}`}
              >
                <span
                  aria-hidden="true"
                  className={`size-1.5 rounded-full ${active === id ? "bg-warm" : "bg-line"}`}
                />
                {labels[id]}
              </Link>
            </li>
          ))}
          <li className="mt-2 px-3 pb-1">
            <Link
              href={localePath(locale, "/cv/")}
              onClick={close}
              className="inline-flex rounded-lg bg-warm px-5 py-2 font-semibold text-ink"
            >
              {cvLabel}
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
