import { Bot, Code2, Smartphone, ShoppingCart, Palette, Layers } from "lucide-react";

export interface Project {
  id: string;
  date: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: keyof typeof iconMap;
  technologies: string[];
  features: string[];
  playStoreLink?: string;
  appStoreLink?: string;
  githubLink?: string;
  liveLink?: string;
}

export const iconMap = {
  Bot,
  Code2,
  Smartphone,
  ShoppingCart,
  Palette,
  Layers,
};

// ADD YOUR PROJECTS HERE - Easy to edit!
export const projects: Project[] = [
  {
  id: "sbfc-saahayak",
  date: "JUL 2025 – Present",
  title: "SBFC Saahayak",
  shortDescription: "Compliance-first field onboarding app streamlining the LOS journey.",
  fullDescription: `SBFC Saahayak is a secure field-force mobile application designed to digitize and streamline the 
  Loan Origination System (LOS) journey for SBFC Finance. The app enables end-to-end customer onboarding with a 
  strong focus on regulatory compliance, data security, and First-Time-Right (FTR) submissions.

  The platform supports Aadhaar masking, OTP-based verification, PAN validation, CIBIL/CRIF bureau checks, GPS tagging, 
  and secure document capture to ensure compliant and auditable loan applications. Multi-step eKYC workflows were 
  designed with mandatory document validation and contextual checks, improving FTR from below 40% to approximately 75%, 
  significantly reducing CPA rework and turnaround time.`,

  icon: "Smartphone",
  technologies: [
    "Flutter",
    "Dart",
    "REST APIs",
    "Power BI",
  ],
  features: [
    "End-to-end LOS field onboarding",
    "Aadhaar masking & OTP verification",
    "PAN validation with CIBIL / CRIF checks",
    "UIDAI Face Authentication integration",
    "IMEI-based device binding for security",
    "Multi-step eKYC & mandatory document workflows",
    "Collateral document capture with GPS tagging",
    "Role-based access & hierarchical approvals",
    "VAPT-compliant secured APIs",
    "Real-time Power BI dashboards"
  ],
  playStoreLink: "https://play.google.com/store/apps/details?id=com.sbfc.sahayak&hl=en",
  appStoreLink: "https://apps.apple.com/in/app/sbfc-sahayak/id6754371944"
},
{
  id: "bond-bazaar",
  date: "DEC 2025 – JUN 2025",
  title: "Bond Bazaar",
  shortDescription: "Retail bond investment platform with compliant KYC, live RFQ trading, and portfolio insights.",
  fullDescription: `BondBazaar is a retail bond investment platform designed to simplify fixed-income investing while
   adhering to SEBI and RBI compliance standards. A structured 10-step KYC onboarding flow was implemented, covering OTP 
   and email verification, bank validation, and Aadhaar-based eSign to ensure secure and compliant user onboarding. 
   The app features clean, data-driven UI for instruments such as G-Secs, SGBs, and corporate bonds, displaying dynamic
    fields including yield, coupon rate, maturity date, and minimum investment.

Real-time buy and sell flows with accurate pricing and return calculations. A comprehensive portfolio module was built
 to show investor holdings, realized returns, and upcoming redemption dates, improving transparency for retail investors. 
 The application follows a modular UI architecture with robust validation and performance optimizations, supported by 
 CI/CD pipelines for reliable and faster production deployments.`,

  icon: "Layers",
  technologies: [
    "Flutter",
    "Dart",
    "REST APIs",
    "CI-CD",
  ],
  features: [
    "10-step compliant KYC onboarding flow",
    "Aadhaar-based eSign integration",
    "Bond discovery for G-Secs, SGBs & corporate bonds",
    "Dynamic yield, coupon & maturity calculations",
    "Live RFQ-based bond trading",
    "Real-time buy/sell flows with validation",
    "Investor portfolio with returns & redemptions",
    "Automated CI/CD for reliable deployments"
  ],
  playStoreLink: "https://play.google.com/store/apps/details?id=com.bond_bazaar&hl=en",
  appStoreLink: "https://apps.apple.com/in/app/bondbazaar/id6467102700"
},

  {
    id: "mobile-fitness-app",
    date: "SEP 2025",
    title: "Fitness Tracking App",
    shortDescription: "Cross-platform mobile app for fitness enthusiasts.",
    fullDescription: `A full-featured fitness tracking application built with Flutter. 
    Tracks workouts, nutrition, and progress with beautiful visualizations and gamification elements.
    
    Includes social features for competing with friends, custom workout builders, 
    and integration with popular fitness wearables.`,
    icon: "Smartphone",
    technologies: ["Flutter", "Firebase", "HealthKit", "Google Fit API"],
    features: [
      "Workout tracking",
      "Nutrition logging",
      "Social challenges",
      "Wearable integration"
    ],
    playStoreLink: "https://play.google.com/store",
    appStoreLink: "https://apps.apple.com",
  },
];
