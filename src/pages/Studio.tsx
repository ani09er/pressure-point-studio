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

      <section className="py-20 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-muted-foreground uppercase mb-10">
              About
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-base md:text-lg font-light leading-relaxed mb-6">
              SAYANI FASHION is a creative production studio exploring form, control, and tension across interactive mediums.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-base font-light text-muted-foreground leading-relaxed">
              Our work prioritizes restraint, precision, and mastery over excess.
            </p>
          </ScrollReveal>
        </div>
      </section>

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
