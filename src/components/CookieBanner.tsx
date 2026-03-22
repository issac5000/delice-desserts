"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CookieBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      className="relative py-10 md:py-14 bg-espresso overflow-hidden border-y border-gold/15"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(208,122,148,0.25),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(232,160,180,0.2),transparent_45%)]" />

      {/* Scrolling cookie emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.07]">
        <motion.div
          animate={{ x: [0, -1600] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 28,
            ease: "linear",
          }}
          className="flex w-max gap-16 absolute top-2"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="text-5xl">
              🍪
            </span>
          ))}
        </motion.div>
        <motion.div
          animate={{ x: [-1200, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 24,
            ease: "linear",
          }}
          className="flex w-max gap-16 absolute bottom-2"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="text-4xl">
              🍪
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-light mb-4">
            <span>🍪</span> Nouveau <span>🍪</span>
          </span>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-cream"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Nos Cookies{" "}
          <span className="text-gradient italic">Artisanaux</span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-cream/50 text-sm md:text-base mt-3 max-w-xl mx-auto leading-relaxed"
        >
          Cuits chaque jour, garnis avec passion. Commandez-les directement en
          ligne !
        </motion.p>

        <motion.a
          href="#cookies"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="inline-flex items-center gap-2 mt-6 rounded-full bg-gradient-to-r from-gold to-gold-dark px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-espresso hover:brightness-110 transition-all"
        >
          Découvrir & Commander
        </motion.a>
      </div>
    </section>
  );
}
