import { useNavigate } from "react-router-dom";
import { projects } from "@/lib/projects";

const ProjectCircle = () => {
  const navigate = useNavigate();

  return (
    <section className="flex justify-center gap-8 mt-16">
      {projects.map((project) => (
        <button
          key={project.id}
          onClick={() => navigate(`/projects/${project.id}`)}
          className="w-20 h-20 rounded-full bg-neutral-900 border border-neutral-700
                     hover:scale-110 transition flex items-center justify-center"
        >
          <img
            src={project.logo}
            alt={project.name}
            className="w-10 h-10 object-contain"
          />
        </button>
      ))}
    </section>
  );
};

export default ProjectCircle;
