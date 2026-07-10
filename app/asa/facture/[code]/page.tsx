import { AsaInvoiceValidationForm } from "@/components/asa/asa-invoice-validation-form";
import { AsaPublicShell } from "@/components/asa/asa-public-shell";
import { cleanPublicCode } from "@/lib/asa-public-response";

type InvoicePageProps = {
  params: {
    code: string;
  };
};

export default function AsaInvoicePage({ params }: InvoicePageProps) {
  const code = cleanPublicCode(params.code);

  return (
    <AsaPublicShell title="Validation facture ASA" codeLabel="Code facture :" code={code}>
      <div className="space-y-8">
        <div className="grid gap-3 rounded-lg border border-slate-200 bg-surface p-4 text-sm sm:grid-cols-2">
          <div>
            <p className="font-bold text-muted">Client</p>
            <p className="mt-1 font-semibold text-midnight">Client ASA</p>
          </div>
          <div>
            <p className="font-bold text-muted">Montant payé</p>
            <p className="mt-1 font-semibold text-midnight">À confirmer avec l’affilié ASA</p>
          </div>
          <div>
            <p className="font-bold text-muted">Devise</p>
            <p className="mt-1 font-semibold text-midnight">À confirmer</p>
          </div>
          <div>
            <p className="font-bold text-muted">Services livrés</p>
            <p className="mt-1 font-semibold text-midnight">Service ASA associé à ce lien public.</p>
          </div>
          <div>
            <p className="font-bold text-muted">Date</p>
            <p className="mt-1 font-semibold text-midnight">À confirmer</p>
          </div>
        </div>

        <AsaInvoiceValidationForm code={code} />
      </div>
    </AsaPublicShell>
  );
}
