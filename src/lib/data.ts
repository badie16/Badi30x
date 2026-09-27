// ── Experience (Badie BAHIDA) ─────────────────────────────
export interface ExperienceItem {
  icon: string;
  role: string;
  location: string;
  startYear: string;
  endYear: string;
  bulletPoints: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    icon: "/images/companies/logoSAT.png",
    role: "AI Security Engineer Intern, Smart Automation Technologies",
    location: "Remote, Morocco",
    startYear: "Jul 2026",
    endYear: "Sep 2026",
    bulletPoints: [
      "Designed an automated source-code security analysis platform with SAST, DAST and SCA",
      "LLM/RAG pipeline to explain, fix and prioritize findings per OWASP and CWE",
    ],
  },
  {
    icon: "/images/companies/logoCMRPI.png",
    role: "Cyber Threat Intelligence & AI Intern, CMRPI",
    location: "Kenitra, Morocco",
    startYear: "Jul 2026",
    endYear: "Aug 2026",
    bulletPoints: [
      "Built an AI-powered early cyber-threat detection platform for SMBs",
      "Real-time multichannel alerting system for threat detection",
    ],
  },
  {
    icon: "/images/companies/reewayy.png",
    role: "Frontend Developer Intern, ReeWayy",
    location: "Remote, France",
    startYear: "Jul 2025",
    endYear: "Sep 2025",
    bulletPoints: [
      "Secure development of the SuppWayy B2B platform with input validation and XSS/CSRF protection",
      "Secure backend API integration with auth token handling",
    ],
  },
  {
    icon: "/images/companies/devforyou.png",
    role: "Full Stack Engineering Intern, DevForYou",
    location: "Agadir, Morocco",
    startYear: "Jul 2025",
    endYear: "Aug 2025",
    bulletPoints: [
      "Built PhytoVigil with React Native, FastAPI and PostgreSQL with secured API endpoints",
      "CNN model for plant disease detection with 98% accuracy",
    ],
  },
];

// ── Education ──────────────────────────────────────────────
export interface EducationItem {
  date: string;
  title: string;
  subtitle: string;
}

export const educationData: EducationItem[] = [
  {
    date: "2024 - Present",
    title: "Engineering Cycle – IT Security & Digital Trust",
    subtitle: "ENSIASD, Taroudant, Morocco",
  },
  {
    date: "2022 - 2024",
    title: "DEUP in Computer Science",
    subtitle: "Faculté Polydisciplinaire de Taroudant, Morocco",
  },
  {
    date: "2020 - 2022",
    title: "Baccalaureate – IT Maintenance & Networks",
    subtitle: "Lycée Youssef Ibn Tachfin, Agadir, Morocco",
  },
];

// ── Certifications ──────────────────────────────────────────
export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  href: string;
  logoUrl: string;
}

export const certifications: CertificationItem[] = [
  {
    name: "ISO 27001 Security Audit – AuditQuest",
    issuer: "Personal Project",
    date: "2025",
    href: "https://github.com/Badie16/AuditQuest",
    logoUrl: "/images/projects/AuditQuest.png",
  },
  {
    name: "SOC Anomaly Detection – 5M logs",
    issuer: "Personal Project",
    date: "2025",
    href: "https://github.com/Badie16/SentinelLogs",
    logoUrl: "/images/projects/detectionAnomaly.png",
  },
];

// ── Project Overview ───────────────────────────────────────
export interface CaseStudy {
  name: string;
  url: string;
}

export interface ProjectOverviewData {
  caseStudies: CaseStudy[];
}

export const projectOverview: ProjectOverviewData = {
  caseStudies: [
    { name: "SentinelLogs – SOC Anomaly Detection", url: "https://github.com/Badie16/SentinelLogs" },
    { name: "ModStrike – Modbus/ICS Security Tool", url: "https://github.com/Badie16/ModStrike" },
    { name: "AuditQuest – ISO 27001 Audit Game", url: "https://github.com/Badie16/AuditQuest" },
    { name: "PhytoVigil – Web / Mobile / AI", url: "https://github.com/Badie16/PhytoVigil" },
  ],
};
