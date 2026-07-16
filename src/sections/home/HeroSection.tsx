import { useNavigate } from "react-router-dom";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { site } from "../../constants/site";
import { spacing } from "../../constants/spacing";

export default function HeroSection() {
  const navigate = useNavigate();
  const hasProfileImage = Boolean(site.profileImage);

  return (
    <section
      id="home"
      className={`min-h-[90vh] bg-slate-950 text-slate-50 ${spacing.sectionPadding}`}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="order-2 lg:order-1 lg:pl-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
              Hello, I&apos;m
            </p>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight leading-tight text-white sm:text-6xl">
              {site.fullName}
            </h1>
            <p className="mt-3 text-2xl font-semibold leading-tight text-slate-300">
              {site.professionalTitle}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {site.heroSummary}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                variant="primary"
                className="w-full sm:w-auto"
                onClick={() => navigate("/projects")}
              >
                View Projects
              </Button>
              <Button
                variant="secondary"
                className="w-full sm:w-auto"
                onClick={() => navigate("/contact")}
              >
                Contact Me
              </Button>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            {hasProfileImage ? (
              <img
                src={site.profileImage}
                alt={`Photo of ${site.fullName}`}
                loading="lazy"
                className="h-auto w-full max-w-md rounded-2xl border border-slate-800 object-cover shadow-sm"
              />
            ) : (
              <div className="flex h-[380px] w-full max-w-md items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 shadow-sm">
                <span className="text-slate-500">
                  Professional profile image placeholder
                </span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
