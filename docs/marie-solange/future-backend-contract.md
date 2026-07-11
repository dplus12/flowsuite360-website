# Contrat futur backend Marie-Solange

Ce document décrit une porte d'évolution. Aucun backend réel n'est branché en V1.

## Interfaces prévues

- `ConversationRepository.saveConversationEvent()`
- `KnowledgeRepository.getKnowledgeVersion()`
- `FaqFeedbackRepository.saveUnknownQuestion()`
- `FaqFeedbackRepository.saveFaqCandidate()`
- `FaqFeedbackRepository.listFaqCandidates()`
- `FaqFeedbackRepository.approveFaqCandidate()`
- `FaqFeedbackRepository.rejectFaqCandidate()`
- `FaqFeedbackRepository.publishKnowledgeVersion()`
- `QualificationRepository.saveQualificationSummary()`
- `AnalyticsSink.saveConversationEvent()`
- `AnalyticsSink.saveUnknownQuestion()`
- `AnalyticsSink.saveQualificationSummary()`

## Pipeline futur recommandé

Question utilisateur -> classification -> réponse trouvée ou inconnue -> stockage candidat -> revue humaine -> réponse approuvée -> publication d'une nouvelle version -> Marie-Solange enrichie.

## Consentement et données personnelles

Tout stockage serveur futur devra expliquer les données collectées, obtenir le consentement requis, définir une durée de conservation, permettre la suppression et respecter les obligations applicables au pays du client.

## Sécurité et validation

Aucune réponse ne devrait être publiée automatiquement. La V3 doit garder une validation humaine, un versionnement des connaissances, un journal d'audit et une capacité de retour arrière.
