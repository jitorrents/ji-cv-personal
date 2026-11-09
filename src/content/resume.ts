import type { Resume } from "./types";

// Single source of truth for all CV content.
// TODO(verify): placeholder data. Will be filled from resume.pdf and the LinkedIn profile.
export const resume: Resume = {
  basics: {
    name: "Joan Ignasi Torrents",
    headline: "TODO(verify): headline",
    summary: "TODO(verify): summary",
    location: "TODO(verify): City, Country",
    profiles: [
      {
        network: "LinkedIn",
        url: "https://www.linkedin.com/in/jitorrents",
        username: "jitorrents",
      },
    ],
  },
  experience: [],
  education: [],
  certifications: [],
  skills: [],
  languages: [],
};
