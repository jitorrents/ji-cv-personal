import type { Metadata } from "next";
import { CertificationList } from "@/components/sections/CertificationList";
import { EducationList } from "@/components/sections/EducationList";
import { LanguageList } from "@/components/sections/LanguageList";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { labels } from "@/content/labels";
import { resume } from "@/content/resume";

const page = labels.pages.education;

export const metadata: Metadata = {
  title: page.title,
  alternates: { canonical: "education/" },
};

export default function EducationPage() {
  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} intro={page.intro} />
      {resume.education.length > 0 && (
        <Section id="degrees" title={labels.education.degrees} className="pt-0">
          <EducationList />
        </Section>
      )}
      {resume.certifications.length > 0 && (
        <Section id="certifications" title={labels.education.certifications}>
          <CertificationList />
        </Section>
      )}
      {resume.languages.length > 0 && (
        <Section id="languages" title={labels.education.languages}>
          <LanguageList />
        </Section>
      )}
    </>
  );
}
