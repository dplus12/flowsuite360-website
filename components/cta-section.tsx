import { GradientButton } from "./gradient-button";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({
  title = "Prêt à simplifier votre gestion ?",
  description = "Parlez-nous de votre activité et nous vous aiderons à choisir le bon point de départ.",
  primaryHref = "/demo",
  primaryLabel = "Demander une démonstration",
  secondaryHref = "/modules/smartpos",
  secondaryLabel = "Voir SmartPOS"
}: CTASectionProps) {
  const isSecondaryExternal = secondaryHref.startsWith("/autoformation/");

  return (
    <section className="bg-midnight py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-skyflow">FlowSuite360</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">{description}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <GradientButton href={primaryHref}>{primaryLabel}</GradientButton>
          <GradientButton href={secondaryHref} variant="light" target={isSecondaryExternal ? "_blank" : undefined}>
            {secondaryLabel}
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
