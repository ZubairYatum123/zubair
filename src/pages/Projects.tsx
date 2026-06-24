import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { projects } from "@/data/portfolio";

const Projects = () => {
  return (
    <>
      <Section
        eyebrow="Selected work"
        title="Projects"
        description="A handful of products I've shipped — built end-to-end with the MERN stack and Next.js."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
};

export default Projects;
