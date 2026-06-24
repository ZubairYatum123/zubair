import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/Section";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ServicesNetwork } from "@/components/sections/ServicesNetwork";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { QASection } from "@/components/sections/QASection";
import { CTABanner } from "@/components/sections/CTABanner";
import { projects } from "@/data/portfolio";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <>
      <Hero />
      <TechMarquee />

      <Section
        id="services"
        eyebrow="01 / What I do"
        title={
          <>
            Services tailored for{" "}
            <span className="gradient-text">startups & founders</span>
          </>
        }
        description="From idea to launch, I cover the full product lifecycle: development, integration, and quality assurance."
      >
        <div className="space-y-8">
          <ServicesNetwork />
          {/* <ServicesGrid /> */}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="02 / Selected work"
        title={
          <>
            Recent <span className="italic font-light text-muted-foreground">projects</span>
          </>
        }
        description="A handful of products I've designed, built and tested end-to-end."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-all hover:scale-[1.02] hover:bg-secondary"
          >
            View all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>

      <Section
        id="qa"
        eyebrow="03 / Quality matters"
        title={
          <>
            QA testing, done{" "}
            <span className="gradient-text italic">properly</span>
          </>
        }
        description="Beyond writing code, I make sure it doesn't break. Here's how I approach quality."
      >
        <QASection />
      </Section>

      <CTABanner />
    </>
  );
};

export default Index;
