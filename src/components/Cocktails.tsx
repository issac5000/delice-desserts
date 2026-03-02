"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GlassWater, Sparkles, Cherry } from "lucide-react";

const highlights = [
  {
    icon: GlassWater,
    title: "Mojitos Signature",
    desc: "Classique, fruits rouges, mangue, passion\u2026 notre carte de mojitos revisite le cocktail mythique avec des saveurs uniques.",
  },
  {
    icon: Cherry,
    title: "Pour Tous les Go\u00fbts",
    desc: "Avec ou sans alcool, fruités ou acidulés, chaque cocktail est préparé minute avec des ingrédients frais.",
  },
  {
    icon: Sparkles,
    title: "L\u2019Art du M\u00e9lange",
    desc: "Nos baristas imaginent des associations originales entre desserts et cocktails pour une expérience complète.",
  },
];

export default function Cocktails() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="cocktails" className="relative py-32 bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_80%,rgba(232,160,180,0.18),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(208,122,148,0.12),transparent_35%)]" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-badge">Cocktails &amp; Boissons</span>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-chocolate font-bold mt-5 leading-[1.1]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Des Mojitos{" "}
              <span className="text-gradient italic">d&apos;Exception</span>
            </h2>

            <p className="text-chocolate/65 text-base md:text-lg mt-6 leading-relaxed max-w-lg">
              Parce que la gourmandise ne s&apos;arrête pas au dessert, Délice
              vous propose une carte de cocktails rafraîchissants pensés pour
              accompagner chaque bouchée sucrée.
            </p>

            <div className="mt-10 space-y-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.12 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-vanilla border border-gold/20 flex items-center justify-center text-gold-dark group-hover:border-gold/40 transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3
                      className="text-lg text-chocolate font-bold"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-chocolate/55 text-sm mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#carte"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="btn-cta inline-flex items-center gap-2 mt-10 rounded-full text-cream px-6 py-3 text-xs font-bold uppercase tracking-[0.14em]"
            >
              Découvrir la carte
            </motion.a>
          </motion.div>

          {/* Right — Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-[28px] overflow-hidden border border-gold/20 shadow-[0_24px_60px_rgba(45,31,45,0.12)]">
              <video
                className="w-full aspect-[9/12] max-h-[520px] object-cover"
                src="/video.mov"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>

            {/* Decorative blur blob */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-56 h-56 rounded-full bg-rose/30 blur-3xl" />
            <div className="absolute -z-10 -top-8 -left-8 w-40 h-40 rounded-full bg-gold-light/25 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
