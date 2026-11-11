// English UI strings. The Spanish ones are in labels.es.ts, with the same shape (Labels).
// CV facts never go here; they live in resume.ts / resume.es.ts.
export const labels = {
  skipToContent: "Skip to content",
  primaryNav: "Primary",
  nav: {
    about: "About",
    experience: "Experience",
    education: "Education",
    skills: "Skills & Certifications",
    teaching: "Teaching",
    presence: "Public presence",
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
    skills: { eyebrow: "What I do", title: "Skills & Certifications" },
    education: { eyebrow: "Learning", title: "Education & languages" },
    presence: {
      eyebrow: "Out there",
      title: "Public presence",
      intro: "Talks, panels, articles and press.",
      empty: "Coming soon.",
    },
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
  skillsSection: {
    skills: "Skills",
    certifications: "Certifications",
  },
  kpis: {
    yearsInIt: "years in IT",
    companies: "companies",
    roles: "roles",
    institutions: "institutions",
    certifications: "certifications",
    issuers: "issuers",
    skillAreas: "skill areas",
    degrees: "degrees",
    languages: "languages",
    items: "appearances",
  },
  presenceTypes: {
    talk: "Talk",
    panel: "Panel",
    article: "Article",
    interview: "Interview",
    press: "Press",
    podcast: "Podcast",
    other: "Other",
  },
  education: {
    degrees: "Degrees",
    languages: "Languages",
    /** Joins degree and field: "Postgraduate degree in Business Intelligence". */
    fieldJoiner: " in ",
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
  viewCv: "View CV",
  contactMe: "Contact",
  downloadPdf: "Download PDF",
  showEmail: "Email address",
  lastUpdated: "Last updated",
  sourceCode: "Source code",
  notFoundTitle: "Page not found",
  notFoundBody: "The page you are looking for does not exist.",
  backHome: "Back to home",
  language: {
    label: "Language",
    en: "English",
    es: "Español",
  },
  otherIssuer: "Other",
  dates: {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    present: "Present",
    yr: "yr",
    yrs: "yrs",
    mo: "mo",
    mos: "mos",
  },
  meta: {
    description:
      "CV and portfolio of Joan Ignasi Torrents: Data & AI leadership, consulting and project management.",
  },
};

export type Labels = typeof labels;
export type SectionId = keyof Labels["nav"];
