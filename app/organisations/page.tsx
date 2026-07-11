import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

const needs = ["Entreprises structurées", "ONG", "Institutions", "Réseaux", "Projets multi-sites", "Besoins personnalisés"];

export default function OrganisationsPage() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Organisations"
          title="Projets sur mesure et organisations"
          description="Pour les besoins plus structurés, FlowSuite360 privilégie une discussion de cadrage avant toute promesse technique."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {needs.map((need) => (
            <article key={need} className="rounded-lg border border-slate-200 bg-white p-5">
              <h2 className="font-black text-midnight">{need}</h2>
              <p className="mt-2 leading-7 text-muted">Un parcours adapté peut être étudié avec l&apos;équipe selon le contexte réel.</p>
            </article>
          ))}
        </div>
        <Link href="/contact" className="mt-8 inline-flex rounded-full bg-brand px-5 py-3 font-black text-white">
          Discuter d&apos;un projet
        </Link>
      </div>
    </section>
  );
}
