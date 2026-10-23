# Points chauds — QueenBee

Questions ouvertes identifiées pendant la préparation du mur. **Aucune réponse n’est présentée comme une décision validée par BeeAfrica.**

| Priorité | Question | Responsable de clarification | Enjeu | Suite prévue |
|---|---|---|---|---|
| P1 | Critère de risque déclenchant AlerteLevée | BeeAfrica / expert apicole | Seuils différents selon pays, saison ou type de risque ? | ADR seuils de risque |
| P1 | Escalade à 48 h | BeeAfrica / coordinateur | 48 h calendaires ? point de départ ? week-end ? | ADR politique d’escalade |
| P1 | Alertes terrain hors ligne | Équipe DEV / BeeAfrica | Push immédiat, synchronisation au prochain accès, file locale ? | ADR diffusion hors ligne |
| P1 | Doublons de mesures LoRaWAN | Équipe collecte | Clé de déduplication ruche+timestamp suffisante ? | ADR idempotence |
| P1 | Droits par site | BeeAfrica / administrateur | Un coordinateur peut-il agir sur plusieurs sites ? | ADR autorisations |
| P2 | Écart de rendement | BeeAfrica / coordinateur | Seuil 20 % fixe ou paramétrable ? | Règle métier à confirmer |
| P2 | Conflit de synchronisation inspection | Équipe terrain | Quelle version gagne en cas de modifications concurrentes ? | ADR synchronisation |
| P2 | Ruche déplacée | BeeAfrica / terrain | Comment distinguer transhumance déclarée et vol ? | ADR sécurité GPS |
| P2 | Retard des mesures | BeeAfrica / Data | Quand une mesure ancienne peut-elle lever une alerte ? | ADR temporalité |
| P2 | Propriété des notifications | Équipe DEV | Contexte dédié ou adaptateur du contexte Santé ? | Découpage à confirmer |
| P2 | Définition d’une alerte technique | Supervision | Doit-elle apparaître dans les listes d’alertes métier ? | Glossaire / frontière |
| P2 | Validation des récoltes | BeeAfrica / coordinateur | Peut-on corriger une récolte déjà validée ? | Invariant de Récolte |

## Vers les ADR de la séance 6

Trois décisions prioritaires : (1) escalade 48 h, (2) diffusion des alertes hors ligne, (3) déduplication et retard des mesures. Le dossier `adr/` reste réservé à la séance 6.
