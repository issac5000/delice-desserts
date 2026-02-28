"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    alt: "Crepes artisanales",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=600&auto=format&fit=crop",
    alt: "Gaufres belges",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=600&auto=format&fit=crop",
    alt: "Pancakes moelleux",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop",
    alt: "Presentation gourmande",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop",
    alt: "Desserts chocolat",
    span: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop",
    alt: "Cafe et ambiance",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop",
    alt: "Art de la table",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?q=80&w=600&auto=format&fit=crop",
    alt: "Ingredients frais",
    span: "",
  },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="galerie" className="relative py-32 bg-cream overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Inspiration
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-chocolate mt-4 mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Notre <span className="text-gradient italic">Galerie</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-chocolate/60 max-w-xl mx-auto text-lg">
            Chaque creation est une oeuvre d&apos;art comestible.
            Laissez-vous inspirer par nos realisations.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden cursor-pointer ${img.span}`}
            >
              <div className="aspect-square w-full h-full relative">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${img.src}')` }}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <p
                      className="text-cream text-lg font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {img.alt}
                    </p>
                    <div className="w-8 h-[2px] bg-gold mt-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.instagram.com/_delice.desserts/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gold/30 text-chocolate font-semibold text-sm tracking-wider uppercase hover:bg-gold hover:text-espresso hover:border-gold transition-all duration-500 group"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Suivez-nous sur Instagram
            <span className="w-0 group-hover:w-6 h-[2px] bg-current transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
