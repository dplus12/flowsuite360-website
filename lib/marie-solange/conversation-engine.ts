import type { MarieSolangeMessage, MarieSolangeSession } from "./types";
import type { KnowledgeProvider } from "./knowledge-provider";
import { classifyIntent, normalizeText } from "./intent-classifier";
import { getNextQualificationQuestion, mergeQualification } from "./qualification-engine";
import { recommendFlowSuite } from "./recommendation-engine";
import { createUnknownQuestionEvent, NoopUnknownQuestionSink } from "./unknown-question-sink";

const makeId = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

export function createMarieSolangeMessage(text: string, role: "assistant" | "user" = "assistant"): MarieSolangeMessage {
  return {
    id: makeId(),
    role,
    text,
    createdAt: new Date().toISOString()
  };
}

function withActions(text: string, actions: MarieSolangeMessage["actions"]): MarieSolangeMessage {
  return {
    ...createMarieSolangeMessage(text),
    actions
  };
}

function nextStepAfterAnswer(session: MarieSolangeSession) {
  const question = getNextQualificationQuestion(session);
  return question ? `\n\n${question}` : "";
}

function answerAsa(input: string, session: MarieSolangeSession, provider: KnowledgeProvider) {
  const normalized = normalizeText(input);
  const topics = provider.searchAsaTopics(input);
  const scoredTopics = topics
    .map((topic) => ({
      topic,
      score: topic.variants.reduce((score, variant) => {
        const value = normalizeText(variant);
        if (value === "asa") return score;
        return normalized.includes(value) ? score + value.length : score;
      }, 0)
    }))
    .sort((a, b) => b.score - a.score);
  const topic = scoredTopics.find((item) => item.score > 0)?.topic ?? topics[0] ?? provider.searchAsaTopics("qu'est-ce qu'asa")[0];

  const actions: MarieSolangeMessage["actions"] = [
    { label: "Decouvrir ASA", routeId: "asa" },
    { label: "Devenir partenaire ASA", routeId: "devenirPartenaire" }
  ];

  return {
    session,
    message: withActions(`${topic.answer}${nextStepAfterAnswer(session)}`, actions),
    recommendation: null
  };
}

function answerPartner(input: string, session: MarieSolangeSession) {
  const normalized = normalizeText(input);
  const asaContext = normalized.includes("asa") || normalized.includes("inventaire") || normalized.includes("digitalisation");
  const text = asaContext
    ? "Un partenaire ASA peut aider des commerces et entreprises a organiser leurs inventaires, compter les articles, structurer les donnees et accompagner une premiere mission terrain. Les revenus possibles dependent d'un accord partenaire valide, jamais d'une commission garantie."
    : "FlowSuite360 peut accueillir plusieurs parcours partenaires : affilie commercial, entreprise affiliee, revendeur, formateur, integrateur, partenaire sectoriel ou regional. Le bon parcours depend de votre experience, de votre region et du niveau d'accompagnement que vous souhaitez offrir.";

  return {
    session,
    message: withActions(`${text}\n\nSouhaitez-vous me dire si vous representez une personne seule, une entreprise ou une equipe commerciale ?`, [
      { label: "Voir Devenir partenaire", routeId: "devenirPartenaire" },
      { label: "Decouvrir ASA", routeId: "asa" }
    ]),
    recommendation: null
  };
}

