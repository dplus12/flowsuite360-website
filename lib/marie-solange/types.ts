import type { MarieSolangeRouteId } from "@/data/marie-solange/routes";
import type { MarieSolangeSectorId } from "@/data/marie-solange/sectors";

export type MarieSolangeRole = "assistant" | "user";

export type MarieSolangeMessage = {
  id: string;
  role: MarieSolangeRole;
  text: string;
  createdAt: string;
  actions?: MarieSolangeAction[];
};

export type MarieSolangeAction = {
  label: string;
  value?: string;
  routeId?: MarieSolangeRouteId;
};

export type MarieSolangeIntent =
  | "command"
  | "direct_question"
  | "asa"
  | "partner"
  | "greeting"
  | "name"
  | "sector"
  | "price"
  | "plan"
  | "demo"
  | "contact"
  | "whatsapp"
  | "support"
  | "objection"
  | "needs"
  | "correction"
  | "restart"
  | "erase"
  | "summary"
  | "unknown";

export type MarieSolangeSession = {
  firstName?: string;
  company?: string;
  region?: string;
  city?: string;
  sectorId?: MarieSolangeSectorId;
  size?: string;
  users?: number;
  employees?: number;
  sites?: number;
  currentSystem?: string;
  sellingMode?: string;
  needs: string[];
  objections: string[];
  urgency?: string;
  wantedAction?: string;
  recommendedSolution?: string;
  recommendedPlan?: string;
  recommendationStatus?: string;
  nameDeclined?: boolean;
  questionSkipped?: boolean;
  contactDeclined?: boolean;
  recommendationDeclined?: boolean;
  whatsappDeclined?: boolean;
};

export type MarieSolangeClassification = {
  intents: MarieSolangeIntent[];
  confidence: number;
  extracted: Partial<MarieSolangeSession>;
  raw: string;
};

export type MarieSolangeRecommendation = {
  solution: string;
  plan: string;
  status: string;
  reasons: string[];
  priorityFeatures: string[];
  optionalModules: string[];
  economicalOption: string;
  scalableOption: string;
  nextStep: MarieSolangeAction;
};

export type ConversationRepository = {
  saveConversationEvent(event: MarieSolangeMessage): void;
};

export type KnowledgeRepository = {
  getKnowledgeVersion(): string;
};

export type FaqFeedbackRepository = {
  saveUnknownQuestion(question: string): void;
  saveFaqCandidate(question: string, answer?: string): void;
  listFaqCandidates(): unknown[];
  approveFaqCandidate(id: string): void;
  rejectFaqCandidate(id: string): void;
  publishKnowledgeVersion(version: string): void;
};

export type QualificationRepository = {
  saveQualificationSummary(summary: MarieSolangeSession): void;
};

export type AnalyticsSink = {
  saveConversationEvent(event: MarieSolangeMessage): void;
  saveUnknownQuestion(question: string): void;
  saveQualificationSummary(summary: MarieSolangeSession): void;
};
