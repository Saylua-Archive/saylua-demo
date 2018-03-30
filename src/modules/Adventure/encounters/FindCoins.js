import { addCoinsFunc } from '../encounterFuncs';
import { Encounter, Choice } from './Models';
import { sRandomInt } from 'utils';

export default class FindCoins extends Encounter {
  get mainText() {
    if (this._state.activeCompanion) {
      return ("You spot some coins on the ground. "
      + this._state.activeCompanion.name + " estimates there are about "
      + sRandomInt(this._seed, 100) + " of them.");
    } else {
      return "You find some coins on the ground.";
    }
  }
  get choices() {
    return [
      new Choice("Take them", addCoinsFunc(sRandomInt(this._seed, 100)), this._seed),
      new Choice("Leave them", () => {}),
    ];
  }
}
