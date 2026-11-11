import type { Locale } from "@/content/i18n";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogoStripSection } from "@/components/sections/LogoStripSection";
import { PublicPresenceSection } from "@/components/sections/PublicPresenceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TeachingSection } from "@/components/sections/TeachingSection";

/** One page of full-width colored bands; the order matches `sections` in lib/routes.ts. */
export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <HeroSection locale={locale} />
      <LogoStripSection locale={locale} />
      <AboutSection locale={locale} />
      <ExperienceSection locale={locale} />
      <EducationSection locale={locale} />
      <SkillsSection locale={locale} />
      <TeachingSection locale={locale} />
      <PublicPresenceSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}
