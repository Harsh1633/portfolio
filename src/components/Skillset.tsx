import React, { useState } from "react";
import { skillsetData, SkillSection } from "@/data/skillsetdata";

const getRandomMatrixColor = () =>
  Math.random() > 0.5 ? "0 100% 50%" : "220 100% 50%";

const Skillset: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SkillSection>(
    skillsetData[0]
  );
  const [lhsColor, setLhsColor] = useState(getRandomMatrixColor());

  const handleSelect = (
    section: SkillSection,
    el: HTMLButtonElement
  ) => {
    setActiveSection(section);

    const color = getRandomMatrixColor();
    setLhsColor(color);

    // same pattern as your existing file
    el.style.setProperty("--matrix-red-blue", color);
  };

  return (
    <section className="py-20 px-6" id="skillset">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My Engineering Toolkit
        </h2>
        <div className="w-24 h-1 bg-primary mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT SIDEBAR */}
          <div className="space-y-4">
            {skillsetData.map((section) => {
              const isActive = activeSection.id === section.id;

              return (
                <button
                  key={section.id}
                  onClick={(e) =>
                    handleSelect(section, e.currentTarget)
                  }
                  className={`w-full text-left p-4 rounded-lg border transition-all
                    ${
                      isActive
                        ? "border-[hsl(var(--lhs-color))]"
                        : "border-border hover:border-muted-foreground"
                    }
                  `}
                  style={
                    isActive
                        ? ({
                            "--lhs-color": lhsColor,
                            color: `hsl(${lhsColor})`,
                        } as React.CSSProperties)
                        : undefined
                        }

                >
                  <h4 className="font-semibold">
                    {section.label}
                  </h4>
                  <p
                    className={`text-sm ${
                      isActive
                        ? "opacity-80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {section.stack}
                  </p>
                </button>
              );
            })}
          </div>

          {/* RIGHT CONTENT — COMPLETELY NEUTRAL */}
          <div className="md:col-span-2 relative">
  <div className="bg-background/80 backdrop-blur-sm border border-matrix-green/30 rounded-lg p-6 relative overflow-hidden space-y-6">

    {/* Optional glow – matches Connect */}
    <div className="absolute -top-20 -right-20 w-40 h-40 bg-matrix-green/10 rounded-full blur-3xl pointer-events-none" />

    <h3 className="text-2xl font-semibold text-foreground">
      {activeSection.label}
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {activeSection.skills.map((skill) => (
        <div
          key={skill.title}
          className="p-4 rounded-lg border border-matrix-green/20 bg-background/60"
        >
          <h4 className="font-semibold text-foreground">
            {skill.title}
          </h4>
          <p className="text-sm text-muted-foreground">
            {skill.description}
          </p>
        </div>
      ))}
    </div>

    {activeSection.usagePatterns && (
      <div className="p-5 rounded-lg border border-matrix-green/20 bg-background/60">
        <h4 className="font-semibold mb-3 text-foreground">
          Usage Patterns
        </h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          {activeSection.usagePatterns.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Skillset;
