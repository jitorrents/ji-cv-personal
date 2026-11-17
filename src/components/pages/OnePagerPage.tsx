import Link from "next/link";
import { OnePager } from "@/components/sections/cv/OnePager";
import { buttonClass } from "@/components/ui/button";
import { PrintButton } from "@/components/ui/PrintButton";
import { getContent, localePath, type Locale } from "@/content/i18n";

/** /one-pager/: the CV on a single A4 page, with Download PDF (print) and a link to /cv/. */
export function OnePagerPage({ locale }: { locale: Locale }) {
  const { t } = getContent(locale);
  return (
    <div className="tone-cloud bg-band text-fg print:bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 print:p-0">
        <header className="no-print animate-rise py-14 sm:py-20">
          <h1 className="font-display text-4xl font-bold tracking-tight text-title sm:text-5xl">
            {t.onePager}
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrintButton label={t.downloadPdf} />
            <Link href={localePath(locale, "/cv/")} className={buttonClass.outline}>
              {t.viewCv}
            </Link>
          </div>
        </header>
        {/* The sheet keeps its A4 size; narrow screens scroll it sideways, not the page. */}
        <div className="-mx-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0 print:m-0 print:overflow-visible print:p-0">
          <div className="mx-auto w-fit print:mx-0">
            <OnePager locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
}
