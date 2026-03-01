"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Sophie L.",
    text: "Les meilleures crepes que j'ai mangees a Namur. La crepe Nutella Bueno est a tomber et le service est impeccable.",
    rating: 5,
    date: "Il y a 2 semaines",
  },
  {
    name: "Marc D.",
    text: "Gaufres incroyables, ingredients de qualite et chocolat chaud belge parfait. Une adresse qui donne envie de revenir.",
    rating: 5,
    date: "Il y a 1 mois",
  },
  {
    name: "Amelie V.",
    text: "Les pancakes aux fruits frais sont un delice absolu. Cadre elegant et equipe tres accueillante.",
    rating: 5,
    date: "Il y a 3 semaines",
  },
  {
    name: "Thomas B.",
    text: "La crepe caramel speculoos est un chef-d'oeuvre. On sent le travail maison et la constance.",
    rating: 5,
    date: "Il y a 1 semaine",
  },
  {
    name: "Julie M.",
    text: "Gaufre framboise pistache divine, presentation soignee et ambiance premium sans pretention.",
    rating: 5,
    date: "Il y a 2 mois",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const active = testimonials[current];

  return (
    <section className="relative py-32 bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(208,122,148,0.2),transparent_35%),radial-gradient(circle_at_84%_76%,rgba(232,160,180,0.2),transparent_35%)]" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-badge">Temoignages</span>
          <h2 className="text-4xl md:text-6xl font-bold text-chocolate mt-5" style={{ fontFamily: "var(--font-playfair)" }}>
            Ce que disent nos <span className="text-gradient italic">clients</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-7 items-start">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            <article className="relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-b from-vanilla/90 to-cream/70 p-6 text-center shadow-[0_18px_40px_rgba(45,31,45,0.12)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold-dark to-transparent" />
              <p className="text-xs uppercase tracking-[0.2em] text-chocolate/45">Note globale</p>
              <p className="text-6xl font-bold text-gold-dark mt-2" style={{ fontFamily: "var(--font-playfair)" }}>
                4.9
              </p>
              <div className="flex justify-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-chocolate/60 mt-2">+300 avis verifies</p>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-b from-vanilla/90 to-cream/70 p-6 shadow-[0_18px_40px_rgba(45,31,45,0.12)]">
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-gold-dark to-gold-light" />
              <p className="text-sm text-chocolate/70 leading-relaxed">
                Des retours constants sur trois points: qualite, regularite et presentation.
              </p>
              <div className="mt-4 space-y-2">
                {[
                  "Service rapide",
                  "Desserts maisons",
                  "Ambiance soignee",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-chocolate/80">
                    <BadgeCheck size={16} className="text-gold-dark" />
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            <article className="relative overflow-hidden rounded-[30px] border border-gold/25 bg-gradient-to-br from-vanilla/95 via-cream to-rose-light/40 p-7 md:p-10 shadow-[0_24px_55px_rgba(45,31,45,0.14)]">
              <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(255,255,255,0.58),transparent_48%,rgba(232,160,180,0.18))]" />
              <Quote size={64} className="absolute top-5 right-7 text-gold/30" />

              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="relative z-10"
              >
                <div className="inline-flex items-center gap-1 mb-4 rounded-full border border-gold/25 bg-vanilla/70 px-3 py-1">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-chocolate/85 text-xl md:text-3xl leading-tight md:leading-[1.18]" style={{ fontFamily: "var(--font-playfair)" }}>
                  &ldquo;{active.text}&rdquo;
                </p>

                <div className="mt-7 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full border border-gold/30 bg-gradient-to-br from-gold/35 to-rose/25 flex items-center justify-center text-gold-dark font-semibold text-sm">
                      {active.name.slice(0, 1)}
                    </div>
                    <div>
                    <p className="text-lg font-semibold text-gold-dark">{active.name}</p>
                    <p className="text-sm text-chocolate/45">{active.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={prev}
                      className="w-10 h-10 rounded-full border border-gold/35 bg-vanilla/85 flex items-center justify-center text-gold-dark hover:bg-gold hover:text-espresso transition-all duration-300"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={next}
                      className="w-10 h-10 rounded-full border border-gold/35 bg-vanilla/85 flex items-center justify-center text-gold-dark hover:bg-gold hover:text-espresso transition-all duration-300"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </article>

            <div className="grid sm:grid-cols-5 gap-3">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  onClick={() => setCurrent(i)}
                  className={`text-left rounded-2xl px-4 py-3 border transition-all duration-300 ${
                    i === current
                      ? "bg-gradient-to-br from-chocolate to-chocolate-light text-cream border-chocolate shadow-[0_10px_26px_rgba(45,31,45,0.3)] -translate-y-0.5"
                      : "bg-vanilla/75 border-gold/20 text-chocolate/75 hover:border-gold/40 hover:bg-cream"
                  }`}
                >
                  <p className="text-sm font-semibold flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${i === current ? "bg-gold-light" : "bg-gold/60"}`} />
                    {item.name}
                  </p>
                  <p className={`text-xs mt-1 ${i === current ? "text-cream/65" : "text-chocolate/45"}`}>{item.date}</p>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
