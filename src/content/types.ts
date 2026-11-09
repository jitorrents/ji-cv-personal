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
}

export interface Certification {
  name: string;
  issuer?: string;
  date?: PartialDate;
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
  projects?: Project[];
  awards?: Award[];
  volunteering?: Volunteering[];
}
