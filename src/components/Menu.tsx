"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Flame, Sparkles, Clock3, Star, Truck } from "lucide-react";

type Category = "crepes" | "gaufres" | "pancakes" | "boissons";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
  image: string;
};

const categories: { key: Category; label: string; subtitle: string; emoji: string }[] = [
  { key: "crepes", label: "Crepes", subtitle: "Signatures", emoji: "🥞" },
  { key: "gaufres", label: "Gaufres", subtitle: "Tradition belge", emoji: "🧇" },
  { key: "pancakes", label: "Pancakes", subtitle: "Textures moelleuses", emoji: "🥮" },
  { key: "boissons", label: "Boissons", subtitle: "Pairings", emoji: "☕" },
];

const menuItems: Record<Category, MenuItem[]> = {
  crepes: [
    {
      name: "Crepe Nutella & Bueno",
      description:
        "Sauce Nutella & Bueno onctueuse, morceaux de Kinder Bueno, copeaux de chocolat.",
      price: "8.50",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Crepe Caramel Speculoos",
      description:
        "Sauce caramel beurre sale maison, speculoos emiette, creme chantilly.",
      price: "8.00",
      image:
        "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Crepe Fruits Frais",
      description:
        "Fraises, bananes et kiwis de saison, coulis de fruits rouges, sucre glace.",
      price: "9.00",
      image:
        "https://images.unsplash.com/photo-1565299543923-37dd37887442?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Crepe Classique",
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
      description: "Banane fraiche, sauce chocolat blanc, copeaux de chocolat, chantilly.",
      price: "9.00",
      image:
        "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Gaufre de Liege",
      description: "L'authentique gaufre de Liege, perles de sucre caramelisees.",
      price: "6.00",
      image:
        "https://images.unsplash.com/photo-1557979619-445218f326b9?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Gaufre Framboise & Pistache",
      description: "Framboises fraiches, creme de pistache, eclats de pistache torrefies.",
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
      description: "Sirop d'erable pur, beurre doux, touche de cannelle.",
      price: "7.50",
      image:
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "Pancakes Cookie Dough",
      description: "Pate a cookies maison, sauce chocolat, eclats de cookies, chantilly.",
      price: "10.00",
      image:
        "https://images.unsplash.com/photo-1541288097308-7b8e3bef3c8c?q=80&w=900&auto=format&fit=crop",
    },
  ],
  boissons: [
    {
      name: "Chocolat Chaud Belge",
      description: "Veritable chocolat belge fondu, lait entier, chantilly maison, cacao.",
      price: "5.00",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=1000&auto=format&fit=crop",
    },
    {
      name: "Cafe Latte Art",
      description: "Espresso de specialite, lait micro-mousse, art latte personnalise.",
      price: "4.50",
      image:
        "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=900&auto=format&fit=crop",
    },
    {
      name: "The Premium",
      description: "Selection de thes en feuilles : Earl Grey, Jasmin, Menthe, Fruits Rouges.",
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
};

const stats = [
  { icon: Sparkles, label: "Produits frais", value: "Quotidien" },
  { icon: Clock3, label: "Service", value: "10h - 21h" },
  { icon: Truck, label: "Livraison", value: "3 plateformes" },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>("crepes");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const selectedItems = menuItems[activeCategory];
  const [heroItem, ...sideItems] = selectedItems;

  return (
    <section id="carte" className="relative py-32 bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,rgba(208,122,148,0.16),transparent_34%),radial-gradient(circle_at_86%_5%,rgba(232,160,180,0.18),transparent_32%)]" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-badge">Nos creations</span>
          <h2 className="text-4xl md:text-6xl font-bold text-chocolate mt-5" style={{ fontFamily: "var(--font-playfair)" }}>
            La <span className="text-gradient italic">Carte Signature</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid sm:grid-cols-3 gap-4 mb-10"
        >
          {stats.map((s) => (
            <article key={s.label} className="premium-panel rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center">
                <s.icon size={19} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-chocolate/50">{s.label}</p>
                <p className="text-sm font-semibold text-chocolate">{s.value}</p>
              </div>
            </article>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-7 items-start">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="premium-panel rounded-3xl p-5 lg:sticky lg:top-28"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-chocolate/45 mb-4">Collection</p>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`w-full text-left rounded-2xl px-4 py-3 border transition-all duration-300 ${
                    activeCategory === cat.key
                      ? "border-gold/40 bg-gradient-to-r from-gold/20 to-rose/10"
                      : "border-transparent hover:border-gold/20 hover:bg-cream"
                  }`}
                >
                  <p className="text-sm font-bold text-chocolate flex items-center gap-2">
                    <span>{cat.emoji}</span>
                    {cat.label}
                  </p>
                  <p className="text-xs text-chocolate/55 mt-0.5">{cat.subtitle}</p>
                </button>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-chocolate text-cream p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-cream/60">Service express</p>
              <p className="text-sm mt-1 text-cream/90">Sur place et livraison via Uber Eats, Deliveroo et Takeaway.</p>
            </div>
          </motion.aside>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-5"
          >
            {heroItem && (
              <article className="relative premium-ring rounded-3xl overflow-hidden min-h-[320px]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroItem.image}')` }} />
                <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(26,14,24,0.85),rgba(26,14,24,0.55),rgba(26,14,24,0.2))]" />

                <div className="relative z-10 h-full p-7 md:p-10 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-espresso text-[11px] font-bold tracking-[0.14em] uppercase">
                      <Flame size={12} />
                      Coup de coeur
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-cream mt-4" style={{ fontFamily: "var(--font-playfair)" }}>
                      {heroItem.name}
                    </h3>
                    <p className="text-cream/80 mt-3 max-w-2xl leading-relaxed">{heroItem.description}</p>
                  </div>

                  <div className="flex flex-wrap items-end justify-between gap-4 pt-8">
                    <div>
                      <p className="text-[11px] text-cream/55 uppercase tracking-[0.22em] mb-1">Prix</p>
                      <p className="text-4xl font-bold text-gold-light" style={{ fontFamily: "var(--font-playfair)" }}>
                        {heroItem.price}
                        <span className="text-lg text-cream/65 ml-1">EUR</span>
                      </p>
                    </div>
                    <button className="px-6 py-3 rounded-full bg-cream text-espresso text-xs font-bold uppercase tracking-[0.14em] hover:bg-gold-light transition-colors">
                      Ajouter a la commande
                    </button>
                  </div>
                </div>
              </article>
            )}

            <div className="grid md:grid-cols-3 gap-4">
              {sideItems.map((item, i) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.05 * i }}
                  className="premium-panel rounded-2xl p-4 flex flex-col"
                >
                  <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/35 to-transparent" />
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-lg font-bold text-chocolate leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-0.5 mt-1">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={9} className="fill-gold text-gold" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-chocolate/60 mt-2 leading-relaxed flex-1">{item.description}</p>

                  <div className="pt-4 mt-4 border-t border-gold/15 flex items-end justify-between">
                    <p className="text-2xl font-bold text-gold-dark" style={{ fontFamily: "var(--font-playfair)" }}>
                      {item.price}
                      <span className="text-sm text-chocolate/40 ml-1">EUR</span>
                    </p>
                    {item.popular ? (
                      <span className="text-[10px] uppercase tracking-[0.14em] text-gold-dark font-semibold">Populaire</span>
                    ) : (
                      <span className="text-[10px] uppercase tracking-[0.14em] text-chocolate/35 font-semibold">Selection</span>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
