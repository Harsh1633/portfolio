import Hero from "@/components/Hero";
import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/NavBar";
import ProjectsTimeline from "@/components/project_components/ProjectsTimeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skillset from "@/components/Skillset";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const sectionMap: Record<string, string> = {
      "#work": "projects",
      "#about": "about",
      "#skillset": "skillset",
      "#contact": "contact",
    };

    const targetId = sectionMap[hash];
    if (!targetId) return;

    // wait for DOM to render
    setTimeout(() => {
      const el = document.getElementById(targetId);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, [hash]);

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <MatrixRain />
      <Navbar />
      <Hero />
      <ProjectsTimeline />
      <Skillset />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
