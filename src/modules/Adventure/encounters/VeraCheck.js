import { addCoinsFunc } from '../encounterFuncs';
import { Encounter, Choice, Outcome } from './Models';
import { seedChoice } from 'utils';

import Sprite from 'models/Sprite';


export class VeraCheck extends Encounter {
  get mainText() {
    const targetComp = seedChoice(this._seed, this._state.companions);
    const text = `"I was hoping you'd come by!
    I wanted to check in and see how ${targetComp.name} is doing. May I see them?"`;
    return text;
  }
  get img() {
    return { url: '/img/npcs/vera-everly.png', tiny: false };
  }
  get choices() {
    const targetComp = seedChoice(this._seed, this._state.companions);
    const choices = [];
    // TODO: Once we add ways to get rid of sprites, check that the player still has it.
    choices.push(new Choice(
      `Sure! Here's ${targetComp.name} now!`,
      new Outcome(() => {}, "veraCheckEnd"),
    ));
    choices.push(new Choice("Sorry, not right now.", () => {}));
    return choices;
  }
}

export class VeraCheckEnd extends Encounter {
  get mainText() {
    const targetComp = seedChoice(this._seed, this._state.companions);
    return (`Vera slowly walks around ${targetComp.name}, inspecting the ${Sprite.coatName(targetComp)
    } from every angle. "You've been taking really good care of ${targetComp.name
    }! Here, have this reward for all your hard work! I know you'll spend it wisely!"`);
  }
  get img() {
    const targetComp = seedChoice(this._seed, this._state.companions);
    return [
      { url: Sprite.imageUrl(targetComp), tiny: true },
      { url: '/img/npcs/vera-everly.png', tiny: false },
    ];
  }
  get choices() {
    return [new Choice("Thank you!", new Outcome(addCoinsFunc(300)))];
  }
}
