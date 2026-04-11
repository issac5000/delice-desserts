"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const bestSellers = [
  {
    title: "Pancakes Bueno Lover",
    description:
      "De sauce Nutella et sauce Bueno, avec des morceaux de Kinder Bueno et copeaux de chocolat.",
    image: "/best1.webp",
  },
  {
    title: "Cookie Dough Bueno Lover",
    description:
      "Pâte à cookie vanille chaude et fondante, nappée de sauce Bueno, avec de généreux morceaux de Kinder Bueno.",
    image: "/best2.webp",
  },
  {
    title: "Gaufre Délice Belgian",
    description:
      "Gaufre nappée de sauce caramel et de sauce Spéculoos, parsemée de morceaux de biscuits croustillants.",
    image: "/best3.webp",
  },
  {
    title: "Cookie Pistache",
    description:
      "Cookies épais, cœur coulant à la pâte de pistache, chocolat blanc fondant, morceaux de pistache.",
    image: "/best4.webp",
  },
];

export default function Menu() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="carte" className="relative py-32 bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,rgba(208,122,148,0.16),transparent_34%),radial-gradient(circle_at_86%_5%,rgba(232,160,180,0.18),transparent_32%)]" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-badge">Nos créations</span>
          <h2
            className="text-4xl md:text-6xl font-bold text-chocolate mt-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nos <span className="text-gradient italic">Best-Sellers</span>
          </h2>
        </motion.div>

        {/* Best sellers grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-[28px] overflow-hidden border border-gold/20 bg-vanilla/60 hover:border-gold/40 hover:shadow-[0_20px_50px_rgba(45,31,45,0.12)] hover:-translate-y-2 transition-all duration-400"
            >
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-lg font-bold text-chocolate leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-chocolate/55 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Link to full menu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 rounded-full bg-chocolate text-cream px-8 py-4 text-sm font-semibold hover:bg-gold-dark transition-all duration-300 shadow-[0_8px_24px_rgba(45,31,45,0.2)] hover:shadow-[0_12px_32px_rgba(208,122,148,0.3)]"
          >
            Voir la carte complète
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
