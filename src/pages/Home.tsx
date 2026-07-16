import HeroSection from "../sections/home/HeroSection";
import ProfessionalSummarySection from "../sections/home/ProfessionalSummarySection";
import FeaturedProjectsSection from "../sections/home/FeaturedProjectsSection";
import CallToActionSection from "../sections/home/CallToActionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProfessionalSummarySection />
      <FeaturedProjectsSection />
      <CallToActionSection />
    </>
  );
}
