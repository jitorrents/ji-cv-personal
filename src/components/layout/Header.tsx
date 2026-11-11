import Link from "next/link";
import { getContent, localePath, type Locale } from "@/content/i18n";
import { sections } from "@/lib/routes";
import { Avatar } from "@/components/ui/Monogram";
import { LanguageSwitch } from "./LanguageSwitch";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ locale }: { locale: Locale }) {
  const { t, r } = getContent(locale);
  const ids = sections(r);
  const nav = { locale, labels: t.nav, cvLabel: t.cvLink };
  return (
    <header className="tone-plain no-print sticky top-0 z-40 border-b border-line bg-band/90 text-fg backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href={localePath(locale, "/")}
          className="flex items-center gap-2.5 font-display font-bold tracking-tight"
        >
          <Avatar locale={locale} />
          <span className="hidden whitespace-nowrap sm:inline xl:hidden">{r.basics.name}</span>
        </Link>
        <nav aria-label={t.primaryNav} className="flex items-center gap-1">
          <NavLinks ids={ids} {...nav} />
          <LanguageSwitch locale={locale} label={t.language.label} names={t.language} />
          <ThemeToggle label={t.toggleTheme} />
          <MobileMenu ids={ids} {...nav} openLabel={t.openMenu} closeLabel={t.closeMenu} />
        </nav>
      </div>
    </header>
  );
}
