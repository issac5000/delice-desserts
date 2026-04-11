"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories } from "@/data/menuData";
import { ArrowLeft, ChevronDown } from "lucide-react";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();
  const currentCat = categories.find((c) => c.slug === currentSlug);
  const [navCompact, setNavCompact] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setNavCompact(window.scrollY > 80);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen relative">
      {/* Decorative background shapes — organic petals like Specialties */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[8%] right-[5%] w-52 h-72 rounded-[63%_37%_30%_70%_/_50%_45%_55%_50%] bg-rose/[0.08] rotate-[22deg]" />
        <div className="absolute bottom-[12%] left-[3%] w-40 h-56 rounded-[63%_37%_30%_70%_/_50%_45%_55%_50%] bg-gold/[0.07] -rotate-[38deg]" />
        <div className="absolute top-[45%] right-[1%] w-28 h-40 rounded-[63%_37%_30%_70%_/_50%_45%_55%_50%] bg-rose-light/[0.1] rotate-[62deg]" />
        <div className="absolute top-[20%] left-[12%] w-3.5 h-3.5 rounded-full bg-gold-dark/15" />
        <div className="absolute top-[55%] left-[42%] w-2.5 h-2.5 rounded-full bg-rose/15" />
        <div className="absolute bottom-[25%] right-[18%] w-4 h-4 rounded-full bg-gold/12" />
        <div className="absolute top-[70%] left-[8%] w-2 h-2 rounded-full bg-caramel/15" />
      </div>

      {/* Sticky navigation bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navCompact ? "py-2" : "py-4"
        }`}
      >
        <div
          className={`max-w-5xl mx-auto px-4 sm:px-6 transition-all duration-500 ${
            navCompact ? "" : ""
          }`}
        >
          <div
            className={`rounded-full border px-4 sm:px-6 flex items-center justify-between transition-all duration-500 ${
              navCompact
                ? "h-14 bg-cream/95 border-gold/25 shadow-[0_12px_42px_rgba(45,31,45,0.14)] backdrop-blur-xl"
                : "h-16 bg-cream/80 border-gold/15 shadow-[0_8px_32px_rgba(45,31,45,0.08)] backdrop-blur-lg"
            }`}
          >
            {/* Left: back + logo */}
            <div className="flex items-center gap-3">
              <Link
                href="/#carte"
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-vanilla border border-gold/15 hover:border-gold/40 transition-all"
                aria-label="Retour au site"
              >
                <ArrowLeft
                  size={14}
                  className="text-chocolate/60 group-hover:text-gold-dark group-hover:-translate-x-0.5 transition-all"
                />
              </Link>
              <Link
                href="/menu"
                className="text-lg sm:text-xl font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <span className="text-gradient">Délice</span>
                <span className="text-chocolate"> Desserts</span>
              </Link>
            </div>

            {/* Center: category tabs — desktop */}
            <nav className="hidden md:flex items-center gap-1">
              {categories.map((cat) => {
                const isActive = currentSlug === cat.slug;
                return (
                  <Link
                    key={cat.slug}
                    href={`/menu/${cat.slug}`}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                      isActive
                        ? "bg-chocolate text-cream shadow-[0_4px_14px_rgba(45,31,45,0.2)]"
                        : "text-chocolate/55 hover:text-chocolate hover:bg-vanilla"
                    }`}
                  >
                    <span className="mr-1.5">{cat.emoji}</span>
                    {cat.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile: current category dropdown */}
            <div className="md:hidden relative">
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-chocolate text-cream text-xs font-semibold"
              >
                <span>{currentCat?.emoji}</span>
                <span>{currentCat?.label}</span>
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-300 ${
                    mobileNavOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileNavOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 bg-cream/98 backdrop-blur-xl border border-gold/20 rounded-2xl shadow-[0_16px_48px_rgba(45,31,45,0.16)] overflow-hidden min-w-[180px]"
                  >
                    {categories.map((cat) => {
                      const isActive = currentSlug === cat.slug;
                      return (
                        <Link
                          key={cat.slug}
                          href={`/menu/${cat.slug}`}
                          className={`flex items-center gap-3 px-5 py-3 text-sm font-medium transition-colors ${
                            isActive
                              ? "bg-gold/15 text-gold-dark"
                              : "text-chocolate/70 hover:bg-vanilla"
                          }`}
                        >
                          <span>{cat.emoji}</span>
                          <span>{cat.label}</span>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-28" />

      {/* Page content */}
      <main className="relative z-10 px-5 sm:px-8 pb-24">{children}</main>

      {/* Footer ornament */}
      <footer className="relative z-10 pb-12">
        <div className="max-w-xs mx-auto">
          <div className="luxury-divider">
            <span className="text-gold/30 text-[9px] tracking-[0.4em] uppercase font-semibold">
              Fait avec amour
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
