import TimelinePath from "./TimelinePath";
import TimelineNode from "./TimelineNode";
import TimelineCard from "./TimelineCard";
import { projects } from "@/lib/projects";

const ProjectsTimeline = () => {
  return (
   <section className="relative h-[900px] mt-32">
  <TimelinePath />

  {/* Project 1 */}
  <TimelineNode id={projects[0].id} logo={projects[0].logo} x="48%" y="140px" />
  <TimelineCard
    title={projects[0].name}
    subtitle={projects[0].tech.join(" · ")}
    description={projects[0].description}
    side="right"
    y="120px"
  />

  {/* Project 2 */}
  <TimelineNode id={projects[1].id} logo={projects[1].logo} x="25%" y="520px" />
  <TimelineCard
    title={projects[1].name}
    subtitle={projects[1].tech.join(" · ")}
    description={projects[1].description}
    side="left"
    y="500px"
  />

  {/* Project 3 */}
  <TimelineNode id={projects[2].id} logo={projects[2].logo} x="75%" y="300px" />
  <TimelineCard
    title={projects[2].name}
    subtitle={projects[2].tech.join(" · ")}
    description={projects[2].description}
    side="right"
    y="280px"
  />
</section>

  );
};

export default ProjectsTimeline;
