import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

export default function FeaturedTechnologiesSection() {
  return (
    <section
      id="featured-technologies"
      className="py-20 bg-slate-950 text-slate-50"
    >
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle>Featured Technologies</SectionTitle>
          <p className="mt-4 text-slate-300">
            Placeholder list of key technologies and tooling.
          </p>
        </div>
      </Container>
    </section>
  );
}
