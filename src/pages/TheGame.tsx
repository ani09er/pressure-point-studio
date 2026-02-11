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

      {/* Design Overview */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-muted-foreground uppercase mb-10">
              Design Overview
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-lg md:text-xl font-light leading-relaxed mb-8">
              PRESSURE POINT is a threshold-management game.
            </p>
          </ScrollReveal>

          {[
            "There is no movement control.",
            "There are no upgrades that reduce difficulty.",
            "There is no safe playstyle.",
          ].map((line, i) => (
            <ScrollReveal key={i} delay={200 + i * 80}>
              <p className="text-sm font-light text-muted-foreground leading-loose py-1.5">
                {line}
              </p>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={500}>
            <p className="text-base font-light leading-relaxed mt-8">
              Instead, the player learns to read pressure, delay release, and act with intention.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Gameplay */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-muted-foreground uppercase mb-10">
              Core Mechanic
            </p>
          </ScrollReveal>

          {[
            "Pressure increases continuously, regardless of player input.",
            "The player can release pressure only through precise taps.",
            "Releasing too early creates inefficiency and future risk.",
            "Releasing too late causes rupture, damaging tolerance.",
          ].map((line, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <p className="text-base md:text-lg font-light leading-loose text-muted-foreground py-3 border-b border-border/50">
                {line}
              </p>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={500}>
            <div className="mt-12 py-8">
              <p className="text-base font-light leading-relaxed mb-2">
                The challenge is not reacting fast —
              </p>
              <p className="text-lg md:text-xl font-serif font-medium text-accent">
                it is waiting correctly.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Enemy Design */}
      <section id="systems" className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-muted-foreground uppercase mb-10">
              Enemy Design Philosophy
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-base font-light text-muted-foreground leading-relaxed mb-4">
              Enemies in PRESSURE POINT are not opponents.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-base font-light leading-relaxed mb-10">
              They are stress modifiers.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-sm font-light text-muted-foreground leading-relaxed mb-8">
              Each enemy exists to distort the player's perception of safety:
            </p>
          </ScrollReveal>

          {[
            {
              name: "Compressors",
              desc: "Accelerate pressure. The arena tightens faster than expected.",
              rule: "Some accelerate pressure.",
            },
            {
              name: "False Relievers",
              desc: "Mislead timing. They simulate the sensation of safety where none exists.",
              rule: "Some fake relief.",
            },
            {
              name: "Pressure Leeches",
              desc: "Steal safety margin. Your tolerance erodes without direct confrontation.",
              rule: "Some shrink the margin for error.",
            },
          ].map((enemy, i) => (
            <ScrollReveal key={i} delay={300 + i * 150}>
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

          <ScrollReveal delay={800}>
            <p className="text-sm font-light text-muted-foreground mt-8 leading-relaxed">
              Enemies obey the same pressure rules as the player.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={850}>
            <p className="text-sm font-light italic mt-2">
              There are no exceptions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Collision & Failure */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-muted-foreground uppercase mb-10">
              Collision & Failure
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-lg md:text-xl font-serif font-medium mb-10">
              Failure is always explainable.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-sm font-light text-muted-foreground mb-6">
              Every rupture can be traced to:
            </p>
          </ScrollReveal>

          {[
            "A timing error",
            "A misjudged margin",
            "Or panic input",
          ].map((item, i) => (
            <ScrollReveal key={i} delay={300 + i * 80}>
              <div className="flex items-baseline gap-4 py-3">
                <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0 mt-2" />
                <p className="text-sm font-light text-muted-foreground">{item}</p>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={600}>
            <p className="text-base font-light mt-8">
              This clarity allows mastery.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* HP System — Tolerance */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-muted-foreground uppercase mb-10">
              Tolerance — The HP System
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-sm font-light text-muted-foreground leading-relaxed mb-8">
              Traditional health bars create distance between action and consequence.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="text-base font-light leading-relaxed mb-4">
              PRESSURE POINT replaces this with Tolerance:
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="pl-6 border-l border-accent/30 mb-12 space-y-3">
              <p className="text-sm font-light text-muted-foreground">
                A representation of how much pressure the system can absorb before failure.
              </p>
              <p className="text-sm font-light text-muted-foreground">
                A resource that recovers only through disciplined play.
              </p>
            </div>
          </ScrollReveal>

          {/* Threshold line visualization */}
          <ScrollReveal delay={300}>
            <div className="relative mb-12">
              <div className="h-px bg-border w-full" />
              <div className="h-px bg-accent w-3/4 absolute top-0 left-0 transition-all duration-1000" />
              <div className="flex justify-between mt-3">
                <span className="text-[9px] font-mono text-accent">THRESHOLD</span>
                <span className="text-[9px] font-mono text-muted-foreground">RUPTURE</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <p className="text-[10px] tracking-fashion font-mono text-gold uppercase mb-6">
              How Tolerance Changes
            </p>
          </ScrollReveal>

          {[
            "Sustained high pressure drains tolerance slowly.",
            "Sudden ruptures drain tolerance heavily.",
            "Perfect release timing restores tolerance.",
          ].map((line, i) => (
            <ScrollReveal key={i} delay={400 + i * 80}>
              <p className="text-sm font-light text-muted-foreground leading-loose py-1.5">
                {line}
              </p>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={650}>
            <div className="mt-8 space-y-1">
              <p className="text-sm font-light">There is no passive regeneration.</p>
              <p className="text-sm font-serif font-medium text-accent italic">
                Recovery must be earned.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={750}>
            <div className="mt-12 py-8 border-t border-border/50">
              <p className="text-[10px] tracking-fashion font-mono text-gold uppercase mb-6">
                Design Intent
              </p>
              <p className="text-base font-light leading-relaxed italic text-muted-foreground">
                The player should always feel: "I am one mistake away from losing — and one perfect decision away from stabilizing."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Obstacles */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-muted-foreground uppercase mb-10">
              Obstacles — System Constraints
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-sm font-light text-muted-foreground leading-relaxed mb-4">
              Obstacles do not block movement.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-base font-light leading-relaxed mb-12">
              They distort pressure behavior.
            </p>
          </ScrollReveal>

          {[
            {
              name: "Pressure Choke Zones",
              desc: "Sudden compression areas that spike pressure growth.",
            },
            {
              name: "Release-Denial Fields",
              desc: "Temporarily prevent pressure release, forcing anticipation.",
            },
            {
              name: "Rupture Amplifiers",
              desc: "Multiply damage caused by poor timing.",
            },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={200 + i * 120}>
              <div className="py-6 border-b border-border/50 group">
                <h3 className="text-base font-serif font-medium mb-2 group-hover:text-accent transition-colors duration-500">
                  {item.name}
                </h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={600}>
            <p className="text-sm font-light text-muted-foreground mt-8 italic">
              Each obstacle exists to test foresight, not reaction.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Level Design */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-muted-foreground uppercase mb-10">
              Level Design — Structure & Progression
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-base font-light leading-relaxed mb-4">
              Levels are compact, tightly controlled arenas.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-sm font-light text-muted-foreground leading-relaxed mb-12">
              There is no filler space. Every arena is tuned around a specific pressure behavior.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-[10px] tracking-fashion font-mono text-gold uppercase mb-6">
              Difficulty Curve
            </p>
          </ScrollReveal>

          {[
            "Early levels teach basic pressure reading.",
            "Mid levels introduce false safety and margin traps.",
            "Late levels stack multiple pressure curves simultaneously.",
          ].map((line, i) => (
            <ScrollReveal key={i} delay={250 + i * 80}>
              <p className="text-sm font-light text-muted-foreground leading-loose py-2 border-b border-border/50">
                {line}
              </p>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={500}>
            <p className="text-base font-light mt-8 leading-relaxed">
              Difficulty increases by reducing forgiveness, not increasing chaos.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="mt-12 py-8 border-t border-border/50">
              <p className="text-[10px] tracking-fashion font-mono text-gold uppercase mb-6">
                Endgame Design
              </p>
              <p className="text-sm font-light text-muted-foreground leading-relaxed mb-4">
                Late-game levels assume:
              </p>
              {["Perfect timing.", "Emotional control.", "Zero panic input."].map((item, i) => (
                <p key={i} className="text-sm font-light text-muted-foreground py-1">
                  {item}
                </p>
              ))}
              <p className="text-base font-serif font-medium mt-6">
                This is where mastery is proven.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Systems & Progression */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-muted-foreground uppercase mb-10">
              Systems & Progression
            </p>
          </ScrollReveal>

          {/* Player Profile */}
          <ScrollReveal delay={100}>
            <p className="text-[10px] tracking-fashion font-mono text-gold uppercase mb-6">
              Player Profile
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-sm font-light text-muted-foreground mb-4">Each profile tracks:</p>
          </ScrollReveal>
          {["Total runs", "Highest tolerance maintained", "Average pressure level", "Rupture history"].map((item, i) => (
            <ScrollReveal key={i} delay={200 + i * 60}>
              <div className="flex items-baseline justify-between py-3 border-b border-border/50">
                <span className="text-sm font-light text-muted-foreground">{item}</span>
                <span className="text-[10px] font-mono text-muted-foreground/50">{String(i + 1).padStart(2, "0")}</span>
              </div>
            </ScrollReveal>
          ))}

          {/* Rank System */}
          <ScrollReveal delay={500}>
            <div className="mt-16">
              <p className="text-[10px] tracking-fashion font-mono text-gold uppercase mb-6">
                Rank System — Tolerance Rating
              </p>
              <p className="text-sm font-light text-muted-foreground mb-4">Ranks reflect:</p>
              {[
                "Consistency under pressure.",
                "Minimal early releases.",
                "Controlled recovery after rupture.",
              ].map((item, i) => (
                <p key={i} className="text-sm font-light text-muted-foreground py-1.5">
                  {item}
                </p>
              ))}
              <p className="text-sm font-light mt-6 italic">
                Ranks are informational — not power grants.
              </p>
            </div>
          </ScrollReveal>

          {/* Analytics */}
          <ScrollReveal delay={700}>
            <div className="mt-16">
              <p className="text-[10px] tracking-fashion font-mono text-gold uppercase mb-6">
                Analytics
              </p>
              <p className="text-sm font-light text-muted-foreground mb-2">
                Analytics are not cosmetic.
              </p>
              <p className="text-base font-light mb-8">
                They exist to teach the player about themselves.
              </p>

              <p className="text-sm font-light text-muted-foreground mb-4">Tracked metrics:</p>
              {[
                "Average pressure %",
                "Early release frequency",
                "Rupture causes",
                "Panic input count",
              ].map((item, i) => (
                <div key={i} className="flex items-baseline justify-between py-3 border-b border-border/50">
                  <span className="text-sm font-light text-muted-foreground">{item}</span>
                  <span className="text-[9px] font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default TheGame;
