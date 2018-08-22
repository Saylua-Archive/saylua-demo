import { seedChoice, seedChoiceWeighted } from 'utils';
import { createSprite, accompany, addCoins, updateCondition, addItem } from 'reducers/sayluaReducer';
import { store } from 'index';
import Sprite from 'models/Sprite';
import { itemsList } from 'models/Item';


export function resetAdventureFunc(companion) {
  return () => {
    store.dispatch(updateCondition({
      health: Sprite.maxHealth(companion),
      stamina: Sprite.maxStamina(companion),
      steps: 300,
    }));
  };
}

export function addCoinsFunc(n) {
  return () => store.dispatch(addCoins(n));
}

export function addItemFunc(itemId, n) {
  return () => store.dispatch(addItem(itemId, n));
}

export function accompanyFunc(companion) {
  return () => store.dispatch(accompany(companion));
}

export function adoptFunc(companion) {
  return () => store.dispatch(createSprite(companion, true));
}

export function updateConditionFunc(condition) {
  return () => store.dispatch(updateCondition(condition));
}

export function randomItem(seed, list) {
  const pickList = list || itemsList;
  return seedChoiceWeighted(seed, pickList);
}

export function randomContinue(seed) {
  const continues = ["Keep going",
    "Continue",
    "Continue traveling",
    "Keep exploring",
    "Ok",
    "Okay",
    "Got it",
    "Cool",
    "Cool beans",
    "Nice"];
  return seedChoice(seed, continues);
}
