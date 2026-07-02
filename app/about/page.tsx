import { CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";

const values = [
  "clair",
  "humain",
  "ambitieux",
  "accessible",
  "professionnel sans être froid",
  "adapté aux réalités du terrain"
];

export default function AboutPage() {
  return (
    <>
      <section className="mesh-bg py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="À propos"
            title="FlowSuite360 veut rendre la gestion d’entreprise plus simple, plus fiable et plus proche du terrain."
            description="La plateforme réunit POS, caisse, clients, inventaire, production, rapports et modules spécialisés sans imposer un ERP lourd et compliqué."
          />
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-black text-midnight">Notre positionnement</h2>
            <p className="mt-4 leading-8 text-muted">
              Commencez avec SmartPOS, puis activez les modules dont votre entreprise a réellement besoin :
              caisse, clients, stock, production, restauration, briqueterie, livraison ou paie.
            </p>
          </div>
          <div className="grid gap-3">
            {values.map((value) => (
              <div key={value} className="flex items-center gap-3 rounded-lg bg-surface p-4 font-semibold text-midnight">
                <CheckCircle2 className="h-5 w-5 text-growth" aria-hidden="true" />
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
