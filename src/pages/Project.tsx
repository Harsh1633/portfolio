import { useParams } from "react-router-dom";
import { projects } from "@/lib/projects";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="p-8">Project not found</div>;
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="flex items-center gap-4 mb-6">
        <img src={project.logo} className="w-12 h-12" />
        <h1 className="text-3xl font-bold">{project.name}</h1>
      </div>

      <p className="text-muted-foreground mb-8">
        {project.description}
      </p>

      <div className="mb-8">
        <h3 className="font-semibold mb-2">Tech Stack</h3>
        <div className="flex gap-2 flex-wrap">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-neutral-800 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        {project.playStoreUrl && (
          <a
            href={project.playStoreUrl}
            target="_blank"
            className="px-4 py-2 rounded bg-green-600 text-white"
          >
            Play Store
          </a>
        )}

        {project.appStoreUrl && (
          <a
            href={project.appStoreUrl}
            target="_blank"
            className="px-4 py-2 rounded bg-blue-600 text-white"
          >
            App Store
          </a>
        )}
      </div>
    </main>
  );
};

export default ProjectPage;
