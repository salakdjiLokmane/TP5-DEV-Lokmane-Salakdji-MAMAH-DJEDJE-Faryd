# Mur Event Storming — QueenBee (proposition numérique du binôme)

> **Statut : proposition à confronter au mur collectif.** Ce fichier et son export image ne constituent pas une photographie d’un atelier effectivement réalisé avec d’autres binômes.

## Légende

- 🟧 Événement : fait métier au passé ; 🟦 Commande : intention à l’impératif ; 🟨 Acteur/agrégat ; 🟪 Politique ; 🩷 Système externe ; 🟥 Point chaud.
- La lecture est chronologique, de la préparation de saison au reporting ; les incidents et la santé des colonies peuvent survenir en parallèle.

## Chronologie — 56 événements avec leurs causes

| # | Phase / contexte | Événement métier | Commande ou cause | Acteur / système |
|---:|---|---|---|---|
| 01 | Avant la saison / Référentiel | **Site référencé** | Créer un site | Administrateur |
| 02 | Avant la saison / Référentiel | **Coopérative rattachée** | Rattacher une coopérative | Administrateur |
| 03 | Avant la saison / Référentiel | **Ruche enregistrée** | Enregistrer une ruche | Administrateur |
| 04 | Avant la saison / Référentiel | **Ruche affectée à un site** | Affecter une ruche | Administrateur |
| 05 | Avant la saison / Référentiel | **Passerelle associée** | Associer une passerelle | Administrateur |
| 06 | Avant la saison / Référentiel | **Compte apicultrice créé** | Créer un compte | Administrateur |
| 07 | Avant la saison / Référentiel | **Rôle attribué** | Attribuer un rôle | Administrateur |
| 08 | Avant la saison / Référentiel | **Accès authentifié** | S’authentifier | Apicultrice |
| 09 | En continu / Collecte | **Mesure captée** | Mesurer le poids | Capteur |
| 10 | En continu / Collecte | **Seuil physique dépassé** | Détecter un dépassement | Capteur |
| 11 | En continu / Collecte | **Trame transmise** | Transmettre une trame | Passerelle LoRaWAN |
| 12 | En continu / Collecte | **Mesure reçue** | Recevoir une mesure | Passerelle LoRaWAN |
| 13 | En continu / Collecte | **Mesure validée** | Valider une mesure | Collecte |
| 14 | En continu / Collecte | **Trame rejouée détectée** | Détecter un rejeu | Collecte |
| 15 | En continu / Collecte | **Trame rejetée** | Rejeter une trame | Collecte |
| 16 | En continu / Collecte | **Mesure différée synchronisée** | Synchroniser les mesures | Passerelle LoRaWAN |
| 17 | Risque détecté / Santé des colonies | **Prédiction actualisée** | Calculer le risque | Modèle de prédiction |
| 18 | Risque détecté / Santé des colonies | **Risque d’essaimage détecté** | Évaluer un risque | Modèle de prédiction |
| 19 | Risque détecté / Santé des colonies | **Alerte levée** | Lever une alerte | Modèle de prédiction |
| 20 | Risque détecté / Santé des colonies | **Apicultrice notifiée** | Notifier une apicultrice | Politique notification |
| 21 | Risque détecté / Santé des colonies | **Alerte prise en charge** | Prendre en charge une alerte | Apicultrice |
| 22 | Risque détecté / Santé des colonies | **Alerte escaladée** | Escalader après 48 h | Politique 48 h |
| 23 | Risque détecté / Santé des colonies | **Coordinateur notifié** | Notifier le coordinateur | Politique escalade |
| 24 | Risque détecté / Santé des colonies | **Alerte résolue** | Résoudre après inspection | Apicultrice |
| 25 | Intervention terrain / Interventions | **Visite planifiée** | Planifier une visite | Coordinateur |
| 26 | Intervention terrain / Interventions | **Visite assignée** | Assigner une visite | Coordinateur |
| 27 | Intervention terrain / Interventions | **Inspection commencée** | Démarrer une inspection | Apicultrice |
| 28 | Intervention terrain / Interventions | **Inspection enregistrée hors ligne** | Enregistrer une inspection | Apicultrice |
| 29 | Intervention terrain / Interventions | **Inspection synchronisée** | Synchroniser une inspection | Application terrain |
| 30 | Intervention terrain / Interventions | **Anomalie constatée** | Signaler une anomalie | Apicultrice |
| 31 | Intervention terrain / Interventions | **Inspection validée** | Valider une inspection | Coordinateur |
| 32 | Intervention terrain / Interventions | **Visite clôturée** | Clôturer une visite | Coordinateur |
| 33 | À la récolte / Production | **Récolte déclarée** | Déclarer une récolte | Apicultrice |
| 34 | À la récolte / Production | **Rendement prédit consulté** | Comparer au prévisionnel | Production |
| 35 | À la récolte / Production | **Écart de rendement calculé** | Calculer un écart | Production |
| 36 | À la récolte / Production | **Coopérative notifiée** | Notifier la coopérative | Politique écart |
| 37 | À la récolte / Production | **Récolte mise en attente** | Mettre en attente | Production |
| 38 | À la récolte / Production | **Récolte validée** | Valider une récolte | Coordinateur |
| 39 | À la récolte / Production | **Écart mis en investigation** | Ouvrir une investigation | Coordinateur |
| 40 | À la récolte / Production | **Récolte consolidée** | Consolider les récoltes | Production |
| 41 | Incidents / Supervision | **Battement de cœur manqué** | Surveiller la passerelle | Supervision |
| 42 | Incidents / Supervision | **Passerelle déclarée muette** | Détecter une panne | Supervision |
| 43 | Incidents / Supervision | **Mode dégradé activé** | Activer le cache local | Politique 15 min |
| 44 | Incidents / Supervision | **Connexion rétablie** | Rétablir la connexion | Passerelle LoRaWAN |
| 45 | Incidents / Supervision | **Synchronisation rétablie** | Resynchroniser les mesures | Supervision |
| 46 | Incidents / Supervision | **Brouillage détecté** | Analyser les pertes | Supervision |
| 47 | Incidents / Supervision | **Déplacement suspect détecté** | Vérifier la position | Supervision |
| 48 | Incidents / Supervision | **Incident de sécurité journalisé** | Journaliser un incident | Supervision |
| 49 | Fin de période / Impact | **Indicateurs consolidés** | Consolider les indicateurs | Gestionnaire |
| 50 | Fin de période / Impact | **Couverture réseau calculée** | Calculer la couverture | Impact |
| 51 | Fin de période / Impact | **Colonies à risque comptées** | Compter les colonies | Impact |
| 52 | Fin de période / Impact | **Rendement multi-sites comparé** | Comparer les rendements | Gestionnaire |
| 53 | Fin de période / Impact | **Période de rapport sélectionnée** | Choisir une période | Gestionnaire |
| 54 | Fin de période / Impact | **Rapport d’impact généré** | Générer le rapport | Gestionnaire |
| 55 | Fin de période / Impact | **Rapport téléchargé** | Télécharger le rapport | Gestionnaire |
| 56 | Fin de période / Impact | **Rapport envoyé au bailleur** | Envoyer le rapport | Gestionnaire |

