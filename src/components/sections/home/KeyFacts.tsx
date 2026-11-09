import { labels } from "@/content/labels";
import { resume } from "@/content/resume";
import { yearsOfExperience } from "@/lib/experience";

export function KeyFacts() {
  const facts = [
    { value: `${yearsOfExperience(resume.experience)}+`, label: labels.facts.years },
    { value: resume.experience[0]?.company ?? "—", label: labels.facts.current },
    { value: String(resume.certifications.length), label: labels.facts.certifications },
    { value: String(resume.languages.length), label: labels.facts.languages },
  ];
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
      {facts.map((f) => (
        <div key={f.label} className="flex flex-col-reverse bg-surface p-5 sm:p-6">
          <dt className="mt-1 text-sm text-muted">{f.label}</dt>
          <dd className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}
