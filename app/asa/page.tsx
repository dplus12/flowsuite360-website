import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { createPublicControlPlaneProvider } from "@/lib/public-control-plane/cached-provider";

const currentFeatures = [
  "Préparation et organisation des missions d'inventaire",
  "Parcours par sections ou rayons",
  "Comptage rapide des articles",
  "Quantités comptées",
  "Quantités indisponibles ou à zéro",
  "Articles ajoutés hors parcours",
  "Sauvegarde du parcours",
  "Rapport de mission",
  "Préparation de fichiers structurés pour import",
  "Aide à la digitalisation des articles",
  "Inventaires de fin de mois plus rapides",
  "Accompagnement de l'équipe terrain"
];

const upcomingFeatures = [
  "Analyser une facture pour aider à préparer les articles",
  "Extraire noms, quantités et prix à vérifier",
  "Proposer des mises à jour de prix à valider",
  "Utiliser des photos de rayons pour aider à identifier les produits",
  "Préparer des données d'inventaire depuis des documents",
  "Comparer les comptages avec les données existantes",
  "Faciliter les contrôles périodiques",
  "Connecter progressivement ASA aux outils FlowSuite360"
];

export default async function AsaPage() {
  const provider = createPublicControlPlaneProvider();
  const prices = await provider.getPublishedPrices();
  const offers = await provider.getPublishedAsaOffers();

  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ASA"
          title="ASA - Assistant de digitalisation FlowSuite360"
          description="ASA aide une entreprise ou une équipe à transformer rapidement des informations terrain en données numériques exploitables."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.75fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-black text-midnight">Ce qu&apos;ASA fait maintenant</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {currentFeatures.map((feature) => (
                <div key={feature} className="flex gap-3 text-sm font-semibold leading-6 text-muted">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-growth" aria-hidden="true" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-black text-midnight">Fonctionnement simple</h2>
            <ol className="mt-5 grid gap-3 leading-7 text-muted">
              <li>1. L&apos;équipe prépare la mission.</li>
              <li>2. L&apos;agent parcourt les rayons ou zones.</li>
              <li>3. Les articles et quantités sont enregistrés.</li>
              <li>4. Les informations sont vérifiées.</li>
              <li>5. Un résultat structuré est préparé pour l&apos;entreprise.</li>
            </ol>
            <p className="mt-6 rounded-lg bg-amber-50 p-4 text-sm font-semibold leading-6 text-amber-900">
              ASA prépare les informations. Toute mise à jour sensible doit être vérifiée et validée humainement.
            </p>
          </aside>
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-black text-midnight">Ce qu&apos;ASA pourra faire progressivement</h2>
          <p className="mt-2 text-sm font-black uppercase tracking-[0.14em] text-brand">En préparation</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {upcomingFeatures.map((feature) => (
              <div key={feature} className="rounded-lg bg-surface p-4 text-sm font-semibold leading-6 text-muted">
                {feature}
              </div>
            ))}
          </div>
          <p className="mt-5 leading-7 text-muted">
            Ces fonctions sont présentées comme des propositions à vérifier, avec validation humaine et activation progressive.
          </p>
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-black text-midnight">Offres et tarifs ASA</h2>
          {offers.length ? (
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {offers.map((offer) => (
                <article key={offer.code} className="rounded-lg bg-surface p-4">
                  <h3 className="font-black text-midnight">{offer.label}</h3>
                  <p className="mt-2 leading-7 text-muted">{offer.description}</p>
                  <p className="mt-3 text-sm font-bold text-brand">{offer.status}</p>
                </article>
              ))}
            </div>
          ) : null}
          <p className="mt-5 leading-7 text-muted">
            {prices.length
              ? "Les tarifs publiés seront affichés selon la région et la version de catalogue disponible."
              : "Tarifs selon le volume, la mission et l'accompagnement choisi."}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/demo" className="rounded-full bg-brand px-5 py-3 text-center font-black text-white">
              Demander une démonstration ASA
            </Link>
            <Link href="/contact" className="rounded-full border border-slate-200 px-5 py-3 text-center font-black text-midnight">
              Parler à un conseiller
            </Link>
            <Link href="/devenir-partenaire" className="rounded-full border border-slate-200 px-5 py-3 text-center font-black text-midnight">
              Devenir partenaire ASA
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
