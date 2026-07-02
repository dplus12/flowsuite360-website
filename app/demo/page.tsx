import { DemoForm } from "@/components/demo-form";
import { SectionHeading } from "@/components/section-heading";

export default function DemoPage() {
  return (
    <section className="mesh-bg scroll-mt-28 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Démo"
            title="Planifiez une démonstration adaptée à votre activité."
            description="Dites-nous votre pays, votre secteur et votre besoin principal. La V1 affiche un message local et pourra être reliée plus tard à email, Zoho, Supabase ou CRM."
          />
          <div className="mt-8 rounded-lg bg-midnight p-6 text-white">
            <h2 className="text-xl font-black">Ce que nous préparons avec vous</h2>
            <ul className="mt-4 grid gap-3 leading-7 text-slate-300">
              <li>Choix du pays et de l’activité.</li>
              <li>Sélection du bon module pour commencer.</li>
              <li>Configuration simple de l’entreprise.</li>
              <li>Explication du programme pilote si votre profil correspond.</li>
            </ul>
          </div>
        </div>
        <DemoForm />
      </div>
    </section>
  );
}
