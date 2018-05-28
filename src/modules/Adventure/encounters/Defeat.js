import { resetAdventureFunc } from '../encounterFuncs';
import { Encounter, Choice } from './Models';

export default class Defeat extends Encounter {
  get mainText() {
    if (this._state.activeCompanion) {
      return (`${
        this._state.activeCompanion.name} is unable to continue. Your adventure ends here.`);
    } else {
      return "Where did your companion go?!?!?";
    }
  }
  get choices() {
    return [
      new Choice("Start a new adventure!", resetAdventureFunc(this._state.activeCompanion)),
    ];
  }
}
