"use client";

import { useMemo, useState } from "react";
import { Copy, MessageCircle, Star } from "lucide-react";
import { buildInvoiceValidationCode, buildWhatsAppShareHref } from "@/lib/asa-public-response";

type AsaInvoiceValidationFormProps = {
  code: string;
};

type BooleanQuestionProps = {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  yesLabel?: string;
  noLabel?: string;
};

function BooleanQuestion({ label, value, onChange, yesLabel = "Oui", noLabel = "Non" }: BooleanQuestionProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-sm font-bold text-midnight">{label}</p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button
          className={`min-h-10 rounded-full px-4 text-sm font-bold transition ${
            value ? "bg-brand text-white" : "border border-slate-200 bg-white text-midnight hover:border-brand"
          }`}
          type="button"
          onClick={() => onChange(true)}
        >
          {yesLabel}
        </button>
        <button
          className={`min-h-10 rounded-full px-4 text-sm font-bold transition ${
            !value ? "bg-brand text-white" : "border border-slate-200 bg-white text-midnight hover:border-brand"
          }`}
          type="button"
          onClick={() => onChange(false)}
        >
          {noLabel}
        </button>
      </div>
    </div>
  );
}

export function AsaInvoiceValidationForm({ code }: AsaInvoiceValidationFormProps) {
  const [serviceReceived, setServiceReceived] = useState(true);
  const [amountOk, setAmountOk] = useState(true);
  const [workOk, setWorkOk] = useState(true);
  const [correctionRequested, setCorrectionRequested] = useState(false);
  const [stars, setStars] = useState(5);
  const [comment, setComment] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  const whatsAppHref = useMemo(
    () => (generatedCode ? buildWhatsAppShareHref(generatedCode) : "#"),
    [generatedCode]
  );

  const generateCode = () => {
    setGeneratedCode(
      buildInvoiceValidationCode({
        code,
        serviceReceived,
        amountOk,
        workOk,
        correctionRequested,
        stars,
        comment
      })
    );
    setCopyStatus("");
  };

  const copyCode = async () => {
    if (!generatedCode) return;

    try {
      await navigator.clipboard.writeText(generatedCode);
      setCopyStatus("Code copié.");
    } catch {
      setCopyStatus("Code prêt à copier manuellement.");
    }
  };

  return (
    <div className="space-y-5">
      <h2 className="text-xl font-black text-midnight">Votre validation</h2>

      <div className="grid gap-3">
        <BooleanQuestion
          label="Le service a-t-il été reçu correctement ?"
          value={serviceReceived}
          onChange={setServiceReceived}
        />
        <BooleanQuestion label="Le montant payé est-il correct ?" value={amountOk} onChange={setAmountOk} />
        <BooleanQuestion label="Le travail correspond-il a votre demande ?" value={workOk} onChange={setWorkOk} />
        <BooleanQuestion
          label="Souhaitez-vous une correction ?"
          value={correctionRequested}
          onChange={setCorrectionRequested}
          yesLabel="Oui"
          noLabel="Non"
        />
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="text-sm font-bold text-midnight">Note de satisfaction</p>
        <div className="mt-3 flex gap-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition ${
                value <= stars ? "border-brand bg-brand text-white" : "border-slate-200 bg-white text-muted"
              }`}
              type="button"
              onClick={() => setStars(value)}
              aria-label={`${value} étoile${value > 1 ? "s" : ""}`}
            >
              <Star className="h-5 w-5" fill="currentColor" aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>

      <label className="block text-sm font-semibold text-midnight">
        Commentaire optionnel
        <textarea
          className="mt-2 min-h-28 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-midnight outline-none transition placeholder:text-muted focus:border-brand"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Ajoutez une précision si nécessaire."
        />
      </label>

      <button
        className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-brand via-skyflow to-growth px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:translate-y-[-1px] sm:w-auto"
        type="button"
        onClick={generateCode}
      >
        Générer ma validation
      </button>

      {generatedCode ? (
        <div className="rounded-lg border border-slate-200 bg-surface p-4">
          <p className="text-sm font-semibold text-muted">
            Copiez ce code et renvoyez-le à votre affilié ASA par WhatsApp.
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-midnight p-4 text-sm font-semibold text-white">
            {generatedCode}
          </pre>
          <p className="mt-3 text-sm text-muted">
            QR transportable à connecter plus tard. Le code réponse est disponible maintenant.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <button
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-midnight transition hover:border-brand hover:text-brand"
              type="button"
              onClick={copyCode}
            >
              <Copy className="h-4 w-4" aria-hidden="true" />
              Copier le code
            </button>
            <a
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-growth px-5 py-3 text-sm font-bold text-white transition hover:translate-y-[-1px]"
              href={whatsAppHref}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Partager par WhatsApp
            </a>
          </div>
          {copyStatus ? <p className="mt-3 text-sm font-semibold text-brand">{copyStatus}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
