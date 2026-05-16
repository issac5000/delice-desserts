import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales | Délice Desserts",
  description:
    "Mentions légales de Délice Desserts (Reby-K SRL). Informations sur l'éditeur du site, l'hébergeur et les conditions d'utilisation.",
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-cream text-chocolate relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[8%] right-[5%] w-52 h-72 rounded-[63%_37%_30%_70%_/_50%_45%_55%_50%] bg-rose/[0.08] rotate-[22deg]" />
        <div className="absolute bottom-[12%] left-[3%] w-40 h-56 rounded-[63%_37%_30%_70%_/_50%_45%_55%_50%] bg-gold/[0.07] -rotate-[38deg]" />
      </div>

      <header className="relative z-10 pt-10 pb-6 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-chocolate/70 hover:text-gold-dark transition-colors"
          >
            <ArrowLeft size={16} />
            Retour à l&apos;accueil
          </Link>
        </div>
      </header>

      <main className="relative z-10 px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <p className="section-badge">Informations légales</p>
          <h1
            className="text-4xl sm:text-5xl font-bold mt-3 mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="text-gradient">Mentions</span> Légales
          </h1>
          <p className="text-chocolate/70 mb-10 leading-relaxed">
            Le présent site est édité et exploité par la société ci-dessous.
            Toute utilisation du site implique l&apos;acceptation pleine et
            entière des présentes mentions légales.
          </p>

          <section className="rounded-3xl bg-vanilla/80 border border-gold/15 p-7 mb-6 backdrop-blur-sm">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Éditeur du site
            </h2>
            <ul className="space-y-2 text-chocolate/80 text-sm leading-relaxed">
              <li>
                <span className="font-semibold text-chocolate">
                  Dénomination sociale :
                </span>{" "}
                Reby-K SRL
              </li>
              <li>
                <span className="font-semibold text-chocolate">
                  Nom commercial :
                </span>{" "}
                Délice Desserts
              </li>
              <li>
                <span className="font-semibold text-chocolate">
                  Siège social :
                </span>{" "}
                Rue Du Long Chêne 46, 1970 Wezembeek-Oppem, Belgique
              </li>
              <li>
                <span className="font-semibold text-chocolate">
                  Lieu d&apos;exploitation :
                </span>{" "}
                Rue Moncrabeau 8, 5000 Namur, Belgique
              </li>
              <li>
                <span className="font-semibold text-chocolate">
                  Numéro de TVA / BCE :
                </span>{" "}
                BE 1011.362.075
              </li>
              <li>
                <span className="font-semibold text-chocolate">
                  Téléphone :
                </span>{" "}
                <a
                  href="tel:+32486454615"
                  className="text-gold-dark hover:underline"
                >
                  0486 45 46 15
                </a>
              </li>
              <li>
                <span className="font-semibold text-chocolate">Email :</span>{" "}
                <a
                  href="mailto:rebecca.muepumalu@gmail.com"
                  className="text-gold-dark hover:underline"
                >
                  rebecca.muepumalu@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold text-chocolate">
                  RPM / Tribunal de l&apos;entreprise :
                </span>{" "}
                Tribunal de l&apos;entreprise néerlandophone de Bruxelles
              </li>
            </ul>
          </section>

          <section className="rounded-3xl bg-vanilla/80 border border-gold/15 p-7 mb-6 backdrop-blur-sm">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Directeur de la publication
            </h2>
            <p className="text-chocolate/80 text-sm leading-relaxed">
              Le directeur de la publication est le représentant légal de la
              société Reby-K SRL.
            </p>
          </section>

          <section className="rounded-3xl bg-vanilla/80 border border-gold/15 p-7 mb-6 backdrop-blur-sm">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Hébergeur du site
            </h2>
            <ul className="space-y-2 text-chocolate/80 text-sm leading-relaxed">
              <li>
                <span className="font-semibold text-chocolate">Société :</span>{" "}
                Vercel Inc.
              </li>
              <li>
                <span className="font-semibold text-chocolate">Adresse :</span>{" "}
                440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
              </li>
              <li>
                <span className="font-semibold text-chocolate">Site web :</span>{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-dark hover:underline"
                >
                  vercel.com
                </a>
              </li>
            </ul>
          </section>

          <section className="rounded-3xl bg-vanilla/80 border border-gold/15 p-7 mb-6 backdrop-blur-sm">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Propriété intellectuelle
            </h2>
            <p className="text-chocolate/80 text-sm leading-relaxed mb-3">
              L&apos;ensemble du contenu de ce site (textes, images,
              photographies, logos, vidéos, illustrations, design, code source)
              est la propriété exclusive de Reby-K SRL ou de ses partenaires et
              est protégé par le droit d&apos;auteur belge et international.
            </p>
            <p className="text-chocolate/80 text-sm leading-relaxed">
              Toute reproduction, représentation, modification, publication ou
              adaptation de tout ou partie des éléments du site, quel que soit
              le moyen ou le procédé utilisé, est interdite sans autorisation
              écrite préalable de Reby-K SRL.
            </p>
          </section>

          <section className="rounded-3xl bg-vanilla/80 border border-gold/15 p-7 mb-6 backdrop-blur-sm">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Responsabilité
            </h2>
            <p className="text-chocolate/80 text-sm leading-relaxed mb-3">
              Les informations diffusées sur le site sont fournies à titre
              indicatif. Reby-K SRL met tout en œuvre pour fournir des
              informations exactes et à jour, mais ne saurait être tenue
              responsable des erreurs, omissions ou indisponibilités du site.
            </p>
            <p className="text-chocolate/80 text-sm leading-relaxed">
              Les photographies des produits ne sont pas contractuelles. Les
              prix et la disponibilité des produits peuvent être modifiés sans
              préavis.
            </p>
          </section>

          <section className="rounded-3xl bg-vanilla/80 border border-gold/15 p-7 mb-6 backdrop-blur-sm">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Droit applicable
            </h2>
            <p className="text-chocolate/80 text-sm leading-relaxed">
              Les présentes mentions légales sont régies par le droit belge.
              Tout litige relatif à l&apos;utilisation du site sera soumis à la
              compétence exclusive des tribunaux de l&apos;arrondissement
              judiciaire de Bruxelles (siège social de la société).
            </p>
          </section>

          <section className="rounded-3xl bg-vanilla/80 border border-gold/15 p-7 backdrop-blur-sm">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Contact
            </h2>
            <p className="text-chocolate/80 text-sm leading-relaxed">
              Pour toute question relative au site ou à nos services, vous
              pouvez nous contacter par téléphone au{" "}
              <a
                href="tel:+32486454615"
                className="text-gold-dark hover:underline font-semibold"
              >
                0486 45 46 15
              </a>{" "}
              ou par e-mail à{" "}
              <a
                href="mailto:rebecca.muepumalu@gmail.com"
                className="text-gold-dark hover:underline font-semibold"
              >
                rebecca.muepumalu@gmail.com
              </a>
              .
            </p>
          </section>

          <p className="text-chocolate/50 text-xs mt-8 text-center">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-BE", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </main>
    </div>
  );
}
