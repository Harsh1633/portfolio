import React, { useEffect, useState } from "react";
import type { SectionType } from "@/pages/Index";

interface NavbarProps {
  activeSection: SectionType;
  setActiveSection: (section: SectionType) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const getRandomMatrixColor = () =>
    Math.random() > 0.5 ? "0 100% 50%" : "220 100% 50%"; // Red / Blue

  const handleSelect = (section: SectionType, el: HTMLElement) => {
    setActiveSection(section);
    el.style.setProperty("--matrix-red-blue", getRandomMatrixColor());
  };

  useEffect(() => {
    const activeLink = document.querySelector(
      `[data-section="${activeSection}"]`
    ) as HTMLElement;

    if (activeLink) {
      activeLink.style.setProperty(
        "--matrix-red-blue",
        getRandomMatrixColor()
      );
    }
  }, [activeSection]);

  const linkClasses = (section: SectionType) =>
    `text-lg transition matrix-hover-glow cursor-pointer ${
      activeSection === section ? "opacity-100" : "opacity-70"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 py-2">

        {/* Logo */}
        <div className="text-3xl font-bold tracking-wider">
          Harsh
        </div>

        {/* Links */}
        <div
          className={`flex items-center gap-8 ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
          {(["about", "work", "creative", "contact"] as SectionType[]).map(
            (section) => (
              <span
                key={section}
                data-section={section}
                tabIndex={0}
                role="button"
                className={linkClasses(section)}
                onClick={(e) =>
                  handleSelect(section, e.currentTarget)
                }
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
          <span className="w-6 h-[2px] bg-foreground"></span>
          <span className="w-6 h-[2px] bg-foreground"></span>
          <span className="w-6 h-[2px] bg-foreground"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
