import {chooseWeighted, check, randInt} from './utils'


function addCoins(n) {
  return (state) => {
    let newState = {};
    newState.coins = state.coins + n;
    return newState;
  };
}

function addJoy(n) {
  return (state) => {
    let newState = {};
    newState.joy = state.joy + n;
    return newState;
  };
}

function next(encounter) {
  return (state) => {
    let newState = {};
    newState.encounter = encounter;
    return newState;
  };
}

function proceed(encounters) {
  return (state) => {
    let newState = {};
    newState.steps = state.steps - 1;
    newState.encounter = chooseWeighted(encounters)
    return newState;
  };
}

export {addCoins, addJoy, next, proceed};
