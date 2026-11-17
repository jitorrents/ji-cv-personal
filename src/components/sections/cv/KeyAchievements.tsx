import { RichText } from "@/components/ui/RichText";
import type { Bullet } from "@/lib/experience";

/**
 * A company's "Key achievements" for the A4 layouts: small uppercase accent title and a list
 * with small square accent markers. `**bold**` fragments are rendered in navy. When
 * `linkLabel` is given, items with a url end with a "View →" link.
 */
export function KeyAchievements({
  title,
  items,
  linkLabel,
  className = "",
}: {
  title: string;
  items: Bullet[];
  linkLabel?: string;
  className?: string;
}) {
  if (!items.length) return null;
  return (
    <div className={className}>
      <h4 className="text-[7pt] font-bold tracking-[0.1em] text-warm-ink uppercase">{title}</h4>
      <ul className="mt-[1.4mm] space-y-[1.1mm]">
        {items.map((a) => (
          <li key={a.text} className="flex gap-[2.2mm]">
            <span aria-hidden="true" className="mt-[1.25mm] size-[1.5mm] shrink-0 bg-warm" />
            <span className="text-pretty">
              <RichText text={a.text} />
              {linkLabel && a.url && (
                <>
                  {" "}
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold whitespace-nowrap text-warm-ink"
                  >
                    {linkLabel}
                    <span aria-hidden="true"> →</span>
                  </a>
                </>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
