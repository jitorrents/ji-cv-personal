/** Year and month, e.g. "2021-03". */
export type YearMonth = `${number}-${number}`;

/** Year only ("2015") or year and month ("2015-09"), for sources that give no month. */
export type PartialDate = `${number}` | YearMonth;

export interface Profile {
  network: string;
  url: string;
  username?: string;
}

export interface Experience {
  company: string;
  companyUrl?: string;
  /** Company logo, path under /public (e.g. "/logos/kyndryl.webp"). Initials are shown when missing. */
  companyLogo?: string;
  /** Wide, transparent wordmark (e.g. an SVG) shown after the headline for the current role. */
  companyWordmark?: string;
  role: string;
  location?: string;
  employmentType?: string;
  start: YearMonth;
  /** undefined = "Present" */
  end?: YearMonth;
  summary?: string;
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
  type: "talk" | "panel" | "article" | "interview" | "press" | "podcast" | "other";
  /** Event, publication or outlet. */
  venue?: string;
  date?: PartialDate;
  url?: string;
  description?: string;
}

export interface Resume {
  basics: {
    name: string;
    headline: string;
    summary: string;
    /** City, country only. */
    location: string;
    /** Rendered obfuscated on the client. */
    email?: { user: string; domain: string };
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
