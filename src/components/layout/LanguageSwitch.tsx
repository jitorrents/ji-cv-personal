"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, switchLocalePath, type Locale } from "@/content/locale";

/** Quiet "EN / ES" switch: links to the same page in the other language. */
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
    <ul aria-label={label} className="flex items-center text-sm">
      {locales.map((l, i) => {
        const active = l === locale;
        return (
          <li key={l} className="flex items-center">
            {i > 0 && (
              <span aria-hidden="true" className="text-line">
                /
              </span>
            )}
            <Link
              href={switchLocalePath(pathname, l)}
              hrefLang={l}
              lang={l}
              aria-current={active ? "true" : undefined}
              title={names[l]}
              className={`rounded-md px-1.5 py-1 uppercase transition-colors ${
                active ? "font-semibold text-fg" : "text-muted hover:text-fg"
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
