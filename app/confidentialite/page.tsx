import { SectionHeading } from "@/components/section-heading";

export default function ConfidentialitePage() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Confidentialité"
          title="Informations de confidentialité"
          description="Cette page présente les principes généraux de FlowSuite360. Elle doit être validée avant tout usage juridique officiel."
        />
        <div className="mt-10 grid gap-5 rounded-lg border border-slate-200 bg-white p-6 leading-8 text-muted">
          <p>FlowSuite360 limite les informations demandées aux besoins nécessaires pour comprendre votre activité, préparer une démonstration ou accompagner votre configuration.</p>
          <p>Les formulaires publics de ce site fonctionnent localement dans l&apos;interface et ne remplacent pas une validation humaine ou contractuelle.</p>
          <p>Les questions sur les données, la conservation, l&apos;hébergement ou les obligations légales doivent être confirmées avec l&apos;équipe avant engagement.</p>
        </div>
      </div>
    </section>
  );
}
