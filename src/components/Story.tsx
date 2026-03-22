"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Fait Maison",
    description:
      "Chaque création est préparée artisanalement avec des ingrédients frais et de saison.",
  },
  {
    icon: Heart,
    title: "Avec Passion",
    description:
      "Notre amour pour la pâtisserie se retrouve dans chaque bouchée, chaque présentation.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Un savoir-faire unique qui allie tradition belge et créativité contemporaine.",
  },
];

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="histoire" className="relative py-32 bg-cream overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="section-badge">Notre histoire</span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-chocolate mt-4 mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Un Amour du
            <span className="text-gradient italic"> Fait Maison</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </motion.div>

        {/* Story content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/comptoire.png')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-8 right-2 sm:-right-8 md:right-8 bg-white rounded-2xl p-4 sm:p-6 shadow-xl max-w-[180px] sm:max-w-[220px] z-10"
            >
              <div
                className="text-4xl font-bold text-gold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                100%
              </div>
              <div className="text-chocolate/70 text-sm mt-1">
                Ingrédients frais & artisanaux
              </div>
            </motion.div>

            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/40" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/40 z-20" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-chocolate/80 leading-relaxed">
              Niché au cœur de Namur, <strong className="text-chocolate">Délice Desserts</strong> est
              bien plus qu&apos;une simple pâtisserie. C&apos;est un lieu où
              chaque crêpe, chaque gaufre, chaque dessert raconte une histoire
              de passion et de savoir-faire.
            </p>
            <p className="text-lg text-chocolate/80 leading-relaxed">
              De la préparation minutieuse de nos pâtes à la sélection
              rigoureuse de nos garnitures — Nutella onctueux, fruits frais
              de saison, sauces maison au caramel et au spéculoos —
              chaque détail est pensé pour vous offrir un moment
              d&apos;exception.
            </p>
            <p className="text-lg text-chocolate/80 leading-relaxed">
              Que vous soyez amateur de classiques belges ou en quête de
              découvertes gustatives, notre carte saura ravir vos papilles
              et éveiller vos sens.
            </p>

            <div className="pt-4">
              <a
                href="#carte"
                className="inline-flex items-center gap-3 text-gold font-semibold tracking-wider uppercase text-sm group"
              >
                Découvrir nos créations
                <span className="w-8 h-[2px] bg-gold transition-all duration-300 group-hover:w-12" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Values cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.2 }}
              className="group relative rounded-[24px] border border-chocolate/10 bg-gradient-to-b from-vanilla to-cream p-6 md:p-7 shadow-[0_14px_34px_rgba(45,31,45,0.08)] hover:-translate-y-2 hover:shadow-[0_26px_54px_rgba(45,31,45,0.18)] transition-all duration-400"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-[radial-gradient(circle_at_85%_15%,rgba(208,122,148,0.22),transparent_42%)] rounded-[24px]" />
              <svg className="absolute -inset-[1px] w-[calc(100%+2px)] h-[calc(100%+2px)] pointer-events-none z-10" xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="1" y="1"
                  width="99%" height="99%"
                  rx="24" ry="24"
                  fill="none"
                  stroke={`url(#gold-grad-${i})`}
                  strokeWidth="2.5"
                  strokeDasharray="3000"
                  strokeDashoffset="3000"
                  className="group-hover:[stroke-dashoffset:0] transition-[stroke-dashoffset] duration-[3000ms] ease-linear"
                />
                <defs>
                  <linearGradient id={`gold-grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D07A94" />
                    <stop offset="50%" stopColor="#E8A0B4" />
                    <stop offset="100%" stopColor="#F2C4D0" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl border border-gold/25 bg-cream/70 text-gold-dark flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <value.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.22em] text-chocolate/40 font-semibold">
                  Valeur 0{i + 1}
                </span>
              </div>

              <h3
                className="text-[1.55rem] leading-tight font-bold text-chocolate mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {value.title}
              </h3>
              <p className="text-chocolate/62 leading-relaxed text-[15px]">
                {value.description}
              </p>

              <div className="mt-5 flex items-center gap-2">
                <div className="h-[1px] w-8 bg-gold/55 group-hover:w-16 transition-all duration-300" />
                <div className="h-[1px] w-2 bg-gold/35" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
