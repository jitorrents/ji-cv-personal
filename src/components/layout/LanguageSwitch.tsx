"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, switchLocalePath, type Locale } from "@/content/locale";

/** EN | ES switch: links to the same page in the other language. */
export function LanguageSwitch({
  locale,
  label,
  names,
}: {
  locale: Locale;
  label: string;
  names: Record<Locale, string>;
}) {
  const pathname = usePathname();
  return (
    <ul
      aria-label={label}
      className="flex items-center rounded-full border border-line p-0.5 text-xs font-bold"
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <li key={l}>
            <Link
              href={switchLocalePath(pathname, l)}
              hrefLang={l}
              lang={l}
              aria-current={active ? "true" : undefined}
              title={names[l]}
              className={`block rounded-full px-2.5 py-1 uppercase transition-colors ${
                active ? "bg-stone text-white" : "text-muted hover:text-fg"
              }`}
            >
              <span aria-hidden="true">{l}</span>
              <span className="sr-only">{names[l]}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
