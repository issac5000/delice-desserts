"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GlassWater, Sparkles, Cherry, Flower2 } from "lucide-react";

const highlights = [
  {
    icon: GlassWater,
    title: "Classique",
    gradient: "from-[#D07A94]/20 to-[#F2C4D0]/10",
    glow: "rgba(208, 122, 148, 0.35)",
  },
  {
    icon: Cherry,
    title: "Fraise",
    gradient: "from-[#E8A0B4]/20 to-[#FADCE6]/10",
    glow: "rgba(232, 160, 180, 0.35)",
  },
  {
    icon: Sparkles,
    title: "Golden Passion",
    gradient: "from-[#C8A97E]/20 to-[#F2C4D0]/10",
    glow: "rgba(200, 169, 126, 0.35)",
  },
  {
    icon: Flower2,
    title: "Violette",
    gradient: "from-[#B8A0D0]/20 to-[#E0D0F0]/10",
    glow: "rgba(160, 140, 200, 0.35)",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Cocktails() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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
            <span className="section-badge">Mocktails &amp; Boissons</span>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-chocolate font-bold mt-5 leading-[1.1] text-center lg:text-left"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Des Mojitos{" "}
              <span className="text-gradient italic">d&apos;Exception</span>
            </h2>

            <p className="text-chocolate/65 text-base md:text-lg mt-6 leading-relaxed max-w-lg text-center lg:text-left mx-auto lg:mx-0">
              Parce que la gourmandise ne s&apos;arrête pas au dessert, Délice
              vous propose une carte de mocktails rafraîchissants pensés pour
              accompagner chaque bouchée sucrée.
            </p>

            {/* Cards — side by side */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.25 + i * 0.15,
                    ease,
                  }}
                  className="group relative rounded-2xl p-4 cursor-default overflow-hidden text-center
                    bg-white/60 backdrop-blur-sm
                    border border-gold/15
                    shadow-[0_2px_16px_rgba(45,31,45,0.04)]
                    hover:border-gold/40 hover:shadow-[0_8px_32px_rgba(208,122,148,0.12)]
                    hover:-translate-y-1
                    transition-all duration-300 ease-out"
                >
                  {/* Gradient bg on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                  <div className="relative flex flex-col items-center gap-3">
                    {/* Icon */}
                    <div
                      className="w-10 h-10 rounded-xl
                        bg-gradient-to-br from-gold-dark/10 to-rose/10
                        border border-gold/20
                        flex items-center justify-center
                        group-hover:scale-110 group-hover:border-gold/40
                        transition-all duration-300"
                      style={{
                        boxShadow: `0 0 0px ${item.glow}`,
                        transition: "box-shadow 300ms ease, transform 300ms ease, border-color 300ms ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 16px ${item.glow}`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0px ${item.glow}`;
                      }}
                    >
                      <item.icon size={18} className="text-gold-dark" />
                    </div>

                    <h3
                      className="text-sm text-chocolate font-bold leading-tight"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/menu/drinks"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="btn-cta flex w-fit items-center gap-2 mt-10 rounded-full text-cream px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] mx-auto lg:mx-0"
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
                src="/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
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
