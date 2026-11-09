import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { PageHeader } from "@/components/ui/PageHeader";
import { labels } from "@/content/labels";

const page = labels.pages.experience;

export const metadata: Metadata = {
  title: page.title,
  alternates: { canonical: "experience/" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} intro={page.intro} />
      <ExperienceTimeline />
    </>
  );
}
