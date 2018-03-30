import { adoptFunc, petImage, randomCompanion } from '../encounterFuncs';
import { Encounter, Choice } from './Models';

export default class Start extends Encounter {
  get mainText() {
    return "Choose your starting companion!";
  }
  get img() {
    const startingCompanions = [
      randomCompanion(this._seed),
      randomCompanion(this._seed + 1),
      randomCompanion(this._seed + 2),
    ];
    return [petImage(startingCompanions[0]), petImage(startingCompanions[1]), petImage(startingCompanions[2])];
  }
  get choices() {
    const startingCompanions = [
      randomCompanion(this._seed),
      randomCompanion(this._seed + 1),
      randomCompanion(this._seed + 2),
    ];
    return [
      new Choice(startingCompanions[0].name + " the "
        + startingCompanions[0].species, adoptFunc(startingCompanions[0])),
      new Choice(startingCompanions[1].name + " the "
        + startingCompanions[1].species, adoptFunc(startingCompanions[1])),
      new Choice(startingCompanions[2].name + " the "
        + startingCompanions[2].species, adoptFunc(startingCompanions[2])),
    ];
  }
}
