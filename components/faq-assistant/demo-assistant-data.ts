import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  Building2,
  CircleDollarSign,
  ClipboardList,
  Contact,
  CreditCard,
  FileSpreadsheet,
  HelpCircle,
  Import,
  Landmark,
  LogIn,
  MessageCircle,
  PackagePlus,
  PlayCircle,
  School,
  Search,
  ShieldQuestion,
  ShoppingCart,
  Sparkles,
  Store,
  Truck,
  Users,
  Wrench
} from "lucide-react";

export const PLANS_ROUTE = "/pricing";
export const DEMO_ROUTE = "/demo";
export const CONTACT_ROUTE = "/contact";
export const SMARTPOS_ROUTE = "/modules/smartpos";

export type AssistantAction = {
  label: string;
  href?: string;
  view?: AssistantView;
};

export type AssistantView =
  | "home"
  | "demo"
  | "pricing"
  | "login"
  | "products"
  | "selling"
  | "customDemo"
  | "contact"
  | "planGuide"
  | "sectorDemo"
  | "leadPrep"
  | "productsReady"
  | "objections"
  | "searchFallback"
  | `demo:${DemoOptionId}`
  | `sector:${SectorOptionId}`
  | `objection:${ObjectionId}`;

export type DemoOptionId =
  | "general"
  | "smartpos"
  | "products"
  | "inventory"
  | "customers"
  | "reports"
  | "plans"
  | "smartArticle";

export type SectorOptionId =
  | "retail"
  | "pharmacy"
  | "restaurant"
  | "garage"
  | "school"
  | "church"
  | "distribution"
  | "services"
  | "enterprise";

export type ObjectionId = "price" | "excel" | "training" | "productsMissing" | "computer" | "setup";

export type AssistantCard = {
  id: string;
  title: string;
  description?: string;
  icon: LucideIcon;
  keywords: string[];
  view: AssistantView;
};

export type AssistantContent = {
  title: string;
  description?: string;
  steps?: string[];
  note?: string;
  actions: AssistantAction[];
};

export type DemoOption = {
  id: DemoOptionId;
  title: string;
  description: string;
  keywords: string[];
  actions: AssistantAction[];
};

export type SectorOption = {
  id: SectorOptionId;
  title: string;
  description: string;
  modules: string[];
  recommendedDemo: string;
  icon: LucideIcon;
  href: string;
  keywords: string[];
};

export type Objection = {
  id: ObjectionId;
  question: string;
  answer: string;
  keywords: string[];
};

export const whatsappNumberHint =
  "Le numéro WhatsApp officiel est configurable dans lib/contact.ts. Si ce numéro est vide, l'assistant affiche le formulaire de contact.";

export const welcomeMessage =
  "Bonjour 👋 Je suis l'assistant FlowSuite360. Je peux vous aider à choisir un plan, voir une démo, préparer votre demande, comprendre les prix, ajouter vos produits et commencer à vendre.";

