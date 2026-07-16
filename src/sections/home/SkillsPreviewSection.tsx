import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

export default function SkillsPreviewSection() {
  return (
    <section id="skills-preview" className="py-20 bg-slate-900 text-slate-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle>Skills Preview</SectionTitle>
          <p className="mt-4 text-slate-300">
            Placeholder knowledge domains and skills overview.
          </p>
        </div>
      </Container>
    </section>
  );
}
