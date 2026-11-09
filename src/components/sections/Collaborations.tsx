import { resume } from "@/content/resume";
import { Section } from "@/components/ui/Section";
import { formatRange } from "@/lib/dates";

export function Collaborations() {
  if (!resume.collaborations?.length) return null;
  return (
    <Section id="collaborations">
      <ul className="space-y-6">
        {resume.collaborations.map((c) => (
          <li key={`${c.organization}-${c.role}`}>
            <article>
              <h3 className="font-semibold">
                {c.role} · {c.url ? <a href={c.url}>{c.organization}</a> : c.organization}
              </h3>
              <p className="text-sm text-muted">
                {formatRange(c.start, c.end)}
                {c.location ? ` · ${c.location}` : ""}
              </p>
              {c.description && <p className="mt-2">{c.description}</p>}
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
