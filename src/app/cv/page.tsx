import type { Metadata } from "next";
import { CvDocument } from "@/components/sections/cv/CvDocument";
import { PageHeader } from "@/components/ui/PageHeader";
import { PrintButton } from "@/components/ui/PrintButton";
import { labels } from "@/content/labels";

const page = labels.pages.cv;

export const metadata: Metadata = {
  title: page.title,
  alternates: { canonical: "cv/" },
};

export default function CvPage() {
  return (
    <>
      <div className="no-print">
        <PageHeader eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
          <div className="mt-6">
            <PrintButton />
          </div>
        </PageHeader>
      </div>
      <CvDocument />
    </>
  );
}
