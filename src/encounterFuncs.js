function addCoins(state, n) {
  return () => {
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

function check(dice, check) {
  return randInt(dice) >= check;
}

// Return a random integer from 1 to max, inclusive
function randInt(max) {
  return Math.floor((Math.random() * max) + 1);
}

function chooseWeighted(options) {
  let total = 0;
  for (var i = 0; i < options.length; i++) {
    total += options[i].weight || 1;
  }
  let target = Math.floor((Math.random() * total) + 1);
  let index = 0;
  target -= options[0].weight || 1;
  while (target > 0) {
    index++;
    target -= options[index].weight || 1;
  }
  return options[index].value || options[index];
}

export {addCoins, addJoy, next, proceed, chooseWeighted, check, randInt};
