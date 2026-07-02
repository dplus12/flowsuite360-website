import { Calculator, Factory, Fuel, PackageCheck, Truck, Users, WalletCards } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { GradientButton } from "@/components/gradient-button";
import { SectionHeading } from "@/components/section-heading";

const features = [
  { title: "Matières premières", text: "Suivez ciment, sable, poudre de caillasse et autres intrants.", icon: PackageCheck },
  { title: "Recettes de briques", text: "Structurez vos formules et standards de production.", icon: Calculator },
  { title: "Coût réel de production", text: "Comprenez les coûts complets par lot, type et unité produite.", icon: WalletCards },
  { title: "Production journalière", text: "Enregistrez vos quantités, pertes, lots et produits finis.", icon: Factory },
  { title: "Livraison", text: "Intégrez transport, frais, chauffeurs et suivi de livraison.", icon: Truck },
  { title: "Main-d’œuvre", text: "Tenez compte des équipes, présences, coûts et tâches terrain.", icon: Users },
  { title: "Carburant et machine", text: "Ajoutez les charges qui changent vraiment la rentabilité.", icon: Fuel }
];

export default function BrickFlowPage() {
  return (
    <>
      <section className="mesh-bg py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">BrickFlow</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-midnight sm:text-5xl">
              BrickFlow — La gestion moderne pour briqueteries.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Calculez vos coûts, suivez vos matières premières, organisez la production, vendez vos briques
              et contrôlez votre rentabilité.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GradientButton href="/demo">Demander une démo BrickFlow</GradientButton>
              <GradientButton href="/contact" variant="secondary">
                Présenter ma briqueterie
              </GradientButton>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-black text-midnight">Coût réel, pas seulement théorique</h2>
            <p className="mt-4 leading-8 text-muted">
              BrickFlow tient compte du ciment, sable, poudre de caillasse, main-d’œuvre, machine,
              carburant, transport et livraison pour mieux comprendre le coût réel de chaque brique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Une vision claire de la production à la livraison." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                text={feature.text}
                icon={feature.icon}
                tone={["midnight", "passion", "growth", "brand"][index % 4] as "brand"}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Votre briqueterie mérite des chiffres fiables."
        primaryLabel="Demander une démo BrickFlow"
        secondaryLabel="Présenter ma briqueterie"
        secondaryHref="/contact"
      />
    </>
  );
}
