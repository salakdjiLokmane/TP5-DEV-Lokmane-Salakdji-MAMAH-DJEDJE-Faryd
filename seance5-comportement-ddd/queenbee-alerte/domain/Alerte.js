// QueenBee — agrégat Alerte, contexte « Santé des colonies ».
// Pattern State : les transitions dépendent d'objets état, jamais d'un switch.
// Aucun import : le domaine reste indépendant de l'infrastructure.
export const TYPES_DE_RISQUE = ['ESSAIMAGE', 'AFFAIBLISSEMENT', 'STRESS_THERMIQUE', 'MORTALITE'];
export const DELAI_ESCALADE_MS = 48 * 60 * 60 * 1000;

const iso = date => new Date(date).toISOString();
const refuser = raison => { throw new Error(raison); };

const Levee = {
  nom: 'LEVÉE',
  assigner(alerte, apicultriceId, at) {
    if (!apicultriceId) refuser('Identifiant de l’apicultrice obligatoire');
    alerte._passer(PriseEnCharge, { type: 'AlertePriseEnCharge', apicultriceId, at: iso(at) });
  },
  escalader(alerte, at) {
    if (!alerte.estEnRetard(at)) refuser('Escalade impossible avant 48 h sans prise en charge');
    alerte._passer(Escaladee, { type: 'AlerteEscaladée', at: iso(at) });
  },
  resoudre() { refuser('Une alerte doit être prise en charge avant d’être résolue'); },
};

const PriseEnCharge = {
  nom: 'PRISE_EN_CHARGE',
  assigner() { refuser('Alerte déjà prise en charge'); },
  escalader() { refuser('Alerte déjà prise en charge : escalade interdite'); },
  resoudre(alerte, inspectionId, at) {
    if (typeof inspectionId !== 'string' || !inspectionId.trim()) {
      refuser('Identifiant d’inspection obligatoire pour résoudre une alerte');
    }
    alerte._passer(Resolue, { type: 'AlerteRésolue', inspectionId, at: iso(at) });
  },
};

const Escaladee = {
  nom: 'ESCALADÉE',
  assigner(alerte, apicultriceId, at) { Levee.assigner(alerte, apicultriceId, at); },
  escalader() { refuser('Alerte déjà escaladée'); },
  resoudre() { refuser('Une alerte escaladée doit être prise en charge avant d’être résolue'); },
};

const Resolue = {
  nom: 'RÉSOLUE',
  assigner() { refuser('Une alerte résolue ne peut plus être assignée'); },
  escalader() { refuser('Une alerte résolue ne peut plus être escaladée'); },
  resoudre() { refuser('Une alerte résolue ne peut plus être résolue à nouveau'); },
};

export class Alerte {
  #etat = Levee;
  #events = [];

  constructor({ id, hiveId, siteId, risque, confiance, leveeLe }) {
    Object.assign(this, { id, hiveId, siteId, risque, confiance, leveeLe: new Date(leveeLe) });
  }

  static lever({ id, hiveId, siteId, type, confiance, at }) {
    if (!TYPES_DE_RISQUE.includes(type)) refuser(`Type de risque inconnu : ${type}`);
    if (typeof confiance !== 'number' || !Number.isFinite(confiance) || confiance < 0 || confiance > 1) {
      refuser('Le niveau de confiance doit être un nombre compris entre 0 et 1');
    }
    const alerte = new Alerte({ id, hiveId, siteId, risque: type, confiance, leveeLe: at });
    alerte.#events.push({ type: 'AlerteLevée', alerteId: id, hiveId, siteId, risque: type, confiance, at: iso(at) });
    return alerte;
  }

  get statut() { return this.#etat.nom; }
  assigner(apicultriceId, at) { this.#etat.assigner(this, apicultriceId, at); }
  escalader(at) { this.#etat.escalader(this, at); }
  resoudre(inspectionId, at) { this.#etat.resoudre(this, inspectionId, at); }

  estEnRetard(now) {
    return this.#etat === Levee && new Date(now).getTime() - this.leveeLe.getTime() >= DELAI_ESCALADE_MS;
  }

  pullEvents() {
    const events = this.#events;
    this.#events = [];
    return events;
  }

  _passer(etat, event) {
    this.#etat = etat;
    this.#events.push({ ...event, alerteId: this.id, hiveId: this.hiveId });
  }
}
