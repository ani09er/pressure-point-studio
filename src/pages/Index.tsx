import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-abstract.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
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
          />
        </div>

        <div className="relative z-10 text-center max-w-3xl" ref={heroRef}>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight mb-8 transition-transform duration-700"
            style={{ transform: `scaleY(${compression})` }}
          >
            PRESSURE POINT
          </h1>
          <p className="text-sm md:text-base font-light tracking-fashion text-muted-foreground italic">
            "Survive by staying close to failure."
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-foreground/20 animate-pulse-subtle" />
        </div>
      </section>

      {/* Core Fantasy */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="w-8 h-px bg-accent mb-12" />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-lg md:text-xl font-light leading-relaxed mb-8">
              PRESSURE POINT is a precision action game about threshold control.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-base font-light text-muted-foreground leading-relaxed mb-4">
              The arena applies pressure.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-base font-light text-muted-foreground leading-relaxed">
              You don't avoid it — you manage how close you are to breaking.
            </p>
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