export const quickActions: AssistantCard[] = [
  {
    id: "plan-guide",
    title: "Quel plan me convient ?",
    description: "Obtenir une recommandation indicative selon vos besoins.",
    icon: CircleDollarSign,
    keywords: ["prix", "tarif", "coût", "cout", "abonnement", "plan", "combien", "payer", "recommandation"],
    view: "planGuide"
  },
  {
    id: "sector-demo",
    title: "Démo adaptée à mon activité",
    description: "Choisir une démo selon votre secteur.",
    icon: Store,
    keywords: ["entreprise", "boutique", "pharmacie", "restaurant", "garage", "école", "eglise", "dépôt", "services"],
    view: "sectorDemo"
  },
  {
    id: "lead-prep",
    title: "Préparer ma demande",
    description: "Créer un résumé prêt à envoyer à l'équipe.",
    icon: ClipboardList,
    keywords: ["contact", "whatsapp", "téléphone", "telephone", "email", "équipe", "demande", "message"],
    view: "leadPrep"
  },
  {
    id: "products-ready",
    title: "J'ai déjà mes produits",
    description: "Voir l'aide ASA pour préparer ou importer vos articles.",
    icon: FileSpreadsheet,
    keywords: ["asa", "assistant smart article", "excel", "pdf", "import", "importation", "correction", "inventaire physique", "fichier produits"],
    view: "productsReady"
  },
  {
    id: "demo",
    title: "Voir une démo",
    description: "Choisir une démonstration générale ou par module.",
    icon: PlayCircle,
    keywords: ["demo", "démo", "demonstration", "démonstration", "voir", "vidéo", "video", "formation"],
    view: "demo"
  },
  {
    id: "selling",
    title: "Commencer à vendre",
    description: "Démarrer avec SmartPOS, le panier et les reçus.",
    icon: ShoppingCart,
    keywords: ["caisse", "pos", "smartpos", "vente", "encaisser", "paiement", "reçu", "recu"],
    view: "selling"
  },
  {
    id: "objections",
    title: "Questions avant de commencer",
    description: "Réponses aux hésitations fréquentes.",
    icon: ShieldQuestion,
    keywords: ["cher", "excel", "formation", "informatique", "configurer", "commencer"],
    view: "objections"
  }
];

export const popularQuestions: AssistantCard[] = [
  {
    id: "pricing",
    title: "Voir les prix",
    description: "Comprendre les plans, modules et options.",
    icon: CircleDollarSign,
    keywords: ["prix", "tarif", "coût", "cout", "plan", "abonnement"],
    view: "pricing"
  },
  {
    id: "products",
    title: "Ajouter mes produits",
    description: "Créer des articles, prix, stock et variantes.",
    icon: PackagePlus,
    keywords: ["produit", "article", "articles", "stock", "inventaire", "importation"],
    view: "products"
  },
  {
    id: "login",
    title: "Comment se connecter",
    description: "Voir les étapes de connexion à l'espace de travail.",
    icon: LogIn,
    keywords: ["connexion", "login", "nip", "mot de passe", "identifiant"],
    view: "login"
  },
  {
    id: "contact",
    title: "Contacter l'équipe",
    description: "Obtenir de l'aide, une recommandation ou une assistance.",
    icon: MessageCircle,
    keywords: ["contact", "support", "whatsapp", "aide", "équipe"],
    view: "contact"
  }
];

export const demoOptions: DemoOption[] = [
  {
    id: "general",
    title: "Démo générale FlowSuite360",
    description: "Un aperçu complet pour comprendre la caisse, les produits, les clients, le stock et les rapports.",
    keywords: ["demo", "démo", "générale", "flowsuite360"],
    actions: [
      { label: "Voir cette démo", href: DEMO_ROUTE },
      { label: "Demander une démo personnalisée", view: "leadPrep" }
    ]
  },
  {
    id: "smartpos",
    title: "Démo SmartPOS / caisse",
    description: "Découvrez comment sélectionner des produits, encaisser, partager un reçu et suivre une session de caisse.",
    keywords: ["smartpos", "caisse", "vente", "paiement", "reçu"],
    actions: [
      { label: "Voir cette démo", href: SMARTPOS_ROUTE },
      { label: "Demander une démo personnalisée", view: "leadPrep" }
    ]
  },
  {
    id: "products",
    title: "Démo ajout de produits",
    description: "Voyez comment créer un article, définir un prix, gérer le stock initial et préparer la vente.",
    keywords: ["produit", "article", "importation", "excel"],
    actions: [
      { label: "Voir cette démo", href: DEMO_ROUTE },
      { label: "J'ai déjà mes produits", view: "productsReady" }
    ]
  },
  {
    id: "inventory",
    title: "Démo stock et inventaire",
    description: "Comprenez le suivi des quantités, les alertes et les ajustements selon votre façon de travailler.",
    keywords: ["stock", "inventaire", "dépôt", "distribution"],
    actions: [
      { label: "Voir cette démo", href: DEMO_ROUTE },
      { label: "Demander une assistance", view: "leadPrep" }
    ]
  },
  {
    id: "customers",
    title: "Démo clients et crédit",
    description: "Découvrez le suivi client, les historiques de ventes et les informations utiles pour le crédit.",
    keywords: ["client", "clients", "crédit", "dette", "paiement", "historique"],
    actions: [
      { label: "Voir cette démo", href: DEMO_ROUTE },
      { label: "Contacter l'équipe", view: "contact" }
    ]
  },
  {
    id: "reports",
    title: "Démo rapports",
    description: "Voyez comment lire les ventes, les sessions de caisse, les performances et les indicateurs clés.",
    keywords: ["rapport", "rapports", "vente", "caisse"],
    actions: [
      { label: "Voir cette démo", href: DEMO_ROUTE },
      { label: "Voir les plans", href: PLANS_ROUTE }
    ]
  },
  {
    id: "plans",
    title: "Démo plans et abonnements",
    description: "Comparez les niveaux Basic, Pro, Plus, Premium et Enterprise sans figer un prix définitif.",
    keywords: ["prix", "plan", "plans", "abonnement"],
    actions: [
      { label: "Voir les plans", href: PLANS_ROUTE },
      { label: "Quel plan me convient ?", view: "planGuide" }
    ]
  },
  {
    id: "smartArticle",
    title: "Démo Assistant Smart Article / ASA",
    description: "Découvrez comment FlowSuite360 peut aider à préparer, corriger ou importer une liste d'articles.",
    keywords: ["asa", "assistant smart article", "import", "correction", "inventaire physique", "fichier produits"],
    actions: [
      { label: "Demander une assistance d'importation", view: "leadPrep" },
      { label: "Contacter l'équipe", href: CONTACT_ROUTE }
    ]
  }
];

