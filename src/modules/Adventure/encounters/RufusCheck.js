import { addCoinsFunc } from '../encounterFuncs';
import { Encounter, Choice, Outcome } from './Models';
import { seedChoice } from 'utils';
import Sprite from 'models/Sprite';


export class RufusCheck extends Encounter {
  get mainText() {
    const newComp = Sprite.randomSprite(this._seed);
    const experiment = seedChoice(this._seed + 1, ["hat", "treat", "toy"]);
    const text = `"Hello there! You're just the person I wanted to see!"

"I've got a new ${experiment}, specially made for the discerning ${Sprite.coatName(newComp)}.
      Do you happen to know any sprites who'd like to give it a try? I'll make it worth your while..."`;
    return text;
  }
  get img() {
    return { url: '/img/npcs/rufus-scippio.png', tiny: false };
  }
  get choices() {
    const newComp = Sprite.randomSprite(this._seed);
    const choices = [];
    let candidate = null;
    for (let i = 0; i < this._state.companions.length && !candidate; i++) {
      if (Sprite.speciesId === newComp.speciesId
      && this._state.companions[i].coatId === newComp.coatId) {
        candidate = this._state.companions[i];
      }
    }
    if (candidate) {
      choices.push(new Choice(
        `I'm sure ${candidate.name} would love to give it a try!`,
        new Outcome(() => {}, "rufusCheckEnd"),
      ));
    }
    choices.push(new Choice("Sorry, Rufus.", () => {}));
    return choices;
  }
}

export class RufusCheckEnd extends Encounter {
  get mainText() {
    const newComp = Sprite.randomSprite(this._seed);
    const expResults = [
      `It might not be the most stylish hat ever made, but it certainly is ${Sprite.species(newComp).name
      }-tailored. You couldn't imagine it working on any other sprite. Rufus grins and gives you the money.`,
      `The ${Sprite.species(newComp).name} eats the treat in one bite. ` +
        `Rufus looks excited. He scribbles something down in his journal and hands you a bag of coins.`,
      `Rufus watches carefully as the ${Sprite.species(newComp).name
      } bats the toy around. He looks satisfied and hands over your payment.`,
    ];
    return seedChoice(this._seed + 1, expResults);
  }
  get img() {
    const newComp = Sprite.randomSprite(this._seed);
    return [
      { url: Sprite.imageUrl(newComp), tiny: true },
      { url: '/img/npcs/rufus-scippio.png', tiny: false },
    ];
  }
  get choices() {
    return [new Choice("Thanks!", new Outcome(addCoinsFunc(1000)))];
  }
}
