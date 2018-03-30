/*
 * action types
 */
export const ACCOMPANY = 'ACCOMPANY';
export const ADD_COINS = 'ADD_COINS';
export const ADOPT = 'ADOPT';
export const SET_ENCOUNTER = 'SET_ENCOUNTER';
export const CLEAR_STATE = 'CLEAR_STATE';
export const SET_THEME = 'SET_THEME';

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

export function clearState() {
  return { type: CLEAR_STATE };
}

export function setTheme(theme) {
  return { type: SET_THEME, theme };
}

/*
 * reducers
 */

export const initialState = {
  companions: [],
  activeCompanion: null,
  coins: 0,
  encounterId: 'start',
  encounterSeed: 0,
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
    case CLEAR_STATE:
      return Object.assign({}, state, initialState);
    case SET_THEME:
      return Object.assign({}, state, {
        theme: action.theme,
      });
    default:
      return state;
  }
}
