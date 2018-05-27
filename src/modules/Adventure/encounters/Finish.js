import { resetAdventureFunc } from '../encounterFuncs';
import { Encounter, Choice } from './Models';

export default class Finish extends Encounter {
  get mainText() {
    if (this._state.activeCompanion) {
      return (`Congratulations! With ${
        this._state.activeCompanion.name}'s help, you have completed your adventure!`);
    } else {
      return "Huh? How have completed your adventure without a companion?!?!?";
    }
  }
  get choices() {
    return [
      new Choice("Start a new adventure!", resetAdventureFunc(this._state.activeCompanion)),
    ];
  }
}
