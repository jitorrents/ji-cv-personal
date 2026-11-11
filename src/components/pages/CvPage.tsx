import { CvDocument } from "@/components/sections/cv/CvDocument";
import { PrintButton } from "@/components/ui/PrintButton";
import { getContent, type Locale } from "@/content/i18n";

export function CvPage({ locale }: { locale: Locale }) {
  const { t } = getContent(locale);
  const page = t.cvPage;
  return (
    <div className="tone-cloud bg-band text-fg print:bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 print:p-0">
        <header className="no-print animate-rise py-14 sm:py-20">
          <p className="text-sm font-semibold tracking-[0.2em] text-muted uppercase">
            {page.eyebrow}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-title sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-4 max-w-2xl text-justify text-lg hyphens-auto text-muted">
            {page.intro}
          </p>
          <div className="mt-8">
            <PrintButton label={t.downloadPdf} />
          </div>
        </header>
        <CvDocument locale={locale} />
      </div>
    </div>
  );
}
