"use client";

import { motion } from "framer-motion";
import { ArrowUp, Instagram, MapPin, Phone } from "lucide-react";

const links = [
  { name: "Accueil", href: "#accueil" },
  { name: "Notre Histoire", href: "#histoire" },
  { name: "Spécialités", href: "#specialites" },
  { name: "La Carte", href: "#carte" },
  { name: "Galerie", href: "#galerie" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-chocolate text-cream overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(208,122,148,0.25),transparent_34%),radial-gradient(circle_at_88%_90%,rgba(232,160,180,0.16),transparent_34%)]" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
          <div>
            <h3 className="text-4xl text-cream font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
              <span className="text-gradient">Delice</span> Desserts
            </h3>
            <p className="text-cream/70 max-w-xl mt-3 leading-relaxed">
              L&apos;art de la pâtisserie artisanale à Namur. Un lieu pensé pour vivre
              une expérience dessert premium, sur place ou en livraison.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              <div className="rounded-2xl bg-cream/10 border border-cream/15 p-4 text-sm text-cream/85">
                <p className="inline-flex items-center gap-2 text-cream"><MapPin size={15} /> Rue Moncrabeau 8</p>
                <p className="text-cream/65 mt-1">5000 Namur, Belgique</p>
              </div>
              <div className="rounded-2xl bg-cream/10 border border-cream/15 p-4 text-sm text-cream/85">
                <p className="inline-flex items-center gap-2 text-cream"><Phone size={15} /> 0486 45 46 15</p>
                <p className="text-cream/65 mt-1">Mer-Ven 12h-20h | Sam-Dim 12h-22h</p>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-xs uppercase tracking-[0.22em] text-cream/55 mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-xl border border-cream/15 px-3 py-2 text-sm text-cream/78 hover:text-gold-light hover:border-gold/35 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="https://www.instagram.com/_delice.desserts/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-dark text-espresso px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em]"
            >
              <Instagram size={14} />
              @_delice.desserts
            </a>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-cream/16 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-cream/50 text-sm text-center sm:text-left">&copy; {new Date().getFullYear()} Delice Desserts. Tous droits réservés. Propulsé par <a href="https://synaplink.be" target="_blank" rel="noopener noreferrer" className="text-gold-light hover:text-gold transition-colors">Synaplink.be</a></p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="w-10 h-10 rounded-full border border-gold/35 flex items-center justify-center text-gold-light hover:bg-gold hover:text-espresso transition-all"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
