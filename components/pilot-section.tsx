import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { getWhatsAppHref } from "@/lib/contact";
import { SectionHeading } from "./section-heading";

const benefits = [
  "Configuration initiale accompagnée",
  "Aide à l’import ou à la création des premiers articles",
  "Formation de base de l’équipe",
  "Support prioritaire pendant la période pilote",
  "Retour terrain pris en compte dans l’amélioration du produit",
  "Accès anticipé aux modules disponibles selon votre activité"
];

const profiles = [
  "Boutique ou magasin",
  "Pharmacie",
  "Restaurant ou café",
  "Garage",
  "Église ou organisation",
  "Dépôt ou grossiste",
  "Quincaillerie",
  "PME avec employés",
  "Activité avec stock, ventes ou clients à suivre"
];

const pricing = [
  "Tarif pilote préférentiel selon votre région géographique",
  "Offre pilote limitée, communiquée après qualification de votre activité",
  "Démo gratuite avant engagement"
];

export function PilotSection() {
  return (
    <section id="programme-pilote" className="scroll-mt-28 bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Devenir entreprise pilote"
          title="Devenir entreprise pilote FlowSuite360"
          description="Nous sélectionnons actuellement des commerces, PME et organisations pour tester FlowSuite360 dans des conditions réelles avec un accompagnement personnalisé."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <PilotList title="Avantages" items={benefits} />
          <PilotList title="Profil recherché" items={profiles} />
          <PilotList title="Tarification pilote" items={pricing} />
        </div>
        <div className="mt-8 flex flex-wrap gap-3 rounded-lg border border-slate-200 bg-white p-6">
          <Link href="/demo" className="rounded-full bg-brand px-5 py-3 font-black text-white shadow-glow">
            Devenir entreprise pilote
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
