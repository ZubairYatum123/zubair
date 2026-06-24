import { Section } from "@/components/Section";
import { profile, techStack } from "@/data/portfolio";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Mail } from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";

const About = () => {
  return (
    <>
      <Section
        eyebrow="About me"
        title={<>Hi, I'm Zubair — a developer who <span className="gradient-text">cares about quality</span>.</>}
        description={profile.longIntro}
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border bg-card p-8 shadow-soft"
          >
            <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-secondary to-accent-soft">
              <img
                src="/2.png"
                alt="Professional photo"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-muted-foreground" />{profile.location}</li>
              <li className="flex items-center gap-3"><GraduationCap className="h-4 w-4 text-muted-foreground" />{profile.education}</li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${profile.email}`} className="hover:text-foreground">{profile.email}</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h3 className="font-display text-xl font-semibold">My approach</h3>
              <p className="mt-3 text-muted-foreground">
                I treat every project like it's my own. That means clean architecture, careful state management, accessible UIs, and tests that actually catch regressions. I communicate clearly, ship on time, and stick around after launch.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h3 className="font-display text-xl font-semibold">Tech I work with</h3>
              <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4">
                {techStack.map((t) => {
                  const Icon = t.icon;
                  return (
                    <div key={t.name} className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-secondary/40 p-4 text-center">
                      <Icon className="h-6 w-6" />
                      <span className="text-xs font-medium">{t.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
};

export default About;
