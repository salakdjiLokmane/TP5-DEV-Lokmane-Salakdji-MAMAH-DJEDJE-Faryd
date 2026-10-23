# Context map — QueenBee

8 bounded contexts, 14 relations typées (dont systèmes externes et ACL). Les flèches indiquent la direction de la dépendance ou du flux ; les relations OHS/PL signalent un langage publié à stabiliser.

```mermaid
flowchart LR
  REF["Référentiel apicole<br/>(support)"]
  IAM["Accès et identité<br/>(générique)"]
  COL["Collecte et intégrité<br/>(support)"]
  SAN["Santé des colonies<br/>(cœur)"]
  TER["Interventions terrain<br/>(cœur)"]
  PRO["Production et récoltes<br/>(cœur)"]
  SUP["Supervision et sécurité<br/>(support)"]
  IMP["Impact et reporting<br/>(support)"]
  LORA[["Capteurs / LoRaWAN<br/>(externe)"]]
  METEO[["OpenWeatherMap<br/>(externe)"]]
  MAIL[["Push / e-mail<br/>(externe)"]]
  REF -- "U/D · OHS : RucheRéférencée.v1" --> COL
  REF -- "U/D · OHS : SiteRéférencé.v1" --> IAM
  COL -- "U/D · PL : MesureValidée.v1" --> SAN
  COL -- "U/D · PL : MesureValidée.v1" --> PRO
  COL -- "U/D · PL : MesureValidée.v1" --> IMP
  SAN -- "Customer / Supplier : AlerteLevée.v1" --> TER
  TER -- "U/D · PL : InspectionSynchronisée.v1" --> SAN
  SAN -- "U/D · PL : AlerteEscaladée.v1" --> SUP
  PRO -- "U/D · PL : RécolteValidée.v1" --> IMP
  SUP -- "U/D · PL : PasserelleMuette.v1" --> COL
  IAM -- "Conformist : droits par site" --> TER
  LORA -- "ACL : trame vers Mesure" --> COL
  METEO -- "ACL : météo vers prédiction" --> SAN
  SAN -- "ACL : demande de notification" --> MAIL
```

## Relations et décisions

- **OHS / PL** : contrats d’événements versionnés ; le producteur ne dépend pas des consommateurs.
- **Customer / Supplier** : les interventions expriment leurs besoins au contexte Santé pour la priorisation des visites.
- **ACL** : traduction obligatoire des trames LoRaWAN et des données météo externes.
- **Conformist** : Interventions applique les droits du contexte Accès et identité sans redéfinir les rôles.
- Les relations proposées seront validées en atelier, notamment le traitement d’`AlerteEscaladée` par Supervision et Interventions.
