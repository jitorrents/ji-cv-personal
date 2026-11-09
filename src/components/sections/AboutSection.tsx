import { labels } from "@/content/labels";
import { resume } from "@/content/resume";
import { Band } from "@/components/ui/Band";
import { Reveal } from "@/components/ui/Reveal";
import { CareerPath } from "./CareerPath";

export function AboutSection() {
  const s = labels.sections.about;
  return (
    <Band id="about" tone="plain" eyebrow={s.eyebrow} title={s.title}>
      <Reveal>
        <p className="max-w-3xl text-base leading-relaxed text-pretty sm:text-lg">
          {resume.basics.summary}
        </p>
      </Reveal>
      <Reveal>
        <CareerPath />
      </Reveal>
    </Band>
  );
}
