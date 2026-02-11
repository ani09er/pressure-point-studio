import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "The Game", path: "/the-game" },
  { label: "Systems", path: "/the-game#systems", isHash: true },
  { label: "Pre-Launch", path: "/pre-launch" },
  { label: "SAYANI FASHION", path: "/studio" },
  { label: "Development Log", path: "/dev-log" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsOpen(false);
    if (link.isHash) {
      const [path, hash] = link.path.split("#");
      if (location.pathname === path) {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(path);
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 600);
      }
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-5">
        <Link
          to="/"
          className="text-xs tracking-ultra-wide font-sans font-medium uppercase tension-hover"
        >
          SAYANI FASHION
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
            >
              {link.isHash ? (
                <button
                  onClick={() => handleNavClick(link)}
                  className={`text-[11px] tracking-fashion font-sans font-light uppercase tension-hover relative group text-muted-foreground`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </button>
              ) : (
                <Link
                  to={link.path}
                  className={`text-[11px] tracking-fashion font-sans font-light uppercase tension-hover relative group ${
                    location.pathname === link.path
                      ? "text-accent"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-5 h-px bg-foreground"
            animate={isOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.4 }}
          />
          <motion.span
            className="block w-5 h-px bg-foreground"
            animate={isOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.4 }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        className="lg:hidden overflow-hidden"
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="flex flex-col items-end px-6 pb-8 gap-4">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, x: 20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              {link.isHash ? (
                <button
                  onClick={() => handleNavClick(link)}
                  className="text-xs tracking-fashion font-sans font-light uppercase tension-hover text-muted-foreground"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-xs tracking-fashion font-sans font-light uppercase tension-hover text-muted-foreground"
                >
                  {link.label}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
