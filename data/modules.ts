import {
  Banknote,
  Boxes,
  BrickWall,
  ChefHat,
  ClipboardList,
  CreditCard,
  Factory,
  HandCoins,
  PackageCheck,
  ShoppingBag,
  Truck,
  Users
} from "lucide-react";

export type ModuleStatus = "Disponible" | "Disponible en programme pilote" | "En préparation" | "Sur demande";

export type FlowModule = {
  slug: string;
  name: string;
  status: ModuleStatus;
  category: "Disponible" | "Pilote" | "Préparation" | "Sur demande";
  description: string;
  color: "brand" | "passion" | "growth" | "skyflow" | "midnight";
  icon: typeof CreditCard;
  logoSrc?: string;
  href: string;
};

export const modules: FlowModule[] = [
  {
    slug: "smartpos",
    name: "SmartPOS",
    status: "Disponible",
    category: "Disponible",
    description: "Vente, panier, paiement cash, crédit client, paiement partiel, reçus et historique des ventes.",
    color: "brand",
    icon: CreditCard,
    logoSrc: "/branding/mvp/smartpos.png",
    href: "/modules/smartpos"
  },
  {
    slug: "gestion-caisse",
    name: "Gestion de caisse",
    status: "Disponible",
    category: "Disponible",
    description: "Sessions de caisse, entrées et sorties, contrôle quotidien et rapports de fermeture.",
    color: "growth",
    icon: Banknote,
    href: "/modules/smartpos"
  },
  {
    slug: "gestion-clients",
    name: "Gestion clients",
    status: "Disponible",
    category: "Disponible",
    description: "Clients, crédit, dettes, paiements partiels et historique.",
    color: "skyflow",
    icon: Users,
    href: "/modules/smartpos"
  },
  {
    slug: "gestion-stock",
    name: "Gestion du stock",
    status: "Disponible",
    category: "Disponible",
    description: "Produits, catégories, stocks, seuils, alertes et mouvements.",
    color: "passion",
    icon: Boxes,
    href: "/modules/smartpos"
  },
  {
    slug: "brickflow",
    name: "BrickFlow",
    status: "Disponible en programme pilote",
    category: "Pilote",
    description: "Gestion de briqueterie : matières premières, recettes, production, coûts, ventes et livraison.",
    color: "midnight",
    icon: BrickWall,
    logoSrc: "/branding/mvp/brickflow.png",
    href: "/modules/brickflow"
  },
  {
    slug: "restaurantflow",
    name: "RestaurantFlow",
    status: "En préparation",
    category: "Préparation",
    description: "Parcours restaurant autour de la caisse, menus, commandes et suivi quotidien.",
    color: "passion",
    icon: ChefHat,
    logoSrc: "/branding/mvp/restaurantflow.png",
    href: "/modules"
  },
  {
    slug: "shopflow",
    name: "ShopFlow",
    status: "Disponible",
    category: "Disponible",
    description: "Boutiques, produits, inventaire, ventes et clients avec SmartPOS comme point de départ.",
    color: "brand",
    icon: ShoppingBag,
    logoSrc: "/branding/mvp/shopflow.png",
    href: "/modules/smartpos"
  },
  {
    slug: "production",
    name: "Gestion de production",
    status: "En préparation",
    category: "Préparation",
    description: "Recettes, matières premières, coûts de production et produits finis.",
    color: "growth",
    icon: Factory,
    href: "/modules"
  },
  {
    slug: "pharmaflow",
    name: "PharmaFlow",
    status: "En préparation",
    category: "Préparation",
    description: "Parcours pharmacie autour des produits, du stock, des lots, des expirations et des ventes.",
    color: "skyflow",
    icon: PackageCheck,
    logoSrc: "/branding/mvp/pharmaflow.png",
    href: "/modules"
  },
  {
    slug: "churchflow",
    name: "ChurchFlow",
    status: "En préparation",
    category: "Préparation",
    description: "Membres, dons, activités, finances et organisation interne.",
    color: "midnight",
    icon: Users,
    logoSrc: "/branding/mvp/churchflow.png",
    href: "/modules"
  },
  {
    slug: "garageflow",
    name: "GarageFlow",
    status: "En préparation",
    category: "Préparation",
    description: "Clients, véhicules, réparations, pièces, services et facturation.",
    color: "passion",
    icon: Truck,
    logoSrc: "/branding/mvp/garageflow.png",
    href: "/modules"
  },
  {
    slug: "depotflow",
    name: "DepotFlow",
    status: "Sur demande",
    category: "Sur demande",
    description: "Gestion de dépôt, ventes en gros, livraisons, produits, stock et mouvements.",
    color: "growth",
    icon: Boxes,
    logoSrc: "/branding/mvp/depotflow.png",
    href: "/contact"
  },
  {
    slug: "quincaillerieflow",
    name: "QuincaillerieFlow",
    status: "Sur demande",
    category: "Sur demande",
    description: "Articles, rayons, stock, ventes et suivi client pour quincailleries.",
    color: "brand",
    icon: ShoppingBag,
    logoSrc: "/branding/mvp/quincaillerieflow.png",
    href: "/contact"
  },
  {
    slug: "livraisons",
    name: "Gestion des livraisons",
    status: "En préparation",
    category: "Préparation",
    description: "Livraisons, frais, chauffeurs, suivi et coûts logistiques.",
    color: "skyflow",
    icon: Truck,
    href: "/modules"
  },
  {
    slug: "paie-equipe",
    name: "HR & Paie",
    status: "Sur demande",
    category: "Sur demande",
    description: "Employés, présence, paie et rapports selon le contexte de l'organisation.",
    color: "midnight",
    icon: ClipboardList,
    href: "/contact"
  }
];

export const homeModules = modules.slice(0, 8);

export const solutionCards = [
  { title: "Vendre", icon: ShoppingBag, text: "Créez des paniers clairs et encaissez sans friction." },
  { title: "Encaisser", icon: HandCoins, text: "Cash, paiements partiels et crédit client dans un même flux." },
  { title: "Contrôler la caisse", icon: Banknote, text: "Ouvrez, suivez et fermez vos sessions avec confiance." },
  { title: "Gérer les clients", icon: Users, text: "Suivez les dettes, les paiements et l'historique client." },
  { title: "Suivre le stock", icon: PackageCheck, text: "Gardez une vue nette sur les produits, seuils et mouvements." },
  { title: "Produire", icon: Factory, text: "Préparez vos recettes, coûts et productions terrain." },
  { title: "Analyser", icon: ClipboardList, text: "Comprenez vos ventes, votre caisse et vos résultats." }
];
