import { resume } from "@/content/resume";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/Tag";
import { formatRange } from "@/lib/dates";

export function ExperienceSection() {
  if (!resume.experience.length) return null;
  // TODO: group consecutive roles at the same company.
  return (
    <Section id="experience">
      <ol className="space-y-8">
        {resume.experience.map((job) => (
          <li key={`${job.company}-${job.start}`}>
            <article>
              <h3 className="font-semibold">
                {job.role} · {job.company}
              </h3>
              <p className="text-sm text-muted">{formatRange(job.start, job.end)}</p>
              {job.summary && <p className="mt-2">{job.summary}</p>}
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <TagList items={job.tech ?? []} />
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
