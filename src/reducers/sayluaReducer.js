import Sprite from 'models/Sprite';
import initialState from './initialState';

import { maxSpriteIdFunc } from './selectors';

/*
 * action types
 */
export const ACCOMPANY = 'ACCOMPANY';
export const ADD_COINS = 'ADD_COINS';
export const ADOPT = 'ADOPT';
export const CREATE_SPRITE = 'CREATE_SPRITE';
export const SET_ENCOUNTER = 'SET_ENCOUNTER';
export const SET_ENCOUNTER_STATE = 'SET_ENCOUNTER_STATE';
export const CLEAR_STATE = 'CLEAR_STATE';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_SIDE = 'SET_SIDE';
export const SET_THEME = 'SET_THEME';
export const SET_AREA = 'SET_AREA';
export const SET_STEPS = 'SET_STEPS';
export const UPDATE_CONDITION = 'UPDATE_CONDITION';
export const GET_ITEM = 'GET_ITEM';
export const USE_ITEM = 'USE_ITEM';

/*
 * action creators
 */
export function addCoins(count) {
  return { type: ADD_COINS, count };
}

export function accompany(spriteId) {
  return { type: ACCOMPANY, spriteId };
}

export function createSprite(sprite, willAdopt=false) {
  return { type: CREATE_SPRITE, sprite, willAdopt };
}

export function adopt(spriteId) {
  return { type: ADOPT, spriteId };
}

export function setEncounter(encounterId, seed) {
  return { type: SET_ENCOUNTER, encounterId, seed };
}

export function setEncounterState(encounterState) {
  return { type: SET_ENCOUNTER_STATE, encounterState };
}

export function clearState() {
  return { type: CLEAR_STATE };
}

export function setUsername(username) {
  return { type: SET_USERNAME, username };
}

export function setSide(sideId) {
  return { type: SET_SIDE, sideId };
}

export function setTheme(theme) {
  return { type: SET_THEME, theme };
}

export function setArea(area) {
  return { type: SET_AREA, area };
}

export function setSteps(steps) {
  return { type: SET_STEPS, steps };
}

export function updateCondition(condition) {
  return { type: UPDATE_CONDITION, condition };
}

export function getItem(itemId, count) {
  return { type: GET_ITEM, itemId, count };
}

export function useItem(itemId, count) {
  return { type: USE_ITEM, itemId, count };
}

export default function sayluaReducer(state = initialState.sayluaState, action) {
  switch (action.type) {
    case ADD_COINS:
      return Object.assign({}, state, {
        coins: state.coins + action.count,
      });
    case ACCOMPANY:
      return Object.assign({}, state, {
        activeCompanionId: action.spriteId,
      });
    case CREATE_SPRITE: {
      const id = maxSpriteIdFunc(state.sprites) + 1;
      const newSprites = Object.assign({}, state.sprites);
      const sprite = Object.assign({}, action.sprite, { id });
      newSprites[id] = sprite;
      const stateChanges = { sprites: newSprites };
      if (action.willAdopt) {
        stateChanges.companionIds = state.companionIds.concat(id);
        stateChanges.activeCompanionId = state.activeCompanionId || id;
      }
      return Object.assign({}, state, stateChanges);
    }
    case ADOPT:
      return Object.assign({}, state, {
        companionIds: state.companionIds.concat(action.spriteId),
        activeCompanionId: state.activeCompanionId || action.spriteId,
      });
    case SET_ENCOUNTER:
      return Object.assign({}, state, {
        encounterId: action.encounterId,
        encounterSeed: action.seed,
      });
    case SET_ENCOUNTER_STATE:
      return Object.assign({}, state, {
        encounterState: action.encounterState,
      });
    case CLEAR_STATE:
      return Object.assign({}, state, initialState.sayluaState);
    case SET_SIDE:
      return Object.assign({}, state, {
        sideId: action.sideId,
      });
    case SET_THEME:
      return Object.assign({}, state, {
        theme: action.theme,
      });
    case SET_USERNAME:
      return Object.assign({}, state, {
        area: action.username,
      });
    case SET_AREA:
      return Object.assign({}, state, {
        area: action.area,
      });
    case SET_STEPS:
      return Object.assign({}, state, {
        steps: action.steps,
      });
    case UPDATE_CONDITION: {
      const activeCompanion = state.sprites[state.activeCompanionId];
      const newComp = Object.assign({}, activeCompanion);
      newComp.health += (action.condition && action.condition.health) || 0;
      newComp.health = Math.min(newComp.health, Sprite.maxHealth(activeCompanion));
      newComp.stamina += (action.condition && action.condition.stamina) || 0;
      newComp.stamina = Math.min(newComp.stamina, Sprite.maxStamina(activeCompanion));
      return Object.assign({}, state, {
        sprites: Object.assign({}, state.sprites, { [activeCompanion.id]: activeCompanion }),
        steps: action.condition.steps || state.steps,
      });
    }
    case GET_ITEM: {
      const newInventory = Object.assign({}, state.inventory);
      newInventory[action.itemId] = (newInventory[action.itemId] || 0) + (action.count || 1);
      return Object.assign({}, state, {
        inventory: newInventory,
      });
    }
    case USE_ITEM: {
      const newInventory = Object.assign({}, state.inventory);
      newInventory[action.itemId] -= action.count || 1;
      if (newInventory[action.itemId] <= 0) {
        delete newInventory[action.itemId];
      }
      return Object.assign({}, state, {
        inventory: newInventory,
      });
    }
    default:
      return state;
  }
}
