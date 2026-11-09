import { resume } from "@/content/resume";
import { Section } from "@/components/ui/Section";
import { formatYearMonth } from "@/lib/dates";

export function EducationSection() {
  if (!resume.education.length) return null;
  return (
    <Section id="education">
      <ul className="space-y-4">
        {resume.education.map((e) => (
          <li key={`${e.institution}-${e.degree}`}>
            <h3 className="font-semibold">
              {e.degree}
              {e.field ? `, ${e.field}` : ""}
            </h3>
            <p className="text-sm text-muted">
              {e.institution}
              {e.start && e.end ? ` · ${formatYearMonth(e.start)} – ${formatYearMonth(e.end)}` : ""}
            </p>
            {e.notes && <p className="mt-1">{e.notes}</p>}
          </li>
        ))}
      </ul>
    </Section>
  );
}
