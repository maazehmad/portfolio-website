import { useNavigate } from "react-router-dom";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";
import { about } from "../../data/about";
import { spacing } from "../../constants/spacing";

export default function ProfessionalSummarySection() {
  const navigate = useNavigate();
  const preview = about.summary[0];

  return (
    <section
      id="professional-summary"
      className={`bg-slate-900 text-slate-50 ${spacing.sectionPadding}`}
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle>Professional Summary</SectionTitle>
          <p className="mt-4 text-slate-300 leading-8 sm:text-lg">{preview}</p>
          <div className="mt-8 flex justify-center">
            <Button onClick={() => navigate("/about")}>Learn More</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
