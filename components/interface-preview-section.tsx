import { SectionHeading } from "./section-heading";

const previews = [
  { title: "Smart Login", detail: "Connexion guidée et accès par rôle" },
  { title: "Démarrage assisté", detail: "Entreprise, utilisateurs et premiers articles" },
  { title: "SmartPOS / Caisse", detail: "Panier, paiement et reçu" },
  { title: "Tableau de bord", detail: "Ventes, caisse et activité" },
  { title: "Produits et stock", detail: "Articles, seuils et mouvements" },
  { title: "Clients et rapports", detail: "Crédits, historiques et résultats" }
];

export function InterfacePreviewSection() {
  return (
    <section id="interface" className="scroll-mt-28 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Aperçus interface"
          title="Découvrez l’interface FlowSuite360"
          description="Une interface simple, claire et guidée pour aider les utilisateurs à démarrer rapidement, même sans grande expérience informatique."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {previews.map((preview) => (
            <article key={preview.title} className="overflow-hidden rounded-lg border border-slate-200 bg-surface shadow-sm">
              <div className="border-b border-slate-200 bg-white px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-passion" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-growth" />
                </div>
              </div>
              <div className="grid gap-3 p-5">
                <div className="h-3 w-1/2 rounded-full bg-slate-300" />
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="font-black text-midnight">{preview.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{preview.detail}</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="h-12 rounded-lg bg-indigo-100" />
                  <span className="h-12 rounded-lg bg-emerald-100" />
                  <span className="h-12 rounded-lg bg-sky-100" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
