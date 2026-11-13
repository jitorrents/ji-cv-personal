import type { Content } from "./types";

/*
 * ALL THE TEXT OF THE SITE, IN ONE FILE / TODOS LOS TEXTOS DE LA WEB, EN UN SOLO FICHERO
 *
 * How to edit / Cómo editar:
 * - A text that differs per language is a pair:   title: { en: "About", es: "Sobre mí" }
 *   Un texto que cambia según el idioma es un par: title: { en: "About", es: "Sobre mí" }
 * - A text shared by both languages is a single value (names, dates, URLs, logos):
 *   company: "Kyndryl"  ·  start: "2025-01"  ·  companyLogo: "/logos/kyndryl.webp"
 * - Lists (highlights, skills...) can be a list of pairs, or a pair of lists:
 *   highlights: [{ en: "...", es: "..." }, ...]  or  { en: ["...", "..."], es: ["...", "..."] }
 * - Dates: "YYYY-MM", or "YYYY" if the month is unknown. Experience goes newest first.
 * - Experience achievements (optional, listed as bullets right after the highlights, same style):
 *   achievements: [{ text: { en: "...", es: "..." }, metric: { value: "+40%", label: { en: "revenue", es: "ingresos" } } }]
 *   `metric` is optional; when set it is written before the text ("+40% revenue · ...").
 * - To add a language later, add it to locales in locale.ts and an entry next to en/es.
 *
 * `ui` = interface (menus, section titles, buttons, month names).
 * `cv` = CV content (profile, experience, education, skills, certifications...).
 * The type checker (pnpm typecheck) flags any typo in the structure.
 *
 * Sources: LinkedIn profile export (Nov 2026, Spanish) merged over the old resume.pdf;
 * LinkedIn wins every conflict. The LinkedIn export only lists the top 3 skills and
 * certifications, so the full lists come from resume.pdf. Spanish wording follows the
 * LinkedIn export wherever it has the same content.
 */
