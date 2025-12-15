import React from "react";
import { Link } from "react-router-dom";
import { projects, iconMap } from "@/data/projects";

const ProjectsTimeline: React.FC = () => {
  return (
    <section className="py-20 px-6 relative" id="projects">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground matrix-text-glow mb-4">
          Current Focus
        </h2>
        <div className="w-24 h-1 bg-primary mb-6" />
        <p className="text-muted-foreground text-lg max-w-md">
          What I'm actively building, improving, and exploring right now.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

        {/* Projects */}
        <div className="space-y-12 md:space-y-0">
          {projects.map((project, index) => {
            const IconComponent = iconMap[project.icon];
            const isLeft = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } md:mb-16`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:flex">
                  <div className="w-14 h-14 rounded-full bg-card border-2 border-primary flex items-center justify-center animate-glow-pulse">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Card */}
                <Link
                  to={`/project/${project.id}`}
                  className={`w-full md:w-5/12 ${
                    isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                  }`}
                >
                  <div className="group relative bg-card/80 backdrop-blur-sm border border-border hover:border-primary/60 rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] cursor-pointer">
                    {/* Mobile Icon */}
                    <div className="md:hidden w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center mb-4 animate-glow-pulse">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>

                    {/* Date */}
                    <span className="text-xs font-mono text-muted-foreground tracking-wider">
                      {project.date}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Hover Arrow */}
                    <div className={`mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity ${
                      isLeft ? "md:justify-end" : "md:justify-start"
                    }`}>
                      <span className="text-sm font-mono">View Details</span>
                      <span className="animate-pulse">→</span>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                </Link>

                {/* Connection Line (horizontal) */}
                <div
                  className={`hidden md:block absolute top-1/2 w-16 h-0.5 bg-gradient-to-r ${
                    isLeft
                      ? "from-transparent to-primary right-1/2 mr-7"
                      : "from-primary to-transparent left-1/2 ml-7"
                  }`}
                  style={{ transform: "translateY(-50%)" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsTimeline;
