import { resume } from "@/content/resume";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about">
      <p className="leading-relaxed">{resume.basics.summary}</p>
    </Section>
  );
}
