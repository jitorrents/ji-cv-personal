import { resume } from "@/content/resume";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/Tag";

export function Skills() {
  if (!resume.skills.length) return null;
  return (
    <Section id="skills">
      <div className="grid gap-6 sm:grid-cols-2">
        {resume.skills.map((g) => (
          <div key={g.category}>
            <h3 className="font-medium">{g.category}</h3>
            <TagList items={g.items} />
          </div>
        ))}
      </div>
    </Section>
  );
}
