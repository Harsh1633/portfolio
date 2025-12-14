import Hero from "@/components/Hero";
import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/NavBar";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <MatrixRain />
      <Navbar />
      <Hero />
    </main>
  );
};

export default Index;