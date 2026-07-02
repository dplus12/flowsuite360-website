import { BadgeStatus } from "./badge-status";

export function AppMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl rounded-[1.5rem] border border-white/40 bg-white p-4 shadow-soft">
      <div className="rounded-[1.15rem] bg-slate-950 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-skyflow">SmartPOS</p>
            <p className="mt-1 text-lg font-black text-white">Session caisse ouverte</p>
          </div>
          <BadgeStatus status="Disponible" className="ring-white/10" />
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["Ventes", "1 248,00 $"],
            ["Cash", "820,00 $"],
            ["Crédit", "428,00 $"]
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-white/10 p-4">
              <p className="text-xs text-slate-300">{label}</p>
              <p className="mt-2 text-lg font-black text-white">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-bold text-midnight">Panier en cours</p>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-growth">
              Contrôlé
            </span>
          </div>
          {[
            ["Produit A", "2 x 18,00 $"],
            ["Produit B", "1 x 42,00 $"],
            ["Paiement partiel", "50,00 $"]
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between border-t border-slate-100 py-3">
              <span className="text-sm text-muted">{label}</span>
              <span className="text-sm font-bold text-midnight">{value}</span>
            </div>
          ))}
          <button className="mt-3 w-full rounded-full bg-gradient-to-r from-brand to-growth px-4 py-3 text-sm font-bold text-white">
            Encaisser
          </button>
        </div>
      </div>
    </div>
  );
}
