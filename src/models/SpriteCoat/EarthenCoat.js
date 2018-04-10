import SpriteCoat, { CoatType } from './Main';

import { Senrix } from 'models/SpriteSpecies';


export class EarthenCoat extends CoatType {
  constructor() {
    super();
    this.name = 'Earthen';
    this.canonName = 'earthen';
  }
}

export class EarthenSenrix extends SpriteCoat {
  constructor() {
    super();
    this.coat = new EarthenCoat();
    this.species = new Senrix();
  }
}
