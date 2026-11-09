import { resume } from "@/content/resume";

export function LanguageList() {
  return (
    <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {resume.languages.map((l) => (
        <div
          key={l.language}
          className="flex flex-col-reverse rounded-2xl border border-border bg-surface p-5"
        >
          <dd className="mt-1 text-sm text-muted">{l.level}</dd>
          <dt className="font-display text-lg font-semibold">{l.language}</dt>
        </div>
      ))}
    </dl>
  );
}
