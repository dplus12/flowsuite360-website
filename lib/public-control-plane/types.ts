export type PublicModuleStatus = "Disponible" | "Disponible en programme pilote" | "En préparation" | "Sur demande";

export type PublicCatalogVersion = {
  version: string;
  updatedAt: string;
  source: "local" | "remote";
};

export type PublicKnowledgeVersion = PublicCatalogVersion;

export type PublicPlan = {
  code: string;
  label: string;
  description: string;
  published: boolean;
  version: string;
};

export type PublicPrice = {
  code: string;
  label: string;
  currency: string;
  region: string;
  period: string;
  price?: number;
  promotionalPrice?: number;
  startDate?: string;
  endDate?: string;
  published: boolean;
  version: string;
  publicNotes?: string;
  source: "local" | "remote";
  updatedAt: string;
};

export type PublicAsaOffer = {
  code: string;
  label: string;
  description: string;
  status: PublicModuleStatus;
  published: boolean;
  version: string;
};

export type PartnerProgram = {
  code: string;
  title: string;
  audience: string;
  partnerDoes: string;
  flowsuiteSupport: string;
  clientOffer: string;
  compensationModel: string;
  nextStep: string;
  published: boolean;
  version: string;
};

export type PartnerRevenueExample = {
  code: string;
  title: string;
  missionType: string;
  estimatedMissionAmount: number;
  currency: string;
  illustrativePartnerRate: number;
  estimatedPartnerRevenue: number;
  estimatedPlatformRevenue: number;
  notes: string;
  region: string;
  published: boolean;
  illustrativeOnly: boolean;
  version: string;
};
