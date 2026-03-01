"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const fade = useTransform(scrollYProgress, [0, 0.78], [1, 0]);

  return (
    <section id="accueil" ref={ref} className="relative min-h-screen pb-32 overflow-hidden">
      <motion.div style={{ y: yBg, scale: scaleBg }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-[center_60%]"
          style={{
            backgroundImage: "url('/hero.png')",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,226,236,0.24),transparent_36%),radial-gradient(circle_at_80%_12%,rgba(244,184,200,0.3),transparent_34%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-espresso/92 via-espresso/64 to-espresso/88" />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -24, 0], x: [0, 18, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[9%] w-64 h-64 rounded-full bg-gold/16 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 18, 0], x: [0, -18, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[18%] right-[10%] w-80 h-80 rounded-full bg-rose/16 blur-3xl"
        />
      </div>

      <motion.div style={{ opacity: fade }} className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 -mt-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-0"
        >
          <Image
            src="/logo.png"
            alt="Délice Desserts"
            width={600}
            height={290}
            priority
            className="w-[320px] sm:w-[420px] lg:w-[520px] h-auto mx-auto brightness-0 invert drop-shadow-[0_6px_40px_rgba(232,160,180,0.4)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative z-20 -mt-16 md:-mt-20 text-center"
        >
          <h1 className="text-[3rem] sm:text-[3.8rem] lg:text-[5.4rem] leading-[0.9] text-cream font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
            Desserts
            <span className="block text-gradient italic">Haute Gourmandise</span>
          </h1>
          <p className="mt-6 text-cream/85 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
            Une expérience dessert premium entre tradition belge et direction artistique
            contemporaine. Chaque assiette est pensée pour être mémorisable.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="#carte"
              className="rounded-full bg-gradient-to-r from-gold to-gold-dark px-8 py-4 text-espresso text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-center hover:brightness-110 transition-all"
            >
              Voir la carte
            </a>
            <a
              href="#galerie"
              className="rounded-full border border-cream/45 px-8 py-4 text-cream text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-center hover:border-gold-light hover:text-gold-light transition-all"
            >
              Explorer le lieu
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-cream/50 text-[10px] tracking-[0.35em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={20} className="text-gold-light" />
        </motion.div>
      </motion.div>
    </section>
  );
}
