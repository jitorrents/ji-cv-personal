import { buildDate } from "@/lib/site";
import { getContent, type Locale } from "@/content/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const { t, r } = getContent(locale);
  const updated = buildDate.toLocaleDateString(locale === "es" ? "es-ES" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <footer className="tone-stone no-print bg-band text-muted">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm sm:px-6">
        <p>
          © {buildDate.getFullYear()} {r.basics.name}
          <span aria-hidden="true"> · </span>
          <span className="whitespace-nowrap">
            {t.lastUpdated} {updated}
          </span>
        </p>
      </div>
    </footer>
  );
}
