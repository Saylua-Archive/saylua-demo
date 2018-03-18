"use strict";

import {chooseWeighted, check, randInt} from 'utils'


function addCoins(n) {
  return (state) => {
    let newState = next(state);
    newState.coins = state.coins + n;
    return newState;
  };
}

function next(state) {
    let newState = {};
    newState.steps = state.steps - 1;
    newState.encounter = chooseWeighted(state.randomEncounters);
    return newState;
}

function setActive(companion) {
  return (state) => {
    let newState = next(state);
    newState.activeCompanion = companion;
    return newState;
  };
}

function adopt(companion) {
  return (state) => {
    let newState = next(state);
    newState.activeCompanion = companion;
    newState.companions = state.companions ? state.companions.concat(companion) : [companion];
    return newState;
  };
}

export {addCoins, next, setActive, adopt};
