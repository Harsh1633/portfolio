import Hero from "@/components/Hero";
import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/NavBar";
import ProjectsTimeline from "@/components/ProjectTimeline";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <MatrixRain />
      <Navbar />
      <Hero />
      <ProjectsTimeline />
    </main>
  );
};

export default Index;
