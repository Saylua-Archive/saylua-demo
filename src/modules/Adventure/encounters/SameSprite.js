import { adoptFunc, randomCompanion } from '../encounterFuncs';
import { Encounter, Choice, Outcome } from './Models';
import { speciesIndexRegion } from '../../../models/SpriteSpecies';


export class SameSprite extends Encounter {
  get mainText() {
    const localSprites = speciesIndexRegion.Universal.concat(speciesIndexRegion[this._state.area.region]);
    const newComp = randomCompanion(this._seed, localSprites);
    const text = `Up ahead, you see a lonely looking ${newComp.species.name}.
      If only there was another ${newComp.species.name} around to play with them...`;
    return text;
  }

  get img() {
    const localSprites = speciesIndexRegion.Universal.concat(speciesIndexRegion[this._state.area.region]);
    const newComp = randomCompanion(this._seed, localSprites);
    return { url: newComp.imageUrl(), tiny: true };
  }

  get choices() {
    const localSprites = speciesIndexRegion.Universal.concat(speciesIndexRegion[this._state.area.region]);
    const newComp = randomCompanion(this._seed, localSprites);
    const choices = [];
    const active = this._state.activeCompanion;
    if (active && active.speciesId === newComp.speciesId) {
      choices.push(new Choice(
        `There is! Let ${active.name} go play with them!`,
        new Outcome(adoptFunc(newComp), "sameSpriteEnd"),
      ));
    }
    choices.push(new Choice("Leave them alone.", () => {}));
    return choices;
  }
}

export class SameSpriteEnd extends Encounter {
  get mainText() {
    const localSprites = speciesIndexRegion.Universal.concat(speciesIndexRegion[this._state.area.region]);
    const newComp = randomCompanion(this._seed, localSprites);
    const text = `${newComp.name} had so much fun playing that they want to come home with you.
      Of course you say yes! They move right into your den.`;
    return text;
  }

  get img() {
    const localSprites = speciesIndexRegion.Universal.concat(speciesIndexRegion[this._state.area.region]);
    const newComp = randomCompanion(this._seed, localSprites);
    return { url: newComp.imageUrl(), tiny: true };
  }

  get choices() {
    const localSprites = speciesIndexRegion.Universal.concat(speciesIndexRegion[this._state.area.region]);
    const newComp = randomCompanion(this._seed, localSprites);
    const choices = [new Choice(`Welcome home, ${newComp.name}.`, () => {})];
    return choices;
  }
}
