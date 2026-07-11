import { normalizeText } from "./intent-classifier";
import type { MarieSolangeSession } from "./types";

export type UnknownQuestionEvent = {
  id: string;
  question: string;
  normalizedQuestion: string;
  date: string;
  knownSector?: string;
  knownCountry?: string;
  possibleIntent?: string;
  conversationContext: {
    needs: string[];
    sites?: number;
    employees?: number;
  };
  personalDataRemoved: boolean;
  status: "new" | "assigned" | "resolved" | "rejected";
  assignedTo?: string;
  resolution?: string;
  approvedAnswerId?: string;
};

export type UnknownQuestionSink = {
  capture(event: UnknownQuestionEvent): void;
};

export class NoopUnknownQuestionSink implements UnknownQuestionSink {
  capture(_event: UnknownQuestionEvent) {
    // Dormant by design: no network request, no visitor-driven learning.
  }
}

export function createUnknownQuestionEvent(question: string, session: MarieSolangeSession, possibleIntent = "unknown"): UnknownQuestionEvent {
  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    question,
    normalizedQuestion: normalizeText(question),
    date: new Date().toISOString(),
    knownSector: session.sectorId,
    knownCountry: session.region,
    possibleIntent,
    conversationContext: {
      needs: session.needs ?? [],
      sites: session.sites,
      employees: session.employees
    },
    personalDataRemoved: true,
    status: "new"
  };
}