export const sectorOptions: SectorOption[] = [
  {
    id: "retail",
    title: "Boutique / commerce",
    description: "Idéal pour encaisser rapidement, organiser les produits et suivre les ventes.",
    modules: ["SmartPOS", "Produits", "Stock", "Clients", "Reçus", "Rapports"],
    recommendedDemo: "Démo SmartPOS / caisse",
    icon: Store,
    href: SMARTPOS_ROUTE,
    keywords: ["boutique", "commerce", "shop", "magasin", "retail"]
  },
  {
    id: "pharmacy",
    title: "Pharmacie",
    description: "Pour suivre les ventes, les produits, le stock, le contrôle et les rapports.",
    modules: ["Ventes", "Produits", "Stock", "Contrôle", "Rapports"],
    recommendedDemo: "Démo stock et inventaire",
    icon: BriefcaseBusiness,
    href: DEMO_ROUTE,
    keywords: ["pharmacie", "pharma"]
  },
  {
    id: "restaurant",
    title: "Restaurant",
    description: "Pour gérer la caisse, les menus, les paiements, les reçus et les rapports.",
    modules: ["Caisse", "Menus", "Paiements", "Reçus", "Rapports"],
    recommendedDemo: "Démo SmartPOS / caisse",
    icon: CreditCard,
    href: SMARTPOS_ROUTE,
    keywords: ["restaurant", "menu", "bar", "café"]
  },
  {
    id: "garage",
    title: "Garage",
    description: "Pour suivre les clients, services, paiements, dossiers et reçus.",
    modules: ["Clients", "Services", "Paiements", "Dossiers", "Reçus"],
    recommendedDemo: "Démo clients et crédit",
    icon: Wrench,
    href: DEMO_ROUTE,
    keywords: ["garage", "mécanique", "service"]
  },
  {
    id: "school",
    title: "École / formation",
    description: "Pour organiser inscriptions, paiements, reçus et rapports.",
    modules: ["Inscriptions", "Paiements", "Reçus", "Rapports"],
    recommendedDemo: "Démo générale FlowSuite360",
    icon: School,
    href: DEMO_ROUTE,
    keywords: ["école", "ecole", "formation", "inscription"]
  },
  {
    id: "church",
    title: "Église / organisation",
    description: "Pour suivre membres, contributions, activités et rapports.",
    modules: ["Membres", "Contributions", "Activités", "Rapports"],
    recommendedDemo: "Démo générale FlowSuite360",
    icon: Landmark,
    href: DEMO_ROUTE,
    keywords: ["église", "eglise", "organisation", "membre"]
  },
  {
    id: "distribution",
    title: "Dépôt / distribution",
    description: "Pour mieux contrôler le stock, les achats, les mouvements et l'inventaire.",
    modules: ["Stock", "Achats", "Mouvements", "Inventaire"],
    recommendedDemo: "Démo stock et inventaire",
    icon: Truck,
    href: DEMO_ROUTE,
    keywords: ["dépôt", "depot", "distribution", "inventaire"]
  },
  {
    id: "services",
    title: "Services",
    description: "Pour suivre clients, factures, paiements et interventions.",
    modules: ["Clients", "Factures", "Paiements", "Suivi"],
    recommendedDemo: "Démo clients et crédit",
    icon: Users,
    href: CONTACT_ROUTE,
    keywords: ["services", "facture", "client"]
  },
  {
    id: "enterprise",
    title: "Grande entreprise",
    description: "Pour plusieurs sites, rôles, permissions, rapports, support et besoins personnalisés.",
    modules: ["Succursales", "Rôles", "Permissions", "Rapports", "Support", "Enterprise"],
    recommendedDemo: "Démo personnalisée Enterprise",
    icon: Building2,
    href: CONTACT_ROUTE,
    keywords: ["grande entreprise", "enterprise", "succursales", "permissions", "rôles"]
  }
];

