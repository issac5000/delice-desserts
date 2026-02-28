"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const specialties = [
  {
    title: "Crepes Artisanales",
    description:
      "Pate preparee chaque matin avec des ingredients frais. Garnitures gourmandes et presentations soignees.",
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=800&auto=format&fit=crop",
    accent: "from-gold/20 to-caramel/20",
  },
  {
    title: "Gaufres Belges",
    description:
      "La tradition belge dans toute sa splendeur. Croustillantes a l'exterieur, moelleuses a l'interieur.",
    image:
      "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=800&auto=format&fit=crop",
    accent: "from-rose/20 to-gold/20",
  },
  {
    title: "Pancakes Moelleux",
    description:
      "Epais, legers et fondants. Nos pancakes sont un veritable nuage de douceur a chaque bouchee.",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop",
    accent: "from-caramel/20 to-rose/20",
  },
];

export default function Specialties() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section className="relative py-32 bg-cream-dark overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #E8A0B4 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating blurs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 -left-32 w-64 h-64 bg-gold/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 -right-32 w-80 h-80 bg-rose/10 rounded-full blur-3xl"
      />

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Nos Specialites
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-chocolate mt-4 mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            L&apos;Excellence{" "}
            <span className="text-gradient italic">Gourmande</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </motion.div>

        {/* Specialty cards */}
        <div className="space-y-24">
          {specialties.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Image */}
              <div className="relative w-full lg:w-1/2 group">
                <div className="relative aspect-[16/10] overflow-hidden shadow-2xl">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${item.image}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate/40 to-transparent" />
                </div>

                {/* Decorative accent */}
                <div
                  className={`absolute -inset-4 bg-gradient-to-br ${item.accent} -z-10 blur-2xl opacity-50`}
                />

                {/* Number */}
                <div
                  className="absolute -top-6 -left-4 text-8xl font-bold text-gold/15"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  0{i + 1}
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3
                  className="text-3xl md:text-4xl font-bold text-chocolate"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.title}
                </h3>
                <div className="w-12 h-[2px] bg-gold" />
                <p className="text-chocolate/60 text-lg leading-relaxed">
                  {item.description}
                </p>
                <a
                  href="#carte"
                  className="inline-flex items-center gap-3 text-gold-dark font-semibold tracking-wider uppercase text-sm group/link"
                >
                  Voir la carte
                  <span className="w-8 h-[2px] bg-gold-dark transition-all duration-300 group-hover/link:w-12" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