export function answerWithMarieSolange(input: string, session: MarieSolangeSession, provider: KnowledgeProvider) {
  const classification = classifyIntent(input, session, provider);
  let nextSession = mergeQualification(session, classification);
  const firstName = nextSession.firstName;
  const prefix = firstName ? `${firstName}, ` : "";

  if (classification.intents.includes("erase")) {
    return {
      session: { needs: [], objections: [] },
      message: createMarieSolangeMessage("C'est note. J'ai efface les informations de cette session. Comment puis-je vous appeler ?"),
      recommendation: null
    };
  }

  if (classification.intents.includes("restart")) {
    return {
      session: { needs: [], objections: [] },
      message: createMarieSolangeMessage("Tres bien, on reprend simplement. Comment puis-je vous appeler ?"),
      recommendation: null
    };
  }

  if (classification.intents.includes("asa")) {
    return answerAsa(input, nextSession, provider);
  }

  if (classification.intents.includes("partner")) {
    return answerPartner(input, nextSession);
  }

  if (classification.intents.includes("correction")) {
    return {
      session: { ...nextSession, sectorId: undefined },
      message: createMarieSolangeMessage("Bien sûr. On corrige cela. Quel secteur souhaitez-vous retenir maintenant ?"),
      recommendation: null
    };
  }

  if (normalizeText(input).includes("module")) {
    return {
      session: nextSession,
      message: withActions("Vous pouvez consulter les modules FlowSuite360 depuis la page Modules. Elle présente les solutions disponibles et les parcours par activité.", [
        { label: "Ouvrir Modules", routeId: "modules" }
      ]),
      recommendation: null
    };
  }

  if (nextSession.nameDeclined && classification.extracted.nameDeclined) {
    return {
      session: nextSession,
      message: createMarieSolangeMessage("Aucun probleme. Nous pouvons continuer sans votre nom. Quelle activite souhaitez-vous mieux organiser ?"),
      recommendation: null
    };
  }

  if (nextSession.questionSkipped && classification.extracted.questionSkipped) {
    return {
      session: nextSession,
      message: createMarieSolangeMessage("Bien sur, on passe cette question. Dites-moi plutot ce que vous souhaitez organiser en priorite."),
      recommendation: null
    };
  }

  if (nextSession.contactDeclined && classification.extracted.contactDeclined) {
    return {
      session: nextSession,
      message: createMarieSolangeMessage("D'accord. Je ne vous pousse pas vers un contact maintenant. On peut continuer ici, a votre rythme."),
      recommendation: null
    };
  }

  const objection = provider.getObjection(input);
  if (objection) {
    return {
      session: nextSession,
      message: createMarieSolangeMessage(`${prefix}${objection.answer} Souhaitez-vous continuer la discussion ici ?`),
      recommendation: null
    };
  }

  if (classification.intents.includes("direct_question")) {
    const faq = provider.searchFaqs(input)[0];
    if (faq) {
      return {
        session: nextSession,
        message: createMarieSolangeMessage(`${prefix}${faq.answer}${nextStepAfterAnswer(nextSession)}`),
        recommendation: null
      };
    }
    const sink = new NoopUnknownQuestionSink();
    sink.capture(createUnknownQuestionEvent(input, nextSession, "direct_question"));
    return {
      session: nextSession,
      message: createMarieSolangeMessage(
        "Je n'ai pas encore une reponse suffisamment precise sur ce point. Je peux vous orienter vers l'equipe FlowSuite360 ou conserver cette question pour qu'elle soit etudiee."
      ),
      recommendation: null
    };
  }

  if (classification.intents.includes("price") || classification.intents.includes("plan")) {
    const recommendation = recommendFlowSuite(nextSession, provider);
    nextSession = {
      ...nextSession,
      recommendedPlan: recommendation.plan,
      recommendedSolution: recommendation.solution,
      recommendationStatus: recommendation.status
    };
    return {
      session: nextSession,
      message: withActions(
        `${prefix}je peux vous aider a comparer les plans. A ce stade, je vous orienterais vers ${recommendation.plan}. La raison principale : ${recommendation.reasons.join(", ")}. Les tarifs restent a confirmer selon la region et la configuration.`,
        [
          { label: "Voir les plans", routeId: "plans" },
          { label: "Demander une demonstration", routeId: "demo" }
        ]
      ),
      recommendation: null
    };
  }

  if (classification.intents.includes("demo")) {
    return {
      session: nextSession,
      message: withActions(`${prefix}bonne idee. Une demonstration permettra de valider votre activite et les fonctions utiles avant de choisir.`, [
        { label: "Ouvrir la page demonstration", routeId: "demo" }
      ]),
      recommendation: null
    };
  }

  if (classification.intents.includes("contact") || classification.intents.includes("whatsapp")) {
    const actions = classification.intents.includes("whatsapp")
      ? [
          { label: "Preparer WhatsApp", routeId: "contact" as const },
          { label: "Contacter l'equipe", routeId: "contact" as const }
        ]
      : [{ label: "Contacter l'equipe", routeId: "contact" as const }];
    return {
      session: nextSession,
      message: withActions(`${prefix}je peux vous aider a formuler une demande claire avec les informations que vous choisissez de partager.`, actions),
      recommendation: null
    };
  }

  if (classification.intents.includes("summary")) {
    return {
      session: nextSession,
      message: createMarieSolangeMessage(`${prefix}voici ce que j'ai compris pour l'instant : ${nextSession.sectorId ? `secteur ${nextSession.sectorId}` : "activite a preciser"}${nextSession.needs.length ? `, besoins ${nextSession.needs.join(", ")}` : ""}${nextSession.sites ? `, ${nextSession.sites} site(s)` : ""}. Est-ce exact ?`),
      recommendation: null
    };
  }

  if (classification.intents.includes("greeting") && !classification.intents.includes("name") && !classification.intents.includes("sector")) {
    return {
      session: nextSession,
      message: createMarieSolangeMessage(
        nextSession.nameDeclined
          ? "Bonjour. Nous pouvons continuer sans votre nom. Quelle activite souhaitez-vous mieux organiser ?"
          : "Bonjour. Mon nom est Marie-Solange. Je suis votre conseillere FlowSuite360 aujourd'hui. Comment puis-je vous appeler, ou souhaitez-vous continuer sans donner votre nom ?"
      ),
      recommendation: null
    };
  }

  if (classification.intents.includes("sector") && !nextSession.firstName && !nextSession.nameDeclined) {
    const sector = nextSession.sectorId ? provider.getSector(nextSession.sectorId) : undefined;
    return {
      session: nextSession,
      message: createMarieSolangeMessage(
        `Tres bien, vous travaillez dans ${sector?.label.toLowerCase() ?? "ce secteur"}. Avant de continuer, comment puis-je vous appeler ?`
      ),
      recommendation: null
    };
  }

  if (classification.intents.includes("sector") || classification.intents.includes("needs") || classification.intents.includes("name")) {
    const question = getNextQualificationQuestion(nextSession);
    const text = `${firstName && classification.intents.includes("name") ? `Enchantee, ${firstName}. ` : ""}${question}`;
    return {
      session: nextSession,
      message: createMarieSolangeMessage(text),
      recommendation: null
    };
  }

  if (classification.confidence < 0.5) {
    const sink = new NoopUnknownQuestionSink();
    sink.capture(createUnknownQuestionEvent(input, nextSession));
    return {
      session: nextSession,
      message: createMarieSolangeMessage("Je ne suis pas certaine d'avoir bien compris votre question. Pouvez-vous la reformuler ou me donner un exemple ?"),
      recommendation: null
    };
  }

  return {
    session: nextSession,
    message: createMarieSolangeMessage(getNextQualificationQuestion(nextSession)),
    recommendation: null
  };
}
