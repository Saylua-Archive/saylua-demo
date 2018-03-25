import { next, addCoinsFunc, accompanyFunc, adoptFunc } from './encounterFuncs'
import { chooseWeighted, check, randInt } from 'utils'

function Encounter(id, mainText, choices, weight, requirementCheck) {
  this.id = id;
  this.mainText = mainText;
  this.choices = choices;
  this.weight = weight;
  this.requirementCheck = requirementCheck;
  this.generateMainText = function (state) {
    if (typeof this.mainText === 'function') {
      return this.mainText(state);
    } else {
      return this.mainText;
    }
  }
  this.generateMainText = function (state) {
    if (typeof this.mainText === 'function') {
      return this.mainText(state);
    } else {
      return this.mainText;
    }
  };
}

function Choice(choiceText, outcomes) {
  this.choiceText = choiceText;
  this.outcomes = outcomes;
}

function Outcome(result, text, weight) {
  this.result = result;
  this.text = text;
  this.weight = weight;
  this.generateResultText = function (state) {
    if (typeof this.text === 'function') {
      return this.text(state);
    } else {
      return this.text;
    }
  };
}

function Companion(name, species, str, spd, cha) {
  this.name = name;
  this.species = species;
  this.str = str;
  this.spd = spd;
  this.cha = cha;
}

const stockCompanions = [
  new Companion("Tori", "chirling", randInt(10), randInt(10), randInt(10)),
  new Companion("Wulfo", "arko", randInt(10), randInt(10), randInt(10)),
  new Companion("Golp", "gorbin", randInt(10), randInt(10), randInt(10)),
];

const encountersArray = [
  new Encounter("start", "Choose your companion!",
    (() => {
      let compChoices = [];
      for (let i = 0; i < stockCompanions.length; i++) {
        compChoices.push(
          new Choice(stockCompanions[i].name + " the " + stockCompanions[i].species, [
            new Outcome(adoptFunc(stockCompanions[i]), stockCompanions[i].name + " joins you on your journey."),
          ])
        )
      }
      return compChoices;
    })()
  ),
  new Encounter("findCoins", "You found some coins!",
    [
      new Choice("Money!", [
        new Outcome(addCoinsFunc(10), "You carefully put the coins into your bag."),
      ]),
    ],
    3
  ),
  new Encounter("boxi", (state) => {
          return "You hear a snarling, suddenly a loxi appears! \"Hey, I'm Boxi the loxi! Mind if I join you?\""
        },
    [
      new Choice("Sure!", [
        new Outcome(adoptFunc(new Companion("Boxi", "loxi", randInt(10), randInt(10), randInt(10))), "Boxi joins your party."),
      ]),
      new Choice("Sorry Boxi...", [
        new Outcome(addCoinsFunc(1), "Boxi smiles and hands you a coin. \"It was nice meeting you! Good luck on your journey!\""),
      ]),
    ],
  ),
  new Encounter("end", "You've completed your journey!", []
  ),
];

let encounters = {};
for (let i = 0; i < encountersArray.length; i++) {
  encounters[encountersArray[i].id] = encountersArray[i];
}

var randomEncounters = [encounters.boxi, encounters.findCoins];

export {encounters, randomEncounters, Companion};
