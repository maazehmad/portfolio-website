import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { contact } from "../data/contact";
import { site } from "../constants/site";
import { spacing } from "../constants/spacing";

const contactItems = [
  {
    title: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    ariaLabel: `Email ${site.fullName}`,
  },
  {
    title: "GitHub",
    value: site.githubUrl.replace(/^https?:\/\//, ""),
    href: site.githubUrl,
    ariaLabel: "Visit GitHub profile",
  },
  {
    title: "LinkedIn",
    value: site.linkedInUrl.replace(/^https?:\/\//, ""),
    href: site.linkedInUrl,
    ariaLabel: "Visit LinkedIn profile",
  },
  {
    title: "Location",
    value: site.location,
    href: undefined,
    ariaLabel: `Location: ${site.location}`,
  },
];

export default function Contact() {
  return (
    <main className="bg-slate-950 text-slate-50">
      <Container className={`${spacing.sectionGap} ${spacing.sectionPadding}`}>
        <section className="space-y-6">
          <SectionTitle className="text-left">
            {contact.pageHeading}
          </SectionTitle>
          <div className="max-w-3xl space-y-4 text-slate-300">
            <p className="text-lg leading-8">{contact.subtitle}</p>
            <p className="text-base leading-7 text-slate-400">
              {contact.intro}
            </p>
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-2">
          {contactItems.map((item) => (
            <Card key={item.title} className="bg-slate-900">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                {item.title}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.ariaLabel}
                  className="mt-4 block text-lg font-semibold text-white transition-colors duration-200 ease-out hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-4 text-lg font-semibold text-white">
                  {item.value}
                </p>
              )}
            </Card>
          ))}
        </section>

        <Card className="rounded-2xl bg-slate-900 text-center p-10">
          <SectionTitle className="text-left">
            Interested in working together?
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 leading-7">
            Explore my complete experience and project portfolio by downloading
            the resume.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              type="button"
              variant="primary"
              onClick={() =>
                window.open(site.resumeUrl, "_blank", "noopener,noreferrer")
              }
            >
              Download CV
            </Button>
          </div>
        </Card>
      </Container>
    </main>
  );
}
