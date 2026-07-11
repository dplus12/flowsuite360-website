import type { PartnerProgram, PartnerRevenueExample, PublicAsaOffer, PublicCatalogVersion, PublicPlan, PublicPrice } from "./types";

export type PublicControlPlaneProvider = {
  getPublishedPlans(): Promise<PublicPlan[]> | PublicPlan[];
  getPublishedPrices(): Promise<PublicPrice[]> | PublicPrice[];
  getPublishedAsaOffers(): Promise<PublicAsaOffer[]> | PublicAsaOffer[];
  getPublishedPartnerPrograms(): Promise<PartnerProgram[]> | PartnerProgram[];
  getPublishedPartnerRevenueExamples(): Promise<PartnerRevenueExample[]> | PartnerRevenueExample[];
  getPublishedModules(): Promise<unknown[]> | unknown[];
  getPublishedKnowledge(): Promise<unknown[]> | unknown[];
  getPublishedFaqs(): Promise<unknown[]> | unknown[];
  getPublishedRoutes(): Promise<unknown[]> | unknown[];
  getPublishedContentVersion(): Promise<PublicCatalogVersion> | PublicCatalogVersion;
};
