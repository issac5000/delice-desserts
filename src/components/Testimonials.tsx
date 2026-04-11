"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote, ExternalLink } from "lucide-react";

function GoogleLogo({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className="shrink-0">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 019.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.94 23.94 0 000 24c0 3.77.9 7.34 2.44 10.51l8.09-5.92z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-8.09 5.92C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function GoogleStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" width={16} height={16}>
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill={i < rating ? "#FBBC04" : "#E8EAED"}
          />
        </svg>
      ))}
    </div>
  );
}

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=D%C3%A9lice+Desserts+Namur+Avis";

const reviews = [
  {
    name: "Alizée P.",
    text: "Très gourmand, savoureux et qualité-prix plus que satisfaisant, personnel très gentil. La déco est mignonne. Dommage que ce soit un peu caché, ça vaut vraiment la peine.",
    rating: 5,
    date: "Il y a 2 mois",
  },
  {
    name: "Elodie B.",
    text: "Tombés sur cet endroit au hasard en visite à Namur, je rêve encore de leurs milkshakes et gaufres des mois plus tard, la serveuse était très gentille et on a passé un super moment, je recommande !!! J'y reviendrai si je visite la Belgique à nouveau !",
    rating: 5,
    date: "Il y a 6 mois",
  },
  {
    name: "Rachel V.",
    text: "J'y suis venue plusieurs fois manger et toujours un délice. Tellement bon que j'ai demandé si ils proposaient aussi des gâteaux (c'était pas dans le menu) et la gérante a accepté de m'en faire un… Tout le monde a adoré. Et en plus trop beau. Je ne laisse jamais d'avis mais là c'était obligé. Une très bonne adresse.",
    rating: 5,
    date: "Il y a 2 mois",
  },
  {
    name: "Céline A.",
    text: "On a pris un milkshake et un cookie dough et c'était vraiment super bon et la gérante est très gentille et accueillante. On y retournera !",
    rating: 5,
    date: "Il y a 4 mois",
  },
];

function GoogleBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/60 border border-gold/15 text-[10px] font-semibold tracking-wide text-chocolate/40 uppercase">
      <svg viewBox="0 0 48 48" width={12} height={12} className="shrink-0">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
        <path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 019.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.94 23.94 0 000 24c0 3.77.9 7.34 2.44 10.51l8.09-5.92z" />
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-8.09 5.92C6.51 42.62 14.62 48 24 48z" />
      </svg>
      Avis Google
    </div>
  );
}

function ReviewCard({ item }: { item: (typeof reviews)[number] }) {
  return (
    <div
      className="shrink-0 w-[360px] relative rounded-3xl border border-gold/20 p-7 select-none overflow-hidden"
      style={{
        background:
          "linear-gradient(155deg, rgba(255,252,253,0.88), rgba(255,244,247,0.6))",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 4px 16px rgba(45,31,45,0.06)",
      }}
      draggable={false}
    >
      {/* Decorative corner glow */}
      <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-gradient-to-br from-gold/20 to-rose/10 blur-2xl pointer-events-none" />

      {/* Quote icon */}
      <Quote
        size={30}
        className="text-gold/25 mb-4"
        strokeWidth={1.5}
      />

      {/* Review text */}
      <p
        className="text-chocolate/75 leading-relaxed line-clamp-4 text-[15px]"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        &ldquo;{item.text}&rdquo;
      </p>

      {/* Stars */}
      <div className="flex gap-1 mt-5">
        {[...Array(item.rating)].map((_, j) => (
          <Star key={j} size={14} className="fill-gold text-gold" />
        ))}
      </div>

      {/* Divider + author */}
      <div className="mt-5 flex items-center justify-between pt-5 border-t border-gold/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/40 to-rose/25 flex items-center justify-center text-gold-dark font-semibold text-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)]">
            {item.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-chocolate">{item.name}</p>
            <p className="text-xs text-chocolate/35">{item.date}</p>
          </div>
        </div>
        <GoogleBadge />
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  const tripled = [...reviews, ...reviews, ...reviews];

  return (
    <section ref={sectionRef} className="relative py-32 bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(208,122,148,0.2),transparent_35%),radial-gradient(circle_at_84%_76%,rgba(232,160,180,0.2),transparent_35%)]" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-badge">Témoignages</span>
          <h2
            className="text-4xl md:text-6xl font-bold text-chocolate mt-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ce que disent nos{" "}
            <span className="text-gradient italic">clients</span>
          </h2>

        </motion.div>

        {/* Google summary pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center mb-12"
        >
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 rounded-2xl bg-white border border-gray-200 shadow-sm px-6 py-5 hover:shadow-md transition-shadow"
          >
            <GoogleLogo size={36} />
            <div>
              <p className="text-sm font-medium text-gray-800">Google Reviews</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-2xl font-bold text-gray-900 leading-none">4.2</span>
                <GoogleStars rating={4} />
              </div>
              <p className="text-xs text-gray-500 mt-0.5">39 avis</p>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Marquee — full viewport width, edge to edge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="relative group"
      >
        {/* Fade edges — hidden on mobile */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-cream to-transparent hidden md:block" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-cream to-transparent hidden md:block" />

        <div className="marquee-track">
          <div className="marquee-scroll marquee-left group-hover:[animation-play-state:paused]">
            {tripled.map((item, i) => (
              <ReviewCard key={`r-${i}`} item={item} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm hover:shadow-md hover:border-gray-400 transition-all"
          >
            <GoogleLogo size={16} />
            Voir tous les avis sur Google
            <ExternalLink size={14} className="text-gray-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
