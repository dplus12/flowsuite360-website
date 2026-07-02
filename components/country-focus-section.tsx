import { CheckCircle2 } from "lucide-react";

const columns = [
  {
    title: "Canada",
    items: ["sécurité", "données", "reçu", "taxes futures", "support en français", "abonnement clair"]
  },
  {
    title: "Afrique",
    items: [
      "cash",
      "mobile money futur",
      "crédit client",
      "multi-devises",
      "contrôle caisse",
      "formation et support terrain"
    ]
  }
];

export function CountryFocusSection() {
  return (
    <section className="bg-midnight py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {columns.map((column) => (
          <div key={column.title} className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-black">{column.title}</h2>
            <div className="mt-6 grid gap-3">
              {column.items.map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="h-5 w-5 text-growth" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