export const objections: Objection[] = [
  {
    id: "price",
    question: "C'est trop cher ?",
    answer:
      "Vous pouvez commencer avec un plan simple et évoluer progressivement. L'objectif est de réduire les pertes, gagner du temps, mieux contrôler les ventes et améliorer le suivi.",
    keywords: ["cher", "prix", "coût", "cout", "budget"]
  },
  {
    id: "excel",
    question: "Je travaille déjà avec Excel, pourquoi changer ?",
    answer:
      "Excel peut aider au début, mais FlowSuite360 permet de vendre, suivre les paiements, générer des reçus, contrôler la caisse, organiser les produits et consulter les rapports plus facilement.",
    keywords: ["excel", "fichier", "tableur"]
  },
  {
    id: "training",
    question: "Mon personnel n'est pas habitué aux logiciels.",
    answer:
      "FlowSuite360 est prévu pour un démarrage progressif. Une formation ou un accompagnement peut être proposé selon votre besoin.",
    keywords: ["personnel", "formation", "apprendre", "accompagnement"]
  },
  {
    id: "productsMissing",
    question: "Je n'ai pas encore tous mes produits.",
    answer:
      "Vous pouvez commencer avec quelques produits puis compléter progressivement. Assistant Smart Article / ASA peut aussi vous aider à préparer ou importer vos articles.",
    keywords: ["produits", "articles", "asa", "importation"]
  },
  {
    id: "computer",
    question: "Je ne suis pas fort en informatique.",
    answer:
      "FlowSuite360 est conçu pour être accompagné et progressif. Vous pouvez commencer par les fonctions essentielles, puis ajouter les modules quand vous êtes prêt.",
    keywords: ["informatique", "logiciel", "difficile"]
  },
  {
    id: "setup",
    question: "Est-ce que je suis obligé de tout configurer avant de vendre ?",
    answer:
      "Non. Vous pouvez commencer avec les éléments essentiels, puis compléter les produits, clients, stock, employés et paramètres au fur et à mesure.",
    keywords: ["configurer", "installation", "commencer", "vendre"]
  }
];

