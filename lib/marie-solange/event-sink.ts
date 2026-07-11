import type { MarieSolangeRecommendation, MarieSolangeSession } from "./types";

export type MarieSolangeEventSink = {
  recordSessionStarted(): void;
  recordUserQuestion(question: string): void;
  recordUnknownQuestion(question: string): void;
  recordIntentDetected(intent: string): void;
  recordLinkSuggested(label: string, href: string): void;
  recordRecommendationPrepared(recommendation: MarieSolangeRecommendation): void;
  recordDemoRequested(session: MarieSolangeSession): void;
  recordContactRequested(session: MarieSolangeSession): void;
  recordWhatsappRequested(session: MarieSolangeSession): void;
  recordConversationAbandoned(session: MarieSolangeSession): void;
  recordQualificationCompleted(session: MarieSolangeSession): void;
};

export class NoopMarieSolangeEventSink implements MarieSolangeEventSink {
  recordSessionStarted() {}
  recordUserQuestion(_question: string) {}
  recordUnknownQuestion(_question: string) {}
  recordIntentDetected(_intent: string) {}
  recordLinkSuggested(_label: string, _href: string) {}
  recordRecommendationPrepared(_recommendation: MarieSolangeRecommendation) {}
  recordDemoRequested(_session: MarieSolangeSession) {}
  recordContactRequested(_session: MarieSolangeSession) {}
  recordWhatsappRequested(_session: MarieSolangeSession) {}
  recordConversationAbandoned(_session: MarieSolangeSession) {}
  recordQualificationCompleted(_session: MarieSolangeSession) {}
}

export class RemoteMarieSolangeEventSink extends NoopMarieSolangeEventSink {
  // Dormant bridge for a future server-side implementation with consent.
}
