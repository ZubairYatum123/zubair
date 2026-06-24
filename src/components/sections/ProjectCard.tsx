import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

export const ProjectCard = ({ project, index = 0 }: { project: Project; index?: number }) => {
  const textHighlights = project.highlights.filter((h) => !h.startsWith("/"));
  const imageHighlights = project.highlights.filter((h) => h.startsWith("/"));

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group block rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant overflow-hidden"
      >
        {/* Top image area */}
        {/* Top image area */}
<div className="relative aspect-[16/10] overflow-hidden bg-secondary/60">
  {imageHighlights.length > 0 ? (
    <div className={`grid h-full w-full gap-0.5 ${imageHighlights.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
      {imageHighlights.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`${project.title} screenshot ${idx + 1}`}
          className="h-full w-full object-contain p-3"
        />
      ))}
    </div>
  ) : (
    <div className={`h-full w-full bg-gradient-to-br ${project.accent} grid place-items-center`}>
      <span className="font-display text-5xl font-semibold tracking-tight text-foreground/80 sm:text-6xl">
        {project.title}
      </span>
    </div>
  )}

  <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-card/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
    {project.category}
  </div>
</div>

        {/* Info row */}
        <div className="flex items-start justify-between gap-4 p-6">
          <div>
            <h3 className="font-display text-xl font-semibold">{project.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.slice(0, 4).map((t) => (
                <span key={t} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-1">
              {textHighlights.map((highlight, idx) => (
                <p key={idx} className="text-sm text-muted-foreground">
                  • {highlight}
                </p>
              ))}
            </div>
          </div>
          <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-secondary transition-all group-hover:bg-foreground group-hover:text-background">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};