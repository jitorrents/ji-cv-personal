import type { Locale } from "@/content/i18n";
import { localePath } from "@/content/locale";
import type { Resume } from "@/content/types";
import { siteUrl } from "@/lib/site";

const bare = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

/** Sidebar contact lines: city and country, LinkedIn and the site URL (no protocol). */
export function ContactList({ basics, locale }: { basics: Resume["basics"]; locale: Locale }) {
  const linkedin = basics.profiles.find((p) => p.network === "LinkedIn");
  const site = `${siteUrl}${localePath(locale, "/")}`;
  return (
    <ul className="space-y-[0.8mm] text-[7.3pt]">
      <li>{basics.location}</li>
      {linkedin && (
        <li>
          <a href={linkedin.url}>{bare(linkedin.url)}</a>
        </li>
      )}
      <li>
        <a href={site}>{bare(site)}</a>
      </li>
    </ul>
  );
}
