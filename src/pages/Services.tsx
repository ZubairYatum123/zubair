import { Section } from "@/components/Section";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ServicesNetwork } from "@/components/sections/ServicesNetwork";
import { QASection } from "@/components/sections/QASection";
import { CTABanner } from "@/components/sections/CTABanner";

const Services = () => {
  return (
    <>
      <Section
        eyebrow="Services"
        title={
          <>
            What I can <span className="gradient-text">build for you</span>
          </>
        }
        description="Full-stack development and QA testing, pick what you need, or hire me end-to-end."
      >
        <div className="space-y-8">
          <ServicesNetwork />
          {/* <ServicesGrid /> */}
        </div>
      </Section>

      <Section
        eyebrow="Quality Assurance"
        title="QA testing, integrated"
        description="Most clients hire me for both: building and breaking. Here's what's included."
      >
        <QASection />
      </Section>

      <CTABanner />
    </>
  );
};

export default Services;
