import type { PartnerProgram, PartnerRevenueExample, PublicAsaOffer, PublicCatalogVersion, PublicPlan, PublicPrice } from "./types";

export class LocalPublicControlPlaneProvider {
  getPublishedPlans(): PublicPlan[] {
    return [
      { code: "basic", label: "Basic", description: "Pour commencer avec l'essentiel.", published: true, version: "local-2026-07-10" },
      { code: "pro", label: "Pro", description: "Pour gérer les ventes et l'activité quotidienne.", published: true, version: "local-2026-07-10" },
      { code: "plus", label: "Plus", description: "Pour plus de clients, d'employés ou de contrôle.", published: true, version: "local-2026-07-10" },
      { code: "premium", label: "Premium", description: "Pour les opérations avancées et la croissance.", published: true, version: "local-2026-07-10" },
      { code: "enterprise", label: "Enterprise", description: "Pour organisations et besoins sur mesure.", published: true, version: "local-2026-07-10" }
    ];
  }

  getPublishedPrices(): PublicPrice[] {
    return [];
  }

  getPublishedAsaOffers(): PublicAsaOffer[] {
    return [
      {
        code: "asa-inventory",
        label: "Mission d'inventaire ASA",
        description: "Préparation, comptage terrain, rapport de mission et fichier structuré pour import.",
        status: "Disponible en programme pilote",
        published: true,
        version: "local-2026-07-10"
      }
    ];
  }

  getPublishedPartnerPrograms(): PartnerProgram[] {
    return [
      {
        code: "commercial-affiliate",
        title: "Affilié commercial",
        audience: "Personne ou entreprise qui recommande FlowSuite360 et facilite la mise en relation.",
        partnerDoes: "Identifie des clients, présente le besoin et accompagne les premiers échanges.",
        flowsuiteSupport: "Fournit les supports de présentation, la qualification et l'accompagnement commercial.",
        clientOffer: "Découverte, démonstration, orientation vers le module ou le plan adapté.",
        compensationModel: "Partage ou rémunération possible selon un accord partenaire validé, sans garantie automatique.",
        nextStep: "Présenter son réseau, sa région et les solutions qu'il souhaite recommander.",
        published: true,
        version: "local-2026-07-11"
      },
      {
        code: "company-affiliate",
        title: "Entreprise affiliée",
        audience: "Entreprise avec plusieurs employés ou commerciaux actifs dans une région ou un secteur.",
        partnerDoes: "Structure une équipe de recommandation ou de vente autour des offres FlowSuite360.",
        flowsuiteSupport: "Aide à cadrer le discours, les parcours, la formation et les suivis d'opportunités.",
        clientOffer: "Solutions FlowSuite360 adaptées à une région, un secteur ou un portefeuille de clients.",
        compensationModel: "Modèle commercial défini au cas par cas selon la capacité, le territoire et le contrat.",
        nextStep: "Décrire l'équipe, les zones couvertes et le volume de clients visé.",
        published: true,
        version: "local-2026-07-11"
      },
      {
        code: "asa-partner",
        title: "Partenaire ASA",
        audience: "Équipe qui réalise inventaires, comptages, collecte terrain ou préparation de données.",
        partnerDoes: "Organise les missions, compte les articles, vérifie les écarts et remet un résultat structuré.",
        flowsuiteSupport: "Fournit le cadre ASA, les supports de mission et l'accompagnement à la digitalisation.",
        clientOffer: "Inventaires ponctuels ou périodiques, préparation avant import et aide multi-sites.",
        compensationModel: "Partage de revenus possible selon mission et contrat. Les exemples publics restent estimatifs.",
        nextStep: "Présenter l'expérience terrain, la région et le type de mission ASA souhaité.",
        published: true,
        version: "local-2026-07-11"
      },
      {
        code: "reseller",
        title: "Revendeur",
        audience: "Structure capable de présenter, vendre et accompagner l'activation des solutions.",
        partnerDoes: "Prospecte, présente les offres, aide le client à choisir et suit l'activation.",
        flowsuiteSupport: "Prépare les supports, le cadrage commercial et les règles d'activation.",
        clientOffer: "Modules FlowSuite360, accompagnement de démarrage et orientation vers les plans publics.",
        compensationModel: "Conditions de revente étudiées selon l'accord et les responsabilités réelles.",
        nextStep: "Indiquer les marchés visés et l'expérience de vente logicielle ou terrain.",
        published: true,
        version: "local-2026-07-11"
      },
      {
        code: "trainer",
        title: "Formateur",
        audience: "Consultant ou organisme qui forme les dirigeants, équipes et employés.",
        partnerDoes: "Anime des sessions, explique les usages et accompagne l'adoption progressive.",
        flowsuiteSupport: "Fournit une base de contenu, des scénarios et des supports d'apprentissage.",
        clientOffer: "Formation aux modules, aux processus et aux bonnes pratiques opérationnelles.",
        compensationModel: "Rémunération de prestation ou accord partenaire à définir selon les missions.",
        nextStep: "Présenter ses domaines de formation et les publics accompagnés.",
        published: true,
        version: "local-2026-07-11"
      },
      {
        code: "integrator",
        title: "Intégrateur",
        audience: "Partenaire qui accompagne des projets structurés ou des déploiements plus complexes.",
        partnerDoes: "Cadre les besoins, prépare les données, coordonne le déploiement et suit la mise en service.",
        flowsuiteSupport: "Apporte le cadre produit, les priorités fonctionnelles et l'appui projet.",
        clientOffer: "Déploiement, configuration, migration préparée et accompagnement des équipes.",
        compensationModel: "Modèle de prestation ou partage défini selon le périmètre validé.",
        nextStep: "Décrire les projets types, secteurs couverts et compétences disponibles.",
        published: true,
        version: "local-2026-07-11"
      },
      {
        code: "sector-partner",
        title: "Partenaire sectoriel",
        audience: "Expert pharmacie, restaurant, briqueterie, distribution, construction ou autre métier.",
        partnerDoes: "Traduit les besoins terrain en parcours simples et crédibles pour son secteur.",
        flowsuiteSupport: "Aide à adapter les supports, exemples et priorités fonctionnelles.",
        clientOffer: "Conseil métier, démonstration adaptée et accompagnement ciblé.",
        compensationModel: "Accord défini selon la contribution commerciale ou opérationnelle.",
        nextStep: "Indiquer le secteur, les cas d'usage et les clients types.",
        published: true,
        version: "local-2026-07-11"
      },
      {
        code: "regional-partner",
        title: "Partenaire régional",
        audience: "Acteur souhaitant développer FlowSuite360 dans une ville, province ou pays.",
        partnerDoes: "Anime le marché local, qualifie les demandes et coordonne les opportunités.",
        flowsuiteSupport: "Fournit le cadre de collaboration et l'accompagnement commercial progressif.",
        clientOffer: "Accès local aux solutions, démonstrations et accompagnement de proximité.",
        compensationModel: "Conditions étudiées selon la région, les responsabilités et le contrat.",
        nextStep: "Présenter la zone, le réseau existant et le plan de développement.",
        published: true,
        version: "local-2026-07-11"
      }
    ];
  }

