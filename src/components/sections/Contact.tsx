import { resume } from "@/content/resume";
import { Section } from "@/components/ui/Section";
import { ObfuscatedEmail } from "@/components/ui/ObfuscatedEmail";

export function Contact() {
  const { email, profiles } = resume.basics;
  return (
    <Section id="contact">
      <ul className="space-y-2">
        {email && (
          <li>
            <ObfuscatedEmail user={email.user} domain={email.domain} />
          </li>
        )}
        {profiles.map((p) => (
          <li key={p.url}>
            <a href={p.url} className="text-accent underline underline-offset-4">
              {p.network}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
