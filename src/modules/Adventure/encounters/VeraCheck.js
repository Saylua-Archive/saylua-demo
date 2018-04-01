import { addCoinsFunc, petImage } from '../encounterFuncs';
import { Encounter, Choice, Outcome } from './Models';
import { seedChoice } from 'utils';


export class VeraCheck extends Encounter {
  get mainText() {
    const targetComp = seedChoice(this._seed, this._state.companions);
    const text = "Vera Everly is sitting on a stump beside the path. \"I was hoping you'd come by!" +
      " I wanted to check in and see how " + targetComp.name + " is doing. May I see them?";
    return text;
  }
  get img() {
    return '/img/npcs/vera-everly.png';
  }
  get choices() {
    const targetComp = seedChoice(this._seed, this._state.companions);
    const choices = [];
    if (this._state.activeCompanion.name === targetComp.name) {
      choices.push(new Choice(
        "Sure! Here's " + targetComp.name + " now!",
        new Outcome(() => {}, "veraCheckEnd"),
      ));
    }
    choices.push(new Choice("Sorry, not right now.", () => {}));
    return choices;
  }
}

export class VeraCheckEnd extends Encounter {
  get mainText() {
    const targetComp = seedChoice(this._seed, this._state.companions);
    return ("Vera slowly walks around " + targetComp.name + ", inspecting the " + targetComp.species
    + " from every angle. \"You've been taking really good care of " + targetComp.name
    + "! Here, have this reward for all your hard work! I know you'll spend it wisely!\"");
  }
  get img() {
    const targetComp = seedChoice(this._seed, this._state.companions);
    return [petImage(targetComp), '/img/npcs/vera-everly.png'];
  }
  get choices() {
    return [new Choice("Thank you!", new Outcome(addCoinsFunc(300)))];
  }
}
