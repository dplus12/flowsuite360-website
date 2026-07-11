export type AsaKnowledgeTopic = {
  id: string;
  title: string;
  answer: string;
  variants: string[];
  actions?: Array<"asa" | "devenirPartenaire" | "contact">;
};

const asaCurrentFunctions = [
  "preparer une mission d'inventaire",
  "organiser le parcours par sections ou rayons",
  "compter les articles sur le terrain",
  "noter les quantites a zero ou indisponibles",
  "ajouter les articles rencontres hors parcours",
  "preparer un rapport de mission et des donnees structurees"
];

export const asaKnowledgeTopics: AsaKnowledgeTopic[] = [
  {
    id: "definition",
    title: "Qu'est-ce qu'ASA ?",
    answer:
      "ASA est l'assistant de digitalisation FlowSuite360. Il aide les commerces et entreprises a organiser des inventaires terrain, a compter les articles, a structurer les resultats et a preparer les informations avant validation humaine.",
    variants: ["qu'est-ce qu'asa", "c'est quoi asa", "definition asa", "que fait asa", "asa fait quoi"],
    actions: ["asa"]
  },
  {
    id: "current-functions",
    title: "Ce qu'ASA fait aujourd'hui",
    answer: `Aujourd'hui, ASA aide surtout a ${asaCurrentFunctions.join(", ")}. Souhaitez-vous l'utiliser pour un inventaire ponctuel ou pour plusieurs magasins ?`,
    variants: ["aujourd'hui", "maintenant", "disponible", "peut faire aujourd'hui", "fonctions actuelles"],
    actions: ["asa", "devenirPartenaire"]
  },
  {
    id: "inventory",
    title: "Inventaire et comptage",
    answer:
      "Oui. ASA peut aider a preparer un inventaire, parcourir plusieurs rayons, compter les articles, noter les quantites, isoler les ecarts et preparer un rapport exploitable. Les informations sensibles doivent ensuite etre verifiees par une personne responsable.",
    variants: ["inventaire", "compter", "articles", "rayons", "quantites", "plusieurs rayons", "comptage"],
    actions: ["asa"]
  },
  {
    id: "reports-import",
    title: "Rapports et import",
    answer:
      "ASA peut preparer un rapport de mission et un fichier structure pour faciliter la suite du travail. L'import final, la correction des donnees sensibles et la validation restent a confirmer selon l'organisation du client.",
    variants: ["rapport", "import", "fichier", "donnees", "resultat", "mission"],
    actions: ["asa"]
  },
  {
    id: "invoice-scan",
    title: "Factures et scan",
    answer:
      "La lecture de factures et l'extraction automatique d'informations sont en preparation. Aujourd'hui, ASA est presente prudemment pour les missions d'inventaire, le comptage, la structuration et l'accompagnement terrain.",
    variants: ["facture", "factures", "scanner", "scan", "photo", "lire une photo", "photo de rayon", "extraction", "prix"],
    actions: ["asa"]
  },
  {
    id: "pricing",
    title: "Prix ASA",
    answer:
      "Le tarif d'ASA depend du volume d'articles, du nombre de sites, du type de mission et de l'accompagnement. Les exemples affiches sur la page partenaire sont des simulations estimatives, pas des offres contractuelles.",
    variants: ["combien coute asa", "prix asa", "tarif asa", "cout asa", "coûte asa", "abonnement asa"],
    actions: ["asa", "devenirPartenaire"]
  },
  {
    id: "partner",
    title: "Partenariat ASA",
    answer:
      "Oui, ASA peut faire partie d'un parcours partenaire. Un partenaire peut aider ses clients a organiser les inventaires, compter les articles, preparer les donnees et accompagner la digitalisation. Les revenus possibles dependent toujours d'un accord partenaire valide.",
    variants: ["agent asa", "devenir agent", "vendre asa", "gagner de l'argent", "partenaire asa", "affiliation", "affilie", "revendre asa"],
    actions: ["devenirPartenaire", "asa"]
  }
];
