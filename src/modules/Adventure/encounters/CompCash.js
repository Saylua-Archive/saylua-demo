import { next, addCoinsFunc, accompanyFunc, adoptFunc, petImage, randomCompanion } from '../encounterFuncs';
import {Encounter, Choice} from './Models'
import { chooseWeighted, check, sRandomInt } from 'utils';

export default class CompCash extends Encounter {
  constructor(id, props, seed) {
    super(id, props, seed);
  }
  get mainText() {
    let newComp = randomCompanion(this._seed);
    if (this._state.activeCompanion) {
      return this._state.activeCompanion.name + " is exploring the area around the trail. Suddenly, out bursts a wild " + newComp.species + "! You can tell by the look on their face that they'd love to join you, but that they'll need " + sRandomInt(this._seed + 1, 100, 2000) + " coins in order to do so.";
    } else {
      return "A wild " + newComp.species + "! You can tell by the look on their face that they'd love to join you, but that they'll need " + sRandomInt(this._seed + 1, 100, 2000) + " coins in order to do so.";
    }

  }
  get img() {
    let newComp = randomCompanion(this._seed);
    return petImage(newComp);
  }
  get choices() {
    let newComp = randomCompanion(this._seed);
    let choices = [new Choice("Sorry, " + newComp.name + " maybe another time.", () => {})];
    if (this._state.coins >= sRandomInt(this._seed + 1, 100, 2000)) {
      choices.push(new Choice("Welcome aboard, " + newComp.name + "!", () => {
        addCoinsFunc(sRandomInt(this._seed + 1, 100, 2000) * -1)();
        adoptFunc(newComp)();
      }))
    }
    return choices;
  }
}
