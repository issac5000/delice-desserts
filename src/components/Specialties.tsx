"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const specialties = [
  {
    title: "Crêpes Artisanales",
    description:
      "Pâte préparée chaque matin, cuisson précise et garnitures généreuses pour un équilibre parfait.",
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Gaufres Belges",
    description:
      "Croustillantes à l'extérieur, moelleuses à l'intérieur, avec toppings signatures.",
    image:
      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Pancakes Moelleux",
    description:
      "Épais, légers et ultra-fondants, servis en composition premium sucrée.",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Specialties() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="specialites" className="relative py-32 bg-vanilla overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_15%,rgba(232,160,180,0.2),transparent_35%),radial-gradient(circle_at_10%_88%,rgba(208,122,148,0.15),transparent_35%)]" />

      {/* Deco — scattered rose petals */}
      <div className="absolute top-12 right-[6%] w-44 h-64 rounded-[63%_37%_30%_70%_/_50%_45%_55%_50%] bg-rose/[0.14] rotate-[25deg] blur-sm pointer-events-none" />
      <div className="absolute bottom-16 left-[4%] w-32 h-48 rounded-[63%_37%_30%_70%_/_50%_45%_55%_50%] bg-gold/[0.12] -rotate-[40deg] blur-sm pointer-events-none" />
      <div className="absolute top-[38%] right-[2%] w-24 h-36 rounded-[63%_37%_30%_70%_/_50%_45%_55%_50%] bg-rose-light/[0.16] rotate-[65deg] blur-sm pointer-events-none" />
      <div className="absolute bottom-[18%] right-[20%] w-4 h-4 rounded-full bg-gold-dark/20 pointer-events-none" />
      <div className="absolute top-[22%] left-[14%] w-3 h-3 rounded-full bg-rose/25 pointer-events-none" />
      <div className="absolute top-[60%] left-[45%] w-2.5 h-2.5 rounded-full bg-gold/20 pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="section-badge">Nos spécialités</span>
        </motion.div>

        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl text-chocolate font-bold mt-5 mb-14 text-center"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          L&apos;Excellence{" "}
          <motion.span
            className="text-gradient italic inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            Gourmande
          </motion.span>
        </motion.h2>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {specialties.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.65,
                delay: 0.3 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group premium-ring rounded-[28px] overflow-hidden bg-cream/70 border border-gold/20"
            >
              <div className="relative h-72 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,14,24,0.06),rgba(26,14,24,0.72))]" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cream/80 text-chocolate flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl text-chocolate font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                  {item.title}
                </h3>
                <p className="text-chocolate/65 text-sm mt-3 leading-relaxed">{item.description}</p>
                <a
                  href="#carte"
                  className="inline-flex items-center gap-2 mt-5 text-xs uppercase tracking-[0.16em] text-gold-dark font-semibold"
                >
                  Voir la carte
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
