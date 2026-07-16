import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { projects } from "../data/projects";
import ProjectCard from "../components/cards/ProjectCard";
import { spacing } from "../constants/spacing";

export default function Projects() {
  return (
    <main className="bg-slate-950 text-slate-50">
      <Container className={`${spacing.sectionGap} ${spacing.sectionPadding}`}>
        <section className="pl-4 md:pl-6 lg:pl-8">
          <div className="max-w-3xl">
            <SectionTitle>Projects</SectionTitle>
            <p className="mt-4 text-slate-300">
              A curated selection of recent portfolio work built with AI, MLOps,
              and data engineering best practices.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
