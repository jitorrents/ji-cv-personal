import { labels } from "@/content/labels";
import { resume } from "@/content/resume";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about" title={labels.home.about}>
      <p className="max-w-3xl text-lg leading-relaxed text-pretty">{resume.basics.summary}</p>
    </Section>
  );
}
