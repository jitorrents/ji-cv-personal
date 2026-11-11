import { Band } from "@/components/ui/Band";
import { getContent, type Locale } from "@/content/i18n";
import { ObfuscatedEmail } from "@/components/ui/ObfuscatedEmail";
import { Reveal } from "@/components/ui/Reveal";
import { buttonClass } from "@/components/ui/button";
import { encodeEmail } from "@/lib/email";

export function ContactSection({ locale }: { locale: Locale }) {
  const { t, r } = getContent(locale);
  const s = t.sections.contact;
  const { email, profiles } = r.basics;
  return (
    <Band id="contact" tone="red" eyebrow={s.eyebrow} title={s.title} intro={s.intro}>
      <Reveal>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-4 text-lg">
          {email && (
            <li>
              <ObfuscatedEmail
                encoded={encodeEmail(email.user, email.domain)}
                label={t.showEmail}
              />
            </li>
          )}
          {profiles.map((p) => (
            <li key={p.url}>
              <a href={p.url} className={buttonClass.dark}>
                {p.network}
                {p.username ? ` · ${p.username}` : ""}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Band>
  );
}
