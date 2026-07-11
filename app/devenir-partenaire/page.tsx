import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { createPublicControlPlaneProvider } from "@/lib/public-control-plane/cached-provider";

const partnerFlow = [
  "Choisir le type de partenariat.",
  "Présenter son entreprise ou son expérience.",
  "Choisir les solutions concernées.",
  "Indiquer la région.",
  "Discuter du modèle commercial.",
  "Recevoir une proposition.",
  "Former l'équipe.",
  "Commencer avec une première mission ou vente."
];

const asaFuture = ["Factures", "Extraction", "Prix", "Photos de rayons", "Contrôles avancés"];

export default async function DevenirPartenairePage() {
  const provider = createPublicControlPlaneProvider();
  const programs = await provider.getPublishedPartnerPrograms();
  const revenueExamples = await provider.getPublishedPartnerRevenueExamples();

  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Devenir partenaire"
            title="Développez votre activité avec FlowSuite360"
            description="Recommandez, déployez ou utilisez les services FlowSuite360 auprès de vos clients avec un parcours adapté à votre entreprise."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-brand px-5 py-3 text-center font-black text-white">
              Présenter mon entreprise
            </Link>
            <Link href="/demo" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-center font-black text-midnight">
              Demander une présentation partenaire
            </Link>
            <Link href="/asa" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-center font-black text-midnight">
              Découvrir ASA
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Parcours"
            title="Choisir le bon modèle de collaboration"
            description="Chaque parcours précise ce que le partenaire fait, ce que FlowSuite360 apporte et comment la rémunération peut être étudiée sans promesse automatique."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {programs.map((program) => (
              <article key={program.code} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-black text-midnight">{program.title}</h2>
                <p className="mt-3 text-sm font-bold text-brand">À qui il s&apos;adresse</p>
                <p className="mt-1 leading-7 text-muted">{program.audience}</p>
                <p className="mt-3 text-sm font-bold text-brand">Ce que le partenaire fait</p>
                <p className="mt-1 leading-7 text-muted">{program.partnerDoes}</p>
                <p className="mt-3 text-sm font-bold text-brand">Accompagnement FlowSuite360</p>
                <p className="mt-1 leading-7 text-muted">{program.flowsuiteSupport}</p>
                <p className="mt-3 text-sm font-bold text-brand">Ce qu&apos;il peut proposer</p>
                <p className="mt-1 leading-7 text-muted">{program.clientOffer}</p>
                <p className="mt-3 text-sm font-bold text-brand">Rémunération possible</p>
                <p className="mt-1 leading-7 text-muted">{program.compensationModel}</p>
                <p className="mt-3 text-sm font-bold text-brand">Prochaine étape</p>
                <p className="mt-1 leading-7 text-muted">{program.nextStep}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-surface py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="ASA partenaires"
              title="Développez des services de digitalisation avec ASA"
              description="Un partenaire ASA peut aider des commerces et entreprises à organiser leurs inventaires, compter rapidement les articles, parcourir les rayons, préparer un rapport, structurer les données et accompagner l'entreprise avant l'import dans FlowSuite360."
            />
            <ol className="mt-8 grid gap-3">
              {[
                "Le client demande un inventaire.",
                "Le partenaire estime le volume.",
                "La mission est préparée.",
                "L'équipe compte et vérifie.",
                "Le résultat est remis au client.",
                "Le partenaire reçoit la part prévue selon l'accord."
              ].map((step, index) => (
                <li key={step} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-black text-white">{index + 1}</span>
                  <span className="leading-7 text-muted">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-black text-midnight">Possibilités ASA en préparation</h2>
            <div className="mt-5 grid gap-3">
              {asaFuture.map((item) => (
                <div key={item} className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3">
                  <span className="font-bold text-midnight">{item}</span>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-black text-amber-700">En préparation</span>
                </div>
              ))}
            </div>
            <p className="mt-5 leading-7 text-muted">
              Ces possibilités ne sont pas présentées comme disponibles maintenant. Elles servent à montrer la direction prévue pour les services ASA.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Simulations"
            title="Exemples estimatifs de partage de revenus"
            description="Ces exemples sont illustratifs, non contractuels, hors taxes et frais éventuels. Le taux final est défini selon le contrat partenaire et le prix final est confirmé avant mission."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {revenueExamples.map((example) => (
              <article key={example.code} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-brand">Simulation estimative non contractuelle</p>
                <h2 className="mt-3 text-xl font-black text-midnight">{example.title}</h2>
                <p className="mt-2 leading-7 text-muted">{example.missionType}</p>
                <dl className="mt-5 grid gap-3 text-sm">
                  <div className="flex justify-between gap-4 border-b border-slate-100 pb-2">
                    <dt className="font-bold text-muted">Mission estimée</dt>
                    <dd className="font-black text-midnight">{example.estimatedMissionAmount} {example.currency}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-100 pb-2">
                    <dt className="font-bold text-muted">Taux illustratif</dt>
                    <dd className="font-black text-midnight">{example.illustrativePartnerRate} %</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-100 pb-2">
                    <dt className="font-bold text-muted">Revenu partenaire estimatif</dt>
                    <dd className="font-black text-midnight">{example.estimatedPartnerRevenue} {example.currency}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-bold text-muted">Part plateforme estimative</dt>
                    <dd className="font-black text-midnight">{example.estimatedPlatformRevenue} {example.currency}</dd>
                  </div>
                </dl>
                <p className="mt-5 text-sm leading-6 text-muted">{example.notes} Les tarifs et taux réels sont confirmés dans l&apos;accord partenaire.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-midnight py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
          <SectionHeading
            eyebrow="Parcours partenaire"
            title="Une progression simple avant la première mission"
            description="Le parcours reste humain : qualification, discussion commerciale, formation, puis première mission ou première vente."
            className="text-white [&_h2]:text-white [&_p]:text-slate-200"
          />
          <ol className="grid gap-3 sm:grid-cols-2">
            {partnerFlow.map((step, index) => (
              <li key={step} className="rounded-lg border border-white/15 bg-white/10 p-4">
                <span className="text-sm font-black text-sky-200">Étape {index + 1}</span>
                <p className="mt-2 leading-7 text-white">{step}</p>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-3 lg:col-span-2">
            <Link href="/contact" className="rounded-full bg-white px-5 py-3 text-center font-black text-midnight">
              Présenter mon entreprise
            </Link>
            <Link href="/demo" className="rounded-full border border-white/25 px-5 py-3 text-center font-black text-white">
              Discuter avec Marie-Solange
            </Link>
            <Link href="/asa" className="rounded-full border border-white/25 px-5 py-3 text-center font-black text-white">
              Découvrir ASA
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
