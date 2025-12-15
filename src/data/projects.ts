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
    id: "ai-flutter-app",
    date: "NOV 2025",
    title: "Exploring AI in Flutter",
    shortDescription: "Building smarter UI flows with on-device AI.",
    fullDescription: `This project explores the integration of on-device AI capabilities within Flutter applications. 
    The goal was to create intelligent UI flows that adapt to user behavior without requiring constant server communication.
    
    Key achievements include implementing TensorFlow Lite models for real-time predictions, creating adaptive UI components 
    that respond to user patterns, and optimizing performance for smooth 60fps animations even during AI inference.`,
    icon: "Bot",
    technologies: ["Flutter", "Dart", "TensorFlow Lite", "Firebase ML"],
    features: [
      "On-device machine learning",
      "Adaptive UI components",
      "Real-time predictions",
      "Offline-first architecture"
    ],
    playStoreLink: "https://play.google.com/store",
    appStoreLink: "https://apps.apple.com",
  },
  {
    id: "mern-performance",
    date: "NOV 2025",
    title: "MERN Performance Work",
    shortDescription: "Improving API speed and UI responsiveness.",
    fullDescription: `A comprehensive performance optimization project for a MERN stack application. 
    Focused on reducing API response times by 60% and improving frontend rendering performance.
    
    Implemented Redis caching, database query optimization, lazy loading strategies, 
    and code splitting to achieve significant performance gains across the entire application.`,
    icon: "Code2",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Redis"],
    features: [
      "60% faster API responses",
      "Optimized database queries",
      "Redis caching layer",
      "Code splitting & lazy loading"
    ],
    githubLink: "https://github.com",
  },
  {
    id: "portfolio-refresh",
    date: "NOV 2025",
    title: "Portfolio Refresh",
    shortDescription: "Redesigning layouts for clarity and motion.",
    fullDescription: `Complete redesign of personal portfolio with focus on modern aesthetics and smooth animations. 
    Implemented a Matrix-inspired theme with animated backgrounds and interactive elements.
    
    Features include custom CSS animations, responsive design, and optimized performance 
    while maintaining accessibility standards.`,
    icon: "Palette",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Matrix-themed design",
      "Custom animations",
      "Responsive layouts",
      "SEO optimized"
    ],
    liveLink: "https://portfolio.com",
  },
  {
    id: "shopify-automation",
    date: "OCT 2025",
    title: "Shopify Automation",
    shortDescription: "Automating product workflows and syncing.",
    fullDescription: `Built a comprehensive automation system for Shopify stores that handles product management, 
    inventory syncing, and order processing automatically.
    
    The system integrates with multiple suppliers, automatically updates pricing and stock levels, 
    and provides real-time analytics on sales performance.`,
    icon: "ShoppingCart",
    technologies: ["Node.js", "Shopify API", "PostgreSQL", "AWS Lambda"],
    features: [
      "Automated inventory sync",
      "Multi-supplier integration",
      "Real-time analytics",
      "Order automation"
    ],
    githubLink: "https://github.com",
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
