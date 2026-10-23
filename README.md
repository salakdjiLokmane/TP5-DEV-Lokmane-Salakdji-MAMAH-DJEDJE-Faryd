# TP5 — Event Storming QueenBee · Parcours DEV

**Binôme :** Lokmane Salakdji & MAMAH DJEDJE Faryd  
**Formation :** Master 1 Informatique · INGETIS  
**Séance :** 23 octobre 2026 · **Dossier final :** 30 octobre 2026

## Objectif

Concevoir les frontières métier de QueenBee à partir des cas d’utilisation et implémenter l’agrégat `Alerte` du contexte **Santé des colonies** avec le pattern State.

## Contenu

- `docs/event-storming/mur-proposition-numerique.png` : **proposition numérique** de mur, 56 événements répartis en 7 séquences chronologiques.
- `docs/event-storming/mur-complet.md` : 56 événements avec leurs causes, 8 politiques, 10 agrégats et invariants.
- `docs/glossaire.md` : 25 définitions, dont plusieurs termes ambigus dédoublés par contexte.
- `docs/bounded-contexts.md` : 8 bounded contexts (cœur, support, générique).
- `docs/context-map.md` : Mermaid avec relations typées, flux d’événements et ACL.
- `docs/points-chauds.md` : 12 questions ouvertes et responsables de clarification.
- `docs/specialite/dev-agregat-alerte.md` : diagramme d’états, invariants, événements et piste ADR.
- `seance5-comportement-ddd/queenbee-alerte/` : **kit original du professeur**, avec `domain/Alerte.js` complété, tests et démonstration.
- `adr/` : dossier réservé à la séance 6.

## Vérifications exécutées

Depuis la racine de ce dossier (ou du projet complet) :

```bash
npm run tp5
npm run lint:archi
node seance5-comportement-ddd/queenbee-alerte/demo.js
```

**Résultats : 12 tests sur 12 réussis ; lint architectural validé ; démonstration exécutée.**

## Ce qui reste à faire avec le groupe

Le sujet demande un mur **collectif** (2 à 3 binômes de même spécialité) : le PNG est une proposition de travail, **pas une photo d’un atelier réellement tenu**. Il faut le confronter au groupe, puis déposer dans `docs/event-storming/` une photo nette du mur réel ou un export du Miro collectif. Les décisions sur les points chauds doivent être validées avec les acteurs concernés. Les ADR seront préparés en séance 6.

## Remise

Le rendu de la séance comprend les documents `docs/` et la photo / export du mur ; le code DEV finalisé fait partie du dossier du 30/10. Les fichiers originaux du professeur (tests, service et repository) ont été conservés. Le dossier est autonome pour exécuter les tests avec Node.js 20+.
