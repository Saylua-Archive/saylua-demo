import {addCoins, addJoy, next, proceed} from './encounterFuncs'
import {chooseWeighted, check, randInt} from './utils'

function Encounter(mainText, choices) {
  this.mainText = mainText;
  this.choices = choices;
}

function Choice(choiceText, outcomes) {
  this.choiceText = choiceText;
  this.outcomes = outcomes;
}

var encounters = {
  start: new Encounter("Let's get started!",
    [
      new Choice("Let's go!", [addJoy(10)])
    ]
  )
}


var randomEncounters = [];

export { encounters, randomEncounters };
