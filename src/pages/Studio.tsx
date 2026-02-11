import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import {
  AnimatedLine,
  TextReveal,
  CharReveal,
  Parallax,
  StaggerContainer,
  StaggerItem,
  TensionCard,
  FloatingDot,
} from "@/components/AnimatedElements";

const Studio = () => {
  return (
    <main className="pt-24">
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        <FloatingDot className="top-1/3 right-[20%]" delay={0.5} size={4} />
        <FloatingDot className="bottom-1/4 left-[15%]" delay={1.2} size={5} />

        <div className="max-w-3xl mx-auto">
          <motion.p
            className="text-[10px] tracking-ultra-wide font-mono text-muted-foreground uppercase mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The Studio
          </motion.p>
          <CharReveal
            text="SAYANI FASHION"
            className="text-4xl md:text-6xl font-serif font-medium mb-8"
            delay={0.3}
          />
          <AnimatedLine color="gold" width="w-12" delay={0.8} />
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

          <TextReveal
            text="SAYANI FASHION is a creative studio working at the intersection of:"
            className="text-base md:text-lg font-light leading-relaxed mb-8"
            delay={0.1}
          />

          <StaggerContainer staggerDelay={0.12}>
            {["Design discipline", "Psychological tension", "Interactive systems"].map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-baseline gap-4 py-3">
                  <motion.span
                    className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0 mt-1.5"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3, delay: i * 0.8, repeat: Infinity }}
                  />
                  <p className="text-sm font-light text-muted-foreground">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Parallax speed={0.1}>
            <ScrollReveal delay={500}>
              <p className="text-base font-light leading-relaxed mt-8">
                We approach games as designed experiences, not content pipelines.
              </p>
            </ScrollReveal>
          </Parallax>
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

          <StaggerContainer staggerDelay={0.12}>
            {["Restraint over excess.", "Clarity over spectacle.", "Mastery over accessibility."].map((item, i) => (
              <StaggerItem key={i}>
                <TensionCard>
                  <p className="text-sm font-light text-muted-foreground py-3 border-b border-border/50">
                    {item}
                  </p>
                </TensionCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Parallax speed={0.15}>
            <ScrollReveal delay={500}>
              <TextReveal
                text="We believe pressure reveals character — in games and in players."
                className="text-base font-serif font-medium mt-10 italic"
                delay={0.1}
              />
            </ScrollReveal>
          </Parallax>

          <div className="mt-10">
            <AnimatedLine color="gold" width="w-full" delay={0.2} />
          </div>
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

          <StaggerContainer staggerDelay={0.15}>
            {["Control over chaos", "Design before decoration", "Silence over noise", "Respect for mastery"].map((value, i) => (
              <StaggerItem key={i}>
                <TensionCard className="cursor-default">
                  <div className="flex items-baseline gap-6 py-6 border-b border-border/50 group">
                    <motion.span
                      className="text-[10px] font-mono text-accent"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.span>
                    <p className="text-base md:text-lg font-serif font-medium group-hover:text-accent transition-colors duration-500">
                      {value}
                    </p>
                  </div>
                </TensionCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
};

export default Studio;
