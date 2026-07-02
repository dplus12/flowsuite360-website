import { AppMockup } from "./app-mockup";
import { GradientButton } from "./gradient-button";

const badges = ["SmartPOS", "Caisse", "Crédit client", "Inventaire", "Production", "Multi-devises"];

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
            Gérez votre entreprise avec une suite simple, moderne et modulaire.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            FlowSuite360 vous aide à vendre, encaisser, suivre vos clients, contrôler votre caisse, gérer
            votre stock et activer les modules métier adaptés à votre activité.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <GradientButton href="/modules/smartpos">Essayer SmartPOS</GradientButton>
            <GradientButton href="/demo" variant="secondary">
              Demander une démo
            </GradientButton>
            <GradientButton href="/modules" variant="secondary">
              Voir les modules
            </GradientButton>
          </div>
        </div>
        <AppMockup />
      </div>
    </section>
  );
}
