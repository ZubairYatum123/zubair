import { techStack } from "@/data/portfolio";

export const TechMarquee = () => {
  const items = [...techStack, ...techStack];
  const reversed = [...techStack.slice().reverse(), ...techStack.slice().reverse()];

  return (
    <div className="relative overflow-hidden border-y border-border bg-secondary/30">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      {/* Label */}
      <div className="container-narrow flex items-center justify-between pt-6">
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Stack & Tools
        </span>
        <span className="hidden sm:inline text-xs text-muted-foreground">
          Tried, tested, shipped in production
        </span>
      </div>

      {/* Row 1 — left to right */}
      <div className="py-5">
        <div
          className="flex gap-10 whitespace-nowrap"
          style={{ animation: "marquee-left 35s linear infinite" }}
        >
          {items.map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={`row1-${i}`}
                className="group flex flex-none items-center gap-2.5 rounded-full border border-border bg-card/60 px-5 py-2 backdrop-blur transition-colors hover:border-foreground/30"
              >
                <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                  {t.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="pb-6">
        <div
          className="flex gap-10 whitespace-nowrap"
          style={{ animation: "marquee-right 40s linear infinite" }}
        >
          {reversed.map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={`row2-${i}`}
                className="group flex flex-none items-center gap-2.5 rounded-full border border-border/60 bg-card/40 px-5 py-2 backdrop-blur transition-colors hover:border-foreground/30"
              >
                <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                  {t.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0) }
          to { transform: translateX(-50%) }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%) }
          to { transform: translateX(0) }
        }
      `}</style>
    </div>
  );
};