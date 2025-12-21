export interface SkillItem {
  title: string;
  description: string;
}

export interface SkillSection {
  id: string;
  label: string;
  stack: string;
  skills: SkillItem[];
  usagePatterns?: string[];
  notes?: string[];
}

export const skillsetData: SkillSection[] = [

  /* ================= CORE LANGUAGES ================= */

  {
    id: "languages",
    label: "Programming Languages",
    stack: "Dart • Python • JavaScript • Kotlin",
    skills: [
      {
        title: "Dart",
        description: "Primary language for Flutter apps with strong typing and async patterns",
      },
      {
        title: "Python",
        description: "Logic building, scripting, APIs, and DSA fundamentals",
      },
      {
        title: "JavaScript",
        description: "Frontend logic and web interactions",
      },
      {
        title: "Kotlin",
        description: "Basic Android development and native integration",
      },
    ],
  },

  /* ================= APP & WEB ================= */

  {
    id: "frontend",
    label: "App & Web Development",
    stack: "Flutter • ReactJS",
    skills: [
      {
        title: "Flutter",
        description: "Cross-platform mobile apps with clean UI, forms, validation, and API integration",
      },
      {
        title: "Flutter Architecture",
        description: "State management, modular screens, reusable widgets",
      },
      {
        title: "ReactJS",
        description: "Component-driven web apps and UI composition",
      },
    ],
    usagePatterns: [
      "Form-heavy workflows",
      "State-driven UI updates",
      "Reusable component architecture",
    ],
  },

  /* ================= BACKEND & APIs ================= */

  {
    id: "backend",
    label: "Backend & APIs",
    stack: "Firebase • REST APIs",
    skills: [
      {
        title: "REST API Integration",
        description: "Consuming APIs, request handling, error states, and token-based flows",
      },
      {
        title: "Firebase Authentication",
        description: "OTP, session handling, and user identity management",
      },
      {
        title: "Firebase Firestore",
        description: "Realtime data storage and structured collections",
      },
      {
        title: "Backend Concepts",
        description: "API-first design, request lifecycle, and data contracts",
      },
    ],
    usagePatterns: [
      "API-driven mobile applications",
      "Secure data submission flows",
      "Graceful error handling",
    ],
  },

  /* ================= DATABASES ================= */

  {
    id: "databases",
    label: "Databases",
    stack: "SQL • Firestore",
    skills: [
      {
        title: "SQL",
        description: "Relational data modeling, queries, and reporting basics",
      },
      {
        title: "Firestore",
        description: "NoSQL document-based data design",
      },
    ],
  },

  /* ================= TOOLS & WORKFLOW ================= */

  {
    id: "tools",
    label: "Tools & Workflow",
    stack: "Git • Postman • Android Studio • Azure DevOps • Jira",
    skills: [
      {
        title: "Git & GitHub",
        description: "Version control, branching, and collaboration",
      },
      {
        title: "Postman",
        description: "API testing, debugging, and request validation",
      },
      {
        title: "Android Studio / VS Code",
        description: "Flutter development, debugging, and build tools",
      },
      {
        title: "Azure DevOps",
        description: "Work items, repositories, and sprint tracking",
      },
      {
        title: "Jira",
        description: "Agile boards, task tracking, and team workflows",
      },
    ],
  },

  /* ================= DOMAIN KNOWLEDGE ================= */

  {
    id: "domain",
    label: "Domain Knowledge",
    stack: "Fintech • LOS • LMS",
    skills: [
      {
        title: "Fintech Applications",
        description: "Customer onboarding, document flows, and compliance-driven UI",
      },
      {
        title: "LOS (Loan Origination System)",
        description: "End-to-end loan application journey and validations",
      },
      {
        title: "LMS (Loan Management System)",
        description: "Post-disbursement flows, repayments, and account lifecycle",
      },
    ],
    notes: [
      "Form accuracy is critical",
      "Data integrity over UI shortcuts",
      "Compliance-driven product thinking",
    ],
  },
];
