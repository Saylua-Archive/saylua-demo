import SpriteCoat, { CoatType } from './Main';

import {
  Arko, Chirling, Nibian, Gam, Senrix, Fleuran, Vela,
  Eydrun, Gorbin, Loxi,
} from 'models/SpriteSpecies';


export class MelanisticCoat extends CoatType {
  constructor() {
    super();
    this.name = 'Melanistic';
    this.canonName = 'melanistic';
  }
}

export class MelanisticArko extends SpriteCoat {
  constructor() {
    super();
    this.coat = new MelanisticCoat();
    this.species = new Arko();
  }
}

export class MelanisticChirling extends SpriteCoat {
  constructor() {
    super();
    this.coat = new MelanisticCoat();
    this.species = new Chirling();
  }
}

export class MelanisticNibian extends SpriteCoat {
  constructor() {
    super();
    this.coat = new MelanisticCoat();
    this.species = new Nibian();
  }
}

export class MelanisticGam extends SpriteCoat {
  constructor() {
    super();
    this.coat = new MelanisticCoat();
    this.species = new Gam();
  }
}

export class MelanisticSenrix extends SpriteCoat {
  constructor() {
    super();
    this.coat = new MelanisticCoat();
    this.species = new Senrix();
  }
}

export class MelanisticFleuran extends SpriteCoat {
  constructor() {
    super();
    this.coat = new MelanisticCoat();
    this.species = new Fleuran();
  }
}

export class MelanisticVela extends SpriteCoat {
  constructor() {
    super();
    this.coat = new MelanisticCoat();
    this.species = new Vela();
  }
}

export class MelanisticEydrun extends SpriteCoat {
  constructor() {
    super();
    this.coat = new MelanisticCoat();
    this.species = new Eydrun();
  }
}

export class MelanisticGorbin extends SpriteCoat {
  constructor() {
    super();
    this.coat = new MelanisticCoat();
    this.species = new Gorbin();
  }
}

export class MelanisticLoxi extends SpriteCoat {
  constructor() {
    super();
    this.coat = new MelanisticCoat();
    this.species = new Loxi();
  }
}
