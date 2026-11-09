import { AboutSection } from "@/components/sections/AboutSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogoStripSection } from "@/components/sections/LogoStripSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TeachingSection } from "@/components/sections/TeachingSection";

/** One page of full-width colored bands; the order matches `sections` in lib/routes.ts. */
export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoStripSection />
      <AboutSection />
      <ExperienceSection />
      <TeachingSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}
