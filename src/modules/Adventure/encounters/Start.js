import { adoptFunc, randomCompanion } from '../encounterFuncs';
import { Encounter, Choice } from './Models';

export default class Start extends Encounter {
  get mainText() {
    return "Choose your starting companion!";
  }

  get img() {
    return this._starters.map(s => ({ url: s.imageUrl(), tiny: true }));
  }

  get choices() {
    return [
      new Choice(`${this._starters[0].name} the ${
        this._starters[0].species}`, adoptFunc(this._starters[0])),
      new Choice(`${this._starters[1].name} the ${
        this._starters[1].species}`, adoptFunc(this._starters[1])),
      new Choice(`${this._starters[2].name} the ${
        this._starters[2].species}`, adoptFunc(this._starters[2])),
    ];
  }

  get _starters() {
    return [
      randomCompanion(this._seed),
      randomCompanion(this._seed + 1),
      randomCompanion(this._seed + 2),
    ];
  }
}
