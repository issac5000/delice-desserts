"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CalendarClock, Users, Clock, Send, Check } from "lucide-react";

export default function ReservationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [personnes, setPersonnes] = useState("2");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom,
          telephone,
          date,
          heure,
          personnes: parseInt(personnes),
          notes: notes || undefined,
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
        setNom("");
        setTelephone("");
        setDate("");
        setHeure("");
        setPersonnes("2");
        setNotes("");
      } else {
        const data = await res.json();
        setError(data.error || "Erreur lors de l'envoi. Veuillez réessayer.");
      }
    } catch {
      setError("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get tomorrow's date as min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <section
      id="reservation"
      className="relative py-32 bg-cream overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(208,122,148,0.16),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(232,160,180,0.18),transparent_32%)]" />

      {/* Deco */}
      <div className="absolute top-20 right-[8%] w-40 h-56 rounded-[63%_37%_30%_70%_/_50%_45%_55%_50%] bg-rose/[0.1] rotate-[20deg] blur-sm pointer-events-none" />
      <div className="absolute bottom-16 left-[5%] w-36 h-48 rounded-[63%_37%_30%_70%_/_50%_45%_55%_50%] bg-gold/[0.1] -rotate-[30deg] blur-sm pointer-events-none" />

      <div ref={ref} className="max-w-3xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="section-badge">Réservation</span>
        </motion.div>

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
          Réservez votre{" "}
          <span className="text-gradient italic">Table</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-chocolate/55 text-sm md:text-base text-center max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Réservez votre place pour une expérience dessert inoubliable.
          Nous recommandons de réserver le week-end et en fin
          d&apos;après-midi.
        </motion.p>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-[28px] border border-gold/20 bg-vanilla/80 p-8 md:p-10 shadow-[0_20px_50px_rgba(45,31,45,0.08)]"
        >
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5"
              >
                <Check size={28} className="text-green-600" />
              </motion.div>
              <h3
                className="text-xl font-bold text-chocolate mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Réservation envoyée !
              </h3>
              <p className="text-sm text-chocolate/60 mb-6 leading-relaxed">
                Nous vous contacterons pour confirmer votre réservation.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="rounded-full border border-gold/25 px-6 py-2.5 text-sm font-semibold text-chocolate hover:bg-rose-light/30 hover:border-gold/40 transition-colors cursor-pointer"
              >
                Nouvelle réservation
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nom + Telephone */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] font-semibold text-chocolate/70 mb-1.5">
                    Nom *
                  </label>
                  <input
                    type="text"
                    required
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Votre nom"
                    className="w-full bg-cream border border-gold/20 rounded-xl px-4 py-3 text-sm text-chocolate placeholder:text-chocolate-light/40 focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] font-semibold text-chocolate/70 mb-1.5">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder="0486 XX XX XX"
                    className="w-full bg-cream border border-gold/20 rounded-xl px-4 py-3 text-sm text-chocolate placeholder:text-chocolate-light/40 focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>
              </div>

              {/* Date + Heure + Personnes */}
              <div className="grid md:grid-cols-3 gap-5">
                <div>
                  <label className="flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-semibold text-chocolate/70 mb-1.5">
                    <CalendarClock size={13} />
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    min={minDate}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-cream border border-gold/20 rounded-xl px-4 py-3 text-sm text-chocolate focus:outline-none focus:border-gold/50 transition-colors cursor-pointer"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-semibold text-chocolate/70 mb-1.5">
                    <Clock size={13} />
                    Heure *
                  </label>
                  <select
                    required
                    value={heure}
                    onChange={(e) => setHeure(e.target.value)}
                    className="w-full bg-cream border border-gold/20 rounded-xl px-4 py-3 text-sm text-chocolate focus:outline-none focus:border-gold/50 transition-colors cursor-pointer appearance-none"
                  >
                    <option value="">Choisir...</option>
                    <option>12:00</option>
                    <option>12:30</option>
                    <option>13:00</option>
                    <option>13:30</option>
                    <option>14:00</option>
                    <option>14:30</option>
                    <option>15:00</option>
                    <option>15:30</option>
                    <option>16:00</option>
                    <option>16:30</option>
                    <option>17:00</option>
                    <option>17:30</option>
                    <option>18:00</option>
                    <option>18:30</option>
                    <option>19:00</option>
                    <option>19:30</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-semibold text-chocolate/70 mb-1.5">
                    <Users size={13} />
                    Personnes *
                  </label>
                  <select
                    required
                    value={personnes}
                    onChange={(e) => setPersonnes(e.target.value)}
                    className="w-full bg-cream border border-gold/20 rounded-xl px-4 py-3 text-sm text-chocolate focus:outline-none focus:border-gold/50 transition-colors cursor-pointer appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "personne" : "personnes"}
                      </option>
                    ))}
                    <option value="9">9+ (nous contacter)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs uppercase tracking-[0.16em] font-semibold text-chocolate/70 mb-1.5">
                  Notes / Occasion spéciale
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Anniversaire, allergie, chaise haute..."
                  className="w-full bg-cream border border-gold/20 rounded-xl px-4 py-3 text-sm text-chocolate placeholder:text-chocolate-light/40 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                />
              </div>

              {/* Error */}
              {error && (
                <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-2">
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-chocolate text-cream px-6 py-3.5 text-sm font-semibold hover:bg-gold-dark transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full"
                    />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Réserver ma table
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
