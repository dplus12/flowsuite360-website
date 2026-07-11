import type { MarieSolangeClassification, MarieSolangeIntent, MarieSolangeSession } from "./types";
import type { KnowledgeProvider } from "./knowledge-provider";

export const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "'")
    .trim();

const hasAny = (text: string, words: string[]) => words.some((word) => text.includes(normalizeText(word)));
const startsWithAny = (text: string, words: string[]) => words.some((word) => text.startsWith(normalizeText(word)));

const forbiddenNames = [
  "bonjour",
  "salut",
  "bonsoir",
  "merci",
  "restauration",
  "restaurant",
  "pharmacie",
  "boutique",
  "commerce",
  "garage",
  "depot",
  "services",
  "entreprise",
  "organisation",
  "oui",
  "non",
  "plus",
  "tard",
  "pourquoi",
  "comment"
];

function extractName(raw: string) {
  const text = raw.trim();
  const normalized = normalizeText(text);
  if (forbiddenNames.includes(normalized)) return undefined;
  const patterns = [
    /je m[’']appelle\s+([a-zA-ZÀ-ÿ-]+)/i,
    /moi c[’']est\s+([a-zA-ZÀ-ÿ-]+)/i,
    /appelez-moi\s+([a-zA-ZÀ-ÿ-]+)/i,
    /^([a-zA-ZÀ-ÿ-]{2,})$/
  ];
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match?.[1] && !forbiddenNames.includes(normalizeText(match[1]))) {
      return match[1].charAt(0).toUpperCase() + match[1].slice(1).toLowerCase();
    }
  }
  return undefined;
}

function extractNumberAfter(text: string, words: string[]) {
  for (const word of words) {
    const match = text.match(new RegExp(`(\\d+)\\s+${word}`, "i"));
    if (match?.[1]) return Number.parseInt(match[1], 10);
  }
  return undefined;
}

function addIntent(intents: Set<MarieSolangeIntent>, intent: MarieSolangeIntent) {
  intents.add(intent);
}

export function classifyIntent(raw: string, session: MarieSolangeSession, provider: KnowledgeProvider): MarieSolangeClassification {
  const text = normalizeText(raw);
  const intents = new Set<MarieSolangeIntent>();
  const extracted: Partial<MarieSolangeSession> = {};
  const isQuestion =
    raw.includes("?") ||
    startsWithAny(text, ["qu'est-ce", "que fait", "combien", "comment", "pourquoi", "puis-je", "peut-il", "peut elle", "est-ce", "est il"]);

  if (isQuestion) addIntent(intents, "direct_question");
  if (hasAny(text, ["asa", "assistant de digitalisation"])) addIntent(intents, "asa");
  if (hasAny(text, ["partenaire", "devenir partenaire", "affilie", "affiliee", "revendeur", "integrateur", "formateur", "gagner de l'argent"])) {
    addIntent(intents, "partner");
  }
  if (hasAny(text, ["corriger", "correction", "modifier mon secteur", "changer mon secteur"])) addIntent(intents, "correction");

  if (hasAny(text, ["recommence", "restart", "reprendre"])) {
    addIntent(intents, "command");
    addIntent(intents, "restart");
  }
  if (hasAny(text, ["efface", "supprime", "oublie mes informations"])) {
    addIntent(intents, "command");
    addIntent(intents, "erase");
  }
  if (hasAny(text, ["bonjour", "salut", "bonsoir", "hello"])) addIntent(intents, "greeting");
  if (hasAny(text, ["asa", "assistant de digitalisation", "inventaire", "facture", "scanner"])) addIntent(intents, "support");
  if (hasAny(text, ["prix", "tarif", "abonnement", "combien", "cher"])) addIntent(intents, "price");
  if (hasAny(text, ["plan", "basic", "pro", "plus", "premium", "enterprise"])) addIntent(intents, "plan");
  if (hasAny(text, ["demo", "demonstration", "voir", "tester"])) addIntent(intents, "demo");
  if (hasAny(text, ["contact", "parler", "quelqu'un", "conseiller", "equipe"])) addIntent(intents, "contact");
  if (hasAny(text, ["whatsapp", "message"])) addIntent(intents, "whatsapp");
  if (hasAny(text, ["support", "aide", "formation", "assistance"])) addIntent(intents, "support");
  if (hasAny(text, ["resume", "recap"])) addIntent(intents, "summary");

  if (hasAny(text, ["je prefere ne pas donner mon nom", "je ne veux pas donner mon nom", "continuez sans mon nom", "continuer sans mon nom", "sans mon nom", "pas mon nom", "rester anonyme", "je prefere rester anonyme", "on continue sans", "je passe"])) {
    extracted.nameDeclined = true;
    addIntent(intents, "objection");
  }
  if (hasAny(text, ["appelez-moi plus tard"])) {
    extracted.contactDeclined = true;
    extracted.nameDeclined = true;
    addIntent(intents, "objection");
  }
  if (hasAny(text, ["je veux passer cette question", "passer cette question", "question suivante"])) {
    extracted.questionSkipped = true;
    addIntent(intents, "objection");
  }
  if (hasAny(text, ["pas de whatsapp", "pas whatsapp", "je ne veux pas whatsapp"])) {
    extracted.whatsappDeclined = true;
    addIntent(intents, "objection");
  }
  if (hasAny(text, ["pas de recommandation", "je ne veux pas de recommandation"])) {
    extracted.recommendationDeclined = true;
    addIntent(intents, "objection");
  }
  if (hasAny(text, ["je veux reflechir", "pas maintenant", "plus tard", "trop cher", "excel", "internet", "deja un logiciel"])) {
    addIntent(intents, "objection");
  }

  const employees = extractNumberAfter(text, ["employes", "personnes", "vendeurs"]);
  const sites = extractNumberAfter(text, ["succursales", "sites", "magasins"]);
  const users = extractNumberAfter(text, ["utilisateurs", "users"]);
  if (employees) extracted.employees = employees;
  if (sites) extracted.sites = sites;
  if (users) extracted.users = users;

  const sector = provider.getSectors().find((item) => item.aliases.some((alias) => text.includes(normalizeText(alias))));
  if (sector) {
    extracted.sectorId = sector.id;
    addIntent(intents, "sector");
  }

  const firstName = extractName(raw);
  if (firstName && !sector?.aliases.some((alias) => normalizeText(alias) === normalizeText(firstName))) {
    extracted.firstName = firstName;
    addIntent(intents, "name");
  }

  if (hasAny(text, ["kinshasa", "montreal", "rdc", "canada", "afrique", "quebec"])) {
    extracted.region = raw;
  }
  if (hasAny(text, ["stock", "caisse", "credit", "rapport", "fournisseur", "vente", "gros", "detail", "migration", "inventaire"])) {
    extracted.needs = Array.from(
      new Set(
        [
          ...(session.needs ?? []),
          ...["stock", "caisse", "credit", "rapports", "fournisseurs", "vente en gros", "vente au detail", "migration", "inventaire"].filter((need) =>
            hasAny(text, [need])
          )
        ].filter(Boolean)
      )
    );
    addIntent(intents, "needs");
  }

  if (hasAny(text, ["urgent", "maintenant", "cette semaine", "rapidement"])) {
    extracted.urgency = raw;
  }

  if (intents.size === 0) addIntent(intents, "unknown");

  return {
    intents: Array.from(intents),
    confidence: intents.has("unknown") ? 0.35 : 0.78,
    extracted,
    raw
  };
}
