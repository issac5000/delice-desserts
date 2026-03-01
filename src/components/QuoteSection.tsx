"use client";

import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function QuoteSection() {
  const quoteRef = useRef<HTMLQuoteElement | null>(null);
  const isInView = useInView(quoteRef, { once: true, margin: "-80px" });

  const line1 = "Un dessert n'est pas juste une gourmandise.".split(" ");
  const line2 = "C'est une emotion servie a l'instant parfait.".split(" ");

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.085,
      },
    },
  } as const;

  const word = {
    hidden: { opacity: 0, filter: "blur(8px)" },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.32, ease: "easeOut" },
    },
  } as const;

  return (
    <section className="relative py-24 bg-vanilla overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(232,160,180,0.14),transparent_34%),radial-gradient(circle_at_85%_78%,rgba(208,122,148,0.12),transparent_32%)]" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <motion.blockquote
          ref={quoteRef}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative text-center px-2 md:px-8 py-10 md:py-14"
        >
          <Quote
            size={56}
            className="absolute top-6 left-1/2 -translate-x-1/2 text-gold/30 z-20"
          />

          <p
            className="relative z-20 text-2xl md:text-4xl leading-tight text-chocolate/90 pt-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <motion.span
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="inline"
            >
              &ldquo;
              {line1.map((w, i) => (
                <motion.span key={`l1-${i}`} variants={word} className="inline">
                  {w}
                  {i < line1.length - 1 ? " " : ""}
                </motion.span>
              ))}
            </motion.span>
            <span className="block text-gold-dark italic mt-2">
              <motion.span
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                transition={{ delayChildren: 0.5, staggerChildren: 0.085 }}
                className="inline"
              >
                {line2.map((w, i) => (
                  <motion.span key={`l2-${i}`} variants={word} className="inline">
                    {w}
                    {i < line2.length - 1 ? " " : ""}
                  </motion.span>
                ))}
                <motion.span variants={word} className="inline">
                  &rdquo;
                </motion.span>
              </motion.span>
            </span>
          </p>

          <div className="relative z-20 mt-8 flex items-center justify-center gap-3">
            <span className="h-[1px] w-10 bg-gold/60" />
            <span className="text-xs uppercase tracking-[0.22em] text-gold-dark font-semibold">
              Delice Desserts
            </span>
            <span className="h-[1px] w-10 bg-gold/60" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-20 mt-8 flex justify-center"
          >
            <Image
              src="/logo.png"
              alt="Delice Desserts logo"
              width={240}
              height={240}
              className="object-contain"
            />
          </motion.div>
        </motion.blockquote>
      </div>
    </section>
  );
}
