import { chooseWeighted } from 'utils';
import { randomContinue } from '../encounterFuncs';
import { store } from 'index';
import { adopt, accompany, addCoins, updateCondition, getItem } from 'SayluaStore';

export class Choice {
  static create(args) {
    const newChoice = {};
    newChoice.id = args.id;
    newChoice.text = args.text;
    // Requirements
    // Results
    newChoice.result = args.result;
    newChoice.health = args.health;
    newChoice.stamina = args.stamina;
    newChoice.coins = args.coins;
    newChoice.giveItem = args.giveItem;
    newChoice.takeItem = args.takeItem;
    return newChoice;
  }

  static choose(choice, seed) {
    if (choice.health || choice.stamina) {
      store.dispatch(updateCondition({ health: choice.health, stamina: choice.stamina }));
    }
    if (choice.coins) {
      store.dispatch(addCoins(choice.coins));
    }
  }
}

export class Encounter {
  static create(args) {
    const newEncounter = {};
    newEncounter.text = args.text;
    newEncounter.choices = args.choices;
    return newEncounter;
  }
}

export class sceneImage {
  static create(args) {
    const newSceneImage = {};
    newSceneImage.src = args.src;
    newSceneImage.width = args.width;
    newSceneImage.height = args.height;
    return newSceneImage;
  }
}
