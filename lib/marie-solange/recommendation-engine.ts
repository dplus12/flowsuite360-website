import type { MarieSolangeRecommendation, MarieSolangeSession } from "./types";
import type { KnowledgeProvider } from "./knowledge-provider";

export function recommendFlowSuite(session: MarieSolangeSession, provider: KnowledgeProvider): MarieSolangeRecommendation {
  const sector = session.sectorId ? provider.getSector(session.sectorId) : undefined;
  const sites = session.sites ?? 1;
  const employees = session.employees ?? session.users ?? 1;
  const hasStock = session.needs.some((need) => need.includes("stock"));
  const hasCredit = session.needs.some((need) => need.includes("crédit") || need.includes("credit"));
  const isComplex = sites >= 3 || employees >= 10 || session.sectorId === "organization" || session.sectorId === "partner";

  let plan = "Pro";
  if (hasStock || hasCredit || sites > 1 || employees >= 4) plan = "Plus";
  if (session.sectorId === "brick" || isComplex) plan = isComplex ? "Enterprise" : "Premium";
  if (session.wantedAction === "plans" && !hasStock && !hasCredit && sites <= 1) plan = "Basic";

  const solution = sector?.recommendedSolution ?? "SmartPOS";
  const status = sector?.status ?? "Disponible";
  const routeId = sector?.route ?? "smartpos";

  const reasons = [
    sector ? `activité : ${sector.label}` : "activité à préciser",
    sites > 1 ? `${sites} sites ou succursales` : "démarrage simple",
    employees > 1 ? `${employees} personnes concernées` : "petite équipe",
    hasStock ? "besoin de stock" : "",
    hasCredit ? "crédit client à suivre" : ""
  ].filter(Boolean);

  return {
    solution,
    plan,
    status,
    reasons,
    priorityFeatures: Array.from(new Set(["caisse", ...session.needs, "rapports"].filter(Boolean))).slice(0, 5),
    optionalModules: sector ? [sector.label] : ["Modules selon activité"],
    economicalOption: plan === "Basic" ? "Rester sur Basic pour commencer" : "Commencer plus simplement avec Pro ou Basic selon le besoin réel",
    scalableOption: plan === "Enterprise" ? "Cadrer un projet sur mesure" : "Évoluer vers Premium ou Enterprise si les sites, utilisateurs ou contrôles augmentent",
    nextStep: { label: routeId === "contact" ? "Contacter l'équipe" : "Voir la page recommandée", routeId }
  };
}
