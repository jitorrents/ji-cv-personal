import type { Metadata } from "next";
import Link from "next/link";
import { RootDocument } from "@/components/layout/RootDocument";
import { buttonClass } from "@/components/ui/button";
import { getContent, localePath, locales } from "@/content/i18n";

export const metadata: Metadata = { title: "404" };

/**
 * 404 for unmatched URLs. There are two root layouts (one per language), so this page
 * cannot know the visitor's language and shows both.
 */
export default function GlobalNotFound() {
  return (
    <RootDocument locale="en" chrome={false}>
      <div className="tone-stone min-h-screen bg-band text-fg">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center gap-10 px-4 py-20 sm:px-6">
          <p className="font-display text-8xl font-bold text-title">404</p>
          {locales.map((l) => {
            const { t } = getContent(l);
            return (
              <div key={l} lang={l}>
                <h1 className="font-display text-3xl font-bold">{t.notFoundTitle}</h1>
                <p className="mt-2 text-muted">{t.notFoundBody}</p>
                <Link href={localePath(l, "/")} className={`${buttonClass.primary} mt-5`}>
                  {t.backHome}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </RootDocument>
  );
}
