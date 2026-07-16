import { useNavigate } from "react-router-dom";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/cards/ProjectCard";
import { spacing } from "../../constants/spacing";

export default function FeaturedProjectsSection() {
  const navigate = useNavigate();
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <section
      id="featured-projects"
      className={`bg-slate-950 text-slate-50 ${spacing.sectionPadding}`}
    >
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle>Featured Projects</SectionTitle>
          <p className="mt-4 text-slate-300">
            A selection of the most impactful work, highlighting AI, MLOps, and
            data engineering projects.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button onClick={() => navigate("/projects")}>
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
