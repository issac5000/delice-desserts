const faqs = [
  {
    q: "Faites-vous de la livraison ?",
    a: "Oui. Nous sommes disponibles via Uber Eats, Deliveroo et Takeaway selon les horaires d'ouverture.",
  },
  {
    q: "Proposez-vous des options sans lactose ou sans gluten ?",
    a: "Nous proposons certaines options adaptées selon les produits du jour. Demandez à l'équipe avant de commander.",
  },
  {
    q: "Peut-on réserver une table ?",
    a: "Oui, vous pouvez nous appeler pour réserver, surtout les week-ends ou en fin d'après-midi.",
  },
  {
    q: "Quels sont vos horaires ?",
    a: "Lundi au jeudi: 10h00 - 20h00, vendredi et samedi: 10h00 - 21h00, dimanche: 12h00 - 18h00.",
  },
  {
    q: "Acceptez-vous les commandes pour événements ?",
    a: "Oui, nous réalisons des commandes spécifiques pour anniversaires et événements privés sur demande.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative py-28 bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(232,160,180,0.14),transparent_34%),radial-gradient(circle_at_85%_80%,rgba(208,122,148,0.12),transparent_32%)]" />
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 relative text-center">
          <span className="section-badge">FAQ</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-chocolate mt-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Questions <span className="text-gradient italic">fréquentes</span>
          </h2>
          <p className="text-chocolate/60 mt-4 max-w-2xl mx-auto">
            Tout ce qu&apos;il faut savoir avant votre passage chez Delice Desserts.
          </p>
        </div>

        <div className="relative border-y border-gold/30">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group border-b border-gold/25 last:border-b-0"
            >
              <summary className="list-none cursor-pointer py-6 md:py-7 flex items-center justify-between gap-4 transition-colors duration-300">
                <span className="text-chocolate text-lg md:text-[1.35rem] font-medium transition-colors duration-300 group-open:text-gold-dark">
                  {item.q}
                </span>
                <span className="text-gold-dark text-2xl leading-none transition-all duration-300 group-open:rotate-45 group-open:text-gold">
                  +
                </span>
              </summary>
              <p className="pb-7 pr-10 text-chocolate/70 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
