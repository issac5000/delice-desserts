"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const galleryItems = [
  {
    src: "/1.png",
    alt: "Crepes artisanales",
    className: "md:col-span-8",
    tag: "Signature",
  },
  {
    src: "/3.png",
    alt: "Pancakes moelleux",
    className: "md:col-span-4",
    tag: "Brunch",
  },
  {
    src: "/4.png",
    alt: "Presentation gourmande",
    className: "md:col-span-4",
    tag: "Dressage",
  },
  {
    src: "/5.png",
    alt: "Desserts chocolat",
    className: "md:col-span-8",
    tag: "Chocolate",
  },
];

const stripImages = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/6.png",
  "/7.png",
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightbox, closeLightbox]);

  return (
    <section id="galerie" className="relative py-32 bg-vanilla overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_12%,rgba(208,122,148,0.2),transparent_36%),radial-gradient(circle_at_8%_80%,rgba(232,160,180,0.16),transparent_35%)]" />

      {/* Deco — flowing S-curve with dots */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1200 800">
        <path d="M-20,200 C200,100 400,350 600,250 S1000,400 1220,300" fill="none" stroke="rgba(208,122,148,0.18)" strokeWidth="1.5" />
        <path d="M-20,500 C200,400 450,600 650,480 S1000,620 1220,520" fill="none" stroke="rgba(232,160,180,0.14)" strokeWidth="1.2" />
        <circle cx="300" cy="170" r="5" fill="rgba(208,122,148,0.2)" />
        <circle cx="600" cy="250" r="4" fill="rgba(232,160,180,0.22)" />
        <circle cx="900" cy="340" r="6" fill="rgba(208,122,148,0.15)" />
        <circle cx="150" cy="480" r="3.5" fill="rgba(232,160,180,0.2)" />
        <circle cx="750" cy="530" r="5" fill="rgba(208,122,148,0.18)" />
        <circle cx="1050" cy="290" r="3" fill="rgba(232,160,180,0.16)" />
        <circle cx="450" cy="540" r="4" fill="rgba(208,122,148,0.14)" />
      </svg>

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-badge">Inspiration</span>
          <h2 className="text-4xl md:text-6xl font-bold text-chocolate mt-5" style={{ fontFamily: "var(--font-playfair)" }}>
            Notre <span className="text-gradient italic">Galerie</span>
          </h2>
          <p className="text-chocolate/65 mt-5 leading-relaxed">
            Une composition visuelle facon magazine: hero shot, plans details,
            ambiance coffee-shop et finitions gourmandes.
          </p>
        </motion.div>

        {/* iPhone + Gallery Grid */}
        <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-10 items-start">
          {/* iPhone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="mx-auto lg:mx-0 lg:sticky lg:top-28"
          >
            <div className="relative w-[240px] sm:w-[260px] lg:w-[280px]">
              {/* Instagram screenshot — precise fit inside screen area */}
              <div className="absolute top-[0.8%] bottom-[0.8%] left-[2.2%] right-[2.2%] rounded-[13%] overflow-hidden z-0">
                <Image
                  src="/instagram.PNG"
                  alt="Délice Desserts Instagram"
                  width={1179}
                  height={2556}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* iPhone frame on top */}
              <Image
                src="/iphone.png"
                alt="iPhone"
                width={363}
                height={750}
                className="relative z-10 w-full h-auto pointer-events-none"
              />
              {/* Glow behind */}
              <div className="absolute -inset-6 -z-10 rounded-full bg-rose/20 blur-3xl" />
            </div>
          </motion.div>

          {/* Gallery grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[280px]"
          >
            {galleryItems.map((item, i) => (
              <motion.article
                key={item.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.08 * i }}
                onClick={() => setLightbox({ src: item.src, alt: item.alt })}
                className={`group premium-ring rounded-3xl overflow-hidden relative cursor-pointer ${item.className}`}
              >
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${item.src}')` }} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(26,14,24,0.72)_100%)]" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cream/85 text-chocolate text-[10px] uppercase tracking-[0.14em] font-semibold">
                  {item.tag}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                  <p className="text-cream text-lg font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
                    {item.alt}
                  </p>
                  <div className="h-[2px] w-0 group-hover:w-12 mt-2 bg-gold-light transition-all duration-400" />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* Strip carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 overflow-hidden"
        >
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            className="flex gap-4"
          >
            {[...stripImages, ...stripImages, ...stripImages].map((src, i) => (
              <div
                key={`${src}-${i}`}
                onClick={() => setLightbox({ src, alt: "Delice Desserts" })}
                className="w-44 h-28 rounded-2xl overflow-hidden border border-gold/20 flex-shrink-0 cursor-pointer"
              >
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${src}')` }} />
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-gold/30" />
          <a
            href="https://www.instagram.com/_delice.desserts/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-chocolate/50 hover:text-gold-dark transition-colors"
          >
            @_delice.desserts
          </a>
          <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-gold/30" />
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex items-center justify-center"
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-2xl"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
