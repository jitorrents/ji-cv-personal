import type { SectionId } from "@/content/labels";
import { labels } from "@/content/labels";

export function Section({ id, children }: { id: SectionId; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 py-12">
      <h2 id={`${id}-title`} className="mb-6 text-2xl font-semibold tracking-tight">
        {labels.nav[id]}
      </h2>
      {children}
    </section>
  );
}
