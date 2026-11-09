import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TeachingList } from "@/components/sections/TeachingList";
import { PageHeader } from "@/components/ui/PageHeader";
import { labels } from "@/content/labels";
import { resume } from "@/content/resume";

const page = labels.pages.teaching;

export const metadata: Metadata = {
  title: page.title,
  alternates: { canonical: "teaching/" },
};

export default function TeachingPage() {
  if (!resume.collaborations?.length) notFound();
  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} intro={page.intro} />
      <TeachingList />
    </>
  );
}
