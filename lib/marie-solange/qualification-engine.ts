import type { MarieSolangeClassification, MarieSolangeSession } from "./types";

export const emptyMarieSolangeSession = (): MarieSolangeSession => ({
  needs: [],
  objections: [],
  nameDeclined: false,
  questionSkipped: false,
  contactDeclined: false,
  recommendationDeclined: false,
  whatsappDeclined: false
});

export function mergeQualification(session: MarieSolangeSession, classification: MarieSolangeClassification): MarieSolangeSession {
  const next: MarieSolangeSession = {
    ...session,
    ...classification.extracted,
    needs: Array.from(new Set([...(session.needs ?? []), ...(classification.extracted.needs ?? [])])),
    objections: session.objections ?? []
  };

  if (classification.intents.includes("objection")) {
    next.objections = Array.from(new Set([...next.objections, classification.raw]));
  }

  if (classification.intents.includes("demo")) next.wantedAction = "démonstration";
  if (classification.intents.includes("price") || classification.intents.includes("plan")) next.wantedAction = "plans";
  if (classification.intents.includes("contact")) next.wantedAction = "contact";
  if (classification.intents.includes("whatsapp")) next.wantedAction = "WhatsApp";

  return next;
}

export function getNextQualificationQuestion(session: MarieSolangeSession) {
  if (!session.firstName && !session.nameDeclined && !session.questionSkipped) return "Comment puis-je vous appeler ?";
  if (!session.sectorId) return session.firstName ? `${session.firstName}, dans quel secteur travaillez-vous principalement ?` : "Quelle activite souhaitez-vous mieux organiser ?";
  if (!session.region) return "Dans quel pays ou quelle région êtes-vous situé ?";
  if (!session.needs.length) return "Qu'aimeriez-vous améliorer en priorité : la caisse, le stock, les clients, les rapports ou autre chose ?";
  if (!session.employees && !session.users) return "Combien de personnes utiliseront environ FlowSuite360 ?";
  if (!session.sites) return "Avez-vous un seul point de vente ou plusieurs sites ?";
  return "Souhaitez-vous voir une recommandation, les plans ou préparer une démonstration ?";
}