export const assistantContent: Record<Exclude<AssistantView, "home" | `demo:${DemoOptionId}` | `sector:${SectorOptionId}` | `objection:${ObjectionId}`>, AssistantContent> = {
  demo: {
    title: "Quelle démo voulez-vous voir ?",
    description:
      "Vous pouvez commencer par une démo générale, puis choisir une démonstration spécifique selon votre activité.",
    actions: [{ label: "Démo adaptée à mon activité", view: "sectorDemo" }]
  },
  pricing: {
    title: "Voir les prix",
    description:
      "FlowSuite360 propose plusieurs niveaux comme Basic, Pro, Plus, Premium et Enterprise. Le prix dépend du pays, du plan, des modules, des add-ons et de la durée choisie.",
    actions: [
      { label: "Voir les plans", href: PLANS_ROUTE },
      { label: "Quel plan me convient ?", view: "planGuide" },
      { label: "Contacter l'équipe", view: "contact" }
    ]
  },
  login: {
    title: "Comment se connecter à FlowSuite360",
    steps: [
      "Ouvrez la page de connexion FlowSuite360.",
      "Choisissez votre mode de connexion.",
      "Entrez votre téléphone, email ou identifiant selon le mode configuré.",
      "Entrez votre code, mot de passe ou NIP.",
      "Sélectionnez votre entreprise si plusieurs accès existent.",
      "Vous arrivez dans votre espace de travail.",
      "Selon votre rôle, vous verrez la caisse, les produits, les rapports, les clients ou les paramètres."
    ],
    note:
      "Si vous êtes un employé, certaines sections peuvent être limitées selon les permissions données par votre responsable.",
    actions: [
      { label: "Demander de l'aide", view: "contact" },
      { label: "Voir une démo de connexion", href: DEMO_ROUTE },
      { label: "Contacter l'équipe", href: CONTACT_ROUTE }
    ]
  },
  products: {
    title: "Comment ajouter vos produits",
    steps: [
      "Ouvrez votre espace FlowSuite360.",
      "Allez dans Articles ou Produits.",
      "Cliquez sur Ajouter un article.",
      "Entrez le nom du produit.",
      "Ajoutez le prix de vente.",
      "Ajoutez le stock initial si vous gérez le stock.",
      "Complétez la catégorie, le code-barres, le fournisseur ou les variantes si nécessaire.",
      "Enregistrez le produit.",
      "Le produit devient disponible dans la caisse."
    ],
    note:
      "Si vous avez beaucoup d'articles, FlowSuite360 peut vous aider avec l'importation ou l'Assistant Smart Article.",
    actions: [
      { label: "J'ai déjà mes produits", view: "productsReady" },
      { label: "Découvrir Assistant Smart Article", view: "demo:smartArticle" },
      { label: "Demander une assistance d'importation", view: "leadPrep" }
    ]
  },
  selling: {
    title: "Comment commencer à vendre avec SmartPOS",
    steps: [
      "Connectez-vous à FlowSuite360.",
      "Ouvrez votre entreprise.",
      "Allez dans Ma caisse ou SmartPOS.",
      "Ouvrez une session de caisse si nécessaire.",
      "Sélectionnez un produit dans la grille ou recherchez-le.",
      "Ajoutez le produit au panier.",
      "Vérifiez le total.",
      "Choisissez le mode de paiement.",
      "Validez la vente.",
      "Imprimez ou partagez le reçu.",
      "Consultez les ventes et la fermeture de caisse dans les rapports."
    ],
    note:
      "SmartPOS peut gérer les ventes, les paiements, les reçus, les remboursements, les sessions de caisse et les rapports selon les permissions activées.",
    actions: [
      { label: "Voir la démo SmartPOS", href: SMARTPOS_ROUTE },
      { label: "Voir les plans", href: PLANS_ROUTE },
      { label: "Demander une démo personnalisée", view: "leadPrep" }
    ]
  },
  customDemo: {
    title: "Demander une démo personnalisée",
    description:
      "Pour préparer une démonstration utile, l'équipe FlowSuite360 peut vous guider selon votre activité, vos modules prioritaires et votre niveau d'accompagnement souhaité.",
    steps: [
      "Quel type d'entreprise avez-vous ?",
      "Combien d'utilisateurs ou employés utiliseront FlowSuite360 ?",
      "Voulez-vous gérer la caisse, les produits, le stock, les clients, les rapports ou plusieurs succursales ?",
      "Avez-vous déjà une liste de produits ?",
      "Voulez-vous une démonstration simple ou accompagnée ?"
    ],
    actions: [
      { label: "Préparer ma demande", view: "leadPrep" },
      { label: "Aller au formulaire de démo", href: DEMO_ROUTE },
      { label: "Contacter l'équipe", href: CONTACT_ROUTE }
    ]
  },
  contact: {
    title: "Contacter l'équipe",
    description:
      "Vous pouvez contacter l'équipe FlowSuite360 pour une démo, une assistance, une recommandation de plan ou une configuration personnalisée.",
    actions: [
      { label: "Préparer ma demande", view: "leadPrep" },
      { label: "Aller au contact", href: CONTACT_ROUTE },
      { label: "Voir les plans", href: PLANS_ROUTE }
    ]
  },
  planGuide: {
    title: "Quel plan me convient ?",
    description:
      "Répondez mentalement aux questions ci-dessous, puis choisissez la recommandation qui ressemble le plus à votre situation.",
    steps: [
      "Quel type d'entreprise avez-vous ?",
      "Combien d'utilisateurs utiliseront FlowSuite360 ?",
      "Avez-vous une seule boutique ou plusieurs succursales ?",
      "Voulez-vous gérer la caisse ?",
      "Voulez-vous gérer les produits ou le stock ?",
      "Voulez-vous gérer les clients, crédits ou paiements ?",
      "Voulez-vous une formation ou un accompagnement ?"
    ],
    note:
      "Cette recommandation est indicative. Le plan final dépend du pays, des modules, des add-ons, du nombre d'utilisateurs, de la durée et de l'accompagnement souhaité.",
    actions: [
      { label: "Voir les plans", href: PLANS_ROUTE },
      { label: "Demander une démo", href: DEMO_ROUTE },
      { label: "Contacter l'équipe", view: "contact" }
    ]
  },
  sectorDemo: {
    title: "Démo adaptée à mon activité",
    description: "Choisissez votre secteur pour voir les modules et la démo recommandés.",
    actions: [{ label: "Préparer ma demande", view: "leadPrep" }]
  },
  leadPrep: {
    title: "Préparer ma demande",
    description:
      "Créez un résumé simple à copier, envoyer sur WhatsApp ou transmettre via le formulaire de contact.",
    actions: [{ label: "Aller au contact", href: CONTACT_ROUTE }]
  },
  productsReady: {
    title: "J'ai déjà mes produits",
    description:
      "FlowSuite360 peut vous aider à préparer, corriger ou importer vos articles grâce à Assistant Smart Article / ASA. C'est utile si vous avez beaucoup d'articles, un fichier désorganisé ou un inventaire physique à intégrer.",
    steps: [
      "Combien d'articles avez-vous ?",
      "Vos articles sont-ils dans Excel, PDF, ancien système ou cahier ?",
      "Avez-vous les prix ?",
      "Avez-vous les quantités ?",
      "Avez-vous les codes-barres ?",
      "Les catégories sont-elles propres ?",
      "Le fichier est-il propre ou désorganisé ?",
      "Voulez-vous un inventaire physique ?"
    ],
    actions: [
      { label: "Découvrir Assistant Smart Article", view: "demo:smartArticle" },
      { label: "Demander une assistance d'importation", view: "leadPrep" },
      { label: "Contacter l'équipe", href: CONTACT_ROUTE }
    ]
  },
  objections: {
    title: "Questions avant de commencer",
    description: "Voici les réponses aux hésitations fréquentes avant de choisir FlowSuite360.",
    actions: [
      { label: "Quel plan me convient ?", view: "planGuide" },
      { label: "Préparer ma demande", view: "leadPrep" },
      { label: "Contacter l'équipe", href: CONTACT_ROUTE }
    ]
  },
  searchFallback: {
    title: "Je n'ai pas trouvé de réponse exacte.",
    description: "Voulez-vous plutôt voir les plans, demander une démo, expliquer votre besoin, contacter l'équipe ou voir les modules disponibles ?",
    actions: [
      { label: "Voir les plans", href: PLANS_ROUTE },
      { label: "Demander une démo", href: DEMO_ROUTE },
      { label: "Expliquer mon besoin", view: "leadPrep" },
      { label: "Contacter l'équipe", href: CONTACT_ROUTE },
      { label: "Voir les modules", href: "/modules" }
    ]
  }
};

