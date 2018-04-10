import SpriteCoat, { CoatType } from './Main';

import { Vela } from 'models/SpriteSpecies';


export class DawnishCoat extends CoatType {
  constructor() {
    super();
    this.name = 'Dawnish';
    this.canonName = 'dawnish';
  }
}

export class DawnishVela extends SpriteCoat {
  constructor() {
    super();
    this.coat = new DawnishCoat();
    this.species = new Vela();
  }
}
