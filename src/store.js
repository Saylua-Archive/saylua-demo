import Sprite from 'models/Sprite';
/*
 * action types
 */
export const ACCOMPANY = 'ACCOMPANY';
export const ADD_COINS = 'ADD_COINS';
export const ADOPT = 'ADOPT';
export const SET_ENCOUNTER = 'SET_ENCOUNTER';
export const SET_ENCOUNTER_STATE = 'SET_ENCOUNTER_STATE';
export const CLEAR_STATE = 'CLEAR_STATE';
export const SET_THEME = 'SET_THEME';
export const SET_AREA = 'SET_AREA';
export const SET_STEPS = 'SET_STEPS';
export const UPDATE_CONDITION = 'UPDATE_CONDITION';

/*
 * action creators
 */
export function addCoins(count) {
  return { type: ADD_COINS, count };
}

export function accompany(companion) {
  return { type: ACCOMPANY, companion };
}

export function adopt(companion) {
  return { type: ADOPT, companion };
}

export function setEncounter(encounter) {
  return { type: SET_ENCOUNTER, encounter };
}

export function setEncounterState(encounterState) {
  return { type: SET_ENCOUNTER_STATE, encounterState };
}

export function clearState() {
  return { type: CLEAR_STATE };
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

/*
 * reducers
 */

export const initialState = {
  companions: [],
  activeCompanion: null,
  coins: 0,
  encounterId: 'start',
  area: null,
  steps: 300,
  encounterSeed: Date.now(),
  encounterState: null,
  theme: 'day',
};

export function sayluaApp(state = initialState, action) {
  switch (action.type) {
    case ADD_COINS:
      return Object.assign({}, state, {
        coins: state.coins + action.count,
      });
    case ACCOMPANY:
      return Object.assign({}, state, {
        activeCompanion: action.companion,
      });
    case ADOPT:
      return Object.assign({}, state, {
        companions: state.companions.concat(action.companion),
        activeCompanion: state.activeCompanion || action.companion,
      });
    case SET_ENCOUNTER:
      return Object.assign({}, state, {
        encounterSeed: action.encounter.seed,
        encounterId: action.encounter.id,
      });
    case SET_ENCOUNTER_STATE:
      return Object.assign({}, state, {
        encounterState: action.encounterState,
      });
    case CLEAR_STATE:
      return Object.assign({}, state, initialState);
    case SET_THEME:
      return Object.assign({}, state, {
        theme: action.theme,
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
      const newComp = Object.assign({}, state.activeCompanion);
      newComp.health += (action.condition && action.condition.health) || 0;
      newComp.health = Math.min(newComp.health, Sprite.maxHealth(state.activeCompanion));
      newComp.stamina += (action.condition && action.condition.stamina) || 0;
      newComp.stamina = Math.min(newComp.stamina, Sprite.maxStamina(state.activeCompanion));
      return Object.assign({}, state, {
        activeCompanion: newComp,
        steps: action.condition.steps || state.steps,
      });
    }
    default:
      return state;
  }
}
