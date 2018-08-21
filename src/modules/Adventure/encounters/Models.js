import { chooseWeighted } from 'utils';
import { store } from 'index';
import { encountersList } from './encounters';
import { adopt, accompany, addCoins, updateCondition, getItem } from 'reducers/sayluaReducer';

export class Choice {
  static create(args) {
    const newChoice = {};
    newChoice.id = args.id;
    newChoice.text = args.text;
    // Requirements
    // Results
    newChoice.health = args.health;
    newChoice.stamina = args.stamina;
    newChoice.coins = args.coins;
    newChoice.getItem = args.getItem;
    newChoice.getItemCount = args.getItemCount;
    newChoice.takeItem = args.takeItem;
    newChoice.takeItemCount = args.takeItemCount;
    return newChoice;
  }

  static getText(choice, seed, player) {
    return typeof choice.text === "function" ? choice.text(choice, seed, player) : choice.text;
  }

  static choose(choice, encounter, seed, player) {
    if (choice.health || choice.stamina) {
      const health = typeof choice.health === "function" ? choice.health(encounter, seed, player) : choice.health;
      const stamina = typeof choice.stamina === "function" ? choice.stamina(encounter, seed, player) : choice.stamina;
      store.dispatch(updateCondition({ health, stamina }));
    }
    if (choice.coins) {
      const coins = typeof choice.coins === "function" ? choice.coins(encounter, seed, player) : choice.coins;
      store.dispatch(addCoins(coins));
    }
    if (choice.getItem) {
      const item = typeof choice.getItem === "function" ? choice.getItem(encounter, seed, player) : choice.getItem;
      store.dispatch(getItem(item));
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

  static getText(encounter, seed, player) {
    return typeof encounter.text === "function" ? encounter.text(encounter, seed, player) : encounter.text;
  }

  static byId(id) {
    return encountersList.filter(e => e.id === id)[0];
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
