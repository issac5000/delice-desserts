"use client";

import { motion } from "framer-motion";

const topLine = [
  "Crêpes Signature",
  "Gaufres Belges",
  "Pancakes Moelleux",
  "Chocolat Belge",
  "Caramel Spéculoos",
  "Fruits Frais",
  "Délice Namur",
];

const bottomLine = [
  "Fait Minute",
  "Texture Parfaite",
  "Présentation Premium",
  "Coffee Pairing",
  "Recettes Maison",
  "Ambiance Chic",
  "Dessert Bar",
];

export default function Marquee() {
  return (
    <section className="relative py-10 md:py-12 bg-cream-dark overflow-hidden border-y border-gold/15">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(232,160,180,0.3),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(208,122,148,0.3),transparent_32%)]" />

      <div className="relative space-y-4">
        <motion.div
          animate={{ x: [0, -2200] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 36, ease: "linear" }}
          className="flex w-max gap-8"
        >
          {[...topLine, ...topLine, ...topLine].map((item, i) => (
            <span
              key={`top-${i}`}
              className="text-2xl md:text-4xl text-chocolate/20 font-bold tracking-wide flex items-center gap-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {item}
              <span className="text-gold/40 text-xl">✶</span>
            </span>
          ))}
        </motion.div>

        <motion.div
          animate={{ x: [-2200, 0] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 34, ease: "linear" }}
          className="flex w-max gap-6"
        >
          {[...bottomLine, ...bottomLine, ...bottomLine].map((item, i) => (
            <span
              key={`bottom-${i}`}
              className="px-5 py-2 rounded-full bg-cream/80 border border-gold/20 text-chocolate/70 text-xs md:text-sm uppercase tracking-[0.18em] font-semibold"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
