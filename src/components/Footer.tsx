import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="border-t border-border" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Identity */}
          <div>
            <p className="text-xs tracking-ultra-wide font-sans font-medium uppercase mb-4">
              SAYANI FASHION
            </p>
            <p className="text-xs text-muted-foreground font-light leading-relaxed max-w-xs">
              A creative production studio exploring form, control, and tension across interactive mediums.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-fashion font-sans uppercase text-muted-foreground mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "The Game", path: "/the-game" },
                { label: "Pre-Launch", path: "/pre-launch" },
                { label: "Studio", path: "/studio" },
                { label: "Dev Log", path: "/dev-log" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xs font-light text-muted-foreground tension-hover relative group inline-block w-fit"
                >
                  {link.label}
                  <span className="absolute -bottom-px left-0 w-full h-px bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[10px] tracking-fashion font-sans uppercase text-muted-foreground mb-4">
              Legal
            </p>
            <div className="flex flex-col gap-2">
              <Link
                to="/privacy"
                className="text-xs font-light text-muted-foreground tension-hover relative group inline-block w-fit"
              >
                Privacy Policy
                <span className="absolute -bottom-px left-0 w-full h-px bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </Link>
              <Link
                to="/terms"
                className="text-xs font-light text-muted-foreground tension-hover relative group inline-block w-fit"
              >
                Terms of Service
                <span className="absolute -bottom-px left-0 w-full h-px bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Brand Statement */}
        <motion.div
          className="mt-16 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className="text-xs font-serif italic text-muted-foreground mb-8">
            Designed with restraint. Built for mastery.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] text-muted-foreground font-mono font-light">
              © {new Date().getFullYear()} SAYANI FASHION. All rights reserved.
            </p>
            <p className="text-[10px] text-muted-foreground font-mono font-light">
              India
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
