"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Flame, Star } from "lucide-react";

type Category = "crepes" | "gaufres" | "pancakes" | "boissons";

const categories: { key: Category; label: string; emoji: string }[] = [
  { key: "crepes", label: "Crepes", emoji: "🥞" },
  { key: "gaufres", label: "Gaufres", emoji: "🧇" },
  { key: "pancakes", label: "Pancakes", emoji: "🥮" },
  { key: "boissons", label: "Boissons", emoji: "☕" },
];

const menuItems: Record<
  Category,
  {
    name: string;
    description: string;
    price: string;
    popular?: boolean;
    image: string;
  }[]
> = {
  crepes: [
    {
      name: "Crepe Nutella & Bueno",
      description:
        "Sauce Nutella & Bueno onctueuse, morceaux de Kinder Bueno, copeaux de chocolat",
      price: "8.50",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Crepe Caramel Speculoos",
      description:
        "Sauce caramel beurre sale maison, speculoos emiette, creme chantilly",
      price: "8.00",
      image:
        "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Crepe Fruits Frais",
      description:
        "Fraises, bananes et kiwis de saison, coulis de fruits rouges, sucre glace",
      price: "9.00",
      image:
        "https://images.unsplash.com/photo-1565299543923-37dd37887442?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Crepe Classique",
      description:
        "Sucre, citron ou confiture artisanale au choix — la simplicite belge",
      price: "5.50",
      image:
        "https://images.unsplash.com/photo-1635436338828-9e8cba0aed98?q=80&w=600&auto=format&fit=crop",
    },
  ],
  gaufres: [
    {
      name: "Gaufre Chocolat Royal",
      description:
        "Double chocolat belge, sauce Nutella & Bueno, Kinder Bueno, copeaux de chocolat",
      price: "9.50",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Gaufre Banana Split",
      description:
        "Banane fraiche, sauce chocolat blanc, copeaux de chocolat, chantilly",
      price: "9.00",
      image:
        "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Gaufre de Liege",
      description:
        "L'authentique gaufre de Liege, perles de sucre caramelisees, servie tiede",
      price: "6.00",
      image:
        "https://images.unsplash.com/photo-1557979619-445218f326b9?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Gaufre Framboise & Pistache",
      description:
        "Framboises fraiches, creme de pistache, eclats de pistache torrefies",
      price: "10.00",
      image:
        "https://images.unsplash.com/photo-1568051243851-f9b136146e97?q=80&w=600&auto=format&fit=crop",
    },
  ],
  pancakes: [
    {
      name: "Pancakes Fruits de Saison",
      description:
        "Moelleux pancakes garnis de fruits frais de saison, coulis de fraise maison",
      price: "8.50",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Pancakes Nutella & Ferrero",
      description:
        "Sauce Nutella generique, Ferrero Rocher entier, noisettes croustillantes",
      price: "9.50",
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Pancakes Maple & Beurre",
      description:
        "Sirop d'erable pur du Canada, beurre doux, touche de cannelle",
      price: "7.50",
      image:
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Pancakes Cookie Dough",
      description:
        "Pate à cookies maison, sauce chocolat, eclats de cookies, chantilly",
      price: "10.00",
      image:
        "https://images.unsplash.com/photo-1541288097308-7b8e3bef3c8c?q=80&w=600&auto=format&fit=crop",
    },
  ],
  boissons: [
    {
      name: "Chocolat Chaud Belge",
      description:
        "Veritable chocolat belge fondu, lait entier, chantilly maison, cacao",
      price: "5.00",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Cafe Latte Art",
      description:
        "Espresso de specialite, lait micro-mousse, art latte personnalise",
      price: "4.50",
      image:
        "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "The Premium",
      description:
        "Selection de thes en feuilles : Earl Grey, Jasmin, Menthe, Fruits Rouges",
      price: "4.00",
      image:
        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Milkshake Artisanal",
      description:
        "Chocolat, vanille ou fraise — glace artisanale, lait frais, chantilly",
      price: "6.50",
      image:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop",
    },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>("crepes");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="carte"
      className="relative py-32 bg-vanilla overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #2D1F2D 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Nos Creations
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-chocolate mt-4 mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            La <span className="text-gradient italic">Carte</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />
          <p className="text-chocolate/60 max-w-xl mx-auto text-lg">
            Des desserts prepares avec amour, des ingredients frais
            et des recettes qui font voyager les papilles.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wider uppercase transition-all duration-400 ${
                activeCategory === cat.key
                  ? "bg-chocolate text-cream shadow-[0_10px_30px_rgba(60,31,14,0.3)]"
                  : "bg-cream text-chocolate/70 hover:bg-cream-dark border border-gold/10"
              }`}
            >
              <span className="text-lg">{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Menu items grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {menuItems[activeCategory].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex gap-5 p-5 bg-cream border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(201,160,80,0.12)] overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 overflow-hidden flex-shrink-0">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                {item.popular && (
                  <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 bg-gold text-espresso text-[10px] font-bold tracking-wider uppercase">
                    <Flame size={10} />
                    Populaire
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3
                      className="text-lg font-bold text-chocolate group-hover:text-gold-dark transition-colors duration-300"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          size={10}
                          className="fill-gold text-gold"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-chocolate/50 text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span
                    className="text-2xl font-bold text-gold"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.price}
                    <span className="text-sm text-chocolate/40 ml-1">EUR</span>
                  </span>
                  <button className="px-4 py-2 bg-chocolate/5 text-chocolate text-xs font-semibold tracking-wider uppercase hover:bg-gold hover:text-espresso transition-all duration-300">
                    Commander
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center text-chocolate/40 text-sm mt-12"
        >
          Disponible en livraison via Uber Eats, Deliveroo & Takeaway
        </motion.p>
      </div>
    </section>
  );
}
