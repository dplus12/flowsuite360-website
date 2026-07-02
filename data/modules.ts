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

export type ModuleStatus =
  | "Disponible"
  | "Bêta avancée"
  | "Inclus avec SmartPOS"
  | "Bientôt disponible"
  | "En préparation"
  | "Bêta privée"
  | "En développement"
  | "Sur demande"
  | "Disponible bientôt";

export type FlowModule = {
  slug: string;
  name: string;
  status: ModuleStatus;
  category: "Disponible" | "Bêta" | "Bientôt" | "Métier";
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
    description: "Vente, panier, paiement, caisse, crédit client, paiement partiel, reçus et historique des ventes.",
    color: "brand",
    icon: CreditCard,
    logoSrc: "/branding/mvp/smartpos.png",
    href: "/modules/smartpos"
  },
  {
    slug: "gestion-caisse",
    name: "Gestion de caisse",
    status: "Inclus avec SmartPOS",
    category: "Disponible",
    description: "Sessions de caisse, cash control, entrées/sorties, dépôts banque et rapports de fermeture.",
    color: "growth",
    icon: Banknote,
    href: "/modules"
  },
  {
    slug: "gestion-clients",
    name: "Gestion clients",
    status: "Inclus avec SmartPOS",
    category: "Disponible",
    description: "Clients, crédit, dettes, paiements partiels, paiements clients et historique.",
    color: "skyflow",
    icon: Users,
    href: "/modules"
  },
  {
    slug: "gestion-stock",
    name: "Gestion du stock",
    status: "Disponible",
    category: "Disponible",
    description: "Produits, catégories, stocks, seuils, alertes et mouvements.",
    color: "passion",
    icon: Boxes,
    href: "/modules"
  },
  {
    slug: "brickflow",
    name: "BrickFlow",
    status: "Disponible",
    category: "Disponible",
    description: "Gestion de briqueterie : matières premières, recettes, production, coûts, ventes et livraison.",
    color: "midnight",
    icon: BrickWall,
    logoSrc: "/branding/mvp/brickflow.png",
    href: "/modules/brickflow"
  },
  {
    slug: "restoflow",
    name: "RestaurantFlow",
    status: "Disponible",
    category: "Disponible",
    description: "POS restaurant, menus, tables, recettes, ingrédients et fournisseurs.",
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
    description: "Boutiques, dépôts, produits, inventaire, ventes et clients.",
    color: "brand",
    icon: ShoppingBag,
    logoSrc: "/branding/mvp/shopflow.png",
    href: "/modules"
  },
  {
    slug: "production",
    name: "Gestion de production",
    status: "Bientôt disponible",
    category: "Métier",
    description: "Recettes, matières premières, coûts de production et produits finis.",
    color: "growth",
    icon: Factory,
    href: "/modules"
  },
  {
    slug: "pharmaflow",
    name: "PharmaFlow de base",
    status: "Disponible",
    category: "Disponible",
    description: "Produits, stock, lots, expirations et ventes pour pharmacies.",
    color: "skyflow",
    icon: PackageCheck,
    logoSrc: "/branding/mvp/pharmaflow.png",
    href: "/modules"
  },
  {
    slug: "churchflow",
    name: "ChurchFlow",
    status: "En préparation",
    category: "Métier",
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
    category: "Métier",
    description: "Clients, véhicules, réparations, pièces, services et facturation.",
    color: "passion",
    icon: Truck,
    logoSrc: "/branding/mvp/garageflow.png",
    href: "/modules"
  },
  {
    slug: "depotflow",
    name: "DepotFlow",
    status: "Disponible",
    category: "Disponible",
    description: "Gestion de dépôt, gros, livraisons, produits, stock et mouvements.",
    color: "growth",
    icon: Boxes,
    logoSrc: "/branding/mvp/depotflow.png",
    href: "/modules"
  },
  {
    slug: "quincaillerieflow",
    name: "QuincaillerieFlow",
    status: "Disponible",
    category: "Disponible",
    description: "Articles, rayons, stock, ventes et suivi client pour quincailleries.",
    color: "brand",
    icon: ShoppingBag,
    logoSrc: "/branding/mvp/quincaillerieflow.png",
    href: "/modules"
  },
  {
    slug: "livraisons",
    name: "Gestion des livraisons",
    status: "En développement",
    category: "Bientôt",
    description: "Livraisons, frais, chauffeurs, suivi et coûts logistiques.",
    color: "skyflow",
    icon: Truck,
    href: "/modules"
  },
  {
    slug: "paie-equipe",
    name: "Paie et équipe",
    status: "Sur demande",
    category: "Bientôt",
    description: "Paie, employés, présence, retenues et rapports.",
    color: "midnight",
    icon: ClipboardList,
    href: "/modules"
  }
];

export const homeModules = modules.slice(0, 8);

export const solutionCards = [
  { title: "Vendre", icon: ShoppingBag, text: "Créez des paniers clairs et encaissez sans friction." },
  { title: "Encaisser", icon: HandCoins, text: "Cash, paiements partiels et crédit client dans un même flux." },
  { title: "Contrôler la caisse", icon: Banknote, text: "Ouvrez, suivez et fermez vos sessions avec confiance." },
  { title: "Gérer les clients", icon: Users, text: "Suivez les dettes, les paiements et l’historique client." },
  { title: "Suivre le stock", icon: PackageCheck, text: "Gardez une vue nette sur les produits, seuils et mouvements." },
  { title: "Produire", icon: Factory, text: "Préparez vos recettes, coûts et productions terrain." },
  { title: "Analyser", icon: ClipboardList, text: "Comprenez vos ventes, votre caisse et vos résultats." }
];
