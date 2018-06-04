import { adoptFunc } from '../encounterFuncs';
import { Encounter, Choice } from './Models';
import Sprite from 'models/Sprite';

export default class Start extends Encounter {
  get mainText() {
    return "Choose your starting companion!";
  }

  get img() {
    return this._starters.map(s => ({ url: Sprite.imageUrl(s), tiny: true }));
  }

  get choices() {
    return [
      new Choice(`${Sprite.fullName(this._starters[0])}`, adoptFunc(this._starters[0])),
      new Choice(`${Sprite.fullName(this._starters[1])}`, adoptFunc(this._starters[1])),
      new Choice(`${Sprite.fullName(this._starters[2])}`, adoptFunc(this._starters[2])),
    ];
  }

  get _starters() {
    return [
      Sprite.randomSprite(this._seed),
      Sprite.randomSprite(this._seed + 1),
      Sprite.randomSprite(this._seed + 2),
    ];
  }
}
