import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "How It Works", href: "#business-model" },
  { label: "The Process", href: "#process" },
  { label: "Compensation", href: "#compensation" },
  { label: "Join Us", href: "#join" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#" className="font-display text-xl font-bold tracking-wide text-foreground">
          REDWOOD <span className="gradient-text">ENGINEERING LABS</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book"
            className="btn-primary-glow rounded-lg px-6 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Book a Meeting
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground lg:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card mt-2 mx-4 rounded-xl p-6 lg:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setMobileOpen(false)}
              className="btn-primary-glow rounded-lg px-6 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Book a Meeting
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
