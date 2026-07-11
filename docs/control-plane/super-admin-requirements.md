# Super Admin - exigences Control Plane public

Le Super Admin devra gérer les contenus publics lus par le site FlowSuite360 sans obliger un redéploiement à chaque FAQ, prix, statut, parcours partenaire ou connaissance Marie-Solange.

## Périmètre à gérer

1. Plans publics.
2. Prix publics.
3. Prix régionaux.
4. Offres ASA.
5. Statuts des modules.
6. FAQ officielles.
7. Questions inconnues.
8. Réponses candidates.
9. Approbation humaine.
10. Versions de connaissance.
11. Publication.
12. Rollback.
13. Prospects.
14. Demandes de démonstration.
15. Contacts.
16. Partenariats.
17. Organisations.
18. Statistiques anonymisées.
19. Consentements.
20. Audit.
21. Permissions.
22. Historique.
23. Sécurité.
24. Cache et invalidation du site.
25. Simulations de revenus partenaires.
26. Centre de formation Marie-Solange.

## Workflow attendu

Brouillon -> Révision -> Approuvé -> Publié -> Lu par le site -> Version précédente conservée -> Rollback possible.

## Règles importantes

- Aucun prix ne doit être publié sans statut `published`.
- Les réponses candidates doivent être relues avant publication.
- Les questions inconnues peuvent aider à enrichir Marie-Solange, mais jamais automatiquement.
- Les données personnelles exigent consentement, durée de conservation, suppression possible et journal d'audit.
- Le site doit garder un fallback local si le Control Plane public est indisponible.

## Centre de formation Marie-Solange

Le Super Admin devra permettre de créer, relire, approuver, publier et retirer les connaissances utilisées par Marie-Solange. Le website public ne doit lire que les contenus approuvés, publiés et rattachés à une version active.

### Objets à gérer

1. Sujets.
2. Leçons.
3. Réponses approuvées.
4. Questions inconnues.
5. Préoccupations fréquentes.
6. Objections.
7. Secteurs.
8. Plans.
9. Modules.
10. ASA.
11. Partenaires.
12. Simulations de revenus.
13. Prix.
14. Publications.
15. Versions.
16. Rollback.
17. Audit.
18. Permissions.
19. Recherche.
20. Brouillons.
21. Approbations.
22. Aperçu de réponse.
23. Test conversationnel avant publication.

### Contrats website préparés

- `MarieSolangeTrainingContent`
- `MarieSolangeTopic`
- `MarieSolangeLesson`
- `MarieSolangeApprovedAnswer`
- `MarieSolangeUnknownQuestion`
- `MarieSolangeKnowledgeVersion`
- `MarieSolangePublication`
- `UnknownQuestionEvent`

Chaque leçon doit pouvoir contenir un titre, un thème, un contenu, une formulation courte, une formulation détaillée, des exemples, des mots-clés, des secteurs, des plans, des modules, des liens, un statut, un auteur, un validateur, une version et une date de publication.

### Questions inconnues

Workflow futur :

1. Le visiteur pose une question.
2. Marie-Solange répond si une réponse approuvée existe.
3. Si la réponse est inconnue, la question est classée.
4. La question remonte au Super Admin.
5. Le concepteur l'examine.
6. Une leçon ou réponse approuvée est ajoutée.
7. Un validateur relit.
8. Une nouvelle version est publiée.
9. Marie-Solange utilise uniquement la connaissance approuvée.

Le visiteur ne doit jamais enseigner directement Marie-Solange. Le website prépare seulement un événement dormant avec la question, une version normalisée, un contexte réduit, les données personnelles retirées, un statut et un lien éventuel vers une réponse approuvée.

### Rôles proposés

- Master Super Admin.
- Administrateur contenu.
- Responsable commercial.
- Responsable ASA.
- Relecteur.
- Analyste lecture seule.

Ces rôles ne doivent pas être codés dans le website public. Ils servent à guider la prochaine mission dans le dépôt principal.

### ASA et revenus partenaires

Le Super Admin devra gérer les offres ASA, leur statut public, les parcours partenaires, les simulations de revenus et les mentions légales associées. Toute simulation doit rester marquée comme illustrative, estimative, non contractuelle, hors taxes et frais éventuels. Le taux final et le prix final doivent être confirmés dans l'accord partenaire ou avant mission.
