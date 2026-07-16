import { useState } from "react";
import type { Project } from "../../types/project";
import Card from "../ui/Card";
import Chip from "../ui/Chip";
import Button from "../ui/Button";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(project.image) && !imageFailed;

  return (
    <Card className="group flex h-full flex-col overflow-hidden">
      <div className="overflow-hidden bg-slate-800">
        {showImage ? (
          <img
            src={project.image}
            alt={`${project.title} project screenshot`}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="aspect-[16/9] w-full object-cover rounded-t-2xl transition-transform duration-300 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full min-h-[180px] items-center justify-center bg-slate-800 text-slate-500">
            Project image placeholder
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white">{project.title}</h2>
          <p className="text-slate-300">{project.shortDescription}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>

        <div className="mt-6 flex flex-row flex-wrap items-center gap-3">
          <Button
            as="a"
            href={project.githubUrl}
            variant="secondary"
            className="w-full sm:w-auto"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            GitHub
          </Button>
          <Button
            as="a"
            href={project.liveDemoUrl}
            variant="secondary"
            className="w-full sm:w-auto"
            aria-label={`View ${project.title} live demo`}
          >
            Live Demo
          </Button>
        </div>
      </div>
    </Card>
  );
}
