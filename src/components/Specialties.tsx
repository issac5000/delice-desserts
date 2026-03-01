"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const specialties = [
  {
    title: "Crepes Artisanales",
    description:
      "Pate preparee chaque matin, cuisson precise et garnitures genereuses pour un equilibre parfait.",
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Gaufres Belges",
    description:
      "Croustillantes a l'exterieur, moelleuses a l'interieur, avec toppings signatures.",
    image:
      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Pancakes Moelleux",
    description:
      "Epais, legers et ultra-fondants, servis en composition premium sucree.",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Specialties() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="specialites" className="relative py-32 bg-vanilla overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_15%,rgba(232,160,180,0.2),transparent_35%),radial-gradient(circle_at_10%_88%,rgba(208,122,148,0.15),transparent_35%)]" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-badge">Nos specialites</span>
          <h2 className="text-4xl md:text-6xl text-chocolate font-bold mt-5" style={{ fontFamily: "var(--font-playfair)" }}>
            L&apos;Excellence <span className="text-gradient italic">Gourmande</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {specialties.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
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
