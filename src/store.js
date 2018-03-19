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
export const SET_ENCOUNTER = 'SET_ENCOUNTER';

 
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

export function setEncounter(encounter) {
  return { type: SET_ENCOUNTER, encounter }
}

/*
 * reducers
 */

const initialState = {
  companions: [],
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
    case SET_ENCOUNTER:
      return Object.assign({}, state, {
        encounter: action.encounter,
      });
    default:
      return state;
  }
}
