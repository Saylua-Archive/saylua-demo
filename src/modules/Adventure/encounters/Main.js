import { next, addCoinsFunc, accompanyFunc, adoptFunc, petImage, randomCompanion } from '../encounterFuncs';
import { chooseWeighted, check, randInt } from 'utils';
import {Encounter, Choice} from './Models'
import Companion from '../Companion';

import FindCoins from './FindCoins';
import Start from './Start';
import CompCash from './CompCash';


const encountersArray = [
  new Start("start"),
  new Encounter("breeze", {mainText: "A peaceful breeze blows past."}),
  new FindCoins("findCoins"),
  new CompCash("compCash"),
  new Encounter("end"),
]


let encounters = {};
for (let i = 0; i < encountersArray.length; i++) {
  encounters[encountersArray[i].id] = encountersArray[i];
}

let randomEncounters = [encounters.breeze, encounters.findCoins, encounters.compCash];
export {encounters, randomEncounters, Companion};
