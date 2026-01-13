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

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary matrix-text-glow mb-4">
            Connect
          </h2>
          <p className="text-muted-foreground font-mono max-w-xl mx-auto">
            Let's build something amazing together. Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>

        {/* Main Card */}
        <div className="relative bg-card/80 backdrop-blur-sm border border-primary/30 rounded-lg p-8 matrix-box-glow">
          {/* Terminal decoration */}
          <div className="absolute -top-3 left-6 flex items-center gap-2 px-3 py-1 bg-secondary border border-primary/30 rounded-full">
            <Terminal className="w-3 h-3 text-primary" />
            <span className="text-xs text-primary font-mono">connect.sh</span>
          </div>

          <div className="pt-4 space-y-8">
            {/* Resume Download */}
            <div className="flex flex-col items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownload}
                className="group border-primary/50 hover:bg-primary/10 hover:border-primary"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <p className="text-sm text-muted-foreground font-mono">
                ~ Usually replies within 24 hours
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <span className="text-xs text-muted-foreground font-mono">OR</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 p-4 rounded-lg border border-primary/20 bg-secondary/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                >
                  <link.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-muted-foreground font-mono group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
