import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import {
  AnimatedLine,
  TextReveal,
  CharReveal,
  PressureGauge,
  Parallax,
  TensionCard,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedElements";

const TheGame = () => {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.p
            className="text-[10px] tracking-ultra-wide font-mono text-muted-foreground uppercase mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Design Document
          </motion.p>
          <CharReveal
            text="The Game"
            className="text-4xl md:text-6xl font-serif font-medium mb-8"
            delay={0.3}
          />
          <AnimatedLine color="accent" width="w-12" delay={0.8} />
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

          <TextReveal
            text="PRESSURE POINT is a threshold-management game."
            className="text-lg md:text-xl font-light leading-relaxed mb-8"
            delay={0.1}
          />

          <StaggerContainer staggerDelay={0.1}>
            {[
              "There is no movement control.",
              "There are no upgrades that reduce difficulty.",
              "There is no safe playstyle.",
            ].map((line, i) => (
              <StaggerItem key={i}>
                <p className="text-sm font-light text-muted-foreground leading-loose py-1.5">
                  {line}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={500}>
            <p className="text-base font-light leading-relaxed mt-8">
              Instead, the player learns to read pressure, delay release, and act with intention.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pressure Gauge */}
      <section className="py-8 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <PressureGauge />
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

          <StaggerContainer staggerDelay={0.12}>
            {[
              "Pressure increases continuously, regardless of player input.",
              "The player can release pressure only through precise taps.",
              "Releasing too early creates inefficiency and future risk.",
              "Releasing too late causes rupture, damaging tolerance.",
            ].map((line, i) => (
              <StaggerItem key={i}>
                <TensionCard>
                  <p className="text-base md:text-lg font-light leading-loose text-muted-foreground py-3 border-b border-border/50">
                    {line}
                  </p>
                </TensionCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Parallax speed={0.15}>
            <ScrollReveal delay={500}>
              <div className="mt-12 py-8">
                <p className="text-base font-light leading-relaxed mb-2">
                  The challenge is not reacting fast —
                </p>
                <TextReveal
                  text="it is waiting correctly."
                  className="text-lg md:text-xl font-serif font-medium text-accent"
                  delay={0.2}
                />
              </div>
            </ScrollReveal>
          </Parallax>
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

          <TextReveal
            text="Enemies in PRESSURE POINT are not opponents."
            className="text-base font-light text-muted-foreground leading-relaxed mb-4"
            delay={0.1}
          />
          <TextReveal
            text="They are stress modifiers."
            className="text-base font-light leading-relaxed mb-10"
            delay={0.2}
          />

          <ScrollReveal delay={200}>
            <p className="text-sm font-light text-muted-foreground leading-relaxed mb-8">
              Each enemy exists to distort the player's perception of safety:
            </p>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.15}>
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
              <StaggerItem key={i}>
                <TensionCard className="py-8 border-b border-border group cursor-default">
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
                </TensionCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={500}>
            <p className="text-sm font-light text-muted-foreground mt-8 leading-relaxed">
              Enemies obey the same pressure rules as the player.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={550}>
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

          <TextReveal
            text="Failure is always explainable."
            className="text-lg md:text-xl font-serif font-medium mb-10"
            delay={0.1}
          />

          <ScrollReveal delay={200}>
            <p className="text-sm font-light text-muted-foreground mb-6">
              Every rupture can be traced to:
            </p>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.1}>
            {["A timing error", "A misjudged margin", "Or panic input"].map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-baseline gap-4 py-3">
                  <motion.span
                    className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 mt-1.5"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                  />
                  <p className="text-sm font-light text-muted-foreground">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={600}>
            <p className="text-base font-light mt-8">
              This clarity allows mastery.
            </p>
          </ScrollReveal>

          <div className="mt-8">
            <AnimatedLine color="accent" width="w-full" delay={0.3} />
          </div>
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

          <TextReveal
            text="PRESSURE POINT replaces this with Tolerance:"
            className="text-base font-light leading-relaxed mb-4"
            delay={0.1}
          />

          <ScrollReveal delay={200}>
            <motion.div
              className="pl-6 border-l-2 border-accent/30 mb-12 space-y-3"
              whileHover={{ borderColor: "hsl(0, 75%, 45%)" }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-light text-muted-foreground">
                A representation of how much pressure the system can absorb before failure.
              </p>
              <p className="text-sm font-light text-muted-foreground">
                A resource that recovers only through disciplined play.
              </p>
            </motion.div>
          </ScrollReveal>

          <PressureGauge className="mb-12" />

          <ScrollReveal delay={350}>
            <p className="text-[10px] tracking-fashion font-mono text-gold uppercase mb-6">
              How Tolerance Changes
            </p>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.1}>
            {[
              "Sustained high pressure drains tolerance slowly.",
              "Sudden ruptures drain tolerance heavily.",
              "Perfect release timing restores tolerance.",
            ].map((line, i) => (
              <StaggerItem key={i}>
                <p className="text-sm font-light text-muted-foreground leading-loose py-1.5">
                  {line}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={650}>
            <div className="mt-8 space-y-1">
              <p className="text-sm font-light">There is no passive regeneration.</p>
              <TextReveal
                text="Recovery must be earned."
                className="text-sm font-serif font-medium text-accent italic"
                delay={0.1}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={750}>
            <div className="mt-12 py-8 border-t border-border/50">
              <p className="text-[10px] tracking-fashion font-mono text-gold uppercase mb-6">
                Design Intent
              </p>
              <Parallax speed={0.1}>
                <p className="text-base font-light leading-relaxed italic text-muted-foreground">
                  The player should always feel: "I am one mistake away from losing — and one perfect decision away from stabilizing."
                </p>
              </Parallax>
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

          <TextReveal
            text="Obstacles do not block movement."
            className="text-sm font-light text-muted-foreground leading-relaxed mb-4"
            delay={0.1}
          />
          <TextReveal
            text="They distort pressure behavior."
            className="text-base font-light leading-relaxed mb-12"
            delay={0.2}
          />

          <StaggerContainer staggerDelay={0.15}>
            {[
              { name: "Pressure Choke Zones", desc: "Sudden compression areas that spike pressure growth." },
              { name: "Release-Denial Fields", desc: "Temporarily prevent pressure release, forcing anticipation." },
              { name: "Rupture Amplifiers", desc: "Multiply damage caused by poor timing." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <TensionCard className="py-6 border-b border-border/50 group cursor-default">
                  <h3 className="text-base font-serif font-medium mb-2 group-hover:text-accent transition-colors duration-500">
                    {item.name}
                  </h3>
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </TensionCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

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

          <TextReveal
            text="Levels are compact, tightly controlled arenas."
            className="text-base font-light leading-relaxed mb-4"
            delay={0.1}
          />
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

          <StaggerContainer staggerDelay={0.1}>
            {[
              "Early levels teach basic pressure reading.",
              "Mid levels introduce false safety and margin traps.",
              "Late levels stack multiple pressure curves simultaneously.",
            ].map((line, i) => (
              <StaggerItem key={i}>
                <TensionCard>
                  <p className="text-sm font-light text-muted-foreground leading-loose py-2 border-b border-border/50">
                    {line}
                  </p>
                </TensionCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

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
              <StaggerContainer staggerDelay={0.08}>
                {["Perfect timing.", "Emotional control.", "Zero panic input."].map((item, i) => (
                  <StaggerItem key={i}>
                    <p className="text-sm font-light text-muted-foreground py-1">{item}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <TextReveal
                text="This is where mastery is proven."
                className="text-base font-serif font-medium mt-6"
                delay={0.2}
              />
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

          <ScrollReveal delay={100}>
            <p className="text-[10px] tracking-fashion font-mono text-gold uppercase mb-6">
              Player Profile
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-sm font-light text-muted-foreground mb-4">Each profile tracks:</p>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.08}>
            {["Total runs", "Highest tolerance maintained", "Average pressure level", "Rupture history"].map((item, i) => (
              <StaggerItem key={i}>
                <TensionCard>
                  <div className="flex items-baseline justify-between py-3 border-b border-border/50">
                    <span className="text-sm font-light text-muted-foreground">{item}</span>
                    <span className="text-[10px] font-mono text-muted-foreground/50">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </TensionCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={500}>
            <div className="mt-16">
              <p className="text-[10px] tracking-fashion font-mono text-gold uppercase mb-6">
                Rank System — Tolerance Rating
              </p>
              <p className="text-sm font-light text-muted-foreground mb-4">Ranks reflect:</p>
              {["Consistency under pressure.", "Minimal early releases.", "Controlled recovery after rupture."].map((item, i) => (
                <p key={i} className="text-sm font-light text-muted-foreground py-1.5">{item}</p>
              ))}
              <p className="text-sm font-light mt-6 italic">
                Ranks are informational — not power grants.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <div className="mt-16">
              <p className="text-[10px] tracking-fashion font-mono text-gold uppercase mb-6">
                Analytics
              </p>
              <p className="text-sm font-light text-muted-foreground mb-2">Analytics are not cosmetic.</p>
              <TextReveal
                text="They exist to teach the player about themselves."
                className="text-base font-light mb-8"
                delay={0.1}
              />

              <p className="text-sm font-light text-muted-foreground mb-4">Tracked metrics:</p>
              <StaggerContainer staggerDelay={0.08}>
                {["Average pressure %", "Early release frequency", "Rupture causes", "Panic input count"].map((item, i) => (
                  <StaggerItem key={i}>
                    <TensionCard>
                      <div className="flex items-baseline justify-between py-3 border-b border-border/50">
                        <span className="text-sm font-light text-muted-foreground">{item}</span>
                        <span className="text-[9px] font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                    </TensionCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default TheGame;