  getPublishedPartnerRevenueExamples(): PartnerRevenueExample[] {
    return [
      {
        code: "asa-small-shop",
        title: "Commerce de proximité",
        missionType: "Inventaire ponctuel ASA",
        estimatedMissionAmount: 500,
        currency: "CAD",
        illustrativePartnerRate: 20,
        estimatedPartnerRevenue: 100,
        estimatedPlatformRevenue: 400,
        notes: "Simulation pédagogique non contractuelle, hors taxes et frais éventuels.",
        region: "Canada",
        published: true,
        illustrativeOnly: true,
        version: "local-2026-07-11"
      },
      {
        code: "asa-multi-aisle",
        title: "Magasin avec plusieurs rayons",
        missionType: "Comptage et structuration des données",
        estimatedMissionAmount: 1200,
        currency: "CAD",
        illustrativePartnerRate: 25,
        estimatedPartnerRevenue: 300,
        estimatedPlatformRevenue: 900,
        notes: "Simulation pédagogique non contractuelle, taux final défini dans l'accord partenaire.",
        region: "Canada",
        published: true,
        illustrativeOnly: true,
        version: "local-2026-07-11"
      },
      {
        code: "asa-periodic",
        title: "Mission périodique multi-sites",
        missionType: "Inventaire périodique et rapport consolidé",
        estimatedMissionAmount: 2500,
        currency: "CAD",
        illustrativePartnerRate: 30,
        estimatedPartnerRevenue: 750,
        estimatedPlatformRevenue: 1750,
        notes: "Simulation pédagogique non contractuelle, prix final confirmé avant mission.",
        region: "Canada",
        published: true,
        illustrativeOnly: true,
        version: "local-2026-07-11"
      }
    ];
  }

  getPublishedModules() {
    return [];
  }

  getPublishedKnowledge() {
    return [];
  }

  getPublishedFaqs() {
    return [];
  }

  getPublishedRoutes() {
    return [];
  }

  getPublishedContentVersion(): PublicCatalogVersion {
    return { version: "local-2026-07-10", updatedAt: "2026-07-10", source: "local" };
  }
}
