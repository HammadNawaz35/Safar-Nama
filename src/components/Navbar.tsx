import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useDarkMode } from "@/hooks/useDarkMode";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Destinations", path: "/destinations" },
  { label: "Tours", path: "/tours" },
  { label: "Blog", path: "/blog" },
  { label: "Trip Planner", path: "/trip-planner" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggle } = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-400 px-6 md:px-14 ${
          scrolled
            ? "py-3 bg-background/95 backdrop-blur-2xl border-b border-border"
            : "py-5 bg-transparent"
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
            <polygon points="14,1 27,8 27,20 14,27 1,20 1,8" fill="none" stroke="hsl(var(--gold))" strokeWidth="1.2" />
            <polygon points="14,6 22,10.5 22,17.5 14,22 6,17.5 6,10.5" fill="hsl(var(--gold))" opacity="0.18" />
            <circle cx="14" cy="14" r="3" fill="hsl(var(--gold))" />
          </svg>
          <span className="font-display text-xl font-semibold tracking-widest text-foreground">
            SAFAR<span className="gold-gradient-text">NAMA</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggle}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground hover:text-gold transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link to="/booking" className="btn-primary text-[11px] py-2.5 px-5">
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggle}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground bg-transparent border-none"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-7 lg:hidden pt-20"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="nav-link text-lg"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="btn-primary mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
