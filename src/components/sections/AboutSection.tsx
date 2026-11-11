import { Band } from "@/components/ui/Band";
import { getContent, type Locale } from "@/content/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { CareerPath } from "./CareerPath";

export function AboutSection({ locale }: { locale: Locale }) {
  const { t, r } = getContent(locale);
  const s = t.sections.about;
  return (
    <Band id="about" tone="plain" eyebrow={s.eyebrow} title={s.title}>
      <Reveal>
        <p className="text-base leading-relaxed text-pretty sm:text-lg">{r.basics.summary}</p>
      </Reveal>
      <Reveal>
        <CareerPath locale={locale} />
      </Reveal>
    </Band>
  );
}
