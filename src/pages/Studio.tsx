import ScrollReveal from "@/components/ScrollReveal";

const Studio = () => {
  return (
    <main className="pt-24">
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-ultra-wide font-mono text-muted-foreground uppercase mb-6">
              The Studio
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-serif font-medium mb-8">
              SAYANI FASHION
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="w-12 h-px bg-gold" />
          </ScrollReveal>
        </div>
      </section>

      {/* Studio Identity */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-muted-foreground uppercase mb-10">
              Studio Identity
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-base md:text-lg font-light leading-relaxed mb-8">
              SAYANI FASHION is a creative studio working at the intersection of:
            </p>
          </ScrollReveal>

          {[
            "Design discipline",
            "Psychological tension",
            "Interactive systems",
          ].map((item, i) => (
            <ScrollReveal key={i} delay={200 + i * 80}>
              <div className="flex items-baseline gap-4 py-3">
                <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0 mt-2" />
                <p className="text-sm font-light text-muted-foreground">{item}</p>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={500}>
            <p className="text-base font-light leading-relaxed mt-8">
              We approach games as designed experiences, not content pipelines.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Creative Philosophy */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-gold uppercase mb-10">
              Creative Philosophy
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-sm font-light text-muted-foreground mb-6">Our work values:</p>
          </ScrollReveal>

          {[
            "Restraint over excess.",
            "Clarity over spectacle.",
            "Mastery over accessibility.",
          ].map((item, i) => (
            <ScrollReveal key={i} delay={150 + i * 100}>
              <p className="text-sm font-light text-muted-foreground py-3 border-b border-border/50">
                {item}
              </p>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={500}>
            <p className="text-base font-serif font-medium mt-10 italic">
              We believe pressure reveals character — in games and in players.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Studio Values */}
      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-gold uppercase mb-10">
              Studio Values
            </p>
          </ScrollReveal>

          {[
            "Control over chaos",
            "Design before decoration",
            "Silence over noise",
            "Respect for mastery",
          ].map((value, i) => (
            <ScrollReveal key={i} delay={100 + i * 120}>
              <div className="flex items-baseline gap-6 py-6 border-b border-border/50 group">
                <span className="text-[10px] font-mono text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base md:text-lg font-serif font-medium group-hover:text-accent transition-colors duration-500">
                  {value}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Studio;
