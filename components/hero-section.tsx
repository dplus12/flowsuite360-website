import { AppMockup } from "./app-mockup";
import { GradientButton } from "./gradient-button";

const badges = ["SmartPOS", "Caisse", "Crédit client", "Inventaire", "Production", "Rapports"];

export function HeroSection() {
  return (
    <section className="mesh-bg overflow-hidden py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.88fr] lg:px-8">
        <div>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span key={badge} className="rounded-full bg-white px-3 py-1 text-sm font-bold text-brand shadow-sm">
                {badge}
              </span>
            ))}
          </div>
          <h1 className="mt-8 max-w-4xl text-4xl font-black leading-tight text-midnight sm:text-6xl">
            Gérez votre entreprise plus simplement, au même endroit.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Ventes, stock, clients, employés, paiements et rapports dans une solution adaptée à votre activité.
            Commencez avec l&apos;essentiel, puis ajoutez les fonctions dont votre entreprise a besoin.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <GradientButton href="/demo">Voir comment ça fonctionne</GradientButton>
            <GradientButton href="/modules" variant="secondary">
              Trouver la solution adaptée à mon activité
            </GradientButton>
            <GradientButton href="/plans" variant="secondary">
              Voir les plans et prix
            </GradientButton>
          </div>
        </div>
        <AppMockup />
      </div>
    </section>
  );
}
