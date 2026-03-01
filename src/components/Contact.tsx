"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Instagram,
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

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="contact" className="relative py-32 bg-vanilla overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(232,160,180,0.22),transparent_38%),radial-gradient(circle_at_8%_88%,rgba(208,122,148,0.16),transparent_35%)]" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-badge">Rendez-vous</span>
          <h2 className="text-4xl md:text-6xl font-bold text-chocolate mt-5" style={{ fontFamily: "var(--font-playfair)" }}>
            Venez nous <span className="text-gradient italic">découvrir</span>
          </h2>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl overflow-hidden border border-gold/20 shadow-[0_20px_50px_rgba(45,31,45,0.12)] mb-10"
        >
          <div className="aspect-[16/7] relative">
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
              <div className="glass-premium rounded-2xl px-5 py-3 flex flex-wrap items-center justify-between gap-3 border border-cream/35">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-chocolate/45">Delice Desserts</p>
                  <p className="text-sm text-chocolate/80">Rue Moncrabeau 8, 5000 Namur</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/i3hn9L1vfWKh7wnw7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-chocolate text-cream px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] hover:bg-chocolate-light transition-colors"
                >
                  <Navigation size={14} />
                  Itinéraire
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Horaires */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl border border-gold/15 bg-vanilla/60 p-6 hover:border-gold/35 hover:shadow-[0_16px_40px_rgba(45,31,45,0.1)] hover:-translate-y-1 hover:bg-rose-light/30 transition-all duration-300"
          >
            <div className="flex items-center gap-2 text-gold-dark mb-4">
              <CalendarClock size={18} />
              <p className="text-xs uppercase tracking-[0.2em] font-semibold">Horaires</p>
            </div>
            <div className="space-y-2.5">
              {hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between">
                  <span className="text-sm text-chocolate/60">{h.day}</span>
                  <span className="text-sm font-medium text-chocolate">{h.time}</span>
                </div>
              ))}
            </div>
          </motion.article>

          {/* Contact & Livraison */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-3xl border border-gold/15 bg-vanilla/60 p-6 hover:border-gold/35 hover:shadow-[0_16px_40px_rgba(45,31,45,0.1)] hover:-translate-y-1 hover:bg-rose-light/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-gold-dark mb-4">
                <Phone size={18} />
                <p className="text-xs uppercase tracking-[0.2em] font-semibold">Contact</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold-dark mt-0.5 shrink-0" />
                  <p className="text-sm text-chocolate/75">Rue Moncrabeau 8, 5000 Namur</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-gold-dark mt-0.5 shrink-0" />
                  <p className="text-sm text-chocolate/75">0493 13 92 50</p>
                </div>
                <div className="flex items-start gap-3">
                  <Bike size={16} className="text-gold-dark mt-0.5 shrink-0" />
                  <p className="text-sm text-chocolate/75">Uber Eats, Deliveroo, Takeaway</p>
                </div>
              </div>
            </div>

            <a
              href="tel:+32493139250"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-chocolate text-cream px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] hover:bg-chocolate-light transition-colors"
            >
              <Phone size={14} />
              Appeler maintenant
            </a>
          </motion.article>

          {/* Social & Conseil */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-3xl border border-gold/15 bg-vanilla/60 p-6 hover:border-gold/35 hover:shadow-[0_16px_40px_rgba(45,31,45,0.1)] hover:-translate-y-1 hover:bg-rose-light/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-gold-dark mb-4">
                <Instagram size={18} />
                <p className="text-xs uppercase tracking-[0.2em] font-semibold">Social</p>
              </div>

              <a
                href="https://www.instagram.com/_delice.desserts/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-11 h-11 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center group-hover:bg-gold group-hover:text-espresso transition-colors shrink-0">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-chocolate">@_delice.desserts</p>
                  <p className="text-xs text-chocolate/50">Nouveautés et créations du jour</p>
                </div>
              </a>
            </div>

            <div className="mt-6 rounded-2xl bg-chocolate text-cream p-4">
              <div className="flex items-center gap-2 mb-1">
                <Clock size={14} className="text-gold-light" />
                <p className="text-xs uppercase tracking-[0.16em] text-cream/60">Conseil</p>
              </div>
              <p className="text-sm text-cream/90">Les heures les plus calmes sont entre 14h30 et 17h00.</p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
