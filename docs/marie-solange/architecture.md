# Marie-Solange V1 - Architecture

Marie-Solange V1 est une conseillère commerciale locale pour FlowSuite360. Elle fonctionne sans backend, sans API externe et sans service d'intelligence artificielle distant.

## Séparation des responsabilités

- `components/marie-solange/` contient l'interface conversationnelle.
- `lib/marie-solange/conversation-engine.ts` orchestre les réponses.
- `lib/marie-solange/intent-classifier.ts` classe les intentions localement.
- `lib/marie-solange/qualification-engine.ts` maintient les informations de préqualification.
- `lib/marie-solange/recommendation-engine.ts` produit la recommandation solution/plan.
- `lib/marie-solange/knowledge-provider.ts` expose le contrat de connaissance.
- `data/marie-solange/` contient la base locale éditable.
- `lib/marie-solange/analytics-sink.ts` prépare les interfaces futures sans stockage réel.

## Limites V1

La V1 utilise des règles déterministes. Elle ne comprend pas tout et ne doit pas prétendre apprendre entre les visiteurs. La mémoire est limitée à la session du navigateur via `sessionStorage`.

## Accessibilité

Le panneau conserve fermeture, saisie libre, envoi clavier, boutons tactiles et effacement des informations de session.
