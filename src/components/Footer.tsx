import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                  className="text-xs font-light text-muted-foreground tension-hover"
                >
                  {link.label}
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
                className="text-xs font-light text-muted-foreground tension-hover"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-xs font-light text-muted-foreground tension-hover"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Brand Statement */}
        <div className="mt-16 pt-8 border-t border-border">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
