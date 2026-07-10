"use client";

import { useMemo, useState } from "react";
import { Copy, MessageCircle } from "lucide-react";
import {
  buildSubmissionResponseCode,
  buildWhatsAppShareHref,
  type SubmissionResponseStatus
} from "@/lib/asa-public-response";

type AsaSubmissionResponseFormProps = {
  code: string;
};

const responseOptions: Array<{ value: SubmissionResponseStatus; label: string }> = [
  { value: "ACCEPTED", label: "Accepter la soumission" },
  { value: "REFUSED", label: "Refuser la soumission" },
  { value: "CHANGE_REQUESTED", label: "Demander une modification" }
];

export function AsaSubmissionResponseForm({ code }: AsaSubmissionResponseFormProps) {
  const [status, setStatus] = useState<SubmissionResponseStatus>("ACCEPTED");
  const [note, setNote] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  const whatsAppHref = useMemo(
    () => (generatedCode ? buildWhatsAppShareHref(generatedCode) : "#"),
    [generatedCode]
  );

  const generateCode = () => {
    setGeneratedCode(buildSubmissionResponseCode({ code, status, note }));
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
      <div>
        <h2 className="text-xl font-black text-midnight">Votre réponse</h2>
        <div className="mt-4 grid gap-3">
          {responseOptions.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-midnight transition hover:border-brand"
            >
              <input
                className="h-4 w-4 accent-brand"
                type="radio"
                name="asa-submission-response"
                value={option.value}
                checked={status === option.value}
                onChange={() => setStatus(option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>

      {status === "CHANGE_REQUESTED" ? (
        <label className="block text-sm font-semibold text-midnight">
          Commentaire recommandé
          <textarea
            className="mt-2 min-h-28 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-midnight outline-none transition placeholder:text-muted focus:border-brand"
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="Précisez la modification souhaitée."
          />
        </label>
      ) : null}

      <button
        className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-brand via-skyflow to-growth px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:translate-y-[-1px] sm:w-auto"
        type="button"
        onClick={generateCode}
      >
        Générer ma réponse
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
