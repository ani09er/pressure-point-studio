import ScrollReveal from "@/components/ScrollReveal";

const TheGame = () => {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-ultra-wide font-mono text-muted-foreground uppercase mb-6">
              Design Document
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-8">
              The Game
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="w-12 h-px bg-accent" />
          </ScrollReveal>
        </div>
      </section>

      {/* Core Gameplay */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-muted-foreground uppercase mb-8">
              Core Mechanic
            </p>
          </ScrollReveal>

          {[
            "The core auto-moves.",
            "Pressure rises continuously.",
            "The player releases pressure with precise taps.",
            "Early release wastes opportunity.",
            "Late release causes rupture.",
          ].map((line, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <p className="text-base md:text-lg font-light leading-loose text-muted-foreground py-2 border-b border-border/50">
                {line}
              </p>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={600}>
            <p className="text-xs text-muted-foreground font-light mt-8 italic">
              These are design principles, not features.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Enemies */}
      <section id="systems" className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-muted-foreground uppercase mb-8">
              Pressure Psychology
            </p>
          </ScrollReveal>

          {[
            {
              name: "Compressors",
              desc: "Accelerate pressure. The arena tightens faster than expected.",
            },
            {
              name: "False Relievers",
              desc: "Mislead timing. They simulate the sensation of safety where none exists.",
            },
            {
              name: "Pressure Leeches",
              desc: "Steal safety margin. Your tolerance erodes without direct confrontation.",
            },
          ].map((enemy, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="py-8 border-b border-border group">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="text-base font-serif font-medium group-hover:text-accent transition-colors duration-500">
                    {enemy.name}
                  </h3>
                  <span className="text-[10px] font-mono text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  {enemy.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={500}>
            <p className="text-xs text-muted-foreground font-light mt-8 italic">
              These are stress conditions, not characters.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* HP System */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-muted-foreground uppercase mb-8">
              Tolerance
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="relative mb-12">
              <div className="h-px bg-border w-full" />
              <div className="h-px bg-accent w-3/4 absolute top-0 left-0 transition-all duration-1000" />
              <div className="flex justify-between mt-3">
                <span className="text-[9px] font-mono text-accent">THRESHOLD</span>
                <span className="text-[9px] font-mono text-muted-foreground">RUPTURE</span>
              </div>
            </div>
          </ScrollReveal>

          {[
            "HP represents pressure tolerance.",
            "Sustained high pressure drains slowly.",
            "Perfect release restores tolerance.",
            "Panic input destroys runs.",
          ].map((line, i) => (
            <ScrollReveal key={i} delay={200 + i * 100}>
              <p className="text-sm font-light text-muted-foreground leading-loose py-1.5">
                {line}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TheGame;
