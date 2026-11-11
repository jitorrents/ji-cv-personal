"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { SectionId } from "@/content/types";
import { localePath, type Locale } from "@/content/locale";
import type { NavItem } from "@/lib/routes";
import { useActiveSection } from "./useActiveSection";

const linkClass = (active: boolean) =>
  `relative inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-card ${
    active ? "text-fg" : "text-muted hover:text-fg"
  }`;

/** Accent underline that grows under the link of the section being read (scroll spy). */
function ActiveUnderline({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute inset-x-3 -bottom-px h-0.5 origin-left rounded-full bg-warm transition-transform duration-300 ${
        active ? "scale-x-100" : "scale-x-0"
      }`}
    />
  );
}

/** Dropdown for a group of sections (opens on hover or click; Escape / outside click closes). */
function NavDropdown({
  label,
  ids,
  labels,
  locale,
  active,
}: {
  label: string;
  ids: SectionId[];
  labels: Record<SectionId, string>;
  locale: Locale;
  active: SectionId | null;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const isActive = active !== null && ids.includes(active);
  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
        className={linkClass(isActive)}
      >
        {label}
        <ActiveUnderline active={isActive} />
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {/* pt-2 bridges the gap so the menu stays open while the pointer moves into it */}
      <div id={menuId} hidden={!open} className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
        <ul className="min-w-56 rounded-xl border border-line bg-band p-2 shadow-xl">
          {ids.map((id) => (
            <li key={id}>
              <Link
                href={localePath(locale, `/#${id}`)}
                onClick={() => setOpen(false)}
                aria-current={active === id ? "location" : undefined}
                className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium hover:bg-card ${
                  active === id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`size-1.5 shrink-0 rounded-full ${active === id ? "bg-warm" : "bg-line"}`}
                />
                {labels[id]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

/** Centered desktop navigation. */
export function NavLinks({
  items,
  ids,
  locale,
  labels,
  groupLabels,
}: {
  items: NavItem[];
  ids: SectionId[];
  locale: Locale;
  labels: Record<SectionId, string>;
  groupLabels: Record<"career", string>;
}) {
  const active = useActiveSection(ids);
  return (
    <ul className="hidden items-center gap-1 xl:flex">
      {items.map((item) =>
        "group" in item ? (
          <NavDropdown
            key={item.group}
            label={groupLabels[item.group]}
            ids={item.ids}
            labels={labels}
            locale={locale}
            active={active}
          />
        ) : (
          <li key={item.id}>
            <Link
              href={localePath(locale, `/#${item.id}`)}
              aria-current={active === item.id ? "location" : undefined}
              className={linkClass(active === item.id)}
            >
              {labels[item.id]}
              <ActiveUnderline active={active === item.id} />
            </Link>
          </li>
        ),
      )}
    </ul>
  );
}
