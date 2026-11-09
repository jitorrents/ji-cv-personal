import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ExperienceSection } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { EducationSection } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Languages } from "@/components/sections/Languages";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { labels } from "@/content/labels";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded bg-accent px-3 py-2 text-accent-fg focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        {labels.skipToContent}
      </a>
      <Header />
      <main id="main" className="mx-auto max-w-3xl px-4 sm:px-6">
        <Hero />
        <About />
        <ExperienceSection />
        <Skills />
        <Projects />
        <EducationSection />
        <Certifications />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
