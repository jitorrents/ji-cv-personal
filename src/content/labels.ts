// All UI strings live here so Spanish and Catalan can be added later.
export const labels = {
  skipToContent: "Skip to content",
  nav: {
    about: "About",
    experience: "Experience",
    collaborations: "Teaching",
    skills: "Skills",
    projects: "Projects",
    education: "Education",
    certifications: "Certifications",
    languages: "Languages",
    contact: "Contact",
  },
  openMenu: "Open menu",
  closeMenu: "Close menu",
  toggleTheme: "Toggle dark mode",
  present: "Present",
  contactMe: "Contact",
  showEmail: "Show email address",
  downloadCv: "Download CV",
  lastUpdated: "Last updated",
  sourceCode: "Source code",
  notFoundTitle: "Page not found",
  notFoundBody: "The page you are looking for does not exist.",
  backHome: "Back to home",
} as const;

export type SectionId = keyof typeof labels.nav;
