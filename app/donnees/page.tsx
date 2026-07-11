import { SectionHeading } from "@/components/section-heading";

export default function DonneesPage() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Données"
          title="Informations sur les données"
          description="Cette page explique l'approche générale sans inventer de conformité, d'hébergement ou de durée de conservation."
        />
        <div className="mt-10 grid gap-5 rounded-lg border border-slate-200 bg-white p-6 leading-8 text-muted">
          <p>Les données utiles dépendent des modules activés : produits, ventes, clients, stock, rapports ou paramètres d&apos;entreprise.</p>
          <p>Les exigences de sécurité, d&apos;hébergement, de conservation et de conformité doivent être validées selon le pays et le contexte du client.</p>
          <p>Pour un projet sensible ou multi-site, une discussion de cadrage est recommandée avant toute configuration.</p>
        </div>
      </div>
    </section>
  );
}
