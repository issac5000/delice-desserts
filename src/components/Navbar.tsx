"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Phone } from "lucide-react";

const navLinks = [
  { name: "Accueil", href: "#accueil" },
  { name: "Notre Histoire", href: "#histoire" },
  { name: "La Carte", href: "#carte" },
  { name: "Galerie", href: "#galerie" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-cream-dark text-chocolate/70 text-sm py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-gold" />
              Rue Moncrabeau 8, 5000 Namur
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-gold" />
              +32 81 XX XX XX
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Lun - Sam : 10h - 20h</span>
            <span className="text-gold">|</span>
            <span>Dim : 12h - 18h</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 lg:top-[36px] left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "lg:top-0 bg-cream/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(60,31,14,0.1)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#accueil" className="relative group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <span
                className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold tracking-wide"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <span className="text-gradient">Delice</span>
                <span className={isScrolled ? "text-chocolate" : "text-cream"}>
                  {" "}
                  Desserts
                </span>
              </span>
              <span
                className={`text-[10px] tracking-[0.3em] uppercase ${
                  isScrolled ? "text-mocha" : "text-cream/70"
                }`}
              >
                Patisserie Artisanale
              </span>
            </motion.div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm tracking-wider uppercase font-medium transition-colors duration-300 group ${
                  isScrolled
                    ? "text-chocolate hover:text-gold"
                    : "text-cream/90 hover:text-gold"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-gold text-espresso text-sm font-semibold tracking-wider uppercase hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,160,80,0.4)]"
            >
              Commander
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 ${
              isScrolled ? "text-chocolate" : "text-cream"
            }`}
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-chocolate text-2xl font-medium tracking-wider hover:text-gold transition-colors"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setIsMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 px-8 py-3 bg-gold text-cream font-semibold tracking-wider uppercase"
            >
              Commander
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
