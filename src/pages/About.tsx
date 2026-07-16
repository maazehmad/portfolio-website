import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Chip from "../components/ui/Chip";
import { spacing } from "../constants/spacing";
import { about } from "../data/about";
import { certifications } from "../data/certifications";
import { education } from "../data/education";
import { experience } from "../data/experience";
import { skills } from "../data/skills";
import { site } from "../constants/site";
import { techStack } from "../data/techStack";

const formatDuration = (startDate: string, endDate?: string) =>
  `${startDate} — ${endDate ?? "Present"}`;

export default function About() {
  return (
    <main className="bg-slate-950 text-slate-50">
      <Container className={`${spacing.sectionGap} ${spacing.sectionPadding}`}>
        <section className="space-y-6">
          <div className="max-w-3xl">
            <SectionTitle className="text-left">About Me</SectionTitle>
            <div className="mt-4 space-y-4">
              {about.summary.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-slate-300 leading-8 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-slate-900 p-8 md:p-10">
          <SectionTitle className="text-left">Education</SectionTitle>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {education.map((item) => (
              <Card key={item.id} className="bg-slate-950/20 border-slate-800">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                  {formatDuration(item.startDate, item.endDate)}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {item.degree}
                </h3>
                <p className="mt-2 text-slate-300">{item.institution}</p>
                {item.location ? (
                  <p className="mt-2 text-sm text-slate-500">{item.location}</p>
                ) : null}
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 p-8 md:p-10 rounded-2xl">
          <SectionTitle className="text-left">Experience</SectionTitle>
          <div className="mt-6 space-y-6">
            {experience.map((item) => (
              <Card key={item.id} className="bg-slate-900 border-slate-800 p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                      {item.company}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-slate-300">{item.employmentType}</p>
                  </div>
                  <div className="text-right text-sm text-slate-400">
                    <p>{formatDuration(item.startDate, item.endDate)}</p>
                    {item.location ? <p>{item.location}</p> : null}
                  </div>
                </div>

                {item.description ? (
                  <p className="mt-6 text-slate-300 leading-7">
                    {item.description}
                  </p>
                ) : null}

                {item.highlights?.length ? (
                  <ul className="mt-6 space-y-3 pl-5 text-slate-300 list-disc">
                    {item.highlights.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}

                {item.technologies?.length ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <Chip key={tech}>{tech}</Chip>
                    ))}
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-slate-900 p-8 md:p-10">
          <SectionTitle className="text-left">Technical Skills</SectionTitle>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Chip key={skill}>{skill}</Chip>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 rounded-2xl p-8 md:p-10">
          <SectionTitle className="text-left">Tech Stack</SectionTitle>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {techStack.map((category) => (
              <Card
                key={category.category}
                className="bg-slate-900 border-slate-800 p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {category.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-slate-900 p-8 md:p-10">
          <SectionTitle className="text-left">Certifications</SectionTitle>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {certifications.map((certificate) => {
              const cardContent = (
                <Card className="bg-slate-950/10 border-slate-800 p-6 hover:bg-slate-950/30">
                  <h3 className="text-lg font-semibold text-white">
                    {certificate.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">
                    {certificate.organization}
                  </p>
                  {certificate.year ? (
                    <p className="mt-2 text-xs uppercase tracking-[0.22em] text-slate-500">
                      {certificate.year}
                    </p>
                  ) : null}
                </Card>
              );

              return certificate.credentialUrl ? (
                <a
                  key={certificate.title}
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${certificate.title} credential from ${certificate.organization}`}
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-2xl"
                >
                  {cardContent}
                </a>
              ) : (
                <div key={certificate.title}>{cardContent}</div>
              );
            })}
          </div>
        </section>

        <section className="rounded-2xl bg-slate-950 p-8 md:p-10">
          <Card className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center bg-slate-900 border-slate-800 p-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-white">
                Ready to review my full experience?
              </h2>
              <p className="mt-3 text-slate-300 leading-7">
                Download my CV to see the complete portfolio of projects,
                certifications, and technical accomplishments.
              </p>
            </div>
            <Button
              type="button"
              variant="primary"
              className="whitespace-nowrap"
              onClick={() =>
                window.open(site.resumeUrl, "_blank", "noopener,noreferrer")
              }
            >
              Download CV
            </Button>
          </Card>
        </section>
      </Container>
    </main>
  );
}
