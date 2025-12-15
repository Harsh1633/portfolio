export interface Project {
  id: string;
  name: string;
  logo: string;
  description: string;
  tech: string[];
  playStoreUrl?: string;
  appStoreUrl?: string;
}

export const projects: Project[] = [
  {
    id: "trading-app",
    name: "Trading App",
    logo: "/logos/trading.png",
    description:
      "A Flutter-based trading app with complex order flows, reports, and margin handling.",
    tech: ["Flutter", "REST APIs", "State Management"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=example",
  },
  {
    id: "clinic-app",
    name: "Clinic App",
    logo: "/logos/clinic.png",
    description:
      "Clinic management app with forms, Firebase backend, and validations.",
    tech: ["Flutter", "Firebase", "Forms"],
  },
  {
    id: "portfolio",
    name: "Portfolio",
    logo: "/logos/portfolio.png",
    description:
      "My personal portfolio focused on clean UI, motion, and clarity.",
    tech: ["React", "Tailwind"],
    appStoreUrl: "https://apps.apple.com/example",
  },
];
