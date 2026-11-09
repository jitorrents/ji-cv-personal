import type { Resume } from "./types";

// Single source of truth for all CV content.
// Source so far: resume.pdf (old CV). LinkedIn not merged yet; it wins any conflict.
// TODO(verify): merge LinkedIn profile.
export const resume: Resume = {
  basics: {
    // PDF full name: "Joan Ignasi Torrents Vilà".
    name: "Joan Ignasi Torrents",
    // TODO(verify): PDF sidebar says "Associate Partner for Application, Data & AI at Kyndryl";
    // the Kyndryl entry also lists "Head of Data – Applications, Data & AI at Kyndryl Consult".
    headline: "Associate Partner for Applications, Data & AI at Kyndryl",
    summary:
      "Computer science engineer with a Master in Project Management and a long career in IT. I started as a J2EE developer, analyst and architect at a large software company, then moved into project management, service management, consulting and team leadership. Today I lead the Data & AI value proposition at Kyndryl, owning customer engagement and consultative selling.",
    location: "Barcelona, Spain",
    email: { user: "ji.torrents", domain: "gmail.com" },
    profiles: [
      {
        network: "LinkedIn",
        url: "https://www.linkedin.com/in/jitorrents",
        username: "jitorrents",
      },
    ],
  },

  experience: [
    {
      company: "Kyndryl",
      companyUrl: "https://www.kyndryl.com",
      // TODO(verify): start date of this role (PDF only gives 02/2022 – Present for Kyndryl overall).
      role: "Head of Data – Applications, Data & AI, Kyndryl Consult",
      location: "Barcelona, Spain",
      start: "2022-02",
      highlights: ["Lead the Data domain: strategy, sales and delivery management."],
    },
    {
      company: "Kyndryl",
      companyUrl: "https://www.kyndryl.com",
      // TODO(verify): start and end dates of this role.
      role: "Associate Partner, Applications, Data & AI",
      location: "Barcelona, Spain",
      start: "2022-02",
      summary:
        "Associate Partner in the Advisory & Implementation Services department for Spain and Portugal, specialised in Data & AI.",
      highlights: [
        "Build the value proposition for the Data area.",
        "Lead customer engagement and consultative selling.",
      ],
    },
    {
      company: "Mediacloud",
      role: "Head of Data & Analytics",
      location: "Barcelona, Spain",
      start: "2018-12",
      end: "2022-02",
      summary: "Led the BI & Analytics department.",
      highlights: [
        "Managed the data engineering team.",
        "Ran project management and service management for key customers.",
        "Owned budgets and provider relationships.",
        "Owned the Jira ticketing system.",
      ],
      tech: ["Microsoft Azure", "Microsoft data platform", "Jira"],
    },
    {
      company: "Mediacloud",
      role: "Business Intelligence Manager",
      location: "Barcelona, Spain",
      start: "2017-04",
      end: "2018-12",
      highlights: [
        "Managed the BI & Analytics team.",
        "Ran service and project management for the Business Intelligence and Analytics projects of the area.",
      ],
    },
    {
      company: "SII Concatel",
      role: "Project Manager / Consultant",
      location: "Barcelona, Spain",
      start: "2015-03",
      end: "2017-04",
      summary: "Atlassian consultant for Jira and Confluence.",
      highlights: [
        "Managed and delivered product implementation and customisation projects for a wide range of customers.",
        "Focused on end-user satisfaction and on bringing teams into agile ways of working through Jira.",
      ],
      tech: ["Jira", "Confluence", "Agile"],
    },
    {
      company: "Indra",
      role: "J2EE Analyst",
      location: "Barcelona, Spain",
      start: "2014-04",
      end: "2015-03",
      // TODO(verify): the PDF has no description for this role.
      highlights: [],
      tech: ["J2EE"],
    },
    {
      company: "Indra",
      // PDF (Spanish): "Analista Programador J2EE".
      role: "J2EE Analyst Programmer",
      location: "Barcelona, Spain",
      start: "2007-01",
      end: "2013-05",
      highlights: [
        "Analyst and developer in a large project for the Government of the Canary Islands.",
      ],
      tech: ["J2EE"],
    },
  ],

  collaborations: [
    {
      organization: "La Salle Barcelona (Universitat Ramon Llull)",
      role: "Master Thesis Tutor",
      location: "Barcelona, Spain",
      start: "2020-03",
      description:
        "Part-time mentoring of final theses in the Master in Project Management, based on the PMP methodology.",
    },
    {
      organization: "La Salle Barcelona (Universitat Ramon Llull)",
      role: "Big Data Master Speaker",
      location: "Barcelona, Spain",
      start: "2020-12",
      description: "Classes in the Big Data Master on data management in cloud environments.",
    },
  ],

  skills: [
    {
      category: "Leadership & management",
      items: [
        "IT management",
        "Team leadership",
        "Project management (PMP / PMI)",
        "IT service management (ITIL)",
        "Agile (Scrum, Kanban)",
        "Budget and provider management",
      ],
    },
    {
      category: "Data & analytics",
      items: [
        "Business Intelligence",
        "Data analysis",
        "Power BI",
        "SQL Server",
        "Microsoft Azure",
      ],
    },
    {
      category: "Software engineering",
      items: ["Analysis and design", "Software development", "J2EE"],
    },
    {
      category: "Tools",
      items: [
        "Jira",
        "Confluence",
        "Atlassian administration",
        "Microsoft Project",
        "Microsoft Office",
      ],
    },
  ],

  education: [
    {
      institution: "Universitat Oberta de Catalunya (UOC)",
      degree: "Postgraduate degree",
      field: "Business Intelligence and Data Analysis",
      start: "2019",
      end: "2020",
    },
    {
      institution: "La Salle Business Engineering School, Universitat Ramon Llull (URL)",
      degree: "Master in Project Management",
      start: "2014",
      end: "2015",
    },
    {
      institution:
        "Facultat d'Informàtica de Barcelona (FIB), Universitat Politècnica de Catalunya",
      degree: "Computer Science Engineering",
      start: "2008",
      end: "2010",
    },
    {
      institution:
        "Facultat d'Informàtica de Barcelona (FIB), Universitat Politècnica de Catalunya",
      degree: "Computer Science Technical Engineering",
      start: "2003",
      // TODO(verify): the PDF says "2003 – 208"; assumed 2008.
      end: "2008",
    },
  ],

  // TODO(verify): the PDF gives no dates or credential links for any certification.
  certifications: [
    { name: "Microsoft Certified: Azure Data Engineer Associate (DP-203)", issuer: "Microsoft" },
    { name: "Microsoft Certified: Azure Data Fundamentals (DP-900)", issuer: "Microsoft" },
    { name: "Microsoft Certified: Data Analyst Associate (DA-100)", issuer: "Microsoft" },
    { name: "Microsoft Certified: Azure AI Fundamentals (AI-900)", issuer: "Microsoft" },
    { name: "Microsoft Certified: Azure Fundamentals (AZ-900)", issuer: "Microsoft" },
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
    { name: "Google Cloud Certified: Cloud Digital Leader", issuer: "Google Cloud" },
    { name: "CDP-0011 CDP Certified Generalist", issuer: "Cloudera" },
    { name: "Cloudera Technical Professional (CTP) Accreditation", issuer: "Cloudera" },
    { name: "Cloudera Connect Sales Accreditation", issuer: "Cloudera" },
    { name: "Fundamentals of Delta Lake Accreditation", issuer: "Databricks" },
    {
      name: "Fundamentals of Unified Data Analytics with Databricks Accreditation",
      issuer: "Databricks",
    },
    { name: "ACP-120 Atlassian Certified Jira Administrator for Cloud", issuer: "Atlassian" },
    { name: "ACP-620 Atlassian Certified in Managing Jira Cloud Projects", issuer: "Atlassian" },
    // TODO(verify): issuer not stated in the PDF.
    { name: "ITIL® Foundation Certificate in IT Service Management" },
    { name: "First Certificate in English (FCE)", issuer: "Cambridge" },
  ],

  languages: [
    { language: "Spanish", level: "Native or bilingual" },
    { language: "Catalan", level: "Native or bilingual" },
    { language: "English", level: "Full professional" },
    { language: "French", level: "Elementary" },
  ],
};
