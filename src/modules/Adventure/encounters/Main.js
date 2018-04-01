import { Encounter } from './Models';
import Companion from 'models/Companion';

import FindCoins from './FindCoins';
import Start from './Start';
import CompCash from './CompCash';
import { SameSprite, SameSpriteEnd } from './SameSprite';
import { RufusCheck, RufusCheckEnd } from './RufusCheck';
import { VeraCheck, VeraCheckEnd } from './VeraCheck';


const encountersArray = [
  new Start("start"),
  new Encounter("breeze", { mainText: "A peaceful breeze blows past." }),
  new FindCoins("findCoins"),
  new CompCash("compCash"),
  new Encounter("end"),
  new SameSprite("sameSprite"),
  new SameSpriteEnd("sameSpriteEnd"),
  new RufusCheck("rufusCheck"),
  new RufusCheckEnd("rufusCheckEnd"),
  new VeraCheck("veraCheck"),
  new VeraCheckEnd("veraCheckEnd"),
];


const encounters = {};
for (let i = 0; i < encountersArray.length; i++) {
  encounters[encountersArray[i].id] = encountersArray[i];
}

const randomEncounters = [
  encounters.breeze,
  encounters.findCoins,
  encounters.compCash,
  encounters.sameSprite,
  encounters.rufusCheck,
  encounters.veraCheck,
];
export { encounters, randomEncounters, Companion };
