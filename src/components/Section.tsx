import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  id?: string;
  align?: "left" | "center";
};

export const Section = ({ eyebrow, title, description, children, className, id, align = "left" }: Props) => {
  return (
    <section id={id} className={cn("container-narrow py-16 sm:py-24", className)}>
      {(eyebrow || title || description) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={cn("mb-12 max-w-2xl", align === "center" && "mx-auto text-center")}
        >
          {eyebrow && (
            <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
};
