export type SubmissionResponseStatus = "ACCEPTED" | "REFUSED" | "CHANGE_REQUESTED";

export type InvoiceValidationOptions = {
  code: string;
  serviceReceived: boolean;
  amountOk: boolean;
  workOk: boolean;
  correctionRequested: boolean;
  stars: number;
  comment?: string;
  date?: string;
};

const cleanTransportValue = (value: string) =>
  value.replace(/\|/g, "/").replace(/\s+/g, " ").trim();

export function cleanPublicCode(code: string) {
  let decoded = code || "";

  try {
    decoded = decodeURIComponent(decoded);
  } catch {
    decoded = code || "";
  }

  return cleanTransportValue(decoded) || "CODE_A_CONFIRMER";
}

export function buildSubmissionResponseCode(options: {
  code: string;
  status: SubmissionResponseStatus;
  note?: string;
  date?: string;
}) {
  const date = options.date ?? new Date().toISOString();
  const base = `ASA_RESPONSE|SUB=${cleanPublicCode(options.code)}|STATUS=${options.status}`;

  if (options.status === "CHANGE_REQUESTED") {
    return `${base}|NOTE=${cleanTransportValue(options.note ?? "")}|DATE=${date}`;
  }

  return `${base}|DATE=${date}`;
}

export function buildInvoiceValidationCode(options: InvoiceValidationOptions) {
  const date = options.date ?? new Date().toISOString();
  const answer = (value: boolean) => (value ? "YES" : "NO");

  return [
    `ASA_FINAL_RESPONSE|FACTURE=${cleanPublicCode(options.code)}`,
    `SERVICE_RECEIVED=${answer(options.serviceReceived)}`,
    `AMOUNT_OK=${answer(options.amountOk)}`,
    `WORK_OK=${answer(options.workOk)}`,
    `CORRECTION=${answer(options.correctionRequested)}`,
    `STARS=${Math.min(5, Math.max(1, options.stars))}`,
    `COMMENT=${cleanTransportValue(options.comment ?? "")}`,
    `DATE=${date}`
  ].join("|");
}

export function buildWhatsAppShareHref(generatedCode: string) {
  const text = `Copiez ce code et renvoyez-le à votre affilié ASA par WhatsApp.\n\n${generatedCode}`;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}
