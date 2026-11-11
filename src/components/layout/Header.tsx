import Link from "next/link";
import { getContent, localePath, type Locale } from "@/content/i18n";
import { navTree, sections } from "@/lib/routes";
import { Avatar } from "@/components/ui/Monogram";
import { LanguageSwitch } from "./LanguageSwitch";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Stockagile-style header: brand on the left, a few centered links (one dropdown),
 * and actions on the right (quiet language/theme controls, Contact link, solid CV button).
 */
export function Header({ locale }: { locale: Locale }) {
  const { t, r } = getContent(locale);
  const ids = sections(r);
  return (
    <header className="tone-plain no-print sticky top-0 z-40 border-b border-line bg-band/90 text-fg backdrop-blur-md">
      <div className="relative mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6">
        <Link
          href={localePath(locale, "/")}
          className="flex items-center gap-2.5 justify-self-start font-display font-bold tracking-tight"
        >
          <Avatar locale={locale} />
          <span className="hidden whitespace-nowrap sm:inline">{r.basics.name}</span>
        </Link>

        <nav aria-label={t.primaryNav}>
          <NavLinks
            items={navTree(ids)}
            ids={ids}
            locale={locale}
            labels={t.nav}
            groupLabels={t.navGroups}
          />
        </nav>

        <div className="flex items-center gap-1 justify-self-end">
          <LanguageSwitch
            locale={locale}
            label={t.language.label}
            names={{ en: t.language.english, es: t.language.spanish }}
          />
          <ThemeToggle label={t.toggleTheme} />
          <Link
            href={localePath(locale, "/#contact")}
            className="ml-1 hidden rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap hover:bg-card xl:inline-flex"
          >
            {t.nav.contact}
          </Link>
          <Link
            href={localePath(locale, "/cv/")}
            className="ml-1 hidden rounded-lg bg-warm px-4 py-2 text-sm font-semibold whitespace-nowrap text-ink transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {t.viewCv}
          </Link>
          <MobileMenu
            ids={ids}
            locale={locale}
            labels={t.nav}
            cvLabel={t.cvLink}
            openLabel={t.openMenu}
            closeLabel={t.closeMenu}
          />
        </div>
      </div>
    </header>
  );
}
