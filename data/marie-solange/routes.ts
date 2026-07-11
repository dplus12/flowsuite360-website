export const marieSolangeRoutes = {
  home: { href: "/", label: "Accueil" },
  plans: { href: "/plans", label: "Plans et prix" },
  modules: { href: "/modules", label: "Solutions" },
  smartpos: { href: "/modules/smartpos", label: "SmartPOS" },
  brickflow: { href: "/modules/brickflow", label: "BrickFlow" },
  asa: { href: "/asa", label: "ASA" },
  demo: { href: "/demo", label: "Démonstration" },
  contact: { href: "/contact", label: "Contact" },
  faq: { href: "/faq", label: "FAQ" },
  assistance: { href: "/assistance", label: "Assistance" },
  partenaires: { href: "/devenir-partenaire", label: "Devenir partenaire" },
  devenirPartenaire: { href: "/devenir-partenaire", label: "Devenir partenaire" },
  organisations: { href: "/organisations", label: "Organisations" },
  confidentialite: { href: "/confidentialite", label: "Confidentialité" },
  donnees: { href: "/donnees", label: "Données" },
  conditions: { href: "/conditions", label: "Conditions" }
} as const;

export type MarieSolangeRouteId = keyof typeof marieSolangeRoutes;
