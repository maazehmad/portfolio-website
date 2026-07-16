import { useNavigate } from "react-router-dom";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";
import { spacing } from "../../constants/spacing";

export default function CallToActionSection() {
  const navigate = useNavigate();

  return (
    <section
      id="call-to-action"
      className={`bg-slate-900 text-slate-50 ${spacing.sectionPadding}`}
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center rounded-2xl border border-slate-800 bg-slate-950/40 p-10">
          <SectionTitle>Interested in working together?</SectionTitle>
          <p className="mt-4 text-slate-300 leading-8">
            If you are looking for a collaborator on AI, data engineering, or
            full-stack projects, let&apos;s connect and build something
            impactful.
          </p>
          <div className="mt-8 flex justify-center">
            <Button onClick={() => navigate("/contact")}>Contact Me</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
