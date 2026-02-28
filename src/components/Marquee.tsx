"use client";

import { motion } from "framer-motion";

const words = [
  "Crepes",
  "Gaufres",
  "Pancakes",
  "Chocolat",
  "Speculoos",
  "Caramel",
  "Nutella",
  "Fruits Frais",
  "Fait Maison",
  "Artisanal",
  "Namur",
  "Delice",
];

export default function Marquee() {
  return (
    <section className="relative py-8 bg-cream-dark overflow-hidden">
      <div className="flex">
        <motion.div
          animate={{ x: [0, -2400] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...words, ...words, ...words, ...words].map((word, i) => (
            <span
              key={i}
              className="text-chocolate/10 text-6xl md:text-8xl font-bold tracking-wider flex items-center gap-12"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {word}
              <span className="text-gold/30 text-3xl">✦</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
