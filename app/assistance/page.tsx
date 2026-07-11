import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

export default function AssistancePage() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Assistance"
          title="Accompagnement et support"
          description="FlowSuite360 privilégie un démarrage progressif, avec autoformation, démonstration et accompagnement selon le besoin."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {["Autoformation", "Démonstration", "Contact humain"].map((item) => (
            <article key={item} className="rounded-lg border border-slate-200 bg-white p-5">
              <h2 className="font-black text-midnight">{item}</h2>
              <p className="mt-2 leading-7 text-muted">Une option utile pour avancer sans complexité inutile.</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/autoformation/flowsuite360-autoformation-client-cartes.html" className="rounded-full bg-brand px-5 py-3 text-center font-black text-white">
            Ouvrir l&apos;autoformation
          </Link>
          <Link href="/contact" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-center font-black text-midnight">
            Contacter l&apos;équipe
          </Link>
        </div>
      </div>
    </section>
  );
}
