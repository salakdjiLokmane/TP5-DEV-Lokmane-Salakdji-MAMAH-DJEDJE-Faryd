# Bounded contexts — QueenBee

## Proposition de découpage : 8 contextes

| Contexte | Type | Responsabilité et langage | Agrégats | Événements publiés | Événements consommés | UC sources |
|---|---|---|---|---|---|---|
| **Référentiel apicole** | support | Référencer les sites, ruches et coopératives ; « ruche » = objet physique | Ruche, Site, Coopérative | RucheEnregistrée, SiteRéférencé | RucheRéférencée (par Santé et Production) | UC-AD01, UC-A01, UC-T02 |
| **Accès et identité** | générique | Gérer les comptes, rôles, droits par site et authentification | CompteUtilisateur, Role | CompteCréé, RôleAttribué | SiteRéférencé (Référentiel) | UC-AD01, UC-T01 |
| **Collecte et intégrité** | support | Recevoir, dédupliquer et valider les mesures, gérer la transmission différée | Passerelle, Mesure | MesureValidée.v1, TrameRejetée, SynchronisationRétablie | RucheEnregistrée, PasserelleMuette | UC-T02, UC-CY02 |
| **Santé des colonies** | cœur | Prédire les risques et gérer le cycle de vie des alertes métier | Alerte, Prediction | AlerteLevée, AlerteEscaladée, AlerteRésolue | MesureValidée.v1, InspectionSynchronisée | UC-A02, UC-C01 |
| **Interventions terrain** | cœur | Planifier les visites et enregistrer les inspections terrain hors ligne | Visite, Inspection | VisitePlanifiée, InspectionSynchronisée, AnomalieConstatée | AlerteLevée, AlerteEscaladée | UC-A01, UC-C01 |
| **Production et récoltes** | cœur | Déclarer, comparer et valider les récoltes de miel | Recolte | RécolteDéclarée, RécolteValidée, ÉcartDeRendementCalculé | MesureValidée.v1, PredictionRendement | UC-A03, UC-C02 |
| **Supervision et sécurité** | support | Surveiller la disponibilité, les anomalies radio et les incidents | Incident, EtatPasserelle | PasserelleMuette, IncidentJournalisé, ModeDégradéActivé | TrameRejetée, BattementDeCoeur | UC-CY01 à UC-CY04 |
| **Impact et reporting** | support | Consolider les indicateurs et publier les rapports aux bailleurs | RapportImpact | RapportGénéré, RapportEnvoyé | RécolteValidée, AlerteEscaladée, MesureValidée.v1 | UC-G01, UC-G02 |

## Pourquoi ces frontières ?

1. **Santé des colonies ≠ Supervision** : une alerte métier porte sur une ruche et peut être prise en charge / résolue ; une alerte technique porte sur la connectivité ou la sécurité.
2. **Collecte ≠ Santé** : une mesure valide respecte des règles physiques et d’intégrité ; une alerte dépend de seuils et de modèles prédictifs.
3. **Production ≠ Impact** : la récolte est une déclaration vérifiable ; le rapport est une synthèse consolidée multi-sites.
4. **Interventions ≠ Santé** : une inspection documente le terrain ; une alerte exprime un risque, même sans visite.
5. **Référentiel ≠ Accès** : un site physique est un objet métier, tandis qu’un périmètre de site est une règle d’autorisation.

## Agrégats et événements

Les invariants des dix agrégats sont consignés dans [le mur détaillé](event-storming/mur-complet.md). Les noms d’événements sont des propositions de langage publié : leur schéma et leur versionnement seront validés avant implémentation.
