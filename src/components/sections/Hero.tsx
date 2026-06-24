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
        <div className="absolute left-1/2 top-[-10%] h-[460px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-soft opacity-70 blur-3xl sm:h-[540px] sm:w-[880px] xl:h-[640px] xl:w-[1080px]" />
        <div className="absolute left-[8%] top-[18%] h-28 w-28 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-[8%] right-[6%] h-36 w-36 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container-narrow pb-16 pt-12 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28 xl:pt-32">
        <div className="max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-3 rounded-full border border-border bg-card/80 px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground shadow-soft backdrop-blur sm:px-4 sm:text-[11px] sm:tracking-[0.22em]"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            Muhammad Zubair Shehzad
          </motion.div>

          <div className="mt-6 grid gap-8 lg:mt-8 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-center xl:grid-cols-[minmax(0,1fr)_280px] xl:gap-12">
            <div className="order-2 lg:order-1">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="max-w-4xl font-display text-[2.65rem] font-normal leading-[0.98] tracking-tight text-balance sm:text-5xl md:text-[3.7rem] lg:text-[4.5rem] xl:text-[5.15rem]"
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
              className="relative order-1 mx-auto w-full max-w-[200px] sm:max-w-[220px] lg:order-2 lg:mx-0 lg:max-w-[240px] xl:max-w-[280px]"
            >
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/15 via-white to-accent/15 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-elegant">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-secondary">
                  <img
                    src="/2.png"
                    alt={profile.name}
                    className="h-[250px] w-full object-cover object-top sm:h-[280px] lg:h-[320px] xl:h-[360px]"
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
            className="mt-5 max-w-3xl text-[15px] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg xl:max-w-4xl"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3"
          >
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs text-primary sm:px-4 sm:text-sm"
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
            className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] sm:justify-start"
            >
              Hire me
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:justify-start"
            >
              View projects
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.34 }}
            className="mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-4"
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
