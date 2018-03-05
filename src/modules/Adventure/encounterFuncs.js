"use strict";

import {chooseWeighted, check, randInt} from 'utils'


function addCoins(n) {
  return (state) => {
    let newState = next(state);
    newState.coins = state.coins + n;
    return newState;
  };
}

function addJoy(n) {
  return (state) => {
    let newState = next(state);
    newState.joy = state.joy + n;
    return newState;
  };
}

function addCJ(coins, joy) {
  return (state) => {
    let newState = next(state);
    newState.coins = state.coins + coins;
    newState.joy = state.joy + joy;
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
    newState.companions = state.companions.concat(companion);
    return newState;
  };
}

export {addCoins, addJoy, next, addCJ, setActive, adopt};
