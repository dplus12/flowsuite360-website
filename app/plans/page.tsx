import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const plans = [
  {
    name: "Basic",
    fit: "Pour commencer avec l'essentiel.",
    features: ["Point de départ simple", "Fonctions de base", "Accompagnement au démarrage"]
  },
  {
    name: "Pro",
    fit: "Pour gérer les ventes et l'activité quotidienne.",
    features: ["Caisse et ventes", "Produits", "Clients", "Rapports utiles"]
  },
  {
    name: "Plus",
    fit: "Pour une entreprise avec davantage de clients, d'employés ou de contrôle.",
    features: ["Suivi plus complet", "Crédit client", "Organisation d'équipe", "Contrôle renforcé"]
  },
  {
    name: "Premium",
    fit: "Pour les opérations avancées, le stock et la croissance.",
    features: ["Stock et inventaire", "Modules métier selon besoin", "Accompagnement renforcé", "Évolution progressive"]
  },
  {
    name: "Enterprise",
    fit: "Pour les organisations et besoins sur mesure.",
    features: ["Plusieurs sites selon projet", "Besoins personnalisés", "Parcours accompagné", "Étude avant proposition"]
  }
];

const faq = [
  ["Puis-je commencer avec un petit plan ?", "Oui. FlowSuite360 est conçu pour commencer simplement puis évoluer."],
  ["Puis-je changer de plan ?", "Oui, le choix peut être ajusté selon votre activité et les fonctions nécessaires."],
  ["Les modules sont-ils tous inclus ?", "Non. Certains modules dépendent du plan, du secteur et de la configuration choisie."],
  ["Les prix changent-ils selon le pays ?", "Les tarifs peuvent varier selon la région et la configuration choisie."],
  ["Puis-je demander une démonstration avant de choisir ?", "Oui. Une démonstration aide à choisir un point de départ adapté."],
  ["Le support est-il inclus ?", "Un accompagnement peut être prévu selon le plan, le programme pilote ou le projet."]
];

export default function PlansPage() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Plans et prix"
          title="Commencez avec l'essentiel, puis ajoutez les fonctions utiles."
          description="Tarifs adaptés selon la région et la configuration choisie. Aucun prix n'est affiché ici sans validation commerciale."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {plans.map((plan) => (
            <article key={plan.name} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-2xl font-black text-midnight">{plan.name}</h2>
              <p className="mt-3 min-h-20 text-sm leading-6 text-muted">{plan.fit}</p>
              <ul className="mt-5 grid gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm font-semibold leading-6 text-midnight">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-growth" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/demo"
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-brand px-4 py-3 text-sm font-black text-white transition hover:bg-passion"
              >
                Demander une démonstration
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-black text-midnight">Programme pilote et accompagnement</h2>
          <p className="mt-3 max-w-3xl leading-8 text-muted">
            Certaines solutions sont disponibles immédiatement. D&apos;autres sont activées progressivement dans le cadre
            du programme pilote ou de projets adaptés. L&apos;objectif est de choisir une configuration réaliste pour votre
            activité, sans vous faire payer pour des fonctions inutiles.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/demo" className="rounded-full bg-growth px-5 py-3 text-center font-black text-white">
              Découvrir le programme pilote
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-200 px-5 py-3 text-center font-black text-midnight hover:border-brand hover:text-brand"
            >
              Parler à un conseiller
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {faq.map(([question, answer]) => (
            <article key={question} className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="font-black text-midnight">{question}</h3>
              <p className="mt-2 leading-7 text-muted">{answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
