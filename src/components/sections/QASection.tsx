import { motion } from "framer-motion";
import { TbTestPipe, TbBug, TbChecks, TbShieldCheck, TbClipboardCheck, TbRadar2 } from "react-icons/tb";
import { qa } from "@/data/portfolio";

const cardTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
};

const qaFlow = [
  {
    label: "Plan",
    text: "I turn product requirements into clear test coverage before issues become expensive.",
    icon: TbClipboardCheck,
  },
  {
    label: "Inspect",
    text: "I validate flows, edge cases, responsiveness, and user journeys across real scenarios.",
    icon: TbRadar2,
  },
  {
    label: "Protect",
    text: "I document bugs clearly and verify fixes so releases stay stable after deployment.",
    icon: TbShieldCheck,
  },
];

export const QASection = () => {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] xl:items-start">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={cardTransition}
        className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-5 shadow-soft sm:p-8 lg:p-10"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-accent/10 via-transparent to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-4rem] top-[-3rem] h-56 w-56 rounded-full bg-gradient-soft opacity-80 blur-3xl"
        />

        <div className="relative">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex min-w-0 items-start gap-4">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="grid h-14 w-14 place-items-center rounded-2xl bg-foreground text-background shadow-elegant"
              >
                <TbTestPipe className="h-6 w-6" />
              </motion.span>

              <div className="min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  QA Engineer
                </p>
                <h3 className="mt-1 text-balance font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {qa.company}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{qa.duration}</p>
              </div>
            </div>

            <span className="inline-flex w-fit max-w-full items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-foreground shadow-soft">
              <TbShieldCheck className="h-3.5 w-3.5 text-accent" />
              Quality-first delivery
            </span>
          </div>

          <div className="mt-8 grid gap-6 lg:gap-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)]">
            <div className="min-w-0">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {qa.summary}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {qa.why}
              </p>

              <div className="mt-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Tools I use
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {qa.tools.map((tool, index) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.2 + index * 0.04 }}
                      className="rounded-full border border-border bg-background/90 px-3.5 py-1.5 text-xs font-medium text-foreground shadow-soft transition-colors hover:bg-secondary"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-background/70 p-5 sm:p-6">
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/20"
              />
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/25"
              />

              <div className="relative grid gap-4 md:grid-cols-3 xl:grid-cols-1">
                {qaFlow.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -18 : 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.12 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="relative flex h-full items-start gap-3 rounded-2xl border border-border bg-card/90 p-4 shadow-soft backdrop-blur"
                    >
                      <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-secondary text-foreground">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ ...cardTransition, delay: 0.08 }}
        className="space-y-4"
      >
        <div className="mb-1 flex items-center justify-between px-1">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            How I work
          </span>
          <span className="font-mono text-[11px] text-muted-foreground">
            {String(qa.bullets.length).padStart(2, "0")} checks
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          {qa.bullets.map((bullet, index) => (
            <motion.div
              key={bullet}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: 0.08 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-card p-5 shadow-soft transition-colors hover:border-foreground/15"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-accent/8 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />

              <div className="relative flex items-start gap-4">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-accent-soft text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                  {index % 2 === 0 ? (
                    <TbChecks className="h-5 w-5" />
                  ) : (
                    <TbBug className="h-5 w-5" />
                  )}
                </span>

                <div className="flex-1 pt-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <p className="mt-2 text-sm font-medium leading-snug sm:text-base">
                    {bullet}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
