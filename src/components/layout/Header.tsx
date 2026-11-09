import Link from "next/link";
import { labels } from "@/content/labels";
import { resume } from "@/content/resume";
import { sections } from "@/lib/routes";
import { Monogram } from "@/components/ui/Monogram";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="tone-plain no-print sticky top-0 z-40 border-b border-line bg-band/90 text-fg backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-display font-bold tracking-tight">
          <Monogram size="sm" />
          <span className="hidden sm:inline">{resume.basics.name}</span>
        </Link>
        <nav aria-label={labels.primaryNav} className="flex items-center gap-1">
          <NavLinks ids={sections} />
          <ThemeToggle />
          <MobileMenu ids={sections} />
        </nav>
      </div>
    </header>
  );
}
