import { labels } from "@/content/labels";
import { resume } from "@/content/resume";
import { ObfuscatedEmail } from "@/components/ui/ObfuscatedEmail";
import { encodeEmail } from "@/lib/email";

export function Contact() {
  const { email, profiles } = resume.basics;
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mt-10 scroll-mt-24 rounded-3xl bg-accent-soft px-6 py-10 sm:px-10 sm:py-14"
    >
      <span aria-hidden="true" className="mb-4 block h-1 w-12 rounded-full bg-warm" />
      <h2 id="contact-title" className="font-display text-3xl font-bold tracking-tight">
        {labels.home.contact}
      </h2>
      <p className="mt-3 max-w-xl text-muted">{labels.home.contactIntro}</p>
      <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-medium">
        {email && (
          <li>
            <ObfuscatedEmail encoded={encodeEmail(email.user, email.domain)} />
          </li>
        )}
        {profiles.map((p) => (
          <li key={p.url}>
            <a href={p.url} className="text-accent underline-offset-4 hover:underline">
              {p.network}
              {p.username ? ` · ${p.username}` : ""}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
