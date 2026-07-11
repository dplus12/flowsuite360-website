import { DemoForm } from "@/components/demo-form";
import { SectionHeading } from "@/components/section-heading";

export default function DemoPage() {
  return (
    <section className="mesh-bg scroll-mt-28 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Démonstration"
            title="Planifiez une démonstration adaptée à votre activité."
            description="Dites-nous votre pays, votre secteur et votre besoin principal. Nous préparerons une démonstration claire, adaptée à votre activité."
          />
          <div className="mt-8 rounded-lg bg-midnight p-6 text-white">
            <h2 className="text-xl font-black">Ce qui se passe après votre demande</h2>
            <ol className="mt-4 grid gap-3 leading-7 text-slate-300">
              <li>1. Nous comprenons votre besoin.</li>
              <li>2. L&apos;équipe vous contacte avec les informations disponibles.</li>
              <li>3. Une démonstration adaptée est préparée.</li>
              <li>4. Vous décidez sans engagement immédiat.</li>
            </ol>
          </div>
        </div>
        <DemoForm />
      </div>
    </section>
  );
}
