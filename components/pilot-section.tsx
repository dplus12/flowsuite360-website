import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { getWhatsAppHref } from "@/lib/contact";
import { SectionHeading } from "./section-heading";

const benefits = [
  "Configuration initiale accompagnée",
  "Aide à l'import ou à la création des premiers articles",
  "Formation de base de l'équipe",
  "Support prioritaire pendant la période pilote",
  "Retour terrain pris en compte dans l'amélioration du produit",
  "Accès aux solutions adaptées selon votre activité"
];

const profiles = [
  "Boutique ou magasin",
  "Pharmacie",
  "Restaurant ou café",
  "Garage",
  "Organisation",
  "Dépôt ou grossiste",
  "Quincaillerie",
  "PME avec employés",
  "Activité avec stock, ventes ou clients à suivre"
];

const pricing = [
  "Tarifs adaptés selon votre région et votre configuration",
  "Offre pilote communiquée après qualification de votre activité",
  "Démonstration possible avant engagement"
];

export function PilotSection() {
  return (
    <section id="programme-pilote" className="scroll-mt-28 bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Programme pilote"
          title="Un accompagnement renforcé pour bien démarrer"
          description="FlowSuite360 est disponible pour des activités ciblées. Le programme pilote ajoute un accompagnement plus proche pour les entreprises qui veulent structurer leur démarrage."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <PilotList title="Avantages" items={benefits} />
          <PilotList title="Profil recherché" items={profiles} />
          <PilotList title="Tarification pilote" items={pricing} />
        </div>
        <div className="mt-8 flex flex-wrap gap-3 rounded-lg border border-slate-200 bg-white p-6">
          <Link href="/demo" className="rounded-full bg-brand px-5 py-3 font-black text-white shadow-glow">
            Découvrir le programme pilote
          </Link>
          <a
            href={getWhatsAppHref()}
            className="rounded-full border border-slate-200 px-5 py-3 font-black text-midnight hover:border-brand hover:text-brand"
            target="_blank"
            rel="noreferrer"
          >
            Parler à un conseiller
          </a>
        </div>
      </div>
    </section>
  );
}

function PilotList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-black text-midnight">{title}</h3>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-7 text-muted">
            <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-growth" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
