import SpriteCoat, { CoatType } from './Main';

import { Fleuran } from 'models/SpriteSpecies';


export class CalicoCoat extends CoatType {
  constructor() {
    super();
    this.name = 'Calico';
    this.canonName = 'calico';
  }
}

export class CalicoFleuran extends SpriteCoat {
  constructor() {
    super();
    this.coat = new CalicoCoat();
    this.species = new Fleuran();
  }
}
