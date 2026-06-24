import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { services } from "@/data/portfolio";

export const ServicesGrid = () => {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {services.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant sm:p-8"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-soft opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold sm:text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              <ul className="mt-5 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
};
