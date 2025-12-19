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

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="bg-background/80 backdrop-blur-sm border border-matrix-green/30 rounded-lg p-8 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-matrix-green/10 rounded-full blur-3xl" />
            
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="w-5 h-5 text-matrix-green" />
              <span className="text-matrix-green font-mono text-sm">~/connect</span>
            </div>

            <h2 className="text-4xl font-bold text-foreground mb-2 font-orbitron">
              Connect
            </h2>
            <div className="w-16 h-1 bg-matrix-green mb-6 rounded-full shadow-[0_0_10px_hsl(var(--matrix-green))]" />

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Want to collaborate, build a product, or explore an idea together?
              Download my resume or reach out at{" "}
              <a 
                href="mailto:your.email@gmail.com" 
                className="text-matrix-green hover:text-matrix-green-light transition-colors matrix-text-glow"
              >
                harshchelimela123@gmail.com
              </a>
              .
            </p>

            <Button 
              variant="matrix" 
              size="lg" 
              onClick={handleDownload}
              className="mb-6"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>

            <p className="text-muted-foreground/60 text-sm font-mono mb-8">
              {"// I usually reply within 48 hours."}
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-matrix-green font-mono text-sm tracking-wider">
                {"LET'S CONNECT"}
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-background border border-matrix-green/30 flex items-center justify-center text-foreground hover:text-matrix-green hover:border-matrix-green hover:shadow-[0_0_15px_hsl(var(--matrix-green)/0.3)] transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Decorative Terminal */}
          <div className="hidden md:block relative">
            <div className="bg-background/60 backdrop-blur-sm border border-matrix-green/30 rounded-lg p-6 font-mono text-sm">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-matrix-green/20">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-muted-foreground text-xs">contact.sh</span>
              </div>
              
              {/* Terminal Content */}
              <div className="space-y-2 text-matrix-green/80">
                <p><span className="text-matrix-gold">$</span> whoami</p>
                <p className="text-foreground pl-4">Harsh Chelimela</p>
                <p><span className="text-matrix-gold">$</span> cat skills.txt</p>
                <p className="text-foreground pl-4">Flutter | React | Python</p>
                <p><span className="text-matrix-gold">$</span> echo $STATUS</p>
                <p className="text-foreground pl-4">Open to opportunities</p>
                <p><span className="text-matrix-gold">$</span> ./send_message.sh</p>
                <p className="text-matrix-green pl-4 animate-pulse">Ready to connect...</p>
                <p className="flex items-center">
                  <span className="text-matrix-gold">$</span>
                  <span className="ml-2 w-2 h-4 bg-matrix-green animate-pulse" />
                </p>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border border-matrix-green/40 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 border border-matrix-gold/40 rounded animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
