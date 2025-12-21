import Hero from "@/components/Hero";
import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/NavBar";
import ProjectsTimeline from "@/components/project_components/ProjectsTimeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skillset from "@/components/Skillset";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <MatrixRain />
      <Navbar />
      <Hero />
      <ProjectsTimeline />
      <Skillset/>
      {/* <Creatives/> */}
      <Contact />
      <Footer/>
    </main>
  );
};

export default Index;
