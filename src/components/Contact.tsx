import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github, Terminal } from "lucide-react";
import resume from "@/assets/resume.pdf";

const Contact = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Harsh_Chelimela_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:harshchelimela123@gmail.com",
      label: "Email",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/harsh-chelimela-65029525b/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/Harsh1633",
      label: "GitHub",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--matrix-green) / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--matrix-green) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    </section>
  );
};

export default Contact;
