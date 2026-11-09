import { resume } from "@/content/resume";
import { Section } from "@/components/ui/Section";

export function Languages() {
  if (!resume.languages.length) return null;
  return (
    <Section id="languages">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
        {resume.languages.map((l) => (
          <div key={l.language}>
            <dt className="font-medium">{l.language}</dt>
            <dd className="text-sm text-muted">{l.level}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
