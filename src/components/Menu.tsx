"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Flame, Star, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

type Category = "crepes" | "gaufres" | "pancakes" | "boissons" | "cookies";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
  image: string;
};

const categories: { key: Category; label: string; emoji: string }[] = [
  { key: "crepes", label: "Crêpes", emoji: "🥞" },
  { key: "gaufres", label: "Gaufres", emoji: "🧇" },
  { key: "pancakes", label: "Pancakes", emoji: "🥮" },
  { key: "boissons", label: "Boissons", emoji: "☕" },
  { key: "cookies", label: "Cookies", emoji: "🍪" },
];

const menuItems: Record<Category, MenuItem[]> = {
  crepes: [
    {
      name: "Crêpe Nutella & Bueno",
      description:
        "Sauce Nutella & Bueno onctueuse, morceaux de Kinder Bueno, copeaux de chocolat.",
      price: "8.50",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Crêpe Caramel Spéculoos",
      description:
        "Sauce caramel beurre salé maison, spéculoos émietté, crème chantilly.",
      price: "8.00",
      image:
        "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Crêpe Fruits Frais",
      description:
        "Fraises, bananes et kiwis de saison, coulis de fruits rouges, sucre glace.",
      price: "9.00",
      image:
        "https://images.unsplash.com/photo-1565299543923-37dd37887442?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Crêpe Classique",
      description: "Sucre, citron ou confiture artisanale au choix.",
      price: "5.50",
      image: "/hero.png",
    },
  ],
  gaufres: [
    {
      name: "Gaufre Chocolat Royal",
      description:
        "Double chocolat belge, sauce Nutella & Bueno, Kinder Bueno, copeaux de chocolat.",
      price: "9.50",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Gaufre Banana Split",
      description: "Banane fraîche, sauce chocolat blanc, copeaux de chocolat, chantilly.",
      price: "9.00",
      image:
        "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Gaufre de Liège",
      description: "L'authentique gaufre de Liège, perles de sucre caramélisées.",
      price: "6.00",
      image:
        "https://images.unsplash.com/photo-1557979619-445218f326b9?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Gaufre Framboise & Pistache",
      description: "Framboises fraîches, crème de pistache, éclats de pistache torréfiés.",
      price: "10.00",
      image:
        "https://images.unsplash.com/photo-1568051243851-f9b136146e97?q=80&w=900&auto=format&fit=crop",
    },
  ],
  pancakes: [
    {
      name: "Pancakes Fruits de Saison",
      description: "Pancakes garnis de fruits frais de saison, coulis de fraise maison.",
      price: "8.50",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Pancakes Nutella & Ferrero",
      description: "Sauce Nutella, Ferrero Rocher, noisettes croustillantes.",
      price: "9.50",
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Pancakes Maple & Beurre",
      description: "Sirop d'érable pur, beurre doux, touche de cannelle.",
      price: "7.50",
      image:
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Pancakes Cookie Dough",
      description: "Pâte à cookies maison, sauce chocolat, éclats de cookies, chantilly.",
      price: "10.00",
      image:
        "https://images.unsplash.com/photo-1541288097308-7b8e3bef3c8c?q=80&w=900&auto=format&fit=crop",
    },
  ],
  boissons: [
    {
      name: "Chocolat Chaud Belge",
      description: "Véritable chocolat belge fondu, lait entier, chantilly maison, cacao.",
      price: "5.00",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Café Latte Art",
      description: "Espresso de spécialité, lait micro-moussé, art latte personnalisé.",
      price: "4.50",
      image:
        "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Thé Premium",
      description: "Sélection de thés en feuilles : Earl Grey, Jasmin, Menthe, Fruits Rouges.",
      price: "4.00",
      image:
        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Milkshake Artisanal",
      description: "Chocolat, vanille ou fraise, glace artisanale, chantilly.",
      price: "6.50",
      image:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=900&auto=format&fit=crop",
    },
  ],
  cookies: [
    {
      name: "Cookie Chocolat Noir Intense",
      description:
        "Chocolat noir belge 70%, fleur de sel de Guérande, cœur fondant.",
      price: "4.50",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Cookie Pistache & Framboise",
      description:
        "Crème de pistache, éclats de framboises lyophilisées, chocolat blanc.",
      price: "5.00",
      image:
        "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Cookie Caramel Beurre Salé",
      description:
        "Caramel beurre salé maison, pépites de chocolat au lait, spéculoos.",
      price: "4.50",
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Cookie Noisette & Praliné",
      description:
        "Praliné noisette maison, noisettes torréfiées entières, chocolat noir.",
      price: "5.50",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1625876981655-01db12941674?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Cookie Classique Vanille",
      description:
        "Vanille de Madagascar, pépites de chocolat noir et au lait.",
      price: "3.50",
      image:
        "https://images.unsplash.com/photo-1607114910007-1c751a5b4e3e?q=80&w=900&auto=format&fit=crop",
    },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>("crepes");
  const { dispatch } = useCart();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const selectedItems = menuItems[activeCategory];

  return (
    <section id="carte" className="relative py-32 bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,rgba(208,122,148,0.16),transparent_34%),radial-gradient(circle_at_86%_5%,rgba(232,160,180,0.18),transparent_32%)]" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-badge">Nos créations</span>
          <h2 className="text-4xl md:text-6xl font-bold text-chocolate mt-5" style={{ fontFamily: "var(--font-playfair)" }}>
            La <span className="text-gradient italic">Carte Signature</span>
          </h2>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-chocolate text-cream shadow-[0_8px_20px_rgba(45,31,45,0.25)]"
                  : "bg-vanilla/70 border border-gold/20 text-chocolate/70 hover:border-gold/40 hover:bg-cream"
              }`}
            >
              <span className="mr-2">{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Menu grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {selectedItems.map((item, i) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="group rounded-3xl border border-gold/15 bg-vanilla/60 overflow-hidden hover:border-gold/35 hover:shadow-[0_16px_40px_rgba(45,31,45,0.1)] hover:-translate-y-1 hover:bg-rose-light/20 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="relative sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    {item.popular && (
                      <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-gold px-2.5 py-1 text-espresso text-[10px] font-bold tracking-[0.1em] uppercase">
                        <Flame size={11} />
                        Populaire
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-lg font-bold text-chocolate leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-0.5 shrink-0 mt-1">
                          {[...Array(5)].map((_, idx) => (
                            <Star key={idx} size={10} className="fill-gold text-gold" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-chocolate/55 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-end justify-between mt-4 pt-3 border-t border-gold/10">
                      <p className="text-2xl font-bold text-gold-dark" style={{ fontFamily: "var(--font-playfair)" }}>
                        {item.price}
                        <span className="text-sm text-chocolate/40 ml-1">EUR</span>
                      </p>
                      {activeCategory === "cookies" && (
                        <button
                          onClick={() =>
                            dispatch({
                              type: "ADD_ITEM",
                              payload: {
                                id: item.name
                                  .toLowerCase()
                                  .replace(/[^a-z0-9]+/g, "-"),
                                name: item.name,
                                price: parseFloat(item.price),
                                image: item.image,
                              },
                            })
                          }
                          className="inline-flex items-center gap-1.5 rounded-full bg-chocolate text-cream px-3.5 py-2 text-xs font-semibold hover:bg-gold-dark transition-colors cursor-pointer"
                        >
                          <ShoppingCart size={13} />
                          Ajouter
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