## Politiques (post-it violets)

1. Quand une **Mesure validée** est publiée, alors **actualiser les prédictions** de risque et les indicateurs.
2. Quand un **Risque détecté** dépasse le seuil métier, alors **lever une alerte** et notifier l’apicultrice.
3. Si une **Alerte levée** n’est pas prise en charge après **48 h**, alors **escalader l’alerte** et notifier le coordinateur.
4. Quand une **Inspection synchronisée** signale une anomalie, alors **notifier le coordinateur**.
5. Quand une **Récolte déclarée** présente un écart important, alors **notifier la coopérative et le coordinateur**.
6. Si une passerelle n’émet plus de battement de cœur pendant **15 min**, alors **activer le mode dégradé**.
7. Quand une **Trame rejouée** ou hors plage est détectée, alors **rejeter et journaliser** la trame.
8. Quand la connexion est rétablie, alors **synchroniser les mesures différées**.

## Agrégats (post-it jaunes) et invariants

| Agrégat | Contexte | Invariant 1 | Invariant 2 |
|---|---|---|---|
| Ruche | Référentiel | Identifiant unique par ruche | Rattachée à un seul site actif à un instant donné |
| Passerelle | Collecte | Identifiant technique unique | Toute trame est attribuée à une passerelle connue |
| Mesure | Collecte | Une mesure validée respecte les plages définies | Une paire (ruche, instant) ne peut être acceptée deux fois |
| Alerte | Santé des colonies | Type de risque connu, confiance entre 0 et 1 | Résolution uniquement après prise en charge ; escalade à partir de 48 h |
| Visite | Interventions | Une visite a une ruche et un responsable | Une visite clôturée ne peut être réassignée |
| Inspection | Interventions | Une inspection est liée à une ruche connue | Une inspection synchronisée conserve son identifiant local |
| Récolte | Production | Quantité de miel strictement positive | Une récolte validée ne peut plus être modifiée |
| RapportImpact | Impact | Période et au moins un site définis | Un rapport publié conserve son périmètre et sa version |
| Incident | Supervision | Un incident possède une source et une date | Un incident clôturé ne peut être rouvert sans nouvel événement |
| CompteUtilisateur | Référentiel | Identifiant unique | Un rôle n’accorde des droits que sur son périmètre de site |

## Post-it écartés (non-événements métier)

- « Bouton Valider cliqué » : détail d’interface ; conserver « Récolte validée ».
- « INSERT INTO measurements » : opération technique ; conserver « Mesure enregistrée » ou « Mesure validée ».
- « Erreur HTTP 500 » : détail technique ; conserver « Synchronisation échouée ».
- « Envoyer un SMS » : commande ; conserver « Apicultrice notifiée ».

## Points chauds

Voir [points-chauds.md](../points-chauds.md) pour les décisions à confirmer avec BeeAfrica.
