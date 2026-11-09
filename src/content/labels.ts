// All UI strings live here so Spanish and Catalan can be added later.
// CV facts never go here; they live in resume.ts.
export const labels = {
  skipToContent: "Skip to content",
  primaryNav: "Primary",
  nav: {
    about: "About",
    experience: "Experience",
    teaching: "Teaching",
    skills: "Skills",
    education: "Education",
    certifications: "Certifications",
    contact: "Contact",
  },
  cvLink: "CV",
  logoStrip: "Certified by",
  careerPath: "Career path",
  sections: {
    about: { eyebrow: "Who I am", title: "About" },
    experience: {
      eyebrow: "Career",
      title: "Experience",
      intro: "Roles and responsibilities, newest first.",
    },
    teaching: { eyebrow: "Sharing knowledge", title: "Teaching & mentoring" },
    skills: { eyebrow: "What I do", title: "Skills" },
    education: { eyebrow: "Learning", title: "Education & languages" },
    certifications: { eyebrow: "Credentials", title: "Certifications" },
    contact: {
      eyebrow: "Let's talk",
      title: "Get in touch",
      intro: "The best way to reach me is by email or LinkedIn.",
    },
  },
  cvPage: {
    eyebrow: "Résumé",
    title: "Curriculum vitae",
    intro: "The full CV laid out for A4. Use Download PDF to save or print it.",
  },
  education: {
    degrees: "Degrees",
    languages: "Languages",
  },
  cv: {
    profile: "Profile",
    experience: "Experience",
    teaching: "Teaching",
    education: "Education",
    certifications: "Certifications",
    skills: "Skills",
    languages: "Languages",
  },
  openMenu: "Open menu",
  closeMenu: "Close menu",
  toggleTheme: "Toggle dark mode",
  present: "Present",
  viewCv: "View CV",
  contactMe: "Contact",
  downloadPdf: "Download PDF",
  showEmail: "Show email address",
  lastUpdated: "Last updated",
  sourceCode: "Source code",
  notFoundTitle: "Page not found",
  notFoundBody: "The page you are looking for does not exist.",
  backHome: "Back to home",
} as const;

export type SectionId = keyof typeof labels.nav;
