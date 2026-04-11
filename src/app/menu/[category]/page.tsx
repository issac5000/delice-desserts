"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  menuData,
  categories,
  type MenuCategory,
  type FoodCategory,
  type DrinkCategory,
} from "@/data/menuData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function formatPrice(price: number) {
  return price.toFixed(2).replace(".", ",") + "€";
}

/* ────────────────────────────────────────────────
   Food Menu — editorial card layout
   ──────────────────────────────────────────────── */
function FoodMenuPage({ data }: { data: FoodCategory }) {
  return (
    <div className="max-w-5xl mx-auto">
      {/* ── Hero header ── */}
      <div className="relative text-center mb-16 md:mb-24">
        {/* Large decorative letter */}
        <div className="absolute inset-x-0 -top-8 md:-top-16 flex justify-center pointer-events-none select-none opacity-[0.04]">
          <span
            className="text-[180px] md:text-[280px] font-bold text-chocolate leading-none"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {data.title.charAt(0)}
          </span>
        </div>

        <div className="relative">
          <span className="section-badge">{data.title}</span>
        </div>

        <h1
          className="relative text-5xl sm:text-6xl md:text-8xl font-bold text-chocolate mt-5"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Nos{" "}
          <span className="text-gradient italic">{data.title}</span>
        </h1>

        {data.subtitle && (
          <p className="relative text-chocolate/35 text-sm mt-4 italic">
            ({data.subtitle})
          </p>
        )}

        {data.note && (
          <p className="relative text-gold-dark/50 text-[11px] mt-3 tracking-[0.2em] uppercase font-medium">
            {data.note}
          </p>
        )}

        {/* Decorative divider */}
        <div className="max-w-[120px] mx-auto mt-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>

      {/* ── Items ── */}
      <div className="space-y-5 md:space-y-6">
        {data.items.map((item, i) => (
          <FoodItemCard
            key={item.name}
            item={item}
            index={i}
            total={data.items.length}
          />
        ))}
      </div>

      {/* ── Supplement ribbon ── */}
      {data.supplement && (
        <div className="mt-14 md:mt-20 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-gold/30 to-gold/20 rounded-full blur-xl" />
            <div className="relative glass-premium rounded-full px-8 py-3.5">
              <p className="text-gold-dark text-xs sm:text-sm font-semibold tracking-wide">
                {data.supplement}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Single food item card ── */
function FoodItemCard({
  item,
  index,
  total,
}: {
  item: { name: string; description: string; price: number };
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const fromLeft = index % 2 === 0;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative grid md:grid-cols-[1fr_auto] items-center gap-6 md:gap-10 rounded-[28px] border border-gold/[0.12] bg-[var(--surface)] backdrop-blur-md p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-gold/30 hover:shadow-[0_24px_64px_rgba(45,31,45,0.12)] hover:-translate-y-1 ${
        fromLeft ? "md:mr-8" : "md:ml-8"
      }`}
    >
      {/* Glow on hover */}
      <div className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/[0.06] group-hover:via-transparent group-hover:to-rose/[0.04] transition-all duration-700 pointer-events-none" />

      {/* Number + text */}
      <div className="relative flex items-start gap-5 sm:gap-7">
        {/* Item number */}
        <span
          className="shrink-0 text-4xl sm:text-5xl md:text-6xl font-bold text-gold/[0.13] leading-none select-none"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="min-w-0 pt-1">
          <h3
            className="text-xl sm:text-2xl md:text-3xl font-bold text-chocolate leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {item.name}
          </h3>
          <p className="text-chocolate/45 text-sm sm:text-[15px] mt-2.5 leading-relaxed max-w-lg">
            {item.description}
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="relative flex items-center md:flex-col md:items-end gap-3">
        <div className="h-px flex-1 md:hidden bg-gradient-to-r from-gold/15 to-transparent" />
        <span
          className="text-3xl sm:text-4xl md:text-[42px] font-bold text-gold-dark whitespace-nowrap leading-none"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {formatPrice(item.price)}
        </span>
      </div>

      {/* Connection line to next item (hidden on last) */}
      {index < total - 1 && (
        <div className="hidden md:block absolute -bottom-3 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-gold/15 to-transparent" />
      )}
    </motion.article>
  );
}

/* ────────────────────────────────────────────────
   Drinks Menu — elegant column layout
   ──────────────────────────────────────────────── */
function DrinkMenuPage({ data }: { data: DrinkCategory }) {
  return (
    <div className="max-w-5xl mx-auto">
      {/* ── Hero header ── */}
      <div className="relative text-center mb-16 md:mb-20">
        <div className="absolute inset-x-0 -top-8 md:-top-16 flex justify-center pointer-events-none select-none opacity-[0.04]">
          <span
            className="text-[180px] md:text-[280px] font-bold text-chocolate leading-none"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {data.title.charAt(0)}
          </span>
        </div>

        <div className="relative">
          <span className="section-badge">{data.title}</span>
        </div>

        <h1
          className="relative text-5xl sm:text-6xl md:text-8xl font-bold text-chocolate mt-5"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Nos{" "}
          <span className="text-gradient italic">{data.title}</span>
        </h1>

        <div className="max-w-[120px] mx-auto mt-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>

      {/* ── Subcategory grid ── */}
      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {data.subcategories.map((sub, i) => (
          <DrinkSubCard key={sub.title} sub={sub} index={i} />
        ))}
      </div>
    </div>
  );
}

/* ── Single drink subcategory card ── */
function DrinkSubCard({
  sub,
  index,
}: {
  sub: { title: string; note?: string; items: { name: string; price: number }[] };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-[28px] border border-gold/[0.12] bg-[var(--surface)] backdrop-blur-md p-7 sm:p-8 transition-all duration-500 hover:border-gold/25 hover:shadow-[0_20px_56px_rgba(45,31,45,0.1)] hover:-translate-y-1">
      {/* Hover glow */}
      <div className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-gold/0 to-rose/0 group-hover:from-gold/[0.04] group-hover:to-rose/[0.03] transition-all duration-700 pointer-events-none" />

      {/* Header */}
      <div className="relative mb-5">
        <h3
          className="text-2xl sm:text-3xl font-bold text-chocolate"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {sub.title}
        </h3>
        {sub.note ? (
          <p className="text-gold-dark/45 text-xs italic mt-1.5">
            {sub.note}
          </p>
        ) : (
          <div className="w-14 h-px bg-gradient-to-r from-gold/30 to-transparent mt-3" />
        )}
      </div>

      {/* Items */}
      <div className="relative space-y-0">
        {sub.items.map((item) => (
          <div
            key={item.name}
            className="group/row flex items-baseline gap-3 py-2.5 border-b border-gold/[0.06] last:border-0"
          >
            <span className="text-chocolate/60 text-[13px] sm:text-sm font-medium group-hover/row:text-chocolate transition-colors duration-200">
              {item.name}
            </span>
            <span className="flex-1 border-b border-dotted border-gold/15 min-w-[20px] translate-y-[-2px]" />
            <span
              className="text-gold-dark font-bold text-[13px] sm:text-sm whitespace-nowrap"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {formatPrice(item.price)}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────
   Page shell
   ──────────────────────────────────────────────── */
export default function MenuCategoryPage() {
  const params = useParams();
  const slug = params.category as string;

  if (!menuData[slug as MenuCategory]) {
    notFound();
  }

  const data = menuData[slug as MenuCategory];

  const currentIndex = categories.findIndex((c) => c.slug === slug);
  const prev = currentIndex > 0 ? categories[currentIndex - 1] : null;
  const next =
    currentIndex < categories.length - 1
      ? categories[currentIndex + 1]
      : null;

  return (
    <>
      {data.type === "food" ? (
        <FoodMenuPage data={data} />
      ) : (
        <DrinkMenuPage data={data} />
      )}

      {/* ── Prev / Next navigation ── */}
      <div className="max-w-5xl mx-auto mt-16 md:mt-24">
        <div className="luxury-divider max-w-sm mx-auto mb-10">
          <span className="text-gold/30 text-[9px] tracking-[0.4em] uppercase">
            Continuer
          </span>
        </div>

        <div className="flex items-stretch gap-4 justify-center flex-wrap">
          {prev && (
            <Link
              href={`/menu/${prev.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-gold/[0.12] bg-[var(--surface)] backdrop-blur-md px-6 py-4 transition-all duration-400 hover:border-gold/30 hover:shadow-[0_12px_36px_rgba(45,31,45,0.1)] hover:-translate-y-0.5"
            >
              <ArrowRight
                size={16}
                className="text-gold-dark/40 rotate-180 group-hover:-translate-x-1 transition-transform"
              />
              <div className="text-right">
                <p className="text-[10px] text-chocolate/30 tracking-[0.2em] uppercase mb-0.5">
                  Précédent
                </p>
                <p
                  className="text-chocolate font-semibold text-sm"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {prev.emoji} {prev.label}
                </p>
              </div>
            </Link>
          )}

          {next && (
            <Link
              href={`/menu/${next.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-gold/[0.12] bg-[var(--surface)] backdrop-blur-md px-6 py-4 transition-all duration-400 hover:border-gold/30 hover:shadow-[0_12px_36px_rgba(45,31,45,0.1)] hover:-translate-y-0.5"
            >
              <div>
                <p className="text-[10px] text-chocolate/30 tracking-[0.2em] uppercase mb-0.5">
                  Suivant
                </p>
                <p
                  className="text-chocolate font-semibold text-sm"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {next.emoji} {next.label}
                </p>
              </div>
              <ArrowRight
                size={16}
                className="text-gold-dark/40 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
