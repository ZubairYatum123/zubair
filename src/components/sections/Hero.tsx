import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/portfolio";

const highlights = [
  "Full-stack web apps",
  "QA-driven delivery",
  "Modern React and Next.js",
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-8%] h-[560px] w-[920px] -translate-x-1/2 rounded-full bg-gradient-soft opacity-70 blur-3xl" />
        <div className="absolute left-[8%] top-[18%] h-28 w-28 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-[8%] right-[6%] h-36 w-36 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container-narrow pb-20 pt-16 sm:pt-24 lg:pb-28 lg:pt-32">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-3 rounded-full border border-border bg-card/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground shadow-soft backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            Muhammad Zubair Shehzad
          </motion.div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center">
            <div className="order-2 lg:order-1">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="max-w-3xl font-display text-4xl font-normal leading-[1.02] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-[4.2rem]"
              >
                Full-stack developer building{" "}
                <span className="gradient-text italic">clean, reliable</span>
                <br className="hidden md:block" />
                digital products for the web.
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="relative order-1 mx-auto w-full max-w-[190px] lg:order-2 lg:mx-0"
            >
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/15 via-white to-accent/15 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-elegant">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-secondary">
                  <img
                    src="/2.png"
                    alt={profile.name}
                    className="h-[240px] w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent px-4 pb-4 pt-14">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/75">
                      {profile.role}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-3 top-4 rounded-2xl border border-primary/10 bg-white/95 px-3 py-2 shadow-soft backdrop-blur">
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Status</p>
                <div className="mt-1 inline-flex items-center gap-2 text-xs font-semibold text-foreground">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Available
                </div>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm text-primary"
              >
                <CheckCircle2 className="h-4 w-4" />
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Hire me
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              View projects
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.34 }}
            className="mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {profile.stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-border bg-card/70 p-4 shadow-soft">
                <dd className="font-display text-2xl font-semibold tracking-tight text-foreground">{item.value}</dd>
                <dt className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{item.label}</dt>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
};
