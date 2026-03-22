"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Sofa, Music } from "lucide-react";

const touches = [
  {
    icon: Sofa,
    title: "Un Cocon Chaleureux",
    desc: "Fauteuils moelleux, lumières tamisées et matières douces\u2009: chaque recoin est pensé pour vous envelopper de confort dès le premier instant.",
  },
  {
    icon: Flame,
    title: "Une Douceur de Vivre",
    desc: "Ici, le temps ralentit. On savoure, on discute, on se retrouve autour d\u2019une table comme à la maison, en mieux.",
  },
  {
    icon: Music,
    title: "Une Atmosph\u00e8re Unique",
    desc: "Playlist soignée, parfums de pâtisserie chaude et décor soigné dans les moindres détails pour éveiller tous vos sens.",
  },
];

export default function Ambiance() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="ambiance"
      className="relative py-32 bg-vanilla overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(232,160,180,0.16),transparent_40%),radial-gradient(circle_at_20%_15%,rgba(208,122,148,0.1),transparent_35%)]" />

      {/* Deco — concentric rose rings */}
      <div className="absolute -top-28 -right-28 w-96 h-96 rounded-full border-[1.5px] border-rose/15 pointer-events-none" />
      <div className="absolute -top-14 -right-14 w-72 h-72 rounded-full border border-rose/10 pointer-events-none" />
      <div className="absolute -top-4 -right-4 w-52 h-52 rounded-full border border-rose-light/15 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full border-[1.5px] border-gold/12 pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full border border-gold-light/15 pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-[28px] overflow-hidden border border-gold/20 shadow-[0_24px_60px_rgba(45,31,45,0.12)]">
              <video
                className="w-full aspect-[9/11] object-cover"
                src="/video2.mov"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>

            <div className="absolute -z-10 -bottom-10 -left-10 w-56 h-56 rounded-full bg-gold-light/25 blur-3xl" />
            <div className="absolute -z-10 -top-8 -right-8 w-40 h-40 rounded-full bg-rose/30 blur-3xl" />
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <span className="section-badge self-center lg:self-start">Notre Ambiance</span>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-chocolate font-bold mt-5 leading-[1.1] text-center lg:text-left"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Votre Moment{" "}
              <span className="text-gradient italic">de Douceur</span>
            </h2>

            <p className="text-chocolate/65 text-base md:text-lg mt-6 leading-relaxed max-w-lg text-center lg:text-left mx-auto lg:mx-0">
              Bien plus qu&apos;une pâtisserie, Délice est un refuge gourmand où
              l&apos;on vient se poser, respirer et profiter d&apos;un instant
              suspendu entre élégance et simplicité.
            </p>

            <div className="mt-10 space-y-6">
              {touches.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-cream border border-gold/20 flex items-center justify-center text-gold-dark group-hover:border-gold/40 transition-colors">
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
              href="#contact"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="btn-cta inline-flex self-start items-center gap-2 mt-10 rounded-full text-cream px-6 py-3 text-xs font-bold uppercase tracking-[0.14em]"
            >
              Nous rendre visite
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
