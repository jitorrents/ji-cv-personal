import type { Bullet } from "@/lib/experience";
import { SquareBullets } from "./SquareBullets";

/**
 * A company's "Key achievements" for the A4 layouts: small uppercase accent title and a list
 * with small square accent markers. With `linkLabel`, items with a url end with "View →".
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
      <SquareBullets items={items} marker="bg-warm" linkLabel={linkLabel} className="mt-[1.4mm]" />
    </div>
  );
}
