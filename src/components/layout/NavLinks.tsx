"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { SectionId } from "@/content/labels";
import { localePath, type Locale } from "@/content/locale";
import { useActiveSection } from "./useActiveSection";

export function NavLinks({
  ids,
  locale,
  labels,
  cvLabel,
}: {
  ids: SectionId[];
  locale: Locale;
  labels: Record<SectionId, string>;
  cvLabel: string;
}) {
  const active = useActiveSection(ids);
  const onCv = /\/cv\/?$/.test(usePathname());
  return (
    <ul className="hidden items-center gap-0.5 text-sm xl:flex">
      {ids.map((id) => (
        <li key={id}>
          <Link
            href={localePath(locale, `/#${id}`)}
            aria-current={active === id ? "location" : undefined}
            className={`relative rounded-full px-2.5 py-1.5 whitespace-nowrap transition-colors ${
              active === id ? "font-semibold text-fg" : "text-muted hover:text-fg"
            }`}
          >
            {labels[id]}
            <span
              aria-hidden="true"
              className={`absolute inset-x-2.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-warm transition-transform duration-300 ${
                active === id ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </Link>
        </li>
      ))}
      <li className="ml-2">
        <Link
          href={localePath(locale, "/cv/")}
          aria-current={onCv ? "page" : undefined}
          className="rounded-full bg-warm px-4 py-1.5 font-semibold text-ink transition-shadow hover:shadow-md hover:shadow-warm/30"
        >
          {cvLabel}
        </Link>
      </li>
    </ul>
  );
}
