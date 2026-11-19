import type { Bullet } from "@/lib/experience";
import { SquareBullets } from "./SquareBullets";

/**
 * A company's "Key achievements" on the A4 sheets: a pale-blue card (no border, soft corners,
 * full column width) with the small uppercase accent title and square accent bullets. No card
 * when there are no achievements. With `linkLabel`, items with a url end with "View →".
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
    <div className={`rounded-[2mm] bg-skye p-[2.5mm] ${className}`}>
      <h4 className="text-[7pt] font-bold tracking-[0.1em] text-warm-ink uppercase">{title}</h4>
      <SquareBullets items={items} marker="bg-warm" linkLabel={linkLabel} className="mt-[1.4mm]" />
    </div>
  );
}
