"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Monitor } from "lucide-react";

// ─── Inline services (6 total — your 4 + 2 new) ────────────────────────────
import {
  Atom,
  Server,
  TestTube2,
  Gauge,
  Database,
  LayoutDashboard,
} from "lucide-react";

const networkServices = [
  {
    title: "Frontend Dev",
    description: "React & modern UI components",
    icon: Atom,
  },
  {
    title: "Backend / Node",
    description: "APIs & server-side logic",
    icon: Server,
  },
  {
    title: "QA & Testing",
    description: "Manual & automated testing",
    icon: TestTube2,
  },
  {
    title: "Performance",
    description: "Load & stress testing",
    icon: Gauge,
  },
  {
    title: "Database & APIs",
    description: "Schema design & integrations",
    icon: Database,
  },
  {
    title: "Design Systems",
    description: "Tokens, components & docs",
    icon: LayoutDashboard,
  },
];

// ─── Node positions — SVG viewBox: 0 0 800 450 | Brain center: (400, 225) ──
const nodeSlots = [
  {
    svgX: 120, svgY: 100,
    css: "top-[14%] left-[10%]",
    path: "M 400 225 C 280 225, 190 155, 128 104",
    float: "up",
  },
  {
    svgX: 80,  svgY: 225,
    css: "top-[50%] left-[6%] -translate-y-1/2",
    path: "M 400 225 C 280 225, 170 225, 112 225",
    float: "down",
  },
  {
    svgX: 120, svgY: 350,
    css: "bottom-[14%] left-[10%]",
    path: "M 400 225 C 280 225, 190 295, 128 346",
    float: "up",
  },
  {
    svgX: 680, svgY: 100,
    css: "top-[14%] right-[10%]",
    path: "M 400 225 C 520 225, 610 155, 672 104",
    float: "down",
  },
  {
    svgX: 720, svgY: 225,
    css: "top-[50%] right-[6%] -translate-y-1/2",
    path: "M 400 225 C 520 225, 630 225, 688 225",
    float: "up",
  },
  {
    svgX: 680, svgY: 350,
    css: "bottom-[14%] right-[10%]",
    path: "M 400 225 C 520 225, 610 295, 672 346",
    float: "down",
  },
];

const floatUpTransition = {
  y: [0, -10, 0],
  rotate: [0, 1.5, 0],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
};
const floatDownTransition = {
  y: [0, 10, 0],
  rotate: [0, -1.5, 0],
  transition: { duration: 3.4, repeat: Infinity, ease: "easeInOut" as const },
};

export const ServicesNetwork = () => {
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    const paths = pathRefs.current.filter(Boolean) as SVGPathElement[];
    paths.forEach((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = String(len);
      p.style.strokeDashoffset = String(len);
      p.style.opacity = "0";
    });

    const DURATION = 1200;
    const STAGGER = 130;
    let rafId: number;
    let startTime: number | null = null;

    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;

      paths.forEach((p, i) => {
        const delay = i * STAGGER;
        const t = Math.max(0, Math.min((elapsed - delay) / DURATION, 1));
        const ease = 1 - Math.pow(1 - t, 3);
        const len = p.getTotalLength();
        p.style.strokeDashoffset = String(len * (1 - ease));
        p.style.opacity = String(ease * 0.75);
      });

      if (elapsed < DURATION + paths.length * STAGGER) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-5 py-8 shadow-soft sm:px-8 sm:py-10 lg:px-12">
      {/* Top accent gradient */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-accent/10 via-transparent to-transparent"
      />

      <div className="relative mx-auto max-w-4xl">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Connected Delivery
          </span>
          <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            One system connecting product, code, and quality
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            The laptop represents development and problem-solving. Each connected
            node is a service I bring into the same delivery flow so your product
            feels consistent from idea to launch.
          </p>
        </motion.div>

        {/* ── Desktop Network (lg+) ── */}
        <div className="mt-10 hidden lg:block">
          <div className="relative mx-auto h-[450px] w-[800px]">

            {/* SVG connector lines */}
            <svg
              aria-hidden
              viewBox="0 0 800 450"
              className="absolute inset-0 h-full w-full overflow-visible"
              preserveAspectRatio="xMidYMid meet"
            >
              {nodeSlots.map((slot, i) => (
                <path
                  key={i}
                  ref={(el) => { pathRefs.current[i] = el; }}
                  d={slot.path}
                  fill="none"
                  stroke="hsl(var(--foreground) / 0.25)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ))}
            </svg>

            {/* ── Laptop center node ── */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              {/* Concentric rings */}
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/10"
              />
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/15"
              />
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/20 bg-secondary/20"
              />

              {/* Center tile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                animate={{ y: [0, -7, 0] }}
                // @ts-ignore
                transition2={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-auto relative z-10 flex h-[86px] w-[86px] items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
                style={{
                  boxShadow:
                    "10px 15px 30px rgba(0,0,0,0.2), -4px -4px 12px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(255,255,255,0.2), inset -2px -2px 5px rgba(0,0,0,0.35)",
                }}
              >
                <Monitor className="h-10 w-10" strokeWidth={1.5} />
              </motion.div>
            </div>

            {/* ── Service icon nodes ── */}
            {networkServices.map((service, index) => {
              const slot = nodeSlots[index];
              const Icon = service.icon;
              const floatAnim =
                slot.float === "up" ? floatUpTransition : floatDownTransition;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                    delay: 0.25 + index * 0.1,
                  }}
                  animate={floatAnim}
                  whileHover={{
                    scale: 1.18,
                    transition: { duration: 0.22, ease: "backOut" },
                  }}
                  className={`absolute ${slot.css} z-20 flex h-[64px] w-[64px] cursor-pointer items-center justify-center rounded-[14px] border border-white/5 bg-[#252525] text-white transition-colors hover:border-white/25`}
                  style={{
                    boxShadow:
                      "10px 15px 25px rgba(0,0,0,0.18), -5px -5px 15px rgba(255,255,255,0.75), inset 2px 2px 5px rgba(255,255,255,0.12), inset -2px -2px 5px rgba(0,0,0,0.45)",
                  }}
                  title={service.title}
                >
                  <Icon className="h-[28px] w-[28px] text-white" strokeWidth={1.7} />
                </motion.div>
              );
            })}
          </div>

          {/* Service label strip */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {networkServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.07 }}
                  className="flex items-center gap-2.5 rounded-2xl border border-border bg-background/60 px-3 py-2.5 backdrop-blur"
                >
                  <div className="grid h-8 w-8 flex-none place-items-center rounded-xl bg-secondary text-foreground">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold leading-tight">
                      {service.title}
                    </p>
                    <p className="mt-0.5 line-clamp-1 text-[11px] leading-snug text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile / Tablet fallback grid ── */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:hidden">
          {networkServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 3.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-3xl border border-border bg-background/90 p-5 shadow-soft"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4 text-base font-semibold">{service.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>

      </div>
    </div>
  );
};