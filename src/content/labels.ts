// All UI strings live here so Spanish and Catalan can be added later.
// CV facts never go here; they live in resume.ts.
export const labels = {
  skipToContent: "Skip to content",
  primaryNav: "Primary",
  nav: {
    home: "Home",
    experience: "Experience",
    teaching: "Teaching",
    education: "Education",
    cv: "CV",
  },
  pages: {
    experience: {
      eyebrow: "Career",
      title: "Experience",
      intro: "Roles and responsibilities, newest first.",
    },
    teaching: {
      eyebrow: "Sharing knowledge",
      title: "Teaching & mentoring",
      intro: "Academic collaborations alongside my main role.",
    },
    education: {
      eyebrow: "Learning",
      title: "Education & certifications",
      intro: "Degrees, professional certifications and languages.",
    },
    cv: {
      eyebrow: "Résumé",
      title: "Curriculum vitae",
      intro: "The full CV on one page, laid out for A4. Use Download PDF to save or print it.",
    },
  },
  home: {
    about: "About",
    focus: "Focus areas",
    explore: "Explore",
    contact: "Get in touch",
    contactIntro: "The best way to reach me is by email or LinkedIn.",
    exploreCards: {
      experience: "Career timeline with roles, highlights and technologies.",
      teaching: "Academic collaborations and mentoring.",
      education: "Degrees, certifications and languages.",
      cv: "Everything on one A4 page, ready to print or save as PDF.",
    },
  },
  facts: {
    years: "years in IT",
    current: "current company",
    certifications: "certifications",
    languages: "languages",
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
  education: {
    degrees: "Degrees",
    certifications: "Certifications",
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

export type RouteKey = keyof typeof labels.nav;
