import { seedChoice, seedChoiceWeighted } from 'utils';
import { adopt, accompany, addCoins, updateCondition } from '../../store';
import { store } from '../../index';
import Sprite from 'models/Sprite';

export function resetAdventureFunc(companion) {
  return () => {
    store.dispatch(updateCondition({
      health: Sprite.maxHealth(companion) - companion.health,
      stamina: Sprite.maxStamina(companion) - companion.stamina,
      steps: 300,
    }));
  };
}

export function addCoinsFunc(n) {
  return () => store.dispatch(addCoins(n));
}

export function accompanyFunc(companion) {
  return () => store.dispatch(accompany(companion));
}

export function adoptFunc(companion) {
  return () => store.dispatch(adopt(companion));
}

export function updateConditionFunc(condition) {
  return () => store.dispatch(updateCondition(condition));
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
