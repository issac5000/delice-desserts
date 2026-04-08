"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"loading" | "opening" | "done">("loading");

  useEffect(() => {
    // Phase 1: spinner avec logo (1s)
    const t1 = setTimeout(() => setPhase("opening"), 1000);
    // Phase 2: bandes qui s'ouvrent (0.8s) puis terminé
    const t2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-none"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Bande du haut */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#1A0E18]"
            animate={phase === "opening" ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Bande du bas */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#1A0E18]"
            animate={phase === "opening" ? { y: "100%" } : { y: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Logo + spinner au centre */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={phase === "opening" ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Spinner ring */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#C8A97E] border-r-[#C8A97E]/40"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 rounded-full border-2 border-transparent border-b-[#E8A0B4] border-l-[#E8A0B4]/40"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
              />

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="/logo.png"
                  alt="Delice Desserts"
                  width={72}
                  height={72}
                  className="object-contain invert drop-shadow-[0_0_16px_rgba(200,169,126,0.6)]"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
