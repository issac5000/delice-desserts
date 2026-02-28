"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sophie L.",
    text: "Les meilleures crepes que j'ai mangees à Namur ! La crepe Nutella Bueno est à tomber par terre. Le cadre est chaleureux et le service impeccable. J'y retourne chaque semaine !",
    rating: 5,
    date: "Il y a 2 semaines",
  },
  {
    name: "Marc D.",
    text: "Gaufres incroyables, on sent vraiment la qualite des ingredients. Le chocolat chaud belge est une pure merveille. Un vrai moment de bonheur à chaque visite.",
    rating: 5,
    date: "Il y a 1 mois",
  },
  {
    name: "Amelie V.",
    text: "Decouvert grace à un ami, je suis devenue une habituee ! Les pancakes aux fruits frais sont un delice absolu. Le personnel est adorable et les prix sont tres corrects.",
    rating: 5,
    date: "Il y a 3 semaines",
  },
  {
    name: "Thomas B.",
    text: "La crepe caramel speculoos est un chef-d'oeuvre. On voit que tout est fait maison avec beaucoup de soin. Le meilleur salon de desserts de la region sans hesitation.",
    rating: 5,
    date: "Il y a 1 semaine",
  },
  {
    name: "Julie M.",
    text: "Un endroit magnifique pour prendre un dessert entre amis. La gaufre framboise pistache est divine ! Presentation soignee, gout exceptionnel. Bravo !",
    rating: 5,
    date: "Il y a 2 mois",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent(
      (c) => (c - 1 + testimonials.length) % testimonials.length
    );
  const next = () =>
    setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="relative py-32 bg-cream-dark overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-rose/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Temoignages
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-chocolate mt-4 mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ce que disent nos{" "}
            <span className="text-gradient italic">clients</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </motion.div>

        {/* Testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative bg-cream/80 backdrop-blur-sm p-8 md:p-12 border border-gold/15 shadow-lg">
            {/* Quote icon */}
            <Quote
              size={48}
              className="text-gold/20 absolute top-8 left-8"
            />

            <div className="relative z-10">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-gold text-gold"
                      />
                    )
                  )}
                </div>

                {/* Quote text */}
                <p
                  className="text-chocolate/80 text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <p className="text-gold-dark font-semibold text-lg">
                    {testimonials[current].name}
                  </p>
                  <p className="text-chocolate/40 text-sm mt-1">
                    {testimonials[current].date}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold-dark hover:bg-gold hover:text-cream transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-gold"
                      : "w-2 bg-chocolate/15 hover:bg-chocolate/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold-dark hover:bg-gold hover:text-cream transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
