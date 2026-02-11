import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "The Game", path: "/the-game" },
  { label: "Systems", path: "/the-game#systems" },
  { label: "Pre-Launch", path: "/pre-launch" },
  { label: "SAYANI FASHION", path: "/studio" },
  { label: "Development Log", path: "/dev-log" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <nav className="flex items-center justify-between px-6 md:px-12 py-5">
        <Link
          to="/"
          className="text-xs tracking-ultra-wide font-sans font-medium uppercase tension-hover"
        >
          SAYANI FASHION
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] tracking-fashion font-sans font-light uppercase tension-hover ${
                location.pathname === link.path
                  ? "text-accent"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-foreground transition-all duration-500 ${
              isOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-foreground transition-all duration-500 ${
              isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-end px-6 pb-8 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-xs tracking-fashion font-sans font-light uppercase tension-hover text-muted-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
