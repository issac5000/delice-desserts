"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const galleryItems = [
  {
    src: "/1.png",
    alt: "Crepes artisanales",
    className: "md:col-span-8",
    tag: "Signature",
  },
  {
    src: "/3.png",
    alt: "Pancakes moelleux",
    className: "md:col-span-4",
    tag: "Brunch",
  },
  {
    src: "/4.png",
    alt: "Presentation gourmande",
    className: "md:col-span-4",
    tag: "Dressage",
  },
  {
    src: "/5.png",
    alt: "Desserts chocolat",
    className: "md:col-span-8",
    tag: "Chocolate",
  },
];

const stripImages = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/6.png",
  "/7.png",
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="galerie" className="relative py-32 bg-vanilla overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_12%,rgba(208,122,148,0.2),transparent_36%),radial-gradient(circle_at_8%_80%,rgba(232,160,180,0.16),transparent_35%)]" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <span className="section-badge">Inspiration</span>
            <h2 className="text-4xl md:text-5xl font-bold text-chocolate mt-5" style={{ fontFamily: "var(--font-playfair)" }}>
              Notre <span className="text-gradient italic">Galerie</span>
            </h2>
            <p className="text-chocolate/65 mt-5 leading-relaxed">
              Une composition visuelle facon magazine: hero shot, plans details,
              ambiance coffee-shop et finitions gourmandes.
            </p>

            <div className="premium-panel rounded-2xl p-5 mt-6">
              <p className="text-xs uppercase tracking-[0.22em] text-chocolate/45">Suivez le moodboard</p>
              <a
                href="https://www.instagram.com/_delice.desserts/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-3 items-center gap-3 rounded-full bg-chocolate text-cream px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-chocolate-light transition-colors"
              >
                Voir Instagram
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[210px]"
          >
            {galleryItems.map((item, i) => (
              <motion.article
                key={item.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.08 * i }}
                className={`group premium-ring rounded-3xl overflow-hidden relative ${item.className}`}
              >
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${item.src}')` }} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(26,14,24,0.72)_100%)]" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cream/85 text-chocolate text-[10px] uppercase tracking-[0.14em] font-semibold">
                  {item.tag}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                  <p className="text-cream text-lg font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
                    {item.alt}
                  </p>
                  <div className="h-[2px] w-0 group-hover:w-12 mt-2 bg-gold-light transition-all duration-400" />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 overflow-hidden"
        >
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            className="flex gap-4"
          >
            {[...stripImages, ...stripImages, ...stripImages].map((src, i) => (
              <div key={`${src}-${i}`} className="w-44 h-28 rounded-2xl overflow-hidden border border-gold/20 flex-shrink-0">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${src}')` }} />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
