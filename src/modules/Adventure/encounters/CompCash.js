import { addCoinsFunc, adoptFunc } from '../encounterFuncs';
import { Encounter, Choice } from './Models';
import { sRandomInt } from 'utils';
import { speciesIndexRegion } from '../../../models/SpriteSpecies';
import Sprite from 'models/Sprite';

export default class CompCash extends Encounter {
  get mainText() {
    const localSprites = speciesIndexRegion.Universal.concat(speciesIndexRegion[this._state.area.region]);
    const newComp = Sprite.randomSprite(this._seed, localSprites);
    if (this._state.activeCompanion) {
      return (`${this._state.activeCompanion.name} is exploring the area around the trail.
        Suddenly, out bursts a wild ${Sprite.coatName(newComp)}!
        You can tell by the look on their face that they'd love to join you, but that they'll need ${
        sRandomInt(this._seed + 1, 100, 2000)} coins in order to do so.`);
    } else {
      return `A wild ${Sprite.species(newComp).name}! You can tell by the look on their face that they'd love to
        join you, but that they'll need ${sRandomInt(this._seed + 1, 100, 2000)} coins to do so.`;
    }
  }
  get img() {
    const localSprites = speciesIndexRegion.Universal.concat(speciesIndexRegion[this._state.area.region]);
    const newComp = Sprite.randomSprite(this._seed, localSprites);
    return { url: Sprite.imageUrl(newComp), tiny: true };
  }
  get choices() {
    const localSprites = speciesIndexRegion.Universal.concat(speciesIndexRegion[this._state.area.region]);
    const newComp = Sprite.randomSprite(this._seed, localSprites);
    const choices = [];
    if (this._state.coins >= sRandomInt(this._seed + 1, 100, 2000)) {
      choices.push(new Choice(`Welcome aboard, ${newComp.name}!`, () => {
        addCoinsFunc(sRandomInt(this._seed + 1, 100, 2000) * -1)();
        adoptFunc(newComp)();
      }));
    }
    choices.push(new Choice(`Sorry ${newComp.name}, maybe another time.`, () => {}));
    return choices;
  }
}