export const planRecommendations = [
  {
    name: "Basic",
    description: "Démarrage simple, petite structure et besoin essentiel.",
    keywords: ["simple", "début", "petite", "basic"]
  },
  {
    name: "Pro",
    description: "Ventes, produits, caisse, reçus et rapports.",
    keywords: ["vente", "caisse", "produits", "pro"]
  },
  {
    name: "Plus",
    description: "Plus de contrôle, clients, paiements et organisation plus complète.",
    keywords: ["clients", "paiements", "controle", "plus"]
  },
  {
    name: "Premium",
    description: "Stock, inventaire, succursales, modules avancés et accompagnement.",
    keywords: ["stock", "inventaire", "succursales", "premium"]
  },
  {
    name: "Enterprise",
    description: "Grande entreprise, plusieurs sites, rôles, intégrations et besoins personnalisés.",
    keywords: ["enterprise", "grande entreprise", "roles", "intégrations"]
  }
];

export const assistantCategories: AssistantCard[] = [
  { id: "category-demo", title: "Démos", icon: PlayCircle, keywords: ["demo", "démo"], view: "demo" },
  { id: "category-sector", title: "Secteurs", icon: Store, keywords: ["secteur", "entreprise"], view: "sectorDemo" },
  { id: "category-pricing", title: "Plans", icon: CircleDollarSign, keywords: ["prix", "plan"], view: "pricing" },
  { id: "category-products", title: "Produits / ASA", icon: Import, keywords: ["produit", "asa"], view: "productsReady" },
  { id: "category-sales", title: "SmartPOS", icon: CreditCard, keywords: ["smartpos", "caisse"], view: "selling" },
  { id: "category-contact", title: "Contact", icon: Contact, keywords: ["contact", "support"], view: "leadPrep" }
];

