import { Encounter } from './Models';
import Companion from 'models/Companion';

import FindCoins from './FindCoins';
import Start from './Start';
import Finish from './Finish';
import Defeat from './Defeat';
import CompCash from './CompCash';
import Rest from './Rest';
import { Battle, BattleContinue, BattleEnd } from './Battle';
import { SameSprite, SameSpriteEnd } from './SameSprite';
import { RufusCheck, RufusCheckEnd } from './RufusCheck';
import { VeraCheck, VeraCheckEnd } from './VeraCheck';


const encountersArray = [
  new Start("start"),
  new Finish("finish"),
  new Defeat("defeat"),
  new Rest("rest"),
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
  new Battle("battle"),
  new BattleContinue("battleContinue"),
  new BattleEnd("battleEnd"),
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
  encounters.battle,
  encounters.rest,
];
export { encounters, randomEncounters, Companion };
