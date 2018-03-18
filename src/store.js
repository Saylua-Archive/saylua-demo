"use strict";

import { combineReducers, createStore } from 'redux';
import { Companion, encounters } from './modules/Adventure/encounters';
import { randInt } from './utils/Main';


/*
 * action types
 */
 
export const ACCOMPANY = 'ACCOMPANY';
export const ADD_COINS = 'ADD_COINS';
export const ADOPT = 'ADOPT';

 
/*
 * action creators
 */
 
export function addCoins(count) {
  return { type: ADD_COINS, count }
}
 
export function accompany(companion) {
  return { type: ACCOMPANY, companion }
}

export function adopt(companion) {
  return { type: ADOPT, companion }
}

/*
 * reducers
 */

const initialState = {
  companions: [
    new Companion("Tori", "chirling", randInt(10), randInt(10), randInt(10)),
    new Companion("Wulfo", "arko", randInt(10), randInt(10), randInt(10)),
    new Companion("Golp", "gorbin", randInt(10), randInt(10), randInt(10)),
  ],
  activeCompanion: null,
  coins: 0,
  encounter: encounters.start,
}

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
      });
    default:
      return state;
  }
}
