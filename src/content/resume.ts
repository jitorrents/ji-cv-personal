import type { Resume } from "./types";

// Single source of truth for all CV content.
// Sources: LinkedIn profile export (Nov 2026, Spanish) merged over the old resume.pdf.
// LinkedIn wins every conflict. The LinkedIn export only lists the top 3 skills and
// top 3 certifications, so the full lists still come from resume.pdf.
export const resume: Resume = {
  basics: {
    // Full name on both sources: "Joan Ignasi Torrents Vilà".
    name: "Joan Ignasi Torrents",
    headline: "Head of Data – Applications, Data & AI at Kyndryl Consult",
    summary:
      "Computer science engineer with a Master in Project Management and a long career in IT and consulting. I started in software development as a programmer, analyst and architect, then moved into project and service management, business development and team leadership. Today I am Head of Data in Kyndryl's Applications, Data & AI area, where I combine management, commercial and technical skills to grow the business, backed by deep knowledge of data from a strategic, governance and technology perspective.",
    location: "Barcelona, Spain",
    // Published with the user's consent (Nov 2026). Source: "Foto personal1.jpg", resized, no metadata.
    photo: "/photo.webp",
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
      companyLogo: "/logos/kyndryl.webp",
      companyWordmark: "/logos/kyndryl.svg",
      role: "Head of Data – Applications, Data & AI, Kyndryl Consult",
      location: "Barcelona, Spain",
      start: "2025-01",
      summary:
        "Lead the Data business in the Applications, Data & AI area, working closely with internal sales and technical teams.",
      highlights: [
        "Define the growth strategy, portfolio, objectives and roadmap of Data services, around a clear and differentiated value proposition.",
        "Lead customer and partner engagement, building trust-based relationships and consultative selling of data solutions.",
        "Generate business opportunities: identify needs and design innovative solutions and high-impact proposals.",
        "Work with the sales team to detect and qualify opportunities.",
        "Manage strategic relationships with key customers, providers and partners.",
      ],
      tech: [
        "Google Cloud",
        "Azure",
        "Databricks",
        "BigQuery",
        "Data governance",
        "Data management",
      ],
    },
    {
      company: "Kyndryl",
      companyUrl: "https://www.kyndryl.com",
      companyLogo: "/logos/kyndryl.webp",
      companyWordmark: "/logos/kyndryl.svg",
      role: "Customer Technology Advisor for Data & AI, Kyndryl Consult",
      location: "Barcelona, Spain",
      start: "2022-02",
      end: "2025-01",
      // TODO(verify): LinkedIn has no description for this role. The text below comes from the
      // old CV, where the role was called "Associate Partner for Application, Data & AI".
      summary:
        "Advisory & Implementation Services for Spain and Portugal, specialised in Data & AI.",
      highlights: [
        "Built the value proposition for the Data area.",
        "Led customer engagement and consultative selling.",
      ],
    },
    {
      company: "Mediacloud",
      companyLogo: "/logos/mediacloud.webp",
      role: "Head of Data & Analytics",
      location: "Barcelona, Spain",
      start: "2018-12",
      end: "2022-02",
      summary: "Led the BI & Analytics department.",
      highlights: [
        "Managed and led the data engineering team.",
        "Ran project management for the department's projects and service management for its main customers.",
        "Handled department management: budget, operations and providers.",
        "Owned the company's Jira ticketing system.",
      ],
      tech: ["Microsoft Azure", "Microsoft data platform", "Jira"],
    },
    {
      company: "Mediacloud",
      companyLogo: "/logos/mediacloud.webp",
      role: "Business Intelligence Manager",
      location: "Barcelona, Spain",
      start: "2017-04",
      end: "2018-12",
      summary: "Led the BI & Analytics area.",
      highlights: [
        "Managed the team, and ran service and project management for the department's customers and projects.",
      ],
    },
    {
      company: "SII Concatel",
      companyLogo: "/logos/sii-concatel.webp",
      role: "Project Manager / Atlassian Consultant",
      location: "Barcelona, Spain",
      start: "2015-03",
      end: "2017-04",
      highlights: [
        "Managed and delivered Atlassian suite implementation projects for several customers, as project manager and consultant.",
        "Planned, controlled and tracked projects alongside specialist Atlassian consulting.",
        "Advised customers on adopting Agile methods (Scrum, Kanban) with Jira.",
      ],
      tech: ["Jira", "Confluence", "Scrum", "Kanban"],
    },
    {
      company: "Indra",
      companyLogo: "/logos/indra.webp",
      role: "J2EE Analyst",
      location: "Barcelona, Spain",
      start: "2014-04",
      end: "2015-03",
      highlights: [
        "Team member on the enforced tax-collection project for the Government of the Canary Islands.",
        "J2EE analysis and architecture.",
      ],
      tech: ["J2EE"],
    },
    {
      company: "GFT",
      companyLogo: "/logos/gft.webp",
      role: "J2EE Analyst Programmer",
      start: "2013-06",
      end: "2014-04",
      employmentType: "Full-time, in English",
      highlights: [
        "Member of the J2EE development team on a project for an international investment bank.",
        "Technical analysis, architecture, design and software development.",
      ],
      tech: ["J2EE"],
    },
    {
      company: "Indra",
      companyLogo: "/logos/indra.webp",
      role: "J2EE Analyst Programmer",
      location: "Barcelona, Spain",
      // LinkedIn gives only the year (2007); the month comes from the old CV.
      start: "2007-01",
      end: "2013-05",
      summary: "Tax-management projects for public administrations.",
      highlights: [
        "IKUS (tax inspection system) for Gipuzkoa, as analyst programmer: business analysis, software design and development, documentation and task organisation.",
        "M@gin (automated tax-management model) for the Government of the Canary Islands, as analyst programmer: analysis, development and documentation.",
        "G@udi (automated tax management) for the Government of Catalonia, as programmer: software development and technical documentation.",
      ],
      tech: ["J2EE"],
    },
    {
      company: "ACS Informáticos S.L.",
      role: "Hardware Technician and Programmer",
      start: "2005-06",
      end: "2007-12",
      highlights: ["Hardware repair, equipment and network installation, and PHP programming."],
      tech: ["PHP"],
    },
  ],

  collaborations: [
    {
      organization: "La Salle Barcelona (Universitat Ramon Llull)",
      role: "Master Thesis Tutor",
      location: "Barcelona, Spain",
      start: "2020-03",
      end: "2022-12",
      description:
        "Mentored and tutored final projects of the Master in Project Management, based on the PMP framework.",
    },
    {
      organization: "La Salle Barcelona (Universitat Ramon Llull)",
      role: "Big Data Master Speaker",
      location: "Barcelona, Spain",
      // TODO(verify): only in the old CV (12/2020 – Present); not on LinkedIn. Still active?
      start: "2020-12",
      description: "Classes in the Big Data Master on data management in cloud environments.",
    },
    {
      organization: "Orvi Formació",
      role: "Teacher",
      start: "2006",
      end: "2007",
      description:
        "Designed and taught “Programador d'aplicacions orientades a objectes”, a beginner Java programming course for the Catalan Public Employment Service (SOC).",
    },
  ],

  // Talks, panels, articles and press. Empty for now: the section shows a "coming soon" note.
  publicPresence: [],

  skills: [
    {
      category: "Data & AI",
      items: [
        "Data strategy",
        "Data management",
        "Data governance",
        "Business Intelligence",
        "Data analysis",
        "Databricks",
        "BigQuery",
        "Power BI",
        "SQL Server",
      ],
    },
    {
      category: "Business & leadership",
      items: [
        "Consultative selling",
        "Business development",
        "Customer and partner engagement",
        "Team leadership",
        "Teamwork",
        "IT management",
        "Budget and provider management",
      ],
    },
    {
      category: "Delivery",
      items: [
        "Project management (PMP / PMI)",
        "IT service management (ITIL)",
        "Agile (Scrum, Kanban)",
      ],
    },
    {
      category: "Cloud",
      items: ["Google Cloud", "Microsoft Azure"],
    },
    {
      category: "Software engineering",
      items: ["Analysis and design", "Software development", "J2EE", "PHP"],
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
      logo: "/logos/uoc.webp",
      start: "2019",
      end: "2020",
    },
    {
      institution: "La Salle Barcelona, Universitat Ramon Llull (URL)",
      degree: "Master in Project Management (MPM)",
      logo: "/logos/lasalle.webp",
      start: "2014",
      end: "2015",
    },
    {
      institution:
        "Facultat d'Informàtica de Barcelona (FIB), Universitat Politècnica de Catalunya",
      degree: "Computer Science Engineering",
      logo: "/logos/upc.webp",
      start: "2008",
      end: "2010",
    },
    {
      institution:
        "Facultat d'Informàtica de Barcelona (FIB), Universitat Politècnica de Catalunya",
      // TODO(verify): English name for "Ingeniería Técnica en Informática de Gestión".
      degree: "Technical Engineering in Business Information Systems",
      logo: "/logos/upc.webp",
      start: "2003",
      end: "2008",
    },
  ],

  // TODO(verify): neither source gives dates or credential links for the certifications.
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
    // TODO(verify): issuer not stated in either source.
    { name: "ITIL® Foundation Certificate in IT Service Management" },
    { name: "First Certificate in English (FCE)", issuer: "Cambridge", featured: false },
  ],

  languages: [
    { language: "Spanish", level: "Native or bilingual" },
    { language: "Catalan", level: "Native or bilingual" },
    { language: "English", level: "Full professional" },
    { language: "French", level: "Elementary" },
  ],
};
