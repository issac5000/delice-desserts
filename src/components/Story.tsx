"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Fait Maison",
    description:
      "Chaque creation est preparee artisanalement avec des ingredients frais et de saison.",
  },
  {
    icon: Heart,
    title: "Avec Passion",
    description:
      "Notre amour pour la patisserie se retrouve dans chaque bouchee, chaque presentation.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Un savoir-faire unique qui allie tradition belge et creativite contemporaine.",
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
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Notre Histoire
          </span>
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
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1555507036-ab1f4038024a?q=80&w=2726&auto=format&fit=crop')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-8 -right-8 md:right-8 glass p-6 shadow-xl max-w-[220px]"
            >
              <div className="text-4xl font-bold text-gold" style={{ fontFamily: "var(--font-playfair)" }}>
                100%
              </div>
              <div className="text-chocolate/70 text-sm mt-1">
                Ingredients frais & artisanaux
              </div>
            </motion.div>

            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/40" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/40" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-chocolate/80 leading-relaxed">
              Niché au coeur de Namur, <strong className="text-chocolate">Delice Desserts</strong> est
              bien plus qu&apos;une simple patisserie. C&apos;est un lieu où
              chaque crepe, chaque gaufre, chaque dessert raconte une histoire
              de passion et de savoir-faire.
            </p>
            <p className="text-lg text-chocolate/80 leading-relaxed">
              De la preparation minutieuse de nos pates à la selection
              rigoureuse de nos garnitures — Nutella onctueux, fruits frais
              de saison, sauces maison au caramel et au speculoos —
              chaque detail est pense pour vous offrir un moment
              d&apos;exception.
            </p>
            <p className="text-lg text-chocolate/80 leading-relaxed">
              Que vous soyez amateur de classiques belges ou en quete de
              decouvertes gustatives, notre carte saura ravir vos papilles
              et eveiller vos sens.
            </p>

            <div className="pt-4">
              <a
                href="#carte"
                className="inline-flex items-center gap-3 text-gold font-semibold tracking-wider uppercase text-sm group"
              >
                Decouvrir nos creations
                <span className="w-8 h-[2px] bg-gold transition-all duration-300 group-hover:w-12" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Values cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.2 }}
              className="group relative p-8 bg-vanilla border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(201,160,80,0.15)]"
            >
              <div className="w-14 h-14 bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <value.icon className="w-7 h-7 text-gold" />
              </div>
              <h3
                className="text-xl font-bold text-chocolate mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {value.title}
              </h3>
              <p className="text-chocolate/60 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
