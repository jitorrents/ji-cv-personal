import type { Metadata } from "next";
import { CvDocument } from "@/components/sections/cv/CvDocument";
import { PrintButton } from "@/components/ui/PrintButton";
import { labels } from "@/content/labels";

const page = labels.cvPage;

export const metadata: Metadata = {
  title: page.title,
  alternates: { canonical: "cv/" },
};

export default function CvPage() {
  return (
    <div className="tone-cloud bg-band text-fg print:bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 print:p-0">
        <header className="no-print animate-rise py-14 sm:py-20">
          <p className="text-sm font-semibold tracking-[0.2em] text-muted uppercase">
            {page.eyebrow}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-title sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{page.intro}</p>
          <div className="mt-8">
            <PrintButton />
          </div>
        </header>
        <CvDocument />
      </div>
    </div>
  );
}
