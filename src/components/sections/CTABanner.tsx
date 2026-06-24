import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTABanner = () => {
  return (
    <div className="container-narrow pb-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2rem] bg-foreground p-8 text-background shadow-elegant sm:p-14 md:p-16"
      >
        {/* Decorative gradient blobs */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-primary-glow/30 blur-3xl" />

        {/* Grid pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative grid gap-10 sm:grid-cols-[1.5fr_1fr] sm:items-center">
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/5 px-3 py-1 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-background/80">
                Let&apos;s work together
              </span>
            </div>

            <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
              Have an idea?{" "}
              <span className="italic font-light text-background/60">
                Let&apos;s ship it
              </span>{" "}
              — fast, tested, and built to last.
            </h3>

            <p className="mt-5 max-w-xl text-sm text-background/70 sm:text-base">
              Whether it&apos;s a Fiverr gig or a long-term build, I&apos;d love to
              hear what you&apos;re working on.
            </p>

            {/* Availability indicator */}
            <div className="mt-6 inline-flex items-center gap-2 text-xs text-background/60">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Currently accepting new projects
            </div>
          </div>

          <div className="flex flex-col items-stretch gap-3 sm:items-end">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:scale-[1.03] hover:shadow-elegant"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-background/20 px-6 py-3.5 text-sm font-medium text-background/90 transition-colors hover:bg-background/10"
            >
              See past work
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};