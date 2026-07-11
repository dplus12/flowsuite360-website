import { Banknote, Boxes, CreditCard, History, Receipt, Repeat2, ShieldCheck, Users, WalletCards } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { GradientButton } from "@/components/gradient-button";
import { InterfacePreviewSection } from "@/components/interface-preview-section";
import { SectionHeading } from "@/components/section-heading";

const features = [
  { title: "Vente rapide", text: "Créez des paniers fluides pour les commerces, boutiques et points de service.", icon: CreditCard },
  { title: "Paiement cash", text: "Encaissez proprement les ventes terrain avec une caisse facile à suivre.", icon: Banknote },
  { title: "Paiement partiel", text: "Acceptez les avances, soldes restants et règlements progressifs.", icon: Repeat2 },
  { title: "Crédit client", text: "Gardez une trace claire des dettes, paiements clients et historiques.", icon: WalletCards },
  { title: "Sessions de caisse", text: "Ouvrez, contrôlez et fermez les sessions avec rapports de fermeture.", icon: ShieldCheck },
  { title: "Produits et stock", text: "Suivez les articles, les catégories, les quantités et les mouvements importants.", icon: Boxes },
  { title: "Clients", text: "Retrouvez les informations utiles pour servir et suivre vos clients.", icon: Users },
  { title: "Historique et reçus", text: "Retrouvez les ventes, reçus et mouvements importants en quelques secondes.", icon: Receipt },
  { title: "Mode formation", text: "Préparez vos équipes progressivement avec un accompagnement adapté.", icon: History }
];

export default function SmartPOSPage() {
  return (
    <>
      <section className="mesh-bg py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">SmartPOS</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-midnight sm:text-5xl">
              Le point de vente simple pour commerces et PME.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Vendez rapidement, encaissez proprement, suivez vos clients et contrôlez votre caisse au quotidien.
              SmartPOS est le point de départ recommandé pour les activités qui veulent vendre, suivre le stock et
              obtenir des rapports utiles.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GradientButton href="/demo">Demander une démonstration SmartPOS</GradientButton>
              <GradientButton href="/plans" variant="secondary">
                Voir les plans compatibles
              </GradientButton>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-black text-midnight">Pensé pour le terrain</h2>
            <ul className="mt-5 grid gap-3 leading-7 text-muted">
              <li>Adapté aux petits commerces, boutiques, services et dépôts.</li>
              <li>Caisse, clients, crédit et stock dans un parcours clair.</li>
              <li>Accompagnement et autoformation pour démarrer progressivement.</li>
              <li>Extensions métier disponibles selon le secteur et le programme choisi.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Les fonctions du quotidien pour vendre et garder le contrôle." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                text={feature.text}
                icon={feature.icon}
                tone={["brand", "growth", "passion", "skyflow"][index % 4] as "brand"}
              />
            ))}
          </div>
        </div>
      </section>

      <InterfacePreviewSection />

      <CTASection
        title="Lancez une caisse moderne sans complexité."
        primaryLabel="Demander une démonstration SmartPOS"
        secondaryLabel="Voir les plans"
        secondaryHref="/plans"
      />
    </>
  );
}
