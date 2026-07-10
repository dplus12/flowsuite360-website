import { AsaPublicShell } from "@/components/asa/asa-public-shell";
import { AsaSubmissionResponseForm } from "@/components/asa/asa-submission-response-form";
import { cleanPublicCode } from "@/lib/asa-public-response";

type SubmissionPageProps = {
  params: {
    code: string;
  };
};

export default function AsaSubmissionPage({ params }: SubmissionPageProps) {
  const code = cleanPublicCode(params.code);

  return (
    <AsaPublicShell title="Soumission ASA FlowSuite360" codeLabel="Code soumission :" code={code}>
      <div className="space-y-8">
        <div className="grid gap-3 rounded-lg border border-slate-200 bg-surface p-4 text-sm sm:grid-cols-2">
          <div>
            <p className="font-bold text-muted">Client</p>
            <p className="mt-1 font-semibold text-midnight">Client ASA</p>
          </div>
          <div>
            <p className="font-bold text-muted">Devise</p>
            <p className="mt-1 font-semibold text-midnight">À confirmer</p>
          </div>
          <div>
            <p className="font-bold text-muted">Travaux demandés</p>
            <p className="mt-1 font-semibold text-midnight">Demande ASA associée à ce lien public.</p>
          </div>
          <div>
            <p className="font-bold text-muted">Volume estimé</p>
            <p className="mt-1 font-semibold text-midnight">À confirmer avec l’affilié ASA</p>
          </div>
          <div>
            <p className="font-bold text-muted">Prix estimé</p>
            <p className="mt-1 font-semibold text-midnight">À confirmer avec l’affilié ASA</p>
          </div>
          <div>
            <p className="font-bold text-muted">Conditions</p>
            <p className="mt-1 font-semibold text-midnight">
              Validation finale après confirmation des données réelles.
            </p>
          </div>
        </div>

        <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm font-semibold leading-6 text-midnight">
          Cette soumission est basée sur les informations recueillies. Le prix final peut varier selon les données réelles, en appliquant les mêmes taux que ce devis.
        </p>

        <AsaSubmissionResponseForm code={code} />
      </div>
    </AsaPublicShell>
  );
}
