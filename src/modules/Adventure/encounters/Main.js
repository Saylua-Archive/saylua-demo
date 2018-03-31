import { Encounter } from './Models';
import Companion from '../Companion';

import FindCoins from './FindCoins';
import Start from './Start';
import CompCash from './CompCash';
import { SameSprite, SameSpriteEnd } from './SameSprite';


const encountersArray = [
  new Start("start"),
  new Encounter("breeze", { mainText: "A peaceful breeze blows past." }),
  new FindCoins("findCoins"),
  new CompCash("compCash"),
  new Encounter("end"),
  new SameSprite("sameSprite"),
  new SameSpriteEnd("sameSpriteEnd"),
];


const encounters = {};
for (let i = 0; i < encountersArray.length; i++) {
  encounters[encountersArray[i].id] = encountersArray[i];
}

const randomEncounters = [encounters.breeze, encounters.findCoins, encounters.compCash, encounters.sameSprite];
export { encounters, randomEncounters, Companion };
