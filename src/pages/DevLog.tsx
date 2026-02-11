import ScrollReveal from "@/components/ScrollReveal";

const entries = [
  {
    version: "0.14",
    date: "2026-02-08",
    focus: "Pressure Curve Adjustment",
    details: [
      "Reduced early-game forgiveness.",
      "Increased recovery reward window.",
    ],
    outcome: "Fewer panic ruptures. Higher skill separation.",
  },
  {
    version: "0.13",
    date: "2026-01-28",
    focus: "False Reliever timing offset calibration",
    details: [
      "Mislead window narrowed to 120ms.",
      "Visual cue subtlety increased.",
    ],
    outcome: "Players who rely on visual cues alone now fail more consistently.",
  },
  {
    version: "0.12",
    date: "2026-01-15",
    focus: "Pressure Leech drain rate balance",
    details: [
      "Drain rate balanced against passive tolerance recovery.",
      "Leech proximity detection refined.",
    ],
    outcome: "Margin erosion feels inevitable but manageable.",
  },
  {
    version: "0.11",
    date: "2025-12-20",
    focus: "Core pressure curve redesign",
    details: [
      "Exponential buildup replaces linear model.",
      "Late-stage pressure acceleration tuned.",
    ],
    outcome: "Endgame tension feels earned, not sudden.",
  },
  {
    version: "0.10",
    date: "2025-12-05",
    focus: "Input timing precision",
    details: [
      "Tap window tightened to 200ms threshold.",
      "Input buffer removed.",
    ],
    outcome: "Every tap is intentional. No accidental releases.",
  },
  {
    version: "0.9",
    date: "2025-11-18",
    focus: "Tolerance Rating system introduced",
    details: [
      "Cumulative mastery metric added.",
      "Rating reflects consistency, not volume.",
    ],
    outcome: "Players can track growth without leaderboard pressure.",
  },
  {
    version: "0.1",
    date: "2025-10-30",
    focus: "Initial prototype",
    details: [
      "Core auto-move loop established.",
      "Manual pressure release mechanic functional.",
    ],
    outcome: "Proof of concept validated. Core tension loop works.",
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

      {/* Log Purpose */}
      <section className="py-12 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-light text-muted-foreground leading-relaxed mb-2">
              Development logs document design decisions, not marketing milestones.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="text-sm font-light text-muted-foreground leading-relaxed mb-1">
              Each entry focuses on: what changed, why it changed, what behavior it produced.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Entries */}
      <section className="py-8 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          {entries.map((entry, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="py-10 border-b border-border/50 group">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xs font-mono text-foreground font-medium">
                    v{entry.version}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {entry.date}
                  </span>
                </div>
                <h3 className="text-base font-serif font-medium mb-4 group-hover:text-accent transition-colors duration-500">
                  {entry.focus}
                </h3>

                <div className="mb-4">
                  <p className="text-[10px] tracking-fashion font-mono text-gold uppercase mb-2">
                    Focus
                  </p>
                  {entry.details.map((detail, j) => (
                    <p key={j} className="text-sm font-light text-muted-foreground py-0.5">
                      {detail}
                    </p>
                  ))}
                </div>

                <div>
                  <p className="text-[10px] tracking-fashion font-mono text-gold uppercase mb-2">
                    Outcome
                  </p>
                  <p className="text-sm font-light text-muted-foreground">
                    {entry.outcome}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default DevLog;
