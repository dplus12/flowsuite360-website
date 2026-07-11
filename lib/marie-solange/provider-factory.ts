import { LocalKnowledgeProvider } from "./knowledge-provider";
import type { KnowledgeProvider } from "./knowledge-provider";

export function createMarieSolangeKnowledgeProvider(): KnowledgeProvider {
  return new LocalKnowledgeProvider();
}
