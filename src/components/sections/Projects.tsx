import { resume } from "@/content/resume";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/Tag";

export function Projects() {
  if (!resume.projects?.length) return null;
  return (
    <Section id="projects">
      <ul className="space-y-6">
        {resume.projects.map((p) => (
          <li key={p.name}>
            <h3 className="font-semibold">{p.url ? <a href={p.url}>{p.name}</a> : p.name}</h3>
            <p className="mt-1">{p.description}</p>
            <TagList items={p.tech ?? []} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
