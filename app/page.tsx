import { AlertTriangle } from "lucide-react";
import { CountryFocusSection } from "@/components/country-focus-section";
import { CTASection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { HeroSection } from "@/components/hero-section";
import { InterfacePreviewSection } from "@/components/interface-preview-section";
import { ModuleCard } from "@/components/module-card";
import { PilotSection } from "@/components/pilot-section";
import { SectionHeading } from "@/components/section-heading";
import { homeModules, solutionCards } from "@/data/modules";

const problems = [
  "trop de cahiers manuels",
  "caisse difficile à contrôler",
  "dettes clients oubliées",
  "stock incertain",
  "production mal calculée",
  "rapports absents"
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="scroll-mt-28 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Les entreprises grandissent plus vite quand leurs outils sont simples." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <div key={problem} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-surface p-4">
                <AlertTriangle className="h-5 w-5 flex-none text-passion" aria-hidden="true" />
                <p className="font-semibold text-midnight">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-28 bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            title="Une suite modulaire qui s’adapte à votre réalité."
            description="Commencez avec SmartPOS, puis activez les modules dont votre entreprise a réellement besoin."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutionCards.map((card, index) => (
              <FeatureCard
                key={card.title}
                title={card.title}
                text={card.text}
                icon={card.icon}
                tone={["brand", "growth", "passion", "skyflow"][index % 4] as "brand"}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-28 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Modules principaux" title="Activez les bons outils au bon moment." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {homeModules.map((module) => (
              <ModuleCard key={module.slug} module={module} />
            ))}
          </div>
        </div>
      </section>

      <PilotSection />
      <InterfacePreviewSection />
      <CountryFocusSection />

      <section className="scroll-mt-28 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="center" title="Comment ça marche" />
          <div className="mt-12 grid gap-5 md:grid-cols-5">
            {[
              "Choisissez votre pays",
              "Sélectionnez votre activité",
              "Activez SmartPOS ou un module métier",
              "Configurez votre entreprise",
              "Commencez à vendre et suivre vos résultats"
            ].map((step, index) => (
              <div key={step} className="rounded-lg border border-slate-200 bg-surface p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-black text-white">
                  {index + 1}
                </span>
                <p className="mt-4 font-bold leading-7 text-midnight">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
