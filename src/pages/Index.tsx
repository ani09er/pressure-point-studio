import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/hero-abstract.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import {
  AnimatedLine,
  TextReveal,
  CharReveal,
  PressureGauge,
  Parallax,
  TensionCard,
  FloatingDot,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedElements";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.92]);

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
        {/* Floating particles */}
        <FloatingDot className="top-1/4 left-1/4" delay={0} size={3} />
        <FloatingDot className="top-1/3 right-1/3" delay={1.5} size={5} />
        <FloatingDot className="bottom-1/3 left-1/3" delay={0.8} size={4} />
        <FloatingDot className="top-1/2 right-1/4" delay={2.2} size={3} />

        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <img
            src={heroImage}
            alt="Abstract pressure form"
            className="w-full h-full object-cover opacity-30"
            style={{ transform: `scaleY(${compression})` }}
            loading="eager"
          />
        </motion.div>

        <div className="relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <CharReveal
              text="PRESSURE POINT"
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight mb-6"
              delay={0.3}
            />
          </motion.div>

          <motion.p
            className="text-sm md:text-base font-light tracking-fashion text-muted-foreground italic mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            "Survive by staying close to failure."
          </motion.p>

          <motion.p
            className="text-xs md:text-sm font-light text-muted-foreground/70 max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            A precision action game built around restraint, timing, and psychological pressure.
          </motion.p>

          {/* Animated pressure line under hero */}
          <motion.div
            className="mt-12 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <AnimatedLine color="accent" width="w-24" delay={2.2} />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[9px] font-mono text-muted-foreground/50 tracking-ultra-wide uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-foreground/20" />
        </motion.div>
      </section>

      {/* Pressure Gauge Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <PressureGauge />
        </div>
      </section>

      {/* Editorial Introduction */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimatedLine color="accent" width="w-8" />
          <div className="mt-16" />

          <TextReveal
            text="PRESSURE POINT is not about speed."
            className="text-lg md:text-xl font-light leading-relaxed mb-4"
            delay={0.1}
          />
          <TextReveal
            text="It is about discipline."
            className="text-lg md:text-xl font-light leading-relaxed mb-12"
            delay={0.3}
          />

          <Parallax speed={0.15}>
            <TextReveal
              text="The arena applies constant pressure."
              className="text-base font-light text-muted-foreground leading-relaxed mb-4"
              delay={0.1}
            />
            <TextReveal
              text="The player's task is not to escape it, but to stay within a narrow band of control — close enough to risk failure, never far enough to feel safe."
              className="text-base font-light text-muted-foreground leading-relaxed mb-12"
              delay={0.2}
            />
          </Parallax>

          <TextReveal
            text="Every action has consequence."
            className="text-base font-light text-muted-foreground leading-relaxed mb-4"
            delay={0.1}
          />
          <TextReveal
            text="Every hesitation compounds tension."
            className="text-base font-light text-muted-foreground leading-relaxed"
            delay={0.2}
          />
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

          <Parallax speed={0.2}>
            <TextReveal
              text="The most interesting moment is right before collapse."
              className="text-xl md:text-2xl font-serif font-medium leading-snug mb-8"
              delay={0.1}
            />
          </Parallax>

          <ScrollReveal delay={300}>
            <p className="text-base font-light text-muted-foreground leading-relaxed">
              PRESSURE POINT lives entirely in that moment.
            </p>
          </ScrollReveal>

          <div className="mt-12">
            <AnimatedLine color="gold" width="w-full" delay={0.2} />
          </div>
        </div>
      </section>

      {/* Callout Quote */}
      <section className="py-32 px-6 md:px-12 border-t border-border relative overflow-hidden">
        <FloatingDot className="top-1/4 left-[10%]" delay={0.5} size={6} />
        <FloatingDot className="bottom-1/4 right-[15%]" delay={1.8} size={4} />

        <div className="max-w-4xl mx-auto text-center">
          <TextReveal
            text={`"The game does not punish mistakes.`}
            className="text-2xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight mb-2"
            delay={0.1}
          />
          <TextReveal
            text={`It punishes panic."`}
            className="text-2xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight text-accent"
            delay={0.4}
          />
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[
              { label: "The Game", path: "/the-game", desc: "Design & Mechanics" },
              { label: "Pre-Launch", path: "/pre-launch", desc: "Status & Updates" },
              { label: "SAYANI FASHION", path: "/studio", desc: "The Studio" },
              { label: "Development Log", path: "/dev-log", desc: "Progress Notes" },
              { label: "Contact", path: "/contact", desc: "Get in Touch" },
            ].map((item) => (
              <StaggerItem key={item.path}>
                <TensionCard>
                  <Link
                    to={item.path}
                    className="group block py-8 border-b border-border"
                  >
                    <p className="text-[10px] tracking-fashion font-mono text-muted-foreground uppercase mb-2">
                      {item.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-serif font-medium group-hover:text-accent transition-colors duration-500">
                        {item.label}
                      </p>
                      <motion.span
                        className="text-muted-foreground/30 text-sm"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3 }}
                      >
                        →
                      </motion.span>
                    </div>
                    {/* Animated underline on hover */}
                    <div className="h-px bg-accent mt-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                  </Link>
                </TensionCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
};

export default Index;