export const content: Content = {
  ui: {
    skipToContent: {
      en: "Skip to content",
      es: "Saltar al contenido",
    },
    primaryNav: {
      en: "Primary",
      es: "Principal",
    },
    nav: {
      about: {
        en: "About",
        es: "Sobre mí",
      },
      experience: {
        en: "Experience",
        es: "Experiencia",
      },
      education: {
        en: "Education",
        es: "Formación",
      },
      skills: {
        en: "Skills & Certifications",
        es: "Aptitudes y Certificaciones",
      },
      teaching: {
        en: "Teaching",
        es: "Docencia",
      },
      presence: {
        en: "Public presence",
        es: "Presencia pública",
      },
      contact: {
        en: "Contact",
        es: "Contacto",
      },
    },
    cvLink: "CV",
    navGroups: {
      career: {
        en: "Career",
        es: "Trayectoria",
      },
    },
    logoStrip: {
      en: "Certified by",
      es: "Certificado por",
    },
    careerPath: {
      en: "Career path",
      es: "Trayectoria",
    },
    sections: {
      about: {
        eyebrow: {
          en: "Who I am",
          es: "Quién soy",
        },
        title: {
          en: "About",
          es: "Sobre mí",
        },
      },
      experience: {
        eyebrow: {
          en: "Career",
          es: "Carrera",
        },
        title: {
          en: "Experience",
          es: "Experiencia",
        },
        intro: {
          en: "Over more than 20 years in IT I have gone from writing J2EE code for public administrations to leading the Data business at Kyndryl, with stops in Atlassian consulting, Business Intelligence management and service delivery along the way.",
          es: "En más de 20 años en IT he pasado de programar en J2EE para la administración pública a liderar el negocio de Data en Kyndryl, pasando por la consultoría Atlassian, la dirección de Business Intelligence y la gestión de servicios.",
        },
      },
      teaching: {
        eyebrow: {
          en: "Sharing knowledge",
          es: "Compartir conocimiento",
        },
        title: {
          en: "Teaching & mentoring",
          es: "Docencia y mentoría",
        },
        intro: {
          en: "I enjoy sharing what I have learned: from teaching Java to beginners early in my career to mentoring Master in Project Management theses and teaching data management in the cloud at La Salle.",
          es: "Me gusta compartir lo que he aprendido: desde enseñar Java a principiantes al inicio de mi carrera hasta tutorizar trabajos de fin de Máster en Project Management y dar clases de gestión de datos en la nube en La Salle.",
        },
      },
      skills: {
        eyebrow: {
          en: "What I do",
          es: "Qué hago",
        },
        title: {
          en: "Skills & Certifications",
          es: "Aptitudes y Certificaciones",
        },
        intro: {
          en: "My work sits where data strategy, delivery and business meet. These are the skills I use every day, backed by certifications from Microsoft, AWS, Google Cloud, Cloudera, Databricks and Atlassian.",
          es: "Mi trabajo está donde se encuentran la estrategia de datos, la ejecución y el negocio. Estas son las aptitudes que uso a diario, respaldadas por certificaciones de Microsoft, AWS, Google Cloud, Cloudera, Databricks y Atlassian.",
        },
      },
      education: {
        eyebrow: {
          en: "Learning",
          es: "Aprendizaje",
        },
        title: {
          en: "Education & languages",
          es: "Formación e idiomas",
        },
        intro: {
          en: "An engineering foundation from the Universitat Politècnica de Catalunya, a Master in Project Management from La Salle and a postgraduate degree in Business Intelligence from the UOC, plus four languages.",
          es: "Una base de ingeniería en la Universitat Politècnica de Catalunya, un Máster en Project Management por La Salle y un posgrado en Business Intelligence por la UOC, además de cuatro idiomas.",
        },
      },
      presence: {
        eyebrow: {
          en: "Out there",
          es: "En público",
        },
        title: {
          en: "Public presence",
          es: "Presencia pública",
        },
        intro: {
          en: "Beyond my day-to-day role as Head of Data at Kyndryl, I take part in the industry conversation around data spaces, AI and data platforms: at events such as MWC and Smart City Expo World Congress, in panel discussions and in the trade press. Here is a selection of the talks, articles and conversations I have been part of.",
          es: "Más allá de mi día a día como Head of Data en Kyndryl, participo en la conversación del sector sobre espacios de datos, IA y plataformas de datos: en eventos como el MWC o el Smart City Expo World Congress, en mesas redondas y en la prensa especializada. Esta es una selección de las charlas, artículos y conversaciones en las que he participado.",
        },
        empty: {
          en: "Coming soon.",
          es: "Próximamente.",
        },
      },
      contact: {
        eyebrow: {
          en: "Let's talk",
          es: "Hablemos",
        },
        title: {
          en: "Get in touch",
          es: "Contacto",
        },
        intro: {
          en: "Whether it is a data project, a talk or simply a conversation, LinkedIn is the best way to reach me.",
          es: "Ya sea para un proyecto de datos, una charla o simplemente una conversación, la mejor forma de contactar conmigo es a través de LinkedIn.",
        },
      },
    },
    cvPage: {
      eyebrow: {
        en: "Résumé",
        es: "Currículum",
      },
      title: "Curriculum vitae",
      intro: {
        en: "The full CV laid out for A4. Use Download PDF to save or print it.",
        es: "El CV completo en formato A4. Usa Descargar PDF para guardarlo o imprimirlo.",
      },
    },
    skillsSection: {
      skills: {
        en: "Skills",
        es: "Aptitudes",
      },
      certifications: {
        en: "Certifications",
        es: "Certificaciones",
      },
    },
    kpis: {
      yearsInIt: {
        en: "years in IT",
        es: "años en IT",
      },
      companies: {
        en: "companies",
        es: "empresas",
      },
      roles: "roles",
      institutions: {
        en: "institutions",
        es: "instituciones",
      },
      certifications: {
        en: "certifications",
        es: "certificaciones",
      },
      issuers: {
        en: "issuers",
        es: "emisores",
      },
      skillAreas: {
        en: "skill areas",
        es: "áreas",
      },
      degrees: {
        en: "degrees",
        es: "titulaciones",
      },
      languages: {
        en: "languages",
        es: "idiomas",
      },
      items: {
        en: "appearances",
        es: "apariciones",
      },
    },
    presenceTypes: {
      talk: {
        en: "Talk",
        es: "Charla",
      },
      event: {
        en: "Event",
        es: "Evento",
      },
      panel: {
        en: "Panel",
        es: "Mesa redonda",
      },
      article: {
        en: "Article",
        es: "Artículo",
      },
      interview: {
        en: "Interview",
        es: "Entrevista",
      },
      press: {
        en: "Press",
        es: "Prensa",
      },
      podcast: "Podcast",
      other: {
        en: "Other",
        es: "Otro",
      },
    },
    education: {
      degrees: {
        en: "Degrees",
        es: "Titulaciones",
      },
      languages: {
        en: "Languages",
        es: "Idiomas",
      },
      // Joins degree and field: "Postgraduate degree in Business Intelligence".
      fieldJoiner: {
        en: " in ",
        es: " en ",
      },
    },
    cvHeadings: {
      profile: {
        en: "Profile",
        es: "Perfil",
      },
      experience: {
        en: "Experience",
        es: "Experiencia",
      },
      teaching: {
        en: "Teaching",
        es: "Docencia",
      },
      education: {
        en: "Education",
        es: "Formación",
      },
      certifications: {
        en: "Certifications",
        es: "Certificaciones",
      },
      skills: {
        en: "Skills",
        es: "Aptitudes",
      },
      languages: {
        en: "Languages",
        es: "Idiomas",
      },
    },
    openMenu: {
      en: "Open menu",
      es: "Abrir menú",
    },
    closeMenu: {
      en: "Close menu",
      es: "Cerrar menú",
    },
    toggleTheme: {
      en: "Toggle dark mode",
      es: "Cambiar modo oscuro",
    },
    viewCv: {
      en: "View CV",
      es: "Ver CV",
    },
    contactMe: {
      en: "Contact",
      es: "Contacto",
    },
    downloadPdf: {
      en: "Download PDF",
      es: "Descargar PDF",
    },
    presenceLink: {
      en: "View",
      es: "Ver",
    },
    lastUpdated: {
      en: "Last updated",
      es: "Última actualización",
    },
    notFoundTitle: {
      en: "Page not found",
      es: "Página no encontrada",
    },
    notFoundBody: {
      en: "The page you are looking for does not exist.",
      es: "La página que buscas no existe.",
    },
    backHome: {
      en: "Back to home",
      es: "Volver al inicio",
    },
    // Language switch: label of the control, and the name of each language (in its own language).
    language: {
      label: {
        en: "Language",
        es: "Idioma",
      },
      english: "English",
      spanish: "Español",
    },
    otherIssuer: {
      en: "Other",
      es: "Otros",
    },
    dates: {
      months: [
        {
          en: "Jan",
          es: "ene",
        },
        {
          en: "Feb",
          es: "feb",
        },
        {
          en: "Mar",
          es: "mar",
        },
        {
          en: "Apr",
          es: "abr",
        },
        {
          en: "May",
          es: "may",
        },
        {
          en: "Jun",
          es: "jun",
        },
        {
          en: "Jul",
          es: "jul",
        },
        {
          en: "Aug",
          es: "ago",
        },
        {
          en: "Sep",
          es: "sept",
        },
        {
          en: "Oct",
          es: "oct",
        },
        {
          en: "Nov",
          es: "nov",
        },
        {
          en: "Dec",
          es: "dic",
        },
      ],
      present: {
        en: "Present",
        es: "actualidad",
      },
      yr: {
        en: "yr",
        es: "año",
      },
      yrs: {
        en: "yrs",
        es: "años",
      },
      mo: {
        en: "mo",
        es: "mes",
      },
      mos: {
        en: "mos",
        es: "meses",
      },
    },
    meta: {
      description: {
        en: "CV and portfolio of Joan Ignasi Torrents: Data & AI leadership, consulting and project management.",
        es: "CV y portfolio de Joan Ignasi Torrents: liderazgo en Data & AI, consultoría y dirección de proyectos.",
      },
    },
  },
  cv: {
    basics: {
      // Full name on both sources: "Joan Ignasi Torrents Vilà".
      name: "Joan Ignasi Torrents",
      headline: {
        en: "Head of Data – Applications, Data & AI at Kyndryl Consult",
        es: "Head of Data – Applications, Data & AI en Kyndryl Consult",
      },
      tagline: {
        en: "Bridging business and technology to turn data into value with AI.",
        es: "Conecto negocio y tecnología para que los datos generen valor con IA.",
      },
      summary: {
        en: "I lead the Data business in Kyndryl's Applications, Data & AI area: I shape our value proposition and take it to market with our technology alliances, help clients modernise their data platforms and lead the teams that make it happen. I came up through engineering — I started out designing and writing software, then moved into project and service management, business development and team leadership. That grounding lets me speak the same language with a C-level executive and with an architect. I believe in empowered teams and in developing people, and I keep an active market presence as a speaker at industry forums and events.",
        es: "Lidero el negocio de Datos en el área de Aplicaciones, Datos e IA de Kyndryl: defino nuestra propuesta de valor y la llevo al mercado junto a nuestras alianzas tecnológicas, acompaño a los clientes en la modernización de sus plataformas de datos y dirijo los equipos que lo hacen posible. Llegué aquí desde la ingeniería: empecé diseñando y programando software y fui pasando a la gestión de proyectos y servicios, el desarrollo de negocio y la dirección de equipos. Esa base me permite hablar el mismo idioma con un C-level y con un arquitecto. Creo en los equipos con autonomía y en el desarrollo de las personas, y mantengo una presencia activa en el mercado como ponente en foros y eventos del sector.",
      },
      location: {
        en: "Barcelona, Spain",
        es: "Barcelona, España",
      },
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
        sectors: [
          {
            en: "Banking",
            es: "Banca",
          },
          {
            en: "Insurance",
            es: "Seguros",
          },
          {
            en: "Public sector",
            es: "Sector público",
          },
        ],
        role: "Head of Data – Applications, Data & AI, Kyndryl Consult",
        location: {
          en: "Barcelona, Spain",
          es: "Barcelona, España",
        },
        start: "2025-01",
        summary: {
          en: "Lead the Data business in the Applications, Data & AI area, working closely with sales and technical teams.",
          es: "Lidero el negocio de Datos del área de Aplicaciones, Datos e IA, en estrecha colaboración con los equipos de ventas y técnicos.",
        },
        achievements: [
          {
            text: {
              en: "Led the winning proposals for two leading Spanish banks to modernise their data platforms.",
              es: "Lideré las propuestas ganadoras de dos de las principales entidades bancarias españolas para modernizar sus plataformas de datos.",
            },
            url: "https://www.bankinter.com/blog/noticias-bankinter/bankinter-google-cloud-summit-madrid",
          },
          {
            text: {
              en: "Grew our market presence in Data alongside Google Cloud, jointly signing some of Google's most relevant Data projects.",
              es: "Impulsé nuestra presencia de mercado en Datos junto a Google Cloud, firmando conjuntamente algunos de sus proyectos de Datos más relevantes.",
            },
          },
        ],
        // Shown only on localhost (`next dev`), never on the published site or in the CV.
        todo: ["PENDIENTE — logro de crecimiento de negocio (signings ×N / +X% y año fiscal)."],
        highlights: [
          {
            en: "Strategy and offering: define the growth strategy, portfolio and roadmap of Data services, around a differentiated value proposition.",
            es: "Estrategia y oferta: defino la estrategia de crecimiento, el portfolio y el roadmap de los servicios de Data, con una propuesta de valor diferenciada.",
          },
          {
            en: "Clients and partners: build trusted relationships with clients, partners and providers, leading the consultative selling of Data solutions.",
            es: "Clientes y partners: construyo relaciones de confianza con clientes, partners y proveedores, liderando la venta consultiva de soluciones de Datos.",
          },
          {
            en: "Business development: identify and qualify opportunities with sales, design the solutions and lead the proposals, backed by our technology alliances.",
            es: "Desarrollo de negocio: identifico y cualifico oportunidades junto a ventas, diseño las soluciones y lidero las propuestas, apoyándome en nuestras alianzas tecnológicas.",
          },
          {
            en: "Team leadership: lead Data delivery across the Database and Data Analytics teams — 30+ professionals spanning DBAs, data engineers, analysts and architects.",
            es: "Dirección de equipos: dirijo el delivery de Datos con los equipos de Bases de Datos y Data Analytics, más de 30 profesionales entre DBAs, data engineers, analistas y arquitectos.",
          },
        ],
      },
      {
        company: "Kyndryl",
        companyUrl: "https://www.kyndryl.com",
        companyLogo: "/logos/kyndryl.webp",
        // TODO(verify): LinkedIn has no description for this role. Its summary and highlights come from
        // the old CV, where the role was called "Associate Partner for Application, Data & AI".
        role: "Customer Technology Advisor for Data & AI, Kyndryl Consult",
        location: {
          en: "Barcelona, Spain",
          es: "Barcelona, España",
        },
        start: "2022-02",
        end: "2025-01",
        summary: {
          en: "Advisory & Implementation Services for Spain and Portugal, specialised in Data & AI.",
          es: "Servicios de Advisory & Implementation para España y Portugal, con especialización en Data & AI.",
        },
        achievements: [
          {
            text: {
              en: "Built Next Data Foundations, our Data portfolio across five pillars: strategy, platform & architecture, democratisation, operations & observability, and governance.",
              es: "Construí Next Data Foundations, nuestro portfolio de Datos en cinco pilares: estrategia, plataforma y arquitectura, democratización, operaciones y observabilidad, y gobierno.",
            },
            url: "https://lnkd.in/p/eKXefH_9",
          },
        ],
        highlights: [
          {
            en: "Business with clients and partners: led consultative selling and the design of Data solutions and proposals for clients in Spain and Portugal.",
            es: "Negocio con clientes y partners: lideré la venta consultiva y el diseño de soluciones y propuestas de Datos para clientes de España y Portugal.",
          },
        ],
      },
      {
        company: "Mediacloud",
        companyLogo: "/logos/mediacloud.webp",
        sectors: [
          {
            en: "Media & broadcasting",
            es: "Audiovisual",
          },
          {
            en: "Healthcare",
            es: "Sanidad",
          },
        ],
        role: "Head of Data & Analytics",
        location: {
          en: "Barcelona, Spain",
          es: "Barcelona, España",
        },
        start: "2018-12",
        end: "2022-02",
        summary: {
          en: "Led the BI & Analytics department.",
          es: "Responsable del departamento de BI & Analytics.",
        },
        highlights: [
          {
            en: "Managed and led the data engineering team.",
            es: "Gestión y liderazgo del equipo de data engineers.",
          },
          {
            en: "Ran project management for the department's projects and service management for its main customers.",
            es: "Project management de los proyectos del departamento y service management de los principales clientes.",
          },
          {
            en: "Handled department management: budget, operations and providers.",
            es: "Gestión del departamento: presupuesto, operaciones y proveedores.",
          },
          {
            en: "Owned the company's Jira ticketing system.",
            es: "Responsable del sistema de ticketing de la compañía (Jira).",
          },
        ],
      },
      {
        company: "Mediacloud",
        companyLogo: "/logos/mediacloud.webp",
        role: "Business Intelligence Manager",
        location: {
          en: "Barcelona, Spain",
          es: "Barcelona, España",
        },
        start: "2017-04",
        end: "2018-12",
        summary: {
          en: "Led the BI & Analytics area.",
          es: "Responsable del área de BI & Analytics.",
        },
        highlights: [
          {
            en: "Managed the team, and ran service and project management for the department's customers and projects.",
            es: "Gestión del equipo, service management y project management de los clientes y proyectos del departamento.",
          },
        ],
      },
      {
        company: "SII Concatel",
        companyLogo: "/logos/sii-concatel.webp",
        sectors: [
          {
            en: "Airlines",
            es: "Aerolíneas",
          },
        ],
        role: {
          en: "Project Manager / Atlassian Consultant",
          es: "Project Manager / Consultor Atlassian",
        },
        location: {
          en: "Barcelona, Spain",
          es: "Barcelona, España",
        },
        start: "2015-03",
        end: "2017-04",
        highlights: [
          {
            en: "Managed and delivered Atlassian suite implementation projects for several customers, as project manager and consultant.",
            es: "Gestión y ejecución de proyectos de implantación de la suite Atlassian en varios clientes, como project manager y consultor.",
          },
          {
            en: "Planned, controlled and tracked projects alongside specialist Atlassian consulting.",
            es: "Planificación, control y seguimiento de proyectos, junto con la consultoría especializada en Atlassian.",
          },
          {
            en: "Advised customers on adopting Agile methods (Scrum, Kanban) with Jira.",
            es: "Asesoramiento en la implantación de metodologías Agile (Scrum, Kanban) con Jira.",
          },
        ],
      },
      {
        company: "Indra",
        companyLogo: "/logos/indra.webp",
        sectors: [
          {
            en: "Public sector",
            es: "Sector público",
          },
        ],
        role: {
          en: "J2EE Architect",
          es: "Arquitecto J2EE",
        },
        location: {
          en: "Barcelona, Spain",
          es: "Barcelona, España",
        },
        start: "2014-04",
        end: "2015-03",
        highlights: [
          {
            en: "Team member on the enforced tax-collection project for the Government of the Canary Islands.",
            es: "Miembro del equipo del proyecto de recaudación de impuestos en ejecutiva para el Gobierno de Canarias.",
          },
          {
            en: "J2EE analysis and architecture.",
            es: "Análisis y arquitectura J2EE.",
          },
        ],
      },
      {
        company: "GFT",
        companyLogo: "/logos/gft.webp",
        sectors: [
          {
            en: "Banking",
            es: "Banca",
          },
        ],
        role: {
          en: "J2EE Analyst Programmer",
          es: "Analista-Programador J2EE",
        },
        start: "2013-06",
        end: "2014-04",
        employmentType: {
          en: "Full-time, in English",
          es: "Jornada completa, en inglés",
        },
        highlights: [
          {
            en: "Member of the J2EE development team on a project for an international investment bank.",
            es: "Miembro del equipo de desarrollo J2EE en un proyecto para una entidad internacional de banca de inversión.",
          },
          {
            en: "Technical analysis, architecture, design and software development.",
            es: "Análisis técnico, arquitectura, diseño y desarrollo de software.",
          },
        ],
      },
      {
        company: "Indra",
        companyLogo: "/logos/indra.webp",
        sectors: [
          {
            en: "Public sector",
            es: "Sector público",
          },
        ],
        role: {
          en: "J2EE Analyst Programmer",
          es: "Analista-Programador J2EE",
        },
        location: {
          en: "Barcelona, Spain",
          es: "Barcelona, España",
        },
        // LinkedIn gives only the year (2007); the month comes from the old CV.
        start: "2007-01",
        end: "2013-05",
        summary: {
          en: "Tax-management projects for public administrations.",
          es: "Proyectos tributarios para la administración pública.",
        },
        highlights: [
          {
            en: "IKUS (tax inspection system) for Gipuzkoa, as analyst programmer: business analysis, software design and development, documentation and task organisation.",
            es: "IKUS (sistema de inspección tributaria) para Gipuzkoa, como analista-programador: análisis de negocio, diseño y desarrollo de software, documentación y organización de tareas.",
          },
          {
            en: "M@gin (automated tax-management model) for the Government of the Canary Islands, as analyst programmer: analysis, development and documentation.",
            es: "M@gin (modelo automatizado de gestión de impuestos) para el Gobierno de Canarias, como analista-programador: análisis, desarrollo y documentación.",
          },
          {
            en: "G@udi (automated tax management) for the Government of Catalonia, as programmer: software development and technical documentation.",
            es: "G@udi (gestió automatitzada d'impostos) para la Generalitat de Catalunya, como programador: desarrollo de software y documentación técnica.",
          },
        ],
      },
      {
        company: "ACS Informáticos S.L.",
        role: {
          en: "Hardware Technician and Programmer",
          es: "Técnico de hardware y programador",
        },
        start: "2005-06",
        end: "2007-12",
        highlights: [
          {
            en: "Hardware repair, equipment and network installation, and PHP programming.",
            es: "Reparación de hardware, instalación de equipos y redes, y programación PHP.",
          },
        ],
      },
    ],
    collaborations: [
      {
        organization: "La Salle Barcelona (Universitat Ramon Llull)",
        role: {
          en: "Master Thesis Tutor",
          es: "Tutor de TFM",
        },
        location: {
          en: "Barcelona, Spain",
          es: "Barcelona, España",
        },
        start: "2020-03",
        end: "2022-12",
        description: {
          en: "Mentored and tutored final projects of the Master in Project Management, based on the PMP framework.",
          es: "Mentoría y tutorización de proyectos finales del Máster en Project Management, basados en el marco del PMP.",
        },
      },
      {
        organization: "La Salle Barcelona (Universitat Ramon Llull)",
        role: {
          en: "Big Data Master Speaker",
          es: "Ponente en el Máster en Big Data",
        },
        location: {
          en: "Barcelona, Spain",
          es: "Barcelona, España",
        },
        // TODO(verify): only in the old CV (12/2020 – Present); not on LinkedIn. Still active?
        start: "2020-12",
        description: {
          en: "Classes in the Big Data Master on data management in cloud environments.",
          es: "Clases en el Máster en Big Data sobre gestión de datos en entornos cloud.",
        },
      },
      {
        organization: "Orvi Formació",
        role: {
          en: "Teacher",
          es: "Profesor",
        },
        start: "2006",
        end: "2007",
        description: {
          en: "Designed and taught “Programador d'aplicacions orientades a objectes”, a beginner Java programming course for the Catalan Public Employment Service (SOC).",
          es: "Diseño e impartición del curso “Programador d'aplicacions orientades a objectes” del Servei d'Ocupació de Catalunya (SOC), un curso de programación Java para principiantes.",
        },
      },
    ],
    // Talks, panels, events and press, newest first. Photos (16:9) go in public/presence/.
    // Item: { type: "talk" | "panel" | "event" | "press" | "article" | "interview" | "podcast" | "other", event (tag), title, venue, date: "YYYY-MM", description?, url?, image? }
    publicPresence: [
      {
        type: "panel",
        event: "Fundación IMAGING",
        title: {
          en: "The Health Data Space: challenges and opportunities",
          es: "El Espacio de Datos de Salud: retos y oportunidades",
        },
        venue: "Fundación Mapfre, Madrid",
        date: "2026-03",
        description: {
          en: "Panelist in the round table on technological challenges and security.",
          es: "Ponente en la mesa «Retos tecnológicos y seguridad».",
        },
        url: "https://www.linkedin.com/posts/jitorrents_es-un-verdadero-placer-poder-participar-share-7439616460634677248-zMXV",
        image: "/presence/imaging26.webp",
      },
      {
        type: "press",
        event: "Byte TI",
        title: {
          en: "From Big Data to Smart Data (cover story)",
          es: "Del Big Data al Smart Data (reportaje de portada)",
        },
        venue: "Byte TI nº 344",
        date: "2026-01",
        description: {
          en: "Quoted on the technical, organisational and operational challenges of data platforms (p. 44).",
          es: "Cita sobre los retos técnicos, organizativos y operativos de las plataformas de datos (p. 44).",
        },
        url: "https://revistabyte.es/wp-content/uploads/2026/01/Revista-Byte-TI-344.-Enero-2026.pdf",
        image: "/presence/byte344.webp",
      },
      {
        type: "talk",
        event: "Cloudera Evolve",
        title: {
          en: "Speaker at Cloudera EVOLVE Forum 2025",
          es: "Ponente en Cloudera EVOLVE Forum 2025",
        },
        venue: "Cloudera EVOLVE Forum, Madrid",
        date: "2025-11",
        url: "https://www.linkedin.com/posts/jitorrents_ha-sido-un-aut%C3%A9ntico-placer-haber-podido-ugcPost-7392642311098355712-DfVO",
        image: "/presence/cloudera25.webp",
      },
      {
        type: "talk",
        event: "SCEWC25",
        title: {
          en: "Data spaces and AI for a smarter city, with Madrid City Council",
          es: "Espacios de datos e IA para una ciudad más inteligente, con el Ayuntamiento de Madrid",
        },
        venue: "Smart City Expo World Congress 2025",
        date: "2025-11",
        url: "https://www.linkedin.com/posts/jitorrents_scewc25-share-7391050312243032065-P1S_",
        image: "/presence/smartcities25.webp",
      },
      {
        type: "talk",
        event: "MWC25",
        title: "AI 360 in action: Transforming data and models with Google Cloud",
        venue: {
          en: "MWC25 Barcelona · Kyndryl & Google Cloud session",
          es: "MWC25 Barcelona · sesión de Kyndryl y Google Cloud",
        },
        // The LinkedIn announcement is from February 2025; the sessions were on 4–5 March 2025.
        date: "2025-03",
        url: "https://www.linkedin.com/posts/jitorrents_theheartofprogress-mwc25-share-7300909549085974531-_Jg_",
        image: "/presence/mwc25.webp",
      },
      {
        // TODO(verify): the user said January 2025; the organiser's LinkedIn post is from
        // 24 October 2024 and thanks attendees, so October 2024 is used. Type set from the photo (panel).
        type: "panel",
        event: "The Game Changers Lab",
        title: {
          en: "The NextGen company, with Kyndryl",
          es: "La empresa NextGen, de la mano de Kyndryl",
        },
        venue: "The Game Changers Lab",
        date: "2024-10",
        description: {
          en: "An evening on how new technologies can help us make better decisions, and why leaders matter in a context increasingly shaped by algorithms.",
          es: "Una velada sobre cómo las nuevas tecnologías pueden ayudarnos a tomar mejores decisiones y por qué el papel de los líderes es clave en un contexto cada vez más mediado por algoritmos.",
        },
        url: "https://www.linkedin.com/posts/la-empresa-nextgen-ha-llegado-de-la-mano-ugcPost-7255239947194875905-6BAb",
        image: "/presence/tgc24.webp",
      },
    ],
    skills: [
      {
        category: "Data & AI",
        items: [
          {
            en: "Data strategy",
            es: "Estrategia de datos",
          },
          "Data management",
          {
            en: "Data governance",
            es: "Gobierno del dato",
          },
          "Business Intelligence",
          {
            en: "Data analysis",
            es: "Análisis de datos",
          },
          "Databricks",
          "BigQuery",
          "Power BI",
          "SQL Server",
        ],
      },
      {
        category: {
          en: "Business & leadership",
          es: "Negocio y liderazgo",
        },
        items: [
          {
            en: "Strategic vision",
            es: "Visión estratégica",
          },
          {
            en: "People management",
            es: "Gestión de personas",
          },
          {
            en: "Consultative selling",
            es: "Venta consultiva",
          },
          {
            en: "Business development",
            es: "Desarrollo de negocio",
          },
          {
            en: "Customer and partner engagement",
            es: "Relación con clientes y partners",
          },
          {
            en: "Team leadership",
            es: "Liderazgo de equipos",
          },
          {
            en: "Teamwork",
            es: "Trabajo en equipo",
          },
          {
            en: "IT management",
            es: "Dirección de IT",
          },
          {
            en: "Budget and provider management",
            es: "Gestión de presupuesto y proveedores",
          },
        ],
      },
      {
        category: "Delivery",
        items: [
          {
            en: "Project management (PMP / PMI)",
            es: "Dirección de proyectos (PMP / PMI)",
          },
          {
            en: "IT service management (ITIL)",
            es: "Gestión de servicios IT (ITIL)",
          },
          "Agile (Scrum, Kanban)",
        ],
      },
      {
        category: "Cloud",
        items: ["Google Cloud", "Microsoft Azure"],
      },
      {
        category: {
          en: "Software engineering",
          es: "Ingeniería de software",
        },
        items: [
          {
            en: "Analysis and design",
            es: "Análisis y diseño",
          },
          {
            en: "Software development",
            es: "Desarrollo de software",
          },
          "J2EE",
          "PHP",
        ],
      },
      {
        category: {
          en: "Tools",
          es: "Herramientas",
        },
        items: [
          "Jira",
          "Confluence",
          {
            en: "Atlassian administration",
            es: "Administración de Atlassian",
          },
          "Microsoft Project",
          "Microsoft Office",
        ],
      },
    ],
    education: [
      {
        institution: "Universitat Oberta de Catalunya (UOC)",
        degree: {
          en: "Postgraduate degree",
          es: "Posgrado",
        },
        field: {
          en: "Business Intelligence and Data Analysis",
          es: "Inteligencia de negocio y análisis de datos",
        },
        logo: "/logos/uoc.webp",
        start: "2019",
        end: "2020",
      },
      {
        institution: "La Salle Barcelona, Universitat Ramon Llull (URL)",
        degree: {
          en: "Master in Project Management (MPM)",
          es: "Máster en Project Management (MPM)",
        },
        logo: "/logos/lasalle.webp",
        start: "2014",
        end: "2015",
      },
      {
        institution:
          "Facultat d'Informàtica de Barcelona (FIB), Universitat Politècnica de Catalunya",
        degree: {
          en: "Computer Science Engineering",
          es: "Ingeniería Informática",
        },
        logo: "/logos/upc.webp",
        start: "2008",
        end: "2010",
      },
      {
        institution:
          "Facultat d'Informàtica de Barcelona (FIB), Universitat Politècnica de Catalunya",
        // TODO(verify): English name for "Ingeniería Técnica en Informática de Gestión".
        degree: {
          en: "Technical Engineering in Business Information Systems",
          es: "Ingeniería Técnica en Informática de Gestión",
        },
        logo: "/logos/upc.webp",
        start: "2003",
        end: "2008",
      },
    ],
    // TODO(verify): neither source gives dates or credential links for the certifications.
    // Official certification names stay in English in both languages.
    certifications: [
      {
        name: "Microsoft Certified: Azure Data Engineer Associate (DP-203)",
        issuer: "Microsoft",
      },
      {
        name: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
        issuer: "Microsoft",
      },
      {
        name: "Microsoft Certified: Data Analyst Associate (DA-100)",
        issuer: "Microsoft",
      },
      {
        name: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
        issuer: "Microsoft",
      },
      {
        name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
      },
      {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
      },
      {
        name: "Google Cloud Certified: Cloud Digital Leader",
        issuer: "Google Cloud",
      },
      {
        name: "CDP-0011 CDP Certified Generalist",
        issuer: "Cloudera",
      },
      {
        name: "Cloudera Technical Professional (CTP) Accreditation",
        issuer: "Cloudera",
      },
      {
        name: "Cloudera Connect Sales Accreditation",
        issuer: "Cloudera",
      },
      {
        name: "Fundamentals of Delta Lake Accreditation",
        issuer: "Databricks",
      },
      {
        name: "Fundamentals of Unified Data Analytics with Databricks Accreditation",
        issuer: "Databricks",
      },
      {
        name: "ACP-120 Atlassian Certified Jira Administrator for Cloud",
        issuer: "Atlassian",
      },
      {
        name: "ACP-620 Atlassian Certified in Managing Jira Cloud Projects",
        issuer: "Atlassian",
      },
      // TODO(verify): issuer not stated in either source.
      {
        name: "ITIL® Foundation Certificate in IT Service Management",
      },
      {
        name: "First Certificate in English (FCE)",
        issuer: "Cambridge",
        featured: false,
      },
    ],
    languages: [
      {
        language: {
          en: "Spanish",
          es: "Castellano",
        },
        level: {
          en: "Native or bilingual",
          es: "Nativo o bilingüe",
        },
      },
      {
        language: {
          en: "Catalan",
          es: "Catalán",
        },
        level: {
          en: "Native or bilingual",
          es: "Nativo o bilingüe",
        },
      },
      {
        language: {
          en: "English",
          es: "Inglés",
        },
        level: {
          en: "Full professional",
          es: "Competencia profesional completa",
        },
      },
      {
        language: {
          en: "French",
          es: "Francés",
        },
        level: {
          en: "Elementary",
          es: "Básico",
        },
      },
    ],
  },
};
