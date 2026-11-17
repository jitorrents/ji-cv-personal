import { RichText } from "@/components/ui/RichText";
import type { Bullet } from "@/lib/experience";

/**
 * Bullet list for the A4 layouts with small square markers (navy by default, accent for
 * achievements). `**bold**` renders in navy; with `linkLabel`, items with a url end with
 * a "View →" link.
 */
export function SquareBullets({
  items,
  marker = "bg-spruce",
  linkLabel,
  className = "",
}: {
  items: Bullet[];
  marker?: string;
  linkLabel?: string;
  className?: string;
}) {
  if (!items.length) return null;
  return (
    <ul className={`space-y-[1.1mm] ${className}`}>
      {items.map((a) => (
        <li key={a.text} className="flex break-inside-avoid gap-[2.2mm]">
          <span aria-hidden="true" className={`mt-[1.25mm] size-[1.5mm] shrink-0 ${marker}`} />
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
  );
}
