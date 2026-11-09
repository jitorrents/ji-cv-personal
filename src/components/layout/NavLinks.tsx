"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { labels, type SectionId } from "@/content/labels";
import { useActiveSection } from "./useActiveSection";

export function NavLinks({ ids }: { ids: SectionId[] }) {
  const active = useActiveSection(ids);
  const onCv = usePathname().startsWith("/cv");
  return (
    <ul className="hidden items-center gap-0.5 text-sm lg:flex">
      {ids.map((id) => (
        <li key={id}>
          <Link
            href={`/#${id}`}
            aria-current={active === id ? "location" : undefined}
            className={`relative rounded-full px-3 py-1.5 transition-colors ${
              active === id ? "font-semibold text-fg" : "text-muted hover:text-fg"
            }`}
          >
            {labels.nav[id]}
            <span
              aria-hidden="true"
              className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-warm transition-transform duration-300 ${
                active === id ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </Link>
        </li>
      ))}
      <li className="ml-2">
        <Link
          href="/cv/"
          aria-current={onCv ? "page" : undefined}
          className="rounded-full bg-warm px-4 py-1.5 font-semibold text-ink transition-shadow hover:shadow-md hover:shadow-warm/30"
        >
          {labels.cvLink}
        </Link>
      </li>
    </ul>
  );
}
