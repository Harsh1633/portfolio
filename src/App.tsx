import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";

const queryClient = new QueryClient();

const App: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      "a.matrix-hover-glow, button.matrix-hover-glow, span.matrix-hover-glow, div.matrix-hover-glow, p.matrix-hover-glow, h1.matrix-hover-glow, h2.matrix-hover-glow, h3.matrix-hover-glow, h4.matrix-hover-glow, h5.matrix-hover-glow, h6.matrix-hover-glow"
    );

    elements.forEach((el) => {
      const handleMouseEnter = (event: MouseEvent) => {
        const target = event.currentTarget as HTMLElement;
        const colors = ["0 100% 50%", "220 100% 50%"]; // Red or Blue
        const random = colors[Math.floor(Math.random() * colors.length)];
        target.style.setProperty("--matrix-red-blue", random);
      };

      const handleMouseLeave = (event: MouseEvent) => {
        const target = event.currentTarget as HTMLElement;
        target.style.removeProperty("--matrix-red-blue");
      };

      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup on unmount
      return () => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
