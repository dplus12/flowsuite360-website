import { SectionHeading } from "@/components/section-heading";

export default function ConditionsPage() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Conditions"
          title="Conditions d'utilisation"
          description="Ces informations sont générales et nécessitent une validation humaine avant publication juridique définitive."
        />
        <div className="mt-10 grid gap-5 rounded-lg border border-slate-200 bg-white p-6 leading-8 text-muted">
          <p>FlowSuite360 est présenté comme une solution de gestion progressive pour commerces, PME et organisations.</p>
          <p>Les modules, plans et accompagnements peuvent varier selon la région, l&apos;activité et la configuration choisie.</p>
          <p>Aucune garantie légale, fiscale ou réglementaire spécifique n&apos;est affirmée sur cette page sans validation écrite.</p>
        </div>
      </div>
    </section>
  );
}
