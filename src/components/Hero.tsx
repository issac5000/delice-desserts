"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative h-screen overflow-hidden"
    >
      {/* Background with parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=2940&auto=format&fit=crop')`,
          }}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/50 to-espresso/80" />
        {/* Gold tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-rose/10" />
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] w-32 h-32 rounded-full bg-gold/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-[15%] w-48 h-48 rounded-full bg-rose/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full bg-caramel/10 blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 border border-gold/40 bg-gold/10 text-gold-light text-sm tracking-[0.2em] uppercase">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Namur, Belgique
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-cream leading-[0.9] mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="block">Delice</span>
          <span className="block text-gradient mt-2">Desserts</span>
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mb-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-cream/80 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed tracking-wide"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          L&apos;art de la patisserie artisanale,
          <br className="hidden md:block" />
          <span className="text-gold-light italic"> au coeur de Namur</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#carte"
            className="group relative px-8 py-4 bg-gold text-espresso font-semibold text-sm tracking-[0.15em] uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,160,80,0.5)]"
          >
            <span className="relative z-10">Decouvrir la Carte</span>
            <div className="absolute inset-0 bg-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-cream/30 text-cream font-semibold text-sm tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,160,80,0.2)]"
          >
            Nous Trouver
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-cream/50 text-xs tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-gold/70" />
        </motion.div>
      </motion.div>

      {/* Bottom fade — wave divider handles the transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream/40 to-transparent" />
    </section>
  );
}
