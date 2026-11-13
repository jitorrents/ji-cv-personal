/** Year and month, e.g. "2021-03". */
export type YearMonth = `${number}-${number}`;

/** Year only ("2015") or year and month ("2015-09"), for sources that give no month. */
export type PartialDate = `${number}` | YearMonth;

export interface Profile {
  network: string;
  url: string;
  username?: string;
}

/** A key result of a role, listed right after its highlights (same bullet style). */
export interface Achievement {
  text: string;
  /** Optional headline figure, e.g. { value: "+40%", label: "revenue" }. */
  metric?: { value: string; label: string };
}

export interface Experience {
  company: string;
  companyUrl?: string;
  /** Company logo, path under /public (e.g. "/logos/kyndryl.webp"). Initials are shown when missing. */
  companyLogo?: string;
  role: string;
  location?: string;
  employmentType?: string;
  start: YearMonth;
  /** undefined = "Present" */
  end?: YearMonth;
  summary?: string;
  /** Key results, rendered above the highlights with more visual weight (web and PDF). */
  achievements?: Achievement[];
  highlights: string[];
  tech?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  start?: PartialDate;
  end?: PartialDate;
  notes?: string;
  /** Institution logo, path under /public (e.g. "/logos/upc.webp"). */
  logo?: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  date?: PartialDate;
  /** false = keep it out of the "Certified by" logo strip (still listed in the section). Default true. */
  featured?: boolean;
  url?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Language {
  language: string;
  level: string;
}

export interface Project {
  name: string;
  description: string;
  url?: string;
  tech?: string[];
}

export interface Award {
  title: string;
  issuer?: string;
  date?: YearMonth;
  description?: string;
}

export interface Volunteering {
  organization: string;
  role: string;
  start?: YearMonth;
  end?: YearMonth;
  description?: string;
}

/** Teaching, mentoring, talks and similar work outside the main job. */
export interface Collaboration {
  organization: string;
  role: string;
  location?: string;
  start: PartialDate;
  /** undefined = "Present" */
  end?: PartialDate;
  description?: string;
  url?: string;
}

/** A talk, panel, article, interview or press mention. */
export interface PublicPresenceItem {
  title: string;
  type: "talk" | "panel" | "event" | "article" | "interview" | "press" | "podcast" | "other";
  /** Short event or outlet name shown as the card's tag ("MWC25", "Byte TI"). */
  event?: string;
  /** Full event / publication and place ("Fundación Mapfre, Madrid"). */
  venue?: string;
  date?: PartialDate;
  url?: string;
  description?: string;
  /** Card photo, path under /public (16:9, e.g. "/presence/mwc25.webp"). */
  image?: string;
}

export interface Resume {
  basics: {
    name: string;
    headline: string;
    /** One-line positioning statement, shown under the headline (hero and CV). */
    tagline?: string;
    summary: string;
    /** City, country only. */
    location: string;
    profiles: Profile[];
    /** Path under /public. Ask before publishing a photo. */
    photo?: string;
  };
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  skills: SkillGroup[];
  languages: Language[];
  collaborations?: Collaboration[];
  publicPresence?: PublicPresenceItem[];
  projects?: Project[];
  awards?: Award[];
  volunteering?: Volunteering[];
}

/** UI strings for one language (menus, section titles, buttons, month names...). */
export type Labels = {
  skipToContent: string;
  primaryNav: string;
  nav: {
    about: string;
    experience: string;
    education: string;
    skills: string;
    teaching: string;
    presence: string;
    contact: string;
  };
  cvLink: string;
  navGroups: {
    career: string;
  };
  logoStrip: string;
  careerPath: string;
  sections: {
    about: {
      eyebrow: string;
      title: string;
    };
    experience: {
      eyebrow: string;
      title: string;
      intro: string;
    };
    teaching: {
      eyebrow: string;
      title: string;
      intro: string;
    };
    skills: {
      eyebrow: string;
      title: string;
      intro: string;
    };
    education: {
      eyebrow: string;
      title: string;
      intro: string;
    };
    presence: {
      eyebrow: string;
      title: string;
      intro: string;
      empty: string;
    };
    contact: {
      eyebrow: string;
      title: string;
      intro: string;
    };
  };
  cvPage: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  skillsSection: {
    skills: string;
    certifications: string;
  };
  kpis: {
    yearsInIt: string;
    companies: string;
    roles: string;
    institutions: string;
    certifications: string;
    issuers: string;
    skillAreas: string;
    degrees: string;
    languages: string;
    items: string;
  };
  presenceTypes: {
    talk: string;
    panel: string;
    event: string;
    article: string;
    interview: string;
    press: string;
    podcast: string;
    other: string;
  };
  education: {
    degrees: string;
    languages: string;
    fieldJoiner: string;
  };
  cvHeadings: {
    profile: string;
    experience: string;
    teaching: string;
    education: string;
    certifications: string;
    skills: string;
    languages: string;
  };
  openMenu: string;
  closeMenu: string;
  toggleTheme: string;
  viewCv: string;
  contactMe: string;
  downloadPdf: string;
  lastUpdated: string;
  presenceLink: string;
  notFoundTitle: string;
  notFoundBody: string;
  backHome: string;
  language: {
    label: string;
    english: string;
    spanish: string;
  };
  otherIssuer: string;
  dates: {
    months: string[];
    present: string;
    yr: string;
    yrs: string;
    mo: string;
    mos: string;
  };
  meta: {
    description: string;
  };
};

/** Id of a home-page section (the keys of Labels["nav"]). */
export type SectionId = keyof Labels["nav"];

/** A text in both languages. */
export interface Translated<T> {
  en: T;
  es: T;
}

/**
 * The bilingual form of a type: every string (or list of strings) can be either a single
 * value shared by both languages, or an { en, es } pair.
 */
export type Localized<T> = T extends string
  ? T | Translated<T>
  : T extends readonly (infer U)[]
    ? Localized<U>[] | Translated<T>
    : T extends object
      ? { [K in keyof T]: Localized<T[K]> }
      : T;

/** Everything the site shows, in both languages: UI strings and CV content. */
export interface Content {
  ui: Localized<Labels>;
  cv: Localized<Resume>;
}
