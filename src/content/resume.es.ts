import { resume as en } from "./resume";
import type { Resume } from "./types";

// Spanish CV content. Same structure as resume.ts (English).
// Dates, logos, links and certification names are reused from the English file so they
// never drift apart; only the text is translated here. Wording follows the Spanish
// LinkedIn export wherever it has the same content.
const [kyndrylHead, kyndrylCta, mcHead, mcBi, sii, indra2014, gft, indra2007, acs] = en.experience;

export const resumeEs: Resume = {
  basics: {
    ...en.basics,
    headline: "Head of Data – Applications, Data & AI en Kyndryl Consult",
    summary:
      "Ingeniero Informático y Máster en Project Management, con una amplia trayectoria en el sector IT y la consultoría. Comencé mi carrera en el desarrollo de software como programador, analista y arquitecto, y más adelante orienté mi camino hacia la gestión de proyectos y servicios, el desarrollo de negocio y el liderazgo de equipos. Actualmente soy Head of Data en el área de Aplicaciones, Datos e IA de Kyndryl, donde combino habilidades de gestión, comerciales y técnicas para impulsar el crecimiento de la unidad, apoyado en un profundo conocimiento del mundo del dato desde una perspectiva estratégica, de gobierno y tecnológica.",
    location: "Barcelona, España",
  },

  experience: [
    {
      ...kyndrylHead!,
      role: "Head of Data – Applications, Data & AI, Kyndryl Consult",
      location: "Barcelona, España",
      summary:
        "Lidero el negocio de Data en el área de Aplicaciones, Datos e IA, colaborando estrechamente con los equipos internos de ventas y técnicos.",
      highlights: [
        "Defino la estrategia de crecimiento, el portfolio, los objetivos y el roadmap de los servicios de Data, alineados con una propuesta de valor clara y diferenciadora.",
        "Lidero el engagement con clientes y partners, con relaciones basadas en la confianza y en la venta consultiva de soluciones alrededor del dato.",
        "Genero oportunidades de negocio: identificación de necesidades, diseño de soluciones innovadoras y propuestas de alto impacto.",
        "Trabajo junto al equipo de ventas para detectar y cualificar oportunidades.",
        "Gestiono relaciones estratégicas con clientes, proveedores y partners clave.",
      ],
      tech: [
        "Google Cloud",
        "Azure",
        "Databricks",
        "BigQuery",
        "Gobierno del dato",
        "Data management",
      ],
    },
    {
      ...kyndrylCta!,
      role: "Customer Technology Advisor for Data & AI, Kyndryl Consult",
      location: "Barcelona, España",
      summary:
        "Servicios de Advisory & Implementation para España y Portugal, con especialización en Data & AI.",
      highlights: [
        "Construí la propuesta de valor del área de Data.",
        "Lideré el engagement con clientes y la venta consultiva.",
      ],
    },
    {
      ...mcHead!,
      role: "Head of Data & Analytics",
      location: "Barcelona, España",
      summary: "Responsable del departamento de BI & Analytics.",
      highlights: [
        "Gestión y liderazgo del equipo de data engineers.",
        "Project management de los proyectos del departamento y service management de los principales clientes.",
        "Gestión del departamento: presupuesto, operaciones y proveedores.",
        "Responsable del sistema de ticketing de la compañía (Jira).",
      ],
      tech: ["Microsoft Azure", "Plataforma de datos de Microsoft", "Jira"],
    },
    {
      ...mcBi!,
      role: "Business Intelligence Manager",
      location: "Barcelona, España",
      summary: "Responsable del área de BI & Analytics.",
      highlights: [
        "Gestión del equipo, service management y project management de los clientes y proyectos del departamento.",
      ],
    },
    {
      ...sii!,
      role: "Project Manager / Consultor Atlassian",
      location: "Barcelona, España",
      highlights: [
        "Gestión y ejecución de proyectos de implantación de la suite Atlassian en varios clientes, como project manager y consultor.",
        "Planificación, control y seguimiento de proyectos, junto con la consultoría especializada en Atlassian.",
        "Asesoramiento en la implantación de metodologías Agile (Scrum, Kanban) con Jira.",
      ],
    },
    {
      ...indra2014!,
      role: "Analista J2EE",
      location: "Barcelona, España",
      highlights: [
        "Miembro del equipo del proyecto de recaudación de impuestos en ejecutiva para el Gobierno de Canarias.",
        "Análisis y arquitectura J2EE.",
      ],
    },
    {
      ...gft!,
      role: "Analista-Programador J2EE",
      employmentType: "Jornada completa, en inglés",
      highlights: [
        "Miembro del equipo de desarrollo J2EE en un proyecto para una entidad internacional de banca de inversión.",
        "Análisis técnico, arquitectura, diseño y desarrollo de software.",
      ],
    },
    {
      ...indra2007!,
      role: "Analista-Programador J2EE",
      location: "Barcelona, España",
      summary: "Proyectos tributarios para la administración pública.",
      highlights: [
        "IKUS (sistema de inspección tributaria) para Gipuzkoa, como analista-programador: análisis de negocio, diseño y desarrollo de software, documentación y organización de tareas.",
        "M@gin (modelo automatizado de gestión de impuestos) para el Gobierno de Canarias, como analista-programador: análisis, desarrollo y documentación.",
        "G@udi (gestió automatitzada d'impostos) para la Generalitat de Catalunya, como programador: desarrollo de software y documentación técnica.",
      ],
    },
    {
      ...acs!,
      role: "Técnico de hardware y programador",
      highlights: ["Reparación de hardware, instalación de equipos y redes, y programación PHP."],
    },
  ],

  collaborations: [
    {
      ...en.collaborations![0]!,
      role: "Tutor de TFM",
      location: "Barcelona, España",
      description:
        "Mentoría y tutorización de proyectos finales del Máster en Project Management, basados en el marco del PMP.",
    },
    {
      ...en.collaborations![1]!,
      role: "Ponente en el Máster en Big Data",
      location: "Barcelona, España",
      description: "Clases en el Máster en Big Data sobre gestión de datos en entornos cloud.",
    },
    {
      ...en.collaborations![2]!,
      role: "Profesor",
      description:
        "Diseño e impartición del curso “Programador d'aplicacions orientades a objectes” del Servei d'Ocupació de Catalunya (SOC), un curso de programación Java para principiantes.",
    },
  ],

  publicPresence: en.publicPresence,

  skills: [
    {
      category: "Data & AI",
      items: [
        "Estrategia de datos",
        "Data management",
        "Gobierno del dato",
        "Business Intelligence",
        "Análisis de datos",
        "Databricks",
        "BigQuery",
        "Power BI",
        "SQL Server",
      ],
    },
    {
      category: "Negocio y liderazgo",
      items: [
        "Venta consultiva",
        "Desarrollo de negocio",
        "Relación con clientes y partners",
        "Liderazgo de equipos",
        "Trabajo en equipo",
        "Dirección de IT",
        "Gestión de presupuesto y proveedores",
      ],
    },
    {
      category: "Delivery",
      items: [
        "Dirección de proyectos (PMP / PMI)",
        "Gestión de servicios IT (ITIL)",
        "Agile (Scrum, Kanban)",
      ],
    },
    {
      category: "Cloud",
      items: ["Google Cloud", "Microsoft Azure"],
    },
    {
      category: "Ingeniería de software",
      items: ["Análisis y diseño", "Desarrollo de software", "J2EE", "PHP"],
    },
    {
      category: "Herramientas",
      items: [
        "Jira",
        "Confluence",
        "Administración de Atlassian",
        "Microsoft Project",
        "Microsoft Office",
      ],
    },
  ],

  education: [
    {
      ...en.education[0]!,
      degree: "Posgrado",
      field: "Inteligencia de negocio y análisis de datos",
    },
    {
      ...en.education[1]!,
      degree: "Máster en Project Management (MPM)",
    },
    {
      ...en.education[2]!,
      degree: "Ingeniería Informática",
    },
    {
      ...en.education[3]!,
      degree: "Ingeniería Técnica en Informática de Gestión",
    },
  ],

  // Official certification names are kept in English.
  certifications: en.certifications,

  languages: [
    { language: "Castellano", level: "Nativo o bilingüe" },
    { language: "Catalán", level: "Nativo o bilingüe" },
    { language: "Inglés", level: "Competencia profesional completa" },
    { language: "Francés", level: "Básico" },
  ],
};
