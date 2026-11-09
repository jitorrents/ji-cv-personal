import { labels } from "@/content/labels";
import { resume } from "@/content/resume";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/Tag";

export function FocusAreas() {
  if (!resume.skills.length) return null;
  return (
    <Section id="focus" title={labels.home.focus}>
      <div className="grid gap-4 sm:grid-cols-2">
        {resume.skills.map((g) => (
          <article key={g.category} className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-lg font-semibold">{g.category}</h3>
            <TagList items={g.items} className="mt-4" />
          </article>
        ))}
      </div>
    </Section>
  );
}
