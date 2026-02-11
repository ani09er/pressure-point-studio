import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Animated line that expands on scroll
export const AnimatedLine = ({
  color = "accent",
  width = "w-16",
  delay = 0,
}: {
  color?: string;
  width?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        className={`h-px ${width}`}
        style={{ backgroundColor: `hsl(var(--${color}))` }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  );
};

// Animated counter / number
export const AnimatedNumber = ({
  value,
  suffix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {display}{suffix}
    </span>
  );
};

// Staggered text reveal - each word animates in
export const TextReveal = ({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.04,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

// Character-by-character reveal for headings
export const CharReveal = ({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <h1 ref={ref} className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.03,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
};

// Pressure gauge that fills on scroll
export const PressureGauge = ({ className = "" }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const width = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "75%", "95%"]);
  const color = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8, 1],
    [
      "hsl(40, 50%, 55%)",
      "hsl(20, 60%, 50%)",
      "hsl(0, 75%, 45%)",
      "hsl(0, 85%, 40%)",
    ]
  );

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div className="h-[2px] bg-border w-full rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ width, backgroundColor: color }}
        />
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-[9px] font-mono text-gold">STABLE</span>
        <span className="text-[9px] font-mono text-muted-foreground">CRITICAL</span>
        <span className="text-[9px] font-mono text-accent">RUPTURE</span>
      </div>
    </div>
  );
};

// Parallax wrapper
export const Parallax = ({
  children,
  speed = 0.3,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

// Hover card with tension effect
export const TensionCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    className={className}
    whileHover={{
      scaleY: 0.97,
      scaleX: 1.01,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    }}
    whileTap={{
      scaleY: 1.02,
      scaleX: 0.99,
      transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
    }}
  >
    {children}
  </motion.div>
);

// Staggered list container
export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 20, scaleY: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scaleY: 1,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
      },
    }}
  >
    {children}
  </motion.div>
);

// Floating dot particle
export const FloatingDot = ({
  className = "",
  delay = 0,
  size = 4,
}: {
  className?: string;
  delay?: number;
  size?: number;
}) => (
  <motion.div
    className={`rounded-full bg-accent/30 absolute ${className}`}
    style={{ width: size, height: size }}
    animate={{
      y: [0, -15, 0],
      opacity: [0.3, 0.7, 0.3],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);
