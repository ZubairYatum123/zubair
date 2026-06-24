import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Calendar, Check, Tag } from "lucide-react";
import { projects } from "@/data/portfolio";
import { CTABanner } from "@/components/sections/CTABanner";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <NotFound />;

  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  const textHighlights = project.highlights.filter((h) => !h.startsWith("/"));
  const imageHighlights = project.highlights.filter((h) => h.startsWith("/"));

  return (
    <>
      <section className="container-narrow pb-12 pt-10 sm:pt-14">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Tag className="h-3.5 w-3.5" /> {project.category}
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{project.tagline}</p>

          {/* Live Demo Button */}
          {project.liveDemo && (


            <a href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:scale-[1.03] transition-transform"
            >
              Live Demo <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </motion.div>

        {/* Project image banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-border shadow-elegant"
        >
          {imageHighlights.length > 0 ? (
            <div className={`grid h-full w-full gap-0.5 ${imageHighlights.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
              {imageHighlights.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
              ))}
            </div>
          ) : (
            <div className={`h-full w-full bg-gradient-to-br ${project.accent} grid place-items-center`}>
              <span className="font-display text-6xl font-semibold tracking-tight text-foreground/80 sm:text-7xl md:text-8xl">
                {project.title}
              </span>
            </div>
          )}
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold">Overview</h2>
            <p className="mt-4 text-muted-foreground">{project.description}</p>

            <h2 className="mt-10 font-display text-2xl font-semibold">Highlights</h2>
            <ul className="mt-4 space-y-3">
              {textHighlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-1 grid h-5 w-5 flex-none place-items-center rounded-full bg-accent-soft text-foreground">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Year</p>
              <p className="mt-1 inline-flex items-center gap-2 font-display text-lg font-semibold">
                <Calendar className="h-4 w-4" /> {project.year}
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Tech stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">{s}</span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Category</p>
              <p className="mt-1 font-display text-lg font-semibold">{project.category}</p>
            </div>

            {/* Live Demo card */}
            {project.liveDemo && (
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Live Demo</p>

                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-medium hover:underline"
                >
                  Visit site <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            )}
          </aside>
        </div>

        <div className="mt-16 flex items-center justify-between rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Next project</p>
            <p className="mt-1 font-display text-xl font-semibold">{next.title}</p>
          </div>
          <Link
            to={`/projects/${next.slug}`}
            className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:scale-[1.03] transition-transform"
          >
            View →
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default ProjectDetail;