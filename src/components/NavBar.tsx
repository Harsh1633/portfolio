import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Matrix Red/Blue Hover effect for Navbar links
  useEffect(() => {
    const links = document.querySelectorAll<HTMLElement>("a.matrix-hover-glow");

    links.forEach((link) => {
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

      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-8 py-4">

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
          <a className="text-lg transition matrix-hover-glow">Home</a>
          <a className="text-lg transition matrix-hover-glow">About</a>
          <a className="text-lg transition matrix-hover-glow">Projects</a>
          <a className="text-lg transition matrix-hover-glow">Skills</a>
          <a className="text-lg transition matrix-hover-glow">Contact</a>
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
