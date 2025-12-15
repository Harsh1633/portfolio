import { useState } from "react";
import Hero from "@/components/Hero";
import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/NavBar";
import ProjectsTimeline from "@/components/project_components/ProjectsTimeline";

export type SectionType = "about" | "work" | "creative" | "contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState<SectionType>("about");

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <MatrixRain />

      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Content Section */}
      <section className="pt-8">
        {activeSection === "about" && <Hero />}
        {activeSection === "work" && <ProjectsTimeline />}
      </section>
    </main>
  );
};

export default Index;
