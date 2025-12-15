import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Smartphone } from "lucide-react";
import { projects, iconMap } from "@/data/projects";
import { Button } from "@/components/ui/button";
import MatrixRain from "@/components/MatrixRain";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[project.icon];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/50 backdrop-blur-sm bg-background/80">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-mono text-sm">Back to Portfolio</span>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-card border-2 border-primary flex items-center justify-center animate-glow-pulse">
                <IconComponent className="w-8 h-8 text-primary" />
              </div>
              <div>
                <span className="text-sm font-mono text-muted-foreground">
                  {project.date}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground matrix-text-glow">
                  {project.title}
                </h1>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono bg-primary/10 border border-primary/30 rounded-full text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.playStoreLink && (
                <a href={project.playStoreLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="matrix" className="gap-2">
                    <Smartphone className="w-4 h-4" />
                    Play Store
                  </Button>
                </a>
              )}
              {project.appStoreLink && (
                <a href={project.appStoreLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="matrix" className="gap-2">
                    <Smartphone className="w-4 h-4" />
                    App Store
                  </Button>
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2 border-primary/50 text-primary hover:bg-primary/10">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2 border-primary/50 text-primary hover:bg-primary/10">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-primary">//</span> About This Project
            </h2>
            <div className="bg-card/60 backdrop-blur-sm border border-border rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-primary">//</span> Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card/60 backdrop-blur-sm border border-border hover:border-primary/50 rounded-lg p-4 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-mono text-sm">
                      [{String(index + 1).padStart(2, "0")}]
                    </span>
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal-style footer */}
          <div className="bg-card/80 border border-border rounded-lg p-4 font-mono text-sm">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <span className="text-primary">$</span>
              <span>project.status</span>
            </div>
            <div className="text-primary animate-pulse">
              → Active Development
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectDetail;
