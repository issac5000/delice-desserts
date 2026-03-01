"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Instagram,
  ExternalLink,
  Bike,
  CalendarClock,
} from "lucide-react";

const hours = [
  { day: "Lundi", time: "10h00 - 20h00" },
  { day: "Mardi", time: "10h00 - 20h00" },
  { day: "Mercredi", time: "10h00 - 20h00" },
  { day: "Jeudi", time: "10h00 - 20h00" },
  { day: "Vendredi", time: "10h00 - 21h00" },
  { day: "Samedi", time: "10h00 - 21h00" },
  { day: "Dimanche", time: "12h00 - 18h00" },
];

const quickCards = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "Rue Moncrabeau 8, 5000 Namur",
  },
  {
    icon: Phone,
    title: "Telephone",
    content: "+32 81 XX XX XX",
  },
  {
    icon: Bike,
    title: "Livraison",
    content: "Uber Eats, Deliveroo, Takeaway",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="contact" className="relative py-32 bg-vanilla overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(232,160,180,0.22),transparent_38%),radial-gradient(circle_at_8%_88%,rgba(208,122,148,0.16),transparent_35%)]" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-badge">Rendez-vous</span>
          <h2 className="text-4xl md:text-6xl font-bold text-chocolate mt-5" style={{ fontFamily: "var(--font-playfair)" }}>
            Venez nous <span className="text-gradient italic">decouvrir</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-7 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="space-y-5"
          >
            <article className="premium-ring rounded-[30px] overflow-hidden border border-gold/20 shadow-[0_28px_70px_rgba(45,31,45,0.18)]">
              <div className="aspect-[16/10] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.5!2d4.8658437!3d50.4673594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c199e9617a51ab%3A0xe03441570bbf5201!2sD%C3%A9lice%20Desserts!5e0!3m2!1sfr!2sbe!4v1700000000000!5m2!1sfr!2sbe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                <div className="absolute left-4 right-4 bottom-4">
                  <div className="glass-premium rounded-2xl px-4 py-3 flex flex-wrap items-center justify-between gap-3 border border-cream/35">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-chocolate/45">Delice Desserts</p>
                      <p className="text-sm text-chocolate/80">Centre de Namur, acces rapide a pied et en voiture.</p>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/i3hn9L1vfWKh7wnw7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-chocolate text-cream px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] hover:bg-chocolate-light transition-colors"
                    >
                      <Navigation size={14} />
                      Itineraire
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <div className="grid sm:grid-cols-3 gap-4">
              {quickCards.map((card, i) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="premium-panel rounded-2xl p-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center mb-3">
                    <card.icon size={18} />
                  </div>
                  <p className="text-xs uppercase tracking-[0.18em] text-chocolate/45">{card.title}</p>
                  <p className="text-sm mt-1 text-chocolate/80">{card.content}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="space-y-5"
          >
            <article className="premium-panel rounded-3xl p-6">
              <div className="flex items-center gap-2 text-gold-dark mb-3">
                <CalendarClock size={18} />
                <p className="text-xs uppercase tracking-[0.2em]">Horaires</p>
              </div>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between border-b border-gold/12 pb-1.5 last:border-none">
                    <span className="text-sm text-chocolate/70">{h.day}</span>
                    <span className="text-sm font-semibold text-chocolate">{h.time}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="premium-panel rounded-3xl p-6">
              <div className="flex items-center gap-2 text-gold-dark mb-3">
                <ExternalLink size={18} />
                <p className="text-xs uppercase tracking-[0.2em]">Commander</p>
              </div>
              <p className="text-chocolate/65 text-sm leading-relaxed">
                Commandez en direct par telephone ou via les plateformes de livraison.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Uber Eats",
                  "Deliveroo",
                  "Takeaway",
                ].map((platform) => (
                  <span key={platform} className="px-3 py-1.5 rounded-full bg-gold/12 border border-gold/25 text-xs font-semibold text-chocolate/80">
                    {platform}
                  </span>
                ))}
              </div>

              <a
                href="tel:+3281XXXXXX"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-dark text-espresso px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] hover:brightness-105 transition-all"
              >
                <Phone size={14} />
                Appeler maintenant
              </a>
            </article>

            <article className="premium-panel rounded-3xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-chocolate/45">Social</p>
              <div className="flex items-center gap-3 mt-3">
                <a
                  href="https://www.instagram.com/_delice.desserts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center hover:bg-gold hover:text-espresso transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <div>
                  <p className="text-sm font-semibold text-chocolate">@_delice.desserts</p>
                  <p className="text-xs text-chocolate/50">Nouveautes et creations du jour</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-chocolate text-cream p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Clock size={14} className="text-gold-light" />
                  <p className="text-xs uppercase tracking-[0.16em] text-cream/60">Conseil</p>
                </div>
                <p className="text-sm text-cream/90">Les heures les plus calmes sont entre 14h30 et 17h00.</p>
              </div>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
