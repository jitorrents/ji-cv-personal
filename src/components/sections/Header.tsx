import { labels, type SectionId } from "@/content/labels";
import { resume } from "@/content/resume";
import { MobileMenu } from "@/components/ui/MobileMenu";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navSections } from "@/lib/sections";

export function Header() {
  const ids: SectionId[] = navSections();
  const initials = resume.basics.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <header className="no-print sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
      <div className="relative mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#main" className="font-semibold tracking-tight" aria-label={resume.basics.name}>
          {initials}
        </a>
        <nav aria-label="Primary" className="flex items-center gap-1">
          <ul className="hidden gap-4 text-sm sm:flex">
            {ids.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="text-muted hover:text-fg">
                  {labels.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <MobileMenu ids={ids} />
        </nav>
      </div>
    </header>
  );
}
