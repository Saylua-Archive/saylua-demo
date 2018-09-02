import Sprite from 'models/Sprite';
import { store } from 'index';
import { encountersList } from './encounters';
import { addCoins, updateCondition, addItem, setEncounterState, setDeck, createSprite } from 'reducers/sayluaReducer';

export class Choice {
  static create(args) {
    const newChoice = {};
    newChoice.id = args.id;
    newChoice.text = args.text;
    // Requirements
    newChoice.needCoins = args.needCoins;
    newChoice.needItem = args.needItem;
    newChoice.needItemCount = args.needItemCount;
    // Results
    newChoice.health = args.health;
    newChoice.stamina = args.stamina;
    newChoice.coins = args.coins;
    newChoice.addItem = args.addItem;
    newChoice.addItemCount = args.addItemCount;
    // Offense
    newChoice.attack = args.attack;
    newChoice.staminaAttack = args.staminaAttack;
    return newChoice;
  }

  static getText(choice, seed, player) {
    return typeof choice.text === "function" ? choice.text(choice, seed, player) : choice.text;
  }

  static checkRequirements(choice, encounter, seed, player) {
    if (choice.needCoins && player.coins < choice.needCoins) {
      return false;
    }
    if (choice.needItemCount &&
      (!player.inventory[choice.needItem] || choice.needItemCount > player.inventory[choice.needItem])) {
      return false;
    }
    if (player.activeCompanion.stamina + choice.stamina < 0) {
      return false;
    }
    if (choice.needOpponent && player.opponent && player.opponent.health <= 0) {
      return false;
    }
    if (choice.noOpponent && (!player.opponent || player.opponent.health > 0)) {
      return false;
    }
    return true;
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
    if (choice.addItem) {
      const item = typeof choice.addItem === "function" ? choice.addItem(encounter, seed, player) : choice.addItem;
      store.dispatch(addItem(item, choice.addItemCount));
    }
    if (choice.attack || choice.staminaAttack) {
      const attack = typeof choice.attack === "function" ? choice.attack(encounter, seed, player) : choice.attack;
      const staminaAttack = typeof choice.staminaAttack === "function" ?
        choice.staminaAttack(encounter, seed, player) : choice.staminaAttack;
      player.opponent = player.opponent || Sprite.create({}, seed);
      player.opponent.health -= attack || 0;
      player.opponent.stamina -= staminaAttack || 0;
      store.dispatch(setEncounterState({ opponent: player.opponent }));
    }
    if (choice.cardID) {
      const newDeck = player.deck;
      let index = -1;
      for (let i = 0; i < newDeck.length; i++) {
        if (newDeck[i].id === choice.cardID) {
          index = i;
        }
      }
      newDeck.splice(index, 1);
      store.dispatch(setDeck(newDeck));
    }
    if (choice.adoptee) {
      const adoptee = typeof choice.adoptee === "function" ? choice.adoptee(encounter, seed, player) : choice.adoptee;
      store.dispatch(createSprite(adoptee, true));
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

  static getChoices(encounter, seed, player) {
    return typeof encounter.choices === "function" ? encounter.choices(encounter, seed, player) : encounter.choices;
  }

  static getImages(encounter, seed, player) {
    return typeof encounter.images === "function" ? encounter.images(encounter, seed, player) : encounter.images;
  }

  static getOpponent(encounter, seed, player) {
    return typeof encounter.opponent === "function" ? encounter.opponent(encounter, seed, player) : encounter.opponent;
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
