"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const blurReveal = (delay: number, y = 30) => ({
  initial: { opacity: 0, y, filter: "blur(12px)" },
  transition: {
    duration: 1,
    delay,
    ease,
    filter: { duration: 0.8, delay },
  },
});

export default function Hero({ ready = false }: { ready?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const fade = useTransform(scrollYProgress, [0, 0.78], [1, 0]);

  const show = { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <section id="accueil" ref={ref} className="relative min-h-screen pb-32 overflow-hidden">
      <motion.div style={{ y: yBg, scale: scaleBg }} className="absolute inset-0">
        <Image
          src="/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_60%]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,226,236,0.24),transparent_36%),radial-gradient(circle_at_80%_12%,rgba(244,184,200,0.3),transparent_34%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-espresso/92 via-espresso/64 to-espresso/88" />
      </motion.div>

      {/* Floating orbs */}
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
        {/* Logo — scale + blur reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, filter: "blur(20px)" }}
          animate={ready ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{
            duration: 1.1,
            ease,
            scale: { duration: 1.2, ease: [0.34, 1.56, 0.64, 1] as const },
            filter: { duration: 0.9 },
          }}
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

        {/* Title "Desserts" — blur reveal from below */}
        <motion.div
          {...blurReveal(0.3, 50)}
          animate={ready ? show : {}}
          className="relative z-20 -mt-16 md:-mt-20 text-center"
        >
          <h1 className="text-[3rem] sm:text-[3.8rem] lg:text-[5.4rem] leading-[0.9] text-cream font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
            Desserts
          </h1>
        </motion.div>

        {/* "Haute Gourmandise" — separate blur reveal with horizontal spread */}
        <motion.span
          initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(16px)" }}
          animate={ready ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
          transition={{
            duration: 1,
            delay: 0.55,
            ease,
            scale: { duration: 0.9, delay: 0.55, ease: [0.34, 1.56, 0.64, 1] as const },
            filter: { duration: 0.7, delay: 0.55 },
          }}
          className="block text-gradient italic text-[3rem] sm:text-[3.8rem] lg:text-[5.4rem] leading-[0.9] font-bold mt-1 sm:-mt-2 md:-mt-3 relative z-20 text-center"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Haute Gourmandise
        </motion.span>

        {/* Golden divider line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={ready ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.75, ease }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mt-6 origin-center"
        />

        {/* Description */}
        <motion.p
          {...blurReveal(0.85, 20)}
          animate={ready ? show : {}}
          className="mt-6 text-cream/85 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed text-center"
        >
          Une expérience dessert premium entre tradition belge et direction artistique
          contemporaine. Chaque assiette est pensée pour être mémorisable.
        </motion.p>

        {/* CTA Buttons — spring bounce in */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <motion.a
            href="#reservation"
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: 1.05,
              scale: { type: "spring", stiffness: 300, damping: 20, delay: 1.05 },
            }}
            className="rounded-full bg-gradient-to-r from-gold to-gold-dark px-8 py-4 text-espresso text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-center hover:brightness-110 transition-all"
          >
            Réserver une table
          </motion.a>
          <motion.a
            href="#cookies"
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: 1.2,
              scale: { type: "spring", stiffness: 300, damping: 20, delay: 1.2 },
            }}
            className="rounded-full border border-cream/45 px-8 py-4 text-cream text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-center hover:border-gold-light hover:text-gold-light transition-all"
          >
            Commander des cookies
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.6, duration: 0.6 }}
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
