"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Accueil", href: "#accueil" },
  { name: "Notre Histoire", href: "#histoire" },
  { name: "Spécialités", href: "#specialites" },
  { name: "La Carte", href: "#carte" },
  { name: "Galerie", href: "#galerie" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-400 ${
          isScrolled ? "top-2" : "top-4"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto rounded-2xl md:rounded-full border px-4 sm:px-6 h-16 flex items-center justify-between transition-all duration-400 ${
            isScrolled
              ? "bg-cream/90 border-gold/25 shadow-[0_12px_42px_rgba(45,31,45,0.16)]"
              : "bg-chocolate/45 border-cream/25"
          } backdrop-blur-xl`}
        >
          <a href="#accueil" className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
              <span className="text-gradient">Delice</span>
              <span className={isScrolled ? "text-chocolate" : "text-cream"}> Desserts</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.16em] font-semibold transition-colors duration-300 ${
                  isScrolled ? "text-chocolate/80 hover:text-gold-dark" : "text-cream/90 hover:text-gold-light"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#reservation"
              className="rounded-full border border-gold/45 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-chocolate bg-cream hover:bg-gold hover:text-espresso transition-all"
            >
              Réserver
            </a>
            <a
              href="#cookies"
              className="rounded-full bg-gradient-to-r from-gold to-gold-dark px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-espresso hover:brightness-110 transition-all"
            >
              Commander
            </a>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded-lg border ${
              isScrolled
                ? "text-chocolate border-gold/25 bg-cream/80"
                : "text-cream border-cream/30 bg-chocolate/45"
            }`}
            aria-label="Menu mobile"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-chocolate/94 backdrop-blur-2xl px-6 pt-28"
          >
            <div className="space-y-2 max-w-md mx-auto">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="block rounded-2xl border border-cream/15 px-5 py-4 text-cream text-lg font-medium"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="max-w-md mx-auto grid grid-cols-2 gap-3 mt-6">
              <a
                href="#reservation"
                onClick={() => setIsMobileOpen(false)}
                className="rounded-full bg-cream text-espresso text-center px-4 py-3 text-xs font-bold uppercase tracking-[0.14em]"
              >
                Réserver
              </a>
              <a
                href="#cookies"
                onClick={() => setIsMobileOpen(false)}
                className="rounded-full bg-gradient-to-r from-gold to-gold-dark text-espresso text-center px-4 py-3 text-xs font-bold uppercase tracking-[0.14em]"
              >
                Commander
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
