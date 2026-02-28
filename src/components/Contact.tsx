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

const deliveryPlatforms = [
  { name: "Uber Eats", color: "bg-green-600" },
  { name: "Deliveroo", color: "bg-teal-500" },
  { name: "Takeaway", color: "bg-orange-500" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 bg-vanilla overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose/5 rounded-full blur-3xl translate-y-1/2" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
            Rendez-vous
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-chocolate mt-4 mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Venez nous{" "}
            <span className="text-gradient italic">decouvrir</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column - Info */}
          <div className="space-y-8">
            {/* Address card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-cream border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(201,160,80,0.12)]"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-chocolate mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Adresse
                  </h3>
                  <p className="text-chocolate/70 text-lg">
                    Rue Moncrabeau 8
                  </p>
                  <p className="text-chocolate/70 text-lg">
                    5000 Namur, Belgique
                  </p>
                  <a
                    href="https://maps.app.goo.gl/i3hn9L1vfWKh7wnw7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-gold font-medium text-sm hover:text-gold-dark transition-colors"
                  >
                    <Navigation size={14} />
                    Ouvrir dans Google Maps
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 bg-cream border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(201,160,80,0.12)]"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-chocolate mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Telephone
                  </h3>
                  <p className="text-chocolate/70 text-lg">
                    +32 81 XX XX XX
                  </p>
                  <p className="text-chocolate/50 text-sm mt-1">
                    Commandes & reservations
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 bg-cream border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(201,160,80,0.12)]"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl font-bold text-chocolate mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Horaires d&apos;ouverture
                  </h3>
                  <div className="space-y-2">
                    {hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex justify-between items-center py-1 border-b border-gold/5 last:border-none"
                      >
                        <span className="text-chocolate/70 text-sm font-medium">
                          {h.day}
                        </span>
                        <span className="text-chocolate text-sm font-semibold">
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Delivery */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-8 bg-cream border border-gold/20"
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Livraison a domicile
              </h3>
              <p className="text-chocolate/60 mb-6">
                Commandez vos desserts preferes depuis chez vous !
              </p>
              <div className="flex flex-wrap gap-3">
                {deliveryPlatforms.map((p) => (
                  <span
                    key={p.name}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-chocolate text-sm font-medium border border-gold/15 hover:border-gold/40 transition-colors cursor-pointer"
                  >
                    <ExternalLink size={14} />
                    {p.name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://www.instagram.com/_delice.desserts/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-espresso transition-all duration-300"
              >
                <Instagram size={22} />
              </a>
              <div>
                <p className="text-chocolate font-semibold text-sm">
                  @_delice.desserts
                </p>
                <p className="text-chocolate/50 text-xs">
                  Suivez nos creations quotidiennes
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right column - Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="sticky top-32 space-y-6">
              {/* Map embed */}
              <div className="overflow-hidden shadow-2xl border border-gold/10 aspect-[4/3]">
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
              </div>

              {/* Quick action */}
              <div className="p-6 bg-gradient-to-br from-gold to-gold-dark text-espresso text-center">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Envie d&apos;un dessert ?
                </h3>
                <p className="text-espresso/70 mb-4">
                  Passez nous voir ou commandez en ligne !
                </p>
                <a
                  href="https://maps.app.goo.gl/i3hn9L1vfWKh7wnw7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-chocolate text-cream font-semibold text-sm tracking-wider uppercase hover:bg-chocolate-light transition-colors duration-300"
                >
                  <Navigation size={16} />
                  Y aller maintenant
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
