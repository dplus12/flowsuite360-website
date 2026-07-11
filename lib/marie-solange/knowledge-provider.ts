import { marieSolangeKnowledgeBase } from "@/data/marie-solange/knowledge-base";
import { asaKnowledgeTopics } from "@/data/marie-solange/asa-knowledge";
import type { MarieSolangeRouteId } from "@/data/marie-solange/routes";
import type { MarieSolangeSectorId } from "@/data/marie-solange/sectors";

export type KnowledgeProvider = {
  getFaqs(): typeof marieSolangeKnowledgeBase.faqs;
  searchFaqs(query: string): Array<(typeof marieSolangeKnowledgeBase.faqs)[number]>;
  getSector(id: MarieSolangeSectorId): (typeof marieSolangeKnowledgeBase.sectors)[number] | undefined;
  getSectors(): typeof marieSolangeKnowledgeBase.sectors;
  getPlanRules(): typeof marieSolangeKnowledgeBase.plans;
  getObjection(message: string): (typeof marieSolangeKnowledgeBase.objections)[number] | undefined;
  getRoute(id: MarieSolangeRouteId): (typeof marieSolangeKnowledgeBase.routes)[MarieSolangeRouteId];
  getConversationCopy(): typeof marieSolangeKnowledgeBase.copy;
  getKnowledgeVersion(): string;
  searchAsaTopics(query: string): typeof asaKnowledgeTopics;
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const searchableTokens = (value: string) =>
  normalize(value)
    .split(/[^a-z0-9]+/i)
    .filter((token) => token.length > 2);

export class LocalKnowledgeProvider implements KnowledgeProvider {
  getFaqs() {
    return marieSolangeKnowledgeBase.faqs;
  }

  searchFaqs(query: string) {
    const needle = normalize(query);
    const tokens = searchableTokens(query);
    return this.getFaqs().filter((faq) =>
      normalize([faq.question, faq.answer, ...faq.variants].join(" ")).includes(needle) ||
      tokens.some((token) => normalize([faq.question, faq.answer, ...faq.variants].join(" ")).includes(token))
    );
  }

  searchAsaTopics(query: string) {
    const needle = normalize(query);
    const tokens = searchableTokens(query);
    return asaKnowledgeTopics.filter((topic) =>
      normalize([topic.title, topic.answer, ...topic.variants].join(" ")).includes(needle) ||
      tokens.some((token) => normalize([topic.title, topic.answer, ...topic.variants].join(" ")).includes(token))
    );
  }

  getSector(id: MarieSolangeSectorId) {
    return marieSolangeKnowledgeBase.sectors.find((sector) => sector.id === id);
  }

  getSectors() {
    return marieSolangeKnowledgeBase.sectors;
  }

  getPlanRules() {
    return marieSolangeKnowledgeBase.plans;
  }

  getObjection(message: string) {
    const normalized = normalize(message);
    return marieSolangeKnowledgeBase.objections.find((objection) =>
      objection.aliases.some((alias) => normalized.includes(normalize(alias)))
    );
  }

  getRoute(id: MarieSolangeRouteId) {
    return marieSolangeKnowledgeBase.routes[id];
  }

  getConversationCopy() {
    return marieSolangeKnowledgeBase.copy;
  }

  getKnowledgeVersion() {
    return marieSolangeKnowledgeBase.version;
  }
}

export class RemoteKnowledgeProvider implements KnowledgeProvider {
  private readonly local = new LocalKnowledgeProvider();

  getFaqs() {
    return this.local.getFaqs();
  }

  searchFaqs(query: string) {
    return this.local.searchFaqs(query);
  }

  getSector(id: MarieSolangeSectorId) {
    return this.local.getSector(id);
  }

  getSectors() {
    return this.local.getSectors();
  }

  getPlanRules() {
    return this.local.getPlanRules();
  }

  getObjection(message: string) {
    return this.local.getObjection(message);
  }

  getRoute(id: MarieSolangeRouteId) {
    return this.local.getRoute(id);
  }

  getConversationCopy() {
    return this.local.getConversationCopy();
  }

  getKnowledgeVersion() {
    return this.local.getKnowledgeVersion();
  }

  searchAsaTopics(query: string) {
    return this.local.searchAsaTopics(query);
  }
}
