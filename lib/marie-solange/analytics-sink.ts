import type {
  AnalyticsSink,
  ConversationRepository,
  FaqFeedbackRepository,
  MarieSolangeMessage,
  MarieSolangeSession,
  QualificationRepository
} from "./types";

export class NoopAnalyticsSink implements AnalyticsSink {
  saveConversationEvent(_event: MarieSolangeMessage) {}
  saveUnknownQuestion(_question: string) {}
  saveQualificationSummary(_summary: MarieSolangeSession) {}
}

export class LocalSessionConversationRepository implements ConversationRepository {
  saveConversationEvent(_event: MarieSolangeMessage) {}
}

export class NoopFaqFeedbackRepository implements FaqFeedbackRepository {
  saveUnknownQuestion(_question: string) {}
  saveFaqCandidate(_question: string, _answer?: string) {}
  listFaqCandidates() {
    return [];
  }
  approveFaqCandidate(_id: string) {}
  rejectFaqCandidate(_id: string) {}
  publishKnowledgeVersion(_version: string) {}
}

export class NoopQualificationRepository implements QualificationRepository {
  saveQualificationSummary(_summary: MarieSolangeSession) {}
}
