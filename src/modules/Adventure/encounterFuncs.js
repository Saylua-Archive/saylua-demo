import { chooseWeighted, check, randInt } from 'utils';
import { adopt, accompany, addCoins } from '../../store';
import { store } from '../../index';


function addCoinsFunc(n) {
  return () => store.dispatch(addCoins(n));
}

function next(state) {
    let newState = {};
    newState.steps = state.steps - 1;
    newState.encounter = chooseWeighted(state.randomEncounters);
    return newState;
}

function accompanyFunc(companion) {
  return () => store.dispatch(accompany(companion));
}

function adoptFunc(companion) {
  return () => store.dispatch(adopt(companion));
}

export {addCoinsFunc, next, adoptFunc, accompanyFunc};
