import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Délice Desserts",
  description:
    "Politique de confidentialité de Délice Desserts (Reby-K SRL). Découvrez comment nous protégeons vos données personnelles conformément au RGPD.",
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialitePage() {
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
          <p className="section-badge">Protection des données</p>
          <h1
            className="text-4xl sm:text-5xl font-bold mt-3 mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Politique de{" "}
            <span className="text-gradient">Confidentialité</span>
          </h1>
          <p className="text-chocolate/70 mb-10 leading-relaxed">
            Reby-K SRL (Délice Desserts) s&apos;engage à protéger la vie privée
            des utilisateurs de son site et à traiter leurs données personnelles
            avec le plus grand soin, conformément au Règlement Général sur la
            Protection des Données (RGPD - UE 2016/679) et à la loi belge du
            30 juillet 2018.
          </p>

          <section className="rounded-3xl bg-vanilla/80 border border-gold/15 p-7 mb-6 backdrop-blur-sm">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              1. Responsable du traitement
            </h2>
            <ul className="space-y-2 text-chocolate/80 text-sm leading-relaxed">
              <li>
                <span className="font-semibold text-chocolate">Société :</span>{" "}
                Reby-K SRL
              </li>
              <li>
                <span className="font-semibold text-chocolate">
                  Siège social :
                </span>{" "}
                Rue Du Long Chêne 46, 1970 Wezembeek-Oppem, Belgique
              </li>
              <li>
                <span className="font-semibold text-chocolate">TVA :</span>{" "}
                BE 1011.362.075
              </li>
              <li>
                <span className="font-semibold text-chocolate">Contact :</span>{" "}
                <a
                  href="mailto:rebecca.muepumalu@gmail.com"
                  className="text-gold-dark hover:underline"
                >
                  rebecca.muepumalu@gmail.com
                </a>
              </li>
            </ul>
          </section>

          <section className="rounded-3xl bg-vanilla/80 border border-gold/15 p-7 mb-6 backdrop-blur-sm">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              2. Données collectées
            </h2>
            <p className="text-chocolate/80 text-sm leading-relaxed mb-3">
              Nous collectons les données suivantes uniquement lorsque vous nous
              les fournissez volontairement :
            </p>
            <ul className="list-disc list-inside space-y-1 text-chocolate/80 text-sm leading-relaxed">
              <li>
                <span className="font-semibold">
                  Formulaire de réservation :
                </span>{" "}
                nom, e-mail, téléphone, date et nombre de couverts.
              </li>
              <li>
                <span className="font-semibold">Chatbot :</span> contenu des
                messages échangés (consentement explicite préalable).
              </li>
              <li>
                <span className="font-semibold">Données techniques :</span>{" "}
                adresse IP et logs serveur, conservés par l&apos;hébergeur à des
                fins de sécurité.
              </li>
            </ul>
            <p className="text-chocolate/80 text-sm leading-relaxed mt-3">
              <span className="font-semibold">À noter :</span> les commandes de
              produits en ligne sont gérées sur notre boutique externe{" "}
              <a
                href="https://delicedesserts.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-dark hover:underline"
              >
                delicedesserts.com
              </a>
              {" "}(propulsée par Shopify), qui dispose de sa propre politique
              de confidentialité et de ses propres CGV.
            </p>
          </section>

          <section className="rounded-3xl bg-vanilla/80 border border-gold/15 p-7 mb-6 backdrop-blur-sm">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              3. Finalités du traitement
            </h2>
            <p className="text-chocolate/80 text-sm leading-relaxed mb-3">
              Vos données sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc list-inside space-y-1 text-chocolate/80 text-sm leading-relaxed">
              <li>Gérer vos réservations dans notre établissement.</li>
              <li>Répondre à vos demandes via le chatbot ou par e-mail.</li>
              <li>Assurer le bon fonctionnement et la sécurité du site.</li>
              <li>Respecter nos obligations légales.</li>
            </ul>
          </section>

          <section className="rounded-3xl bg-vanilla/80 border border-gold/15 p-7 mb-6 backdrop-blur-sm">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              4. Base légale
            </h2>
            <p className="text-chocolate/80 text-sm leading-relaxed">
              Le traitement de vos données repose sur votre consentement
              explicite (formulaire de réservation, chatbot — art. 6(1)(a)
              RGPD), sur l&apos;exécution d&apos;un contrat lorsque vous
              effectuez une réservation (art. 6(1)(b) RGPD), et sur notre
              intérêt légitime à assurer la sécurité du site (art. 6(1)(f)
              RGPD).
            </p>
          </section>

          <section className="rounded-3xl bg-vanilla/80 border border-gold/15 p-7 mb-6 backdrop-blur-sm">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              5. Destinataires et sous-traitants
            </h2>
            <p className="text-chocolate/80 text-sm leading-relaxed mb-3">
              Vos données ne sont jamais vendues ni cédées à des tiers à des
              fins commerciales. Elles peuvent être transmises aux
              sous-traitants suivants, strictement encadrés :
            </p>
            <ul className="list-disc list-inside space-y-2 text-chocolate/80 text-sm leading-relaxed">
              <li>
                <span className="font-semibold">Vercel Inc.</span> (États-Unis)
                — hébergement du site. Transfert encadré par le Data Privacy
                Framework UE-États-Unis (décision d&apos;adéquation de la
                Commission européenne du 10 juillet 2023). Vercel est certifié
                sous le DPF.
              </li>
              <li>
                <span className="font-semibold">n8n</span> (Allemagne) —
                automatisation de l&apos;envoi des demandes de réservation par
                e-mail. Hébergement au sein de l&apos;UE.
              </li>
              <li>
                <span className="font-semibold">DeepSeek</span> (République
                populaire de Chine) — fournisseur du modèle d&apos;intelligence
                artificielle utilisé par le chatbot.{" "}
                <span className="font-semibold text-chocolate">
                  Transfert hors EEE :
                </span>{" "}
                la Chine ne bénéficie pas d&apos;une décision
                d&apos;adéquation et ce transfert n&apos;est pas couvert par
                des clauses contractuelles types. Ce transfert est effectué
                exclusivement sur la base de votre consentement explicite et
                éclairé, recueilli avant toute utilisation du chatbot,
                conformément à l&apos;article 49(1)(a) du RGPD. Vous pouvez
                retirer ce consentement à tout moment en cessant
                d&apos;utiliser le chatbot.
              </li>
            </ul>
          </section>

          <section className="rounded-3xl bg-vanilla/80 border border-gold/15 p-7 mb-6 backdrop-blur-sm">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              6. Durée de conservation
            </h2>
            <ul className="space-y-2 text-chocolate/80 text-sm leading-relaxed">
              <li>
                <span className="font-semibold">Réservations :</span> 12 mois
                après la date de la réservation, puis suppression.
              </li>
              <li>
                <span className="font-semibold">Messages chatbot :</span> les
                conversations ne sont pas conservées par nos soins. Le
                consentement RGPD est stocké localement dans votre navigateur
                (localStorage) jusqu&apos;à ce que vous le retiriez ou videz
                vos données de site.
              </li>
              <li>
                <span className="font-semibold">Logs techniques :</span>{" "}
                conservés par notre hébergeur pendant la durée nécessaire à la
                sécurité du service.
              </li>
            </ul>
          </section>

          <section className="rounded-3xl bg-vanilla/80 border border-gold/15 p-7 mb-6 backdrop-blur-sm">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              7. Cookies
            </h2>
            <p className="text-chocolate/80 text-sm leading-relaxed mb-3">
              Le site n&apos;utilise <span className="font-semibold">aucun</span>{" "}
              cookie de mesure d&apos;audience, de publicité ou de tracking
              tiers (pas de Google Analytics, pas de Meta Pixel, pas de
              service de remarketing).
            </p>
            <p className="text-chocolate/80 text-sm leading-relaxed">
              Le seul stockage local utilisé est une entrée{" "}
              <code className="bg-chocolate/5 px-1.5 py-0.5 rounded text-xs">
                localStorage
              </code>{" "}
              permettant de mémoriser votre consentement au chatbot. Vous
              pouvez la supprimer à tout moment depuis les paramètres de votre
              navigateur (suppression des données de site).
            </p>
          </section>

          <section className="rounded-3xl bg-vanilla/80 border border-gold/15 p-7 mb-6 backdrop-blur-sm">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              8. Vos droits
            </h2>
            <p className="text-chocolate/80 text-sm leading-relaxed mb-3">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-1 text-chocolate/80 text-sm leading-relaxed mb-3">
              <li>Droit d&apos;accès à vos données.</li>
              <li>Droit de rectification.</li>
              <li>Droit à l&apos;effacement (« droit à l&apos;oubli »).</li>
              <li>Droit à la limitation du traitement.</li>
              <li>Droit à la portabilité de vos données.</li>
              <li>Droit d&apos;opposition au traitement.</li>
              <li>Droit de retirer votre consentement à tout moment.</li>
            </ul>
            <p className="text-chocolate/80 text-sm leading-relaxed">
              Pour exercer ces droits, contactez-nous à{" "}
              <a
                href="mailto:rebecca.muepumalu@gmail.com"
                className="text-gold-dark hover:underline font-semibold"
              >
                rebecca.muepumalu@gmail.com
              </a>
              . Nous vous répondrons dans un délai maximum d&apos;un mois.
            </p>
          </section>

          <section className="rounded-3xl bg-vanilla/80 border border-gold/15 p-7 mb-6 backdrop-blur-sm">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              9. Sécurité
            </h2>
            <p className="text-chocolate/80 text-sm leading-relaxed">
              Nous mettons en œuvre toutes les mesures techniques et
              organisationnelles raisonnables pour protéger vos données contre
              tout accès non autorisé, perte, altération ou divulgation
              (chiffrement HTTPS, hébergement sécurisé, accès restreint).
            </p>
          </section>

          <section className="rounded-3xl bg-vanilla/80 border border-gold/15 p-7 mb-6 backdrop-blur-sm">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              10. Réclamation
            </h2>
            <p className="text-chocolate/80 text-sm leading-relaxed">
              Si vous estimez que vos droits ne sont pas respectés, vous avez
              le droit d&apos;introduire une réclamation auprès de
              l&apos;Autorité de Protection des Données (APD) belge :
            </p>
            <ul className="mt-3 space-y-1 text-chocolate/80 text-sm leading-relaxed">
              <li>
                <span className="font-semibold">Adresse :</span> Rue de la
                Presse 35, 1000 Bruxelles
              </li>
              <li>
                <span className="font-semibold">Téléphone :</span> +32 2 274
                48 00
              </li>
              <li>
                <span className="font-semibold">Site :</span>{" "}
                <a
                  href="https://www.autoriteprotectiondonnees.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-dark hover:underline"
                >
                  autoriteprotectiondonnees.be
                </a>
              </li>
            </ul>
            <p className="text-chocolate/80 text-sm leading-relaxed mt-3">
              Aucun préjudice ne pourra découler de l&apos;exercice de vos
              droits.
            </p>
          </section>

          <section className="rounded-3xl bg-vanilla/80 border border-gold/15 p-7 backdrop-blur-sm">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              11. Modifications
            </h2>
            <p className="text-chocolate/80 text-sm leading-relaxed">
              La présente politique de confidentialité peut être mise à jour à
              tout moment. La version applicable est celle disponible sur le
              site à la date de votre visite.
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
