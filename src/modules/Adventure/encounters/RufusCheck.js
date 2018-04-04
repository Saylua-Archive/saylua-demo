import { addCoinsFunc, randomCompanion } from '../encounterFuncs';
import { Encounter, Choice, Outcome } from './Models';
import { seedChoice } from 'utils';


export class RufusCheck extends Encounter {
  get mainText() {
    const newComp = randomCompanion(this._seed);
    const experiment = seedChoice(this._seed + 1, ["hat", "treat", "toy"]);
    const text = `"Hello there! You're just the person I wanted to see!"

"I've got a new ${experiment}, specially made for the discerning ${newComp.coat} ${newComp.species}.
      Do you happen to know any sprites who'd like to give it a try? I'll make it worth your while..."`;
    return text;
  }
  get img() {
    return '/img/npcs/rufus-scippio.png';
  }
  get choices() {
    const newComp = randomCompanion(this._seed);
    const choices = [];
    if (this._state.activeCompanion
      && this._state.activeCompanion.species === newComp.species
      && this._state.activeCompanion.coat === newComp.coat) {
      choices.push(new Choice(
        `I'm sure ${this._state.activeCompanion.name} would love to give it a try!`,
        new Outcome(() => {}, "rufusCheckEnd"),
      ));
    }
    choices.push(new Choice("Sorry, Rufus.", () => {}));
    return choices;
  }
}

export class RufusCheckEnd extends Encounter {
  get mainText() {
    const newComp = randomCompanion(this._seed);
    const expResults = [
      `It might not be the most stylish hat ever made, but it certainly is ${newComp.species
      }-tailored. You couldn't imagine it working on any other sprite. Rufus grins and gives you the money.`,
      `The ${newComp.species} chomps down the treat in one bite. You're not sure how much data he got, but ` +
        `Rufus looks excited. He scribbles something down in his journal and hands you a bag of coins.`,
      `Rufus watches carefully as the ${newComp.species
      } bats the toy around. He looks satisfied and hands over your payment.`,
    ];
    return seedChoice(this._seed + 1, expResults);
  }
  get img() {
    const newComp = randomCompanion(this._seed);
    return [newComp.imageUrl(), '/img/npcs/rufus-scippio.png'];
  }
  get choices() {
    return [new Choice("Thanks!", new Outcome(addCoinsFunc(1000)))];
  }
}
