# Glossaire — QueenBee

Binôme : Lokmane Salakdji · MAMAH DJEDJE Faryd. Définitions de travail à valider avec BeeAfrica.

| Terme | Définition retenue | Contexte | Nom dans le code | Source |
|---|---|---|---|---|
| Site | Emplacement géographique regroupant des ruches et une passerelle | Référentiel | Site | UC-AD01 / UC-T02 |
| Site | Périmètre de droits et de consultation d’un utilisateur | Accès et identité | SiteScope | UC-AD01 |
| Ruche | Colonie suivie par BeeAfrica, identifiée et rattachée à un site | Référentiel | Ruche | UC-A01 |
| Ruche | Unité de calcul du risque à partir des mesures et prédictions | Santé des colonies | ColonieSuivie | UC-A02 |
| Passerelle | Équipement relais LoRaWAN d’un site | Collecte | Passerelle | UC-T02 |
| Mesure | Observation brute émise par un capteur | Collecte | TrameMesure | UC-T02 |
| Mesure validée | Observation contrôlée et acceptée pour diffusion | Collecte | MesureValidee | UC-CY02 |
| Prédiction | Estimation d’un risque ou d’un rendement futur | Santé des colonies | Prediction | UC-A02 / UC-A03 |
| Alerte | Signal métier de risque sur une colonie, à prendre en charge | Santé des colonies | Alerte | UC-A02 |
| Alerte | Signal d’exploitation concernant une passerelle ou un réseau | Supervision | AlerteTechnique | UC-CY01 / UC-CY03 |
| Prise en charge | Acceptation de la responsabilité de traiter une alerte | Santé des colonies | priseEnCharge | UC-A02 |
| Escalade | Transmission d’une alerte non prise en charge au coordinateur après 48 h | Santé des colonies | escalader | UC-A02 |
| Inspection | Constat terrain sur une ruche, y compris hors ligne | Interventions | Inspection | UC-A01 |
| Visite | Intervention planifiée et assignée à une apicultrice | Interventions | Visite | UC-C01 |
| Récolte | Quantité de miel déclarée pour une ruche à une date | Production | Recolte | UC-A03 |
| Validation | Acceptation définitive d’une récolte par le coordinateur | Production | validerRecolte | UC-C02 |
| Validation | Contrôle de qualité d’une mesure reçue | Collecte | validerMesure | UC-CY02 |
| Écart de rendement | Différence entre quantité déclarée et rendement prédit | Production | ecartRendement | UC-A03 / UC-C02 |
| Mode dégradé | Continuité locale quand la passerelle perd le réseau | Supervision | ModeDegrade | UC-CY01 |
| Synchronisation | Transfert différé des inspections ou mesures vers le central | Collecte / Interventions | Synchronisation | UC-A01 / UC-T02 |
| Incident | Événement de sécurité ou de disponibilité nécessitant un suivi | Supervision | Incident | UC-CY01 à UC-CY04 |
| Rapport d’impact | Document synthétisant les indicateurs pour un bailleur | Impact | RapportImpact | UC-G02 |
| Coopérative | Organisation regroupant des apicultrices et destinataire de notifications | Référentiel / Production | Cooperative | UC-A03 |
| Rôle | Ensemble de permissions affectées à un compte selon un périmètre | Accès et identité | Role | UC-AD01 |
| Bailleur | Destinataire externe du rapport d’impact | Impact | Bailleur | UC-G02 |

## Ambiguïtés et frontières

- **Alerte** a deux sens : risque sur une colonie (Santé des colonies) ou incident de réseau (Supervision). Les règles, acteurs et cycles de vie diffèrent : deux contextes.
- **Site** désigne soit un lieu physique (Référentiel), soit un périmètre d’autorisation (Accès et identité).
- **Validation** concerne soit la qualité des mesures (Collecte), soit la décision du coordinateur sur une récolte (Production).
