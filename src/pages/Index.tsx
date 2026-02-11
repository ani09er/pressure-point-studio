import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-abstract.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const compression = Math.max(0.85, 1 - scrollY * 0.0003);

  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
          <img
            src={heroImage}
            alt="Abstract pressure form"
            className="w-full h-full object-cover transition-transform duration-700"
            style={{ transform: `scaleY(${compression})` }}
            loading="eager"
          />
        </div>

        <div className="relative z-10 text-center max-w-3xl">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight mb-6 transition-transform duration-700"
            style={{ transform: `scaleY(${compression})` }}
          >
            PRESSURE POINT
          </h1>
          <p className="text-sm md:text-base font-light tracking-fashion text-muted-foreground italic mb-8">
            "Survive by staying close to failure."
          </p>
          <p className="text-xs md:text-sm font-light text-muted-foreground/70 max-w-md mx-auto leading-relaxed">
            A precision action game built around restraint, timing, and psychological pressure.
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-foreground/20 animate-pulse-subtle" />
        </div>
      </section>

      {/* Editorial Introduction */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="w-8 h-px bg-accent mb-16" />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-lg md:text-xl font-light leading-relaxed mb-4">
              PRESSURE POINT is not about speed.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl font-light leading-relaxed mb-12">
              It is about discipline.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-base font-light text-muted-foreground leading-relaxed mb-4">
              The arena applies constant pressure.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <p className="text-base font-light text-muted-foreground leading-relaxed mb-12">
              The player's task is not to escape it, but to stay within a narrow band of control — close enough to risk failure, never far enough to feel safe.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <p className="text-base font-light text-muted-foreground leading-relaxed mb-4">
              Every action has consequence.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <p className="text-base font-light text-muted-foreground leading-relaxed">
              Every hesitation compounds tension.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Design Ethos */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] tracking-fashion font-mono text-gold uppercase mb-10">
              Design Ethos
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-base font-light text-muted-foreground leading-relaxed mb-8">
              This game was designed with one principle:
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl font-serif font-medium leading-snug mb-8">
              The most interesting moment is right before collapse.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-base font-light text-muted-foreground leading-relaxed">
              PRESSURE POINT lives entirely in that moment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Callout Quote */}
      <section className="py-32 px-6 md:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <blockquote className="text-2xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight">
              "The game does not punish mistakes.
              <br />
              <span className="text-accent">It punishes panic.</span>"
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[
              { label: "The Game", path: "/the-game", desc: "Design & Mechanics" },
              { label: "Pre-Launch", path: "/pre-launch", desc: "Status & Updates" },
              { label: "SAYANI FASHION", path: "/studio", desc: "The Studio" },
              { label: "Development Log", path: "/dev-log", desc: "Progress Notes" },
              { label: "Contact", path: "/contact", desc: "Get in Touch" },
            ].map((item, i) => (
              <ScrollReveal key={item.path} delay={i * 80}>
                <Link
                  to={item.path}
                  className="group block py-8 border-b border-border tension-hover"
                >
                  <p className="text-[10px] tracking-fashion font-mono text-muted-foreground uppercase mb-2">
                    {item.desc}
                  </p>
                  <p className="text-lg font-serif font-medium group-hover:text-accent transition-colors duration-500">
                    {item.label}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
