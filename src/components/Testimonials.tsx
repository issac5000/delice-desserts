"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophie L.",
    text: "Les meilleures crêpes que j'ai mangées à Namur. La crêpe Nutella Bueno est à tomber et le service est impeccable.",
    rating: 5,
    date: "Il y a 2 semaines",
  },
  {
    name: "Marc D.",
    text: "Gaufres incroyables, ingrédients de qualité et chocolat chaud belge parfait. Une adresse qui donne envie de revenir.",
    rating: 5,
    date: "Il y a 1 mois",
  },
  {
    name: "Amélie V.",
    text: "Les pancakes aux fruits frais sont un délice absolu. Cadre élégant et équipe très accueillante.",
    rating: 5,
    date: "Il y a 3 semaines",
  },
  {
    name: "Thomas B.",
    text: "La crêpe caramel spéculoos est un chef-d'œuvre. On sent le travail maison et la constance.",
    rating: 5,
    date: "Il y a 1 semaine",
  },
  {
    name: "Julie M.",
    text: "Gaufre framboise pistache divine, présentation soignée et ambiance premium sans prétention.",
    rating: 5,
    date: "Il y a 2 mois",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section className="relative py-32 bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(208,122,148,0.2),transparent_35%),radial-gradient(circle_at_84%_76%,rgba(232,160,180,0.2),transparent_35%)]" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-badge">Témoignages</span>
          <h2 className="text-4xl md:text-6xl font-bold text-chocolate mt-5" style={{ fontFamily: "var(--font-playfair)" }}>
            Ce que disent nos <span className="text-gradient italic">clients</span>
          </h2>

          <div className="mt-8 flex flex-col items-center">
            <p className="text-7xl md:text-8xl font-bold text-gold-dark" style={{ fontFamily: "var(--font-playfair)" }}>
              4.9
            </p>
            <div className="flex gap-1.5 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-base text-chocolate/50 mt-3">+300 avis vérifiés</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative rounded-3xl border border-gold/15 bg-vanilla/60 p-7 hover:border-gold/35 hover:shadow-[0_16px_40px_rgba(45,31,45,0.1)] hover:-translate-y-1 transition-all duration-400"
            >
              <Quote size={32} className="text-gold/20 mb-4" />
              <p className="text-chocolate/80 leading-relaxed" style={{ fontFamily: "var(--font-playfair)" }}>
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex gap-1 mt-5">
                {[...Array(item.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 pt-4 border-t border-gold/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-rose/20 flex items-center justify-center text-gold-dark font-semibold text-sm">
                  {item.name.slice(0, 1)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-chocolate">{item.name}</p>
                  <p className="text-xs text-chocolate/40">{item.date}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          {testimonials.slice(3).map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 3) }}
              className="group relative rounded-3xl border border-gold/15 bg-vanilla/60 p-7 hover:border-gold/35 hover:shadow-[0_16px_40px_rgba(45,31,45,0.1)] hover:-translate-y-1 transition-all duration-400 w-full md:w-[calc(33.333%-1rem)]"
            >
              <Quote size={32} className="text-gold/20 mb-4" />
              <p className="text-chocolate/80 leading-relaxed" style={{ fontFamily: "var(--font-playfair)" }}>
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex gap-1 mt-5">
                {[...Array(item.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 pt-4 border-t border-gold/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-rose/20 flex items-center justify-center text-gold-dark font-semibold text-sm">
                  {item.name.slice(0, 1)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-chocolate">{item.name}</p>
                  <p className="text-xs text-chocolate/40">{item.date}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
