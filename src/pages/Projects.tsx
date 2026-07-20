import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import ProjectCard from "../components/cards/ProjectCard";
import { projects } from "../data/projects";
import { spacing } from "../constants/spacing";

export default function Projects() {
  return (
    <main className="bg-slate-950 text-slate-50">
      <Container className={`${spacing.sectionGap} ${spacing.sectionPadding}`}>
        <section className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <SectionTitle>Projects</SectionTitle>
            <p className="mt-4 text-slate-300">
              A curated selection of recent portfolio work built with AI, MLOps,
              and data engineering best practices.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-[1300px] grid-cols-1 gap-8 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
