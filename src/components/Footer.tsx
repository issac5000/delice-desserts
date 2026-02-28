"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-cream-dark text-chocolate overflow-hidden">
      {/* Wave divider handles top transition */}

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span
                className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <span className="text-gradient">Delice</span>
                <span className="text-chocolate"> Desserts</span>
              </span>
              <p className="text-chocolate/30 text-[10px] tracking-[0.3em] uppercase mt-1">
                Patisserie Artisanale
              </p>
            </div>
            <p className="text-chocolate/50 leading-relaxed text-sm max-w-xs">
              L&apos;art de la patisserie artisanale au coeur de Namur.
              Crepes, gaufres et desserts prepares avec passion et des
              ingredients de qualite.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-gold-dark text-sm tracking-[0.2em] uppercase font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Accueil", href: "#accueil" },
                { name: "Notre Histoire", href: "#histoire" },
                { name: "La Carte", href: "#carte" },
                { name: "Galerie", href: "#galerie" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-chocolate/50 hover:text-gold-dark transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-gold-dark text-sm tracking-[0.2em] uppercase font-semibold mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-chocolate/50 text-sm">
              <li>Rue Moncrabeau 8</li>
              <li>5000 Namur, Belgique</li>
              <li className="text-gold-dark">+32 81 XX XX XX</li>
              <li>
                <a
                  href="https://www.instagram.com/_delice.desserts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-dark transition-colors"
                >
                  @_delice.desserts
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-chocolate/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-chocolate/30 text-sm flex items-center gap-1">
            &copy; {new Date().getFullYear()} Delice Desserts. Fait avec{" "}
            <Heart size={14} className="text-rose fill-rose" /> a Namur
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold-dark hover:bg-gold hover:text-cream transition-all duration-300"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
