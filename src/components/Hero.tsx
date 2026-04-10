import React from "react";
import profileImg from "@/assets/images/profile.jpg";
import resume from "@/assets/resume.pdf";
import { Button } from "@/components/ui/button";
import { Download, Terminal, Code2, Smartphone } from "lucide-react";

const Hero: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Harsh_Chelimela_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
      
      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan-line" />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Terminal-style greeting */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-secondary/50 backdrop-blur-sm animate-fade-in"> */}
              {/* <Terminal className="w-4 h-4 text-primary" /> */}
              {/* <span className="text-sm text-primary font-mono">system.init()</span> */}
              {/* <span className="w-2 h-4 bg-primary animate-matrix-pulse" /> */}
            {/* </div> */}

            {/* Main heading */}
            <div className="space-y-4" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black tracking-tight animate-slide-up">
                <span className="text-muted-foreground">Hi, I'm</span>
                <br />
                <span className="text-primary matrix-text-glow">
                  Harsh Chelimela
                </span>
              </h1>
            </div>

            {/* Skills tags */}


            {/* Description */}
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 font-mono animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              Crafting digital experiences with clean code and creative solutions.
              Turning ideas into reality, one commit at a time.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mx-auto lg:mx-0 font-mono animate-fade-in"
              style={{ animationDelay: '0.5s' }}>IT Professional with 2 years of hands-on experience building responsive, scalable mobile applications. I focus on creating smooth user journeys by combining clean architecture, thoughtful UI, and reliable API integrations.

I enjoy working across the full app lifecycle — from structuring data models and managing state to optimizing performance and handling edge cases. Curious by nature, I’m constantly learning and refining my approach, because great apps shouldn’t just work well — they should feel clear, confident, and intuitive to use.</p>

            {/* CTA Button */}
            <div 
              className="flex justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              {/* <Button
                variant="matrix"
                size="lg"
                onClick={handleDownload}
                className="group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-glitch" />
                Download Resume
              </Button> */}
            </div>
          </div>

          {/* Profile Image */}
          <div 
            className="relative animate-scale-in"
            style={{ animationDelay: '0.3s' }}
          >
            {/* Glow rings */}
            <div className="absolute inset-0 -m-4 rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 blur-xl animate-glow-pulse" />
            <div className="absolute inset-0 -m-8 rounded-full border border-primary/20 animate-matrix-pulse" />
            <div className="absolute inset-0 -m-16 rounded-full border border-primary/10" />
            
            {/* Image container */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/50 matrix-box-glow animate-float ai-scan-overlay">
              <img
                src={profileImg}
                alt="Harsh Chelimela - Mobile Developer"
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110 animate-hologram"
              />
              {/* Glitch duplicate layers */}
              <img
                src={profileImg}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen animate-glitch"
                style={{ filter: 'hue-rotate(90deg)' }}
              />
              {/* Overlay scan effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none" />
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/70 animate-matrix-pulse" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/70 animate-matrix-pulse" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/70 animate-matrix-pulse" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/70 animate-matrix-pulse" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-primary/30 rounded-lg rotate-12 animate-matrix-pulse" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1s' }}>
          <span className="text-xs text-muted-foreground font-mono">scroll.down()</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;