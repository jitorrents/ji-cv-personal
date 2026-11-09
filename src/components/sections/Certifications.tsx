import { resume } from "@/content/resume";
import { Section } from "@/components/ui/Section";
import { formatYearMonth } from "@/lib/dates";

export function Certifications() {
  if (!resume.certifications.length) return null;
  return (
    <Section id="certifications">
      <ul className="space-y-3">
        {resume.certifications.map((c) => (
          <li key={c.name}>
            <span className="font-medium">{c.url ? <a href={c.url}>{c.name}</a> : c.name}</span>
            <span className="text-sm text-muted">
              {" "}
              · {c.issuer}
              {c.date ? ` · ${formatYearMonth(c.date)}` : ""}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
