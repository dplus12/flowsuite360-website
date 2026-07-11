import type { MarieSolangeAction } from "./types";
import type { KnowledgeProvider } from "./knowledge-provider";

export function resolveActionHref(action: MarieSolangeAction, provider: KnowledgeProvider) {
  return action.routeId ? provider.getRoute(action.routeId).href : undefined;
}
