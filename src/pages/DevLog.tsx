import ScrollReveal from "@/components/ScrollReveal";

const entries = [
  {
    version: "0.4.1",
    date: "2026-02-08",
    focus: "Tolerance drain curve refinement under sustained compressor exposure",
  },
  {
    version: "0.4.0",
    date: "2026-01-28",
    focus: "False Reliever timing offset calibration — mislead window narrowed to 120ms",
  },
  {
    version: "0.3.5",
    date: "2026-01-15",
    focus: "Pressure Leech drain rate balanced against passive tolerance recovery",
  },
  {
    version: "0.3.0",
    date: "2025-12-20",
    focus: "Core pressure curve redesign — exponential buildup replaces linear model",
  },
  {
    version: "0.2.2",
    date: "2025-12-05",
    focus: "Input timing precision — tap window tightened to 200ms threshold",
  },
  {
    version: "0.2.0",
    date: "2025-11-18",
    focus: "Tolerance Rating system introduced — cumulative mastery metric",
  },
  {
    version: "0.1.0",
    date: "2025-10-30",
    focus: "Initial prototype — core auto-move and manual pressure release loop",
  },
];

const DevLog = () => {
  return (
    <main className="pt-24">
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-ultra-wide font-mono text-muted-foreground uppercase mb-6">
              Progress
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-8">
              Development Log
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="w-12 h-px bg-accent" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          {entries.map((entry, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="py-8 border-b border-border/50 group">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xs font-mono text-foreground font-medium">
                    v{entry.version}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {entry.date}
                  </span>
                </div>
                <p className="text-sm font-light text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-500">
                  {entry.focus}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default DevLog;
