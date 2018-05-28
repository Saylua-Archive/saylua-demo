import { updateConditionFunc } from '../encounterFuncs';
import { Encounter, Choice } from './Models';
import { sRandomInt } from 'utils';

export default class Rest extends Encounter {
  get mainText() {
    if (this._state.activeCompanion) {
      return (`You find a nice place to rest. ${
        this._state.activeCompanion.name} takes it easy for a bit.`);
    } else {
      return "You find a nice place to rest.";
    }
  }
  get choices() {
    return [
      new Choice("Ahhhhh...", updateConditionFunc({ stamina: sRandomInt(this.seed, 5, 10) })),
    ];
  }
}
