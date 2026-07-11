import { marieSolangeObjections } from "./objections";
import { marieSolangePlans } from "./plans";
import { marieSolangeRoutes } from "./routes";
import { marieSolangeSectors } from "./sectors";
import { marieSolangeCopy } from "./conversation-copy";

export const marieSolangeKnowledgeBase = {
  version: "marie-solange-v1-local-2026-07-10",
  updatedAt: "2026-07-10",
  status: "approved-local",
  copy: marieSolangeCopy,
  routes: marieSolangeRoutes,
  sectors: marieSolangeSectors,
  plans: marieSolangePlans,
  objections: marieSolangeObjections,
  faqs: [
    {
      id: "plans",
      question: "Quels sont les plans FlowSuite360 ?",
      answer: "Les plans publics sont Basic, Pro, Plus, Premium et Enterprise. Les tarifs dépendent de la région et de la configuration choisie.",
      variants: ["prix", "tarifs", "abonnement", "combien"]
    },
    {
      id: "demo",
      question: "Puis-je demander une démonstration ?",
      answer: "Oui. La démonstration sert à comprendre votre activité et à recommander un point de départ adapté.",
      variants: ["démo", "demo", "voir", "tester"]
    },
    {
      id: "support",
      question: "Le support est-il inclus ?",
      answer: "Un accompagnement peut être prévu selon le plan, le programme pilote ou le projet. Il faut valider le niveau exact avec l'équipe.",
      variants: ["support", "aide", "formation", "accompagnement"]
    },
    {
      id: "asa",
      question: "Qu'est-ce qu'ASA ?",
      answer: "ASA est l'assistant de digitalisation FlowSuite360. Il aide à préparer des missions d'inventaire, organiser les comptages et produire des informations structurées pour l'entreprise.",
      variants: ["asa", "inventaire", "digitalisation", "mission", "comptage"]
    }
  ]
} as const;
