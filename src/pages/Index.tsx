import Hero from "@/components/Hero";
import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/NavBar";
import ProjectsTimeline from "@/components/project_components/ProjectsTimeline";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <MatrixRain />
      <Navbar />
      <Hero />
      <ProjectsTimeline />
      <Contact />
    </main>
  );
};

export default Index;
