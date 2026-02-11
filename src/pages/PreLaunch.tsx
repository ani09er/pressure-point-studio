import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const PreLaunch = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <main className="pt-24">
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-ultra-wide font-mono text-muted-foreground uppercase mb-6">
              Pre-Launch
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-8">
              Coming Soon
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="w-12 h-px bg-accent" />
          </ScrollReveal>
        </div>
      </section>

      {/* Status Panel */}
      <section className="py-16 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-muted-foreground uppercase mb-10">
              Status Panel
            </p>
          </ScrollReveal>

          {[
            { label: "Game", value: "PRESSURE POINT" },
            { label: "Platform", value: "Android (Google Play)" },
            { label: "Status", value: "In Development" },
            { label: "Phase", value: "Internal Testing" },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="flex items-baseline justify-between py-4 border-b border-border/50">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-fashion">
                  {item.label}
                </span>
                <span className="text-sm font-light">{item.value}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Status Explanation */}
      <section className="py-16 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-gold uppercase mb-10">
              Current Focus
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-base font-light leading-relaxed mb-8">
              PRESSURE POINT is currently in active internal testing.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="text-sm font-light text-muted-foreground mb-4">
              This phase focuses on:
            </p>
          </ScrollReveal>

          {[
            "Pressure curve balance",
            "Tolerance recovery fairness",
            "Enemy stress calibration",
          ].map((item, i) => (
            <ScrollReveal key={i} delay={200 + i * 80}>
              <p className="text-sm font-light text-muted-foreground py-2 border-b border-border/50">
                {item}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* What's Coming */}
      <section className="py-16 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-muted-foreground uppercase mb-10">
              What's Coming
            </p>
          </ScrollReveal>

          {[
            "Threshold-based gameplay",
            "Psychological tension systems",
            "Tolerance Rating progression",
            "Offline performance analytics",
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <p className="text-sm font-light text-muted-foreground py-3 border-b border-border/50">
                {item}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Release Philosophy */}
      <section className="py-16 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-gold uppercase mb-10">
              Release Philosophy
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-sm font-light text-muted-foreground mb-6">
              The game will not be released until:
            </p>
          </ScrollReveal>

          {[
            "All deaths feel explainable.",
            "Recovery feels earned.",
            "Pressure never feels random.",
          ].map((item, i) => (
            <ScrollReveal key={i} delay={150 + i * 80}>
              <p className="text-sm font-light leading-loose py-2">
                {item}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Notification */}
      <section className="py-16 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-muted-foreground uppercase mb-6">
              Release Updates
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-sm font-light text-muted-foreground mb-4">
              Notifications are used only to announce:
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="mb-8 space-y-1">
              <p className="text-sm font-light text-muted-foreground">Public testing availability.</p>
              <p className="text-sm font-light text-muted-foreground">Official release date.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mb-10 space-y-1">
              <p className="text-xs font-light text-muted-foreground/60">No marketing emails.</p>
              <p className="text-xs font-light text-muted-foreground/60">No promotional spam.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            {submitted ? (
              <p className="text-sm font-light text-muted-foreground">
                Noted. You'll be informed.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  required
                  className="flex-1 bg-transparent border-b border-border text-sm font-light py-3 px-0 placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-500"
                />
                <button
                  type="submit"
                  className="text-[10px] tracking-fashion font-mono uppercase py-3 px-6 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-500"
                >
                  Notify Me
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Developer Note */}
      <section className="py-16 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-gold uppercase mb-6">
              Developer Note
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-sm font-light text-muted-foreground leading-relaxed mb-4">
              PRESSURE POINT is currently in development at SAYANI FASHION.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-sm font-light text-muted-foreground leading-relaxed mb-4">
              The game focuses on threshold control, timing discipline, and mastery under sustained stress.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              Public release details will be announced once balance and stability goals are met.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default PreLaunch;
