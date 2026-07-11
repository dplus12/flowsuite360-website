# Gestion des connaissances Marie-Solange

## Mode actuel

La connaissance est locale dans `data/marie-solange/`. Une modification de FAQ, secteur, objection, plan ou route nécessite un changement de fichier et un rebuild du site.

## Mode futur

Un backend pourra alimenter un `RemoteKnowledgeProvider` avec :

- version de connaissance;
- contenu approuvé;
- cache;
- fallback local;
- publication contrôlée;
- invalidation;
- rollback.

## Éviter un rebuild à chaque FAQ

Le futur centre d'administration pourra enregistrer des réponses candidates, les faire valider, puis publier une nouvelle version de connaissance consommée par le provider distant. Le site devra conserver une version locale de secours.

## Validation humaine

Toute réponse nouvelle ou modifiée doit passer par une revue humaine avant publication. Les questions sans réponse peuvent devenir des candidates, mais elles ne doivent pas être publiées automatiquement.
