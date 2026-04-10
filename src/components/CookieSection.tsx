"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ShoppingCart, Check, Flame } from "lucide-react";
import { useCart } from "@/context/CartContext";

const cookies = [
  {
    id: "cookie-chocolat-noir-intense",
    name: "Cookie Chocolat Noir Intense",
    description:
      "Chocolat noir belge 70%, fleur de sel de Guérande, cœur fondant.",
    price: 4.5,
    popular: true,
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "cookie-pistache---framboise",
    name: "Cookie Pistache & Framboise",
    description:
      "Crème de pistache, éclats de framboises lyophilisées, chocolat blanc.",
    price: 5.0,
    image:
      "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "cookie-caramel-beurre-sal-",
    name: "Cookie Caramel Beurre Salé",
    description:
      "Caramel beurre salé maison, pépites de chocolat au lait, spéculoos.",
    price: 4.5,
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "cookie-noisette---pralin-",
    name: "Cookie Noisette & Praliné",
    description:
      "Praliné noisette maison, noisettes torréfiées entières, chocolat noir.",
    price: 5.5,
    popular: true,
    image:
      "https://images.unsplash.com/photo-1625876981655-01db12941674?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "cookie-classique-vanille",
    name: "Cookie Classique Vanille",
    description:
      "Vanille de Madagascar, pépites de chocolat noir et au lait.",
    price: 3.5,
    image:
      "https://images.unsplash.com/photo-1607114910007-1c751a5b4e3e?q=80&w=900&auto=format&fit=crop",
  },
];

function AddToCartButton({
  cookie,
}: {
  cookie: (typeof cookies)[number];
}) {
  const { dispatch } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: cookie.id,
        name: cookie.name,
        price: cookie.price,
        image: cookie.image,
      },
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <button
      onClick={handleAdd}
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 cursor-pointer ${
        justAdded
          ? "bg-green-500 text-white scale-105"
          : "bg-chocolate text-cream hover:bg-gold-dark"
      }`}
    >
      {justAdded ? (
        <>
          <Check size={13} />
          Ajouté !
        </>
      ) : (
        <>
          <ShoppingCart size={13} />
          Ajouter
        </>
      )}
    </button>
  );
}

export default function CookieSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="cookies"
      className="relative py-32 bg-vanilla overflow-hidden"
    >
      {/* Background radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(232,160,180,0.2),transparent_35%),radial-gradient(circle_at_12%_80%,rgba(208,122,148,0.15),transparent_35%)]" />

      {/* Deco elements */}
      <div className="absolute top-16 left-[5%] w-36 h-52 rounded-[63%_37%_30%_70%_/_50%_45%_55%_50%] bg-rose/[0.12] rotate-[30deg] blur-sm pointer-events-none" />
      <div className="absolute bottom-20 right-[6%] w-44 h-60 rounded-[63%_37%_30%_70%_/_50%_45%_55%_50%] bg-gold/[0.1] -rotate-[35deg] blur-sm pointer-events-none" />
      <div className="absolute top-[45%] right-[3%] w-3 h-3 rounded-full bg-gold-dark/20 pointer-events-none" />
      <div className="absolute top-[25%] left-[12%] w-2.5 h-2.5 rounded-full bg-rose/25 pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-4xl md:text-6xl text-chocolate font-bold mt-5 mb-4 text-center"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Cookies{" "}
          <motion.span
            className="text-gradient italic inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            New-yorkais
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-chocolate/55 text-sm md:text-base text-center max-w-xl mx-auto mb-14 leading-relaxed"
        >
          Cuits chaque jour dans notre atelier, avec des ingrédients de
          première qualité. Ajoutez-les au panier et passez commande en
          quelques clics.
        </motion.p>

        {/* Cookie grid — 2 cols on lg, featured items on top */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cookies.map((cookie, i) => (
            <motion.article
              key={cookie.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.65,
                delay: 0.3 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group premium-ring rounded-[28px] overflow-hidden bg-cream/70 border border-gold/20"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${cookie.image}')` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,14,24,0.04),rgba(26,14,24,0.55))]" />

                {/* Popular badge */}
                {cookie.popular && (
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-gold px-2.5 py-1 text-espresso text-[10px] font-bold tracking-[0.1em] uppercase">
                    <Flame size={11} />
                    Populaire
                  </div>
                )}

                {/* Price tag */}
                <div
                  className="absolute bottom-3 right-3 rounded-full bg-cream/90 px-3 py-1 text-lg font-bold text-gold-dark"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {cookie.price.toFixed(2)}
                  <span className="text-xs text-chocolate/40 ml-0.5">EUR</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-lg font-bold text-chocolate leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {cookie.name}
                </h3>
                <p className="text-chocolate/55 text-sm mt-2 leading-relaxed">
                  {cookie.description}
                </p>
                <div className="mt-4">
                  <AddToCartButton cookie={cookie} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
