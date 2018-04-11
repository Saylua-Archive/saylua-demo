import { adoptFunc, randomCompanion } from '../encounterFuncs';
import { Encounter, Choice, Outcome } from './Models';


export class SameSprite extends Encounter {
  get mainText() {
    const newComp = randomCompanion(this._seed);
    const text = `Up ahead, you see a lonely looking ${newComp.species}.
      If only there was another ${newComp.species} around to play with them...`;
    return text;
  }

  get img() {
    const newComp = randomCompanion(this._seed);
    return { url: newComp.imageUrl(), tiny: true };
  }

  get choices() {
    const newComp = randomCompanion(this._seed);
    const choices = [];
    if (this._state.activeCompanion && this._state.activeCompanion.species === newComp.species) {
      choices.push(new Choice(
        `There is! Let ${this._state.activeCompanion.name} go play with them!`,
        new Outcome(adoptFunc(newComp), "sameSpriteEnd"),
      ));
    }
    choices.push(new Choice("Leave them alone.", () => {}));
    return choices;
  }
}

export class SameSpriteEnd extends Encounter {
  get mainText() {
    const newComp = randomCompanion(this._seed);
    const text = `${newComp.name} has so much fun playing that they want to come home with you.
      Of course you say yes! They move right into your den.`;
    return text;
  }

  get img() {
    const newComp = randomCompanion(this._seed);
    return { url: newComp.imageUrl(), tiny: true };
  }

  get choices() {
    const newComp = randomCompanion(this._seed);
    const choices = [new Choice(`Welcome home, ${newComp.name}.`, () => {})];
    return choices;
  }
}
