import type { MarieSolangeRouteId } from "./routes";

export type MarieSolangeSectorId =
  | "retail"
  | "pharmacy"
  | "restaurant"
  | "brick"
  | "garage"
  | "depot"
  | "hardware"
  | "services"
  | "organization"
  | "partner"
  | "other";

export type MarieSolangeSector = {
  id: MarieSolangeSectorId;
  label: string;
  aliases: string[];
  vocabulary: string[];
  commonProblems: string[];
  recommendedSolution: string;
  status: "Disponible" | "Disponible en programme pilote" | "En préparation" | "Sur demande";
  route: MarieSolangeRouteId;
};

export const marieSolangeSectors: MarieSolangeSector[] = [
  {
    id: "retail",
    label: "Commerce / Boutique",
    aliases: ["boutique", "magasin", "commerce", "shop", "retail"],
    vocabulary: ["caisse", "stock", "clients", "reçus"],
    commonProblems: ["ventes difficiles à suivre", "stock incertain", "crédit client"],
    recommendedSolution: "SmartPOS",
    status: "Disponible",
    route: "smartpos"
  },
  {
    id: "pharmacy",
    label: "Pharmacie",
    aliases: ["pharmacie", "pharma", "médicament", "medicament", "expiration", "expiré"],
    vocabulary: ["ventes", "stock", "fournisseurs", "produits sensibles"],
    commonProblems: ["stock sensible", "suivi des produits", "contrôle par site"],
    recommendedSolution: "SmartPOS avec parcours PharmaFlow",
    status: "En préparation",
    route: "modules"
  },
  {
    id: "restaurant",
    label: "Restaurant / Café",
    aliases: ["restaurant", "restauration", "café", "cafe", "bar", "menu", "commande"],
    vocabulary: ["caisse", "menus", "commandes", "paiements"],
    commonProblems: ["commandes", "caisse", "rapports"],
    recommendedSolution: "SmartPOS avec parcours RestaurantFlow",
    status: "En préparation",
    route: "modules"
  },
  {
    id: "brick",
    label: "Briqueterie",
    aliases: ["brique", "briques", "briqueterie", "production", "ciment", "sable"],
    vocabulary: ["matières", "production", "pertes", "livraisons", "coûts"],
    commonProblems: ["coûts réels", "production", "livraison"],
    recommendedSolution: "BrickFlow avec SmartPOS",
    status: "Disponible en programme pilote",
    route: "brickflow"
  },
  {
    id: "garage",
    label: "Garage / Atelier",
    aliases: ["garage", "atelier", "mécanique", "mecanique", "réparation", "reparation"],
    vocabulary: ["clients", "services", "pièces", "facturation"],
    commonProblems: ["suivi client", "pièces", "paiements"],
    recommendedSolution: "GarageFlow avec SmartPOS",
    status: "En préparation",
    route: "modules"
  },
  {
    id: "depot",
    label: "Dépôt / Distribution",
    aliases: ["dépôt", "depot", "grossiste", "distribution", "gros"],
    vocabulary: ["vente en gros", "mouvements", "stock", "livraisons"],
    commonProblems: ["stock", "ventes en gros", "mouvements"],
    recommendedSolution: "DepotFlow avec SmartPOS",
    status: "Sur demande",
    route: "contact"
  },
  {
    id: "hardware",
    label: "Quincaillerie",
    aliases: ["quincaillerie", "matériaux", "materiaux", "articles"],
    vocabulary: ["rayons", "articles", "stock", "clients"],
    commonProblems: ["beaucoup d'articles", "stock", "suivi client"],
    recommendedSolution: "QuincaillerieFlow avec SmartPOS",
    status: "Sur demande",
    route: "contact"
  },
  {
    id: "services",
    label: "Services",
    aliases: ["service", "services", "facture", "intervention"],
    vocabulary: ["clients", "factures", "paiements", "suivi"],
    commonProblems: ["suivi client", "paiements", "organisation"],
    recommendedSolution: "SmartPOS ou projet adapté",
    status: "Sur demande",
    route: "contact"
  },
  {
    id: "organization",
    label: "Organisation / Institution",
    aliases: ["ong", "organisation", "institution", "association", "réseau", "reseau"],
    vocabulary: ["multi-sites", "utilisateurs", "rapports", "accompagnement"],
    commonProblems: ["besoins sur mesure", "plusieurs sites", "permissions"],
    recommendedSolution: "FlowSuite360 sur mesure",
    status: "Sur demande",
    route: "organisations"
  },
  {
    id: "partner",
    label: "Partenaire",
    aliases: ["partenaire", "revendeur", "apporteur", "formateur", "intégrateur", "integrateur"],
    vocabulary: ["partenariat", "région", "secteur", "accompagnement"],
    commonProblems: ["cadre à définir", "rôle", "région"],
    recommendedSolution: "Parcours partenaire",
    status: "Sur demande",
    route: "partenaires"
  },
  {
    id: "other",
    label: "Autre activité",
    aliases: ["autre", "projet"],
    vocabulary: ["besoin", "activité", "organisation"],
    commonProblems: ["besoin à préciser"],
    recommendedSolution: "FlowSuite360 adapté",
    status: "Sur demande",
    route: "contact"
  }
];
