import React, { useState } from "react";

type SectionType = "about" | "work" | "skillset" | "contact";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionType>("about");

  const getRandomMatrixColor = () =>
    Math.random() > 0.5 ? "0 100% 50%" : "220 100% 50%";

  const handleSelect = (section: SectionType, el: HTMLElement) => {
    setActiveSection(section);
    el.style.setProperty("--matrix-red-blue", getRandomMatrixColor());
    
    // Scroll to section
    const element = document.getElementById(section === "work" ? "projects" : section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkClasses = (section: SectionType) =>
    `text-lg transition matrix-hover-glow cursor-pointer ${
      activeSection === section ? "opacity-100" : "opacity-70"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-16 bg-background/80 backdrop-blur-sm border-b border-matrix-green/20">
  <div className="h-full flex items-center justify-between px-10">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider font-orbitron text-matrix-green matrix-text-glow">
          Harsh
        </div>

        {/* Links */}
        <div
          className={`flex items-center gap-8 ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
          {(["about", "work", "skillset", "contact"] as SectionType[]).map(
            (section) => (
              <span
                key={section}
                data-section={section}
                tabIndex={0}
                role="button"
                className={linkClasses(section)}
                onClick={(e) => handleSelect(section, e.currentTarget)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSelect(section, e.currentTarget);
                  }
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            )
          )}
        </div>

        {/* Hamburger */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-[2px] bg-matrix-green"></span>
          <span className="w-6 h-[2px] bg-matrix-green"></span>
          <span className="w-6 h-[2px] bg-matrix-green"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