export const searchSynonyms: Record<string, string[]> = {
  prix: ["tarif", "coût", "cout", "abonnement", "plan", "combien", "payer"],
  caisse: ["pos", "smartpos", "vente", "encaisser", "reçu", "recu"],
  produit: ["article", "articles", "stock", "inventaire", "importation"],
  client: ["clients", "crédit", "credit", "dette", "paiement", "historique"],
  formation: ["aide", "accompagnement", "apprendre", "guide"],
  demo: ["démo", "demonstration", "démonstration", "voir", "vidéo", "video"],
  contact: ["whatsapp", "téléphone", "telephone", "email", "équipe", "support"],
  entreprise: ["boutique", "pharmacie", "restaurant", "garage", "école", "ecole", "église", "eglise", "dépôt", "depot", "services"],
  asa: ["assistant smart article", "import", "correction", "inventaire physique", "fichier produits", "excel"]
};

export const searchableItems: AssistantCard[] = [
  ...quickActions,
  ...popularQuestions,
  ...assistantCategories,
  ...demoOptions.map((option) => ({
    id: `search-demo-${option.id}`,
    title: option.title,
    description: option.description,
    icon: PlayCircle,
    keywords: option.keywords,
    view: `demo:${option.id}` as AssistantView
  })),
  ...sectorOptions.map((sector) => ({
    id: `search-sector-${sector.id}`,
    title: sector.title,
    description: sector.description,
    icon: sector.icon,
    keywords: sector.keywords,
    view: `sector:${sector.id}` as AssistantView
  })),
  ...objections.map((objection) => ({
    id: `search-objection-${objection.id}`,
    title: objection.question,
    description: objection.answer,
    icon: HelpCircle,
    keywords: objection.keywords,
    view: `objection:${objection.id}` as AssistantView
  })),
  {
    id: "search-modules",
    title: "Modules disponibles",
    description: "Voir les modules FlowSuite360 disponibles ou en préparation.",
    icon: Search,
    keywords: ["modules", "fonctionnalités", "fonctionnalites"],
    view: "demo"
  }
];
