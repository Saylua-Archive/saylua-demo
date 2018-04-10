import SpriteCoat, { CoatType } from './Main';

import {
  Arko, Chirling, Nibian, Gam, Senrix, Fleuran, Vela,
  Eydrun, Gorbin, Loxi,
} from 'models/SpriteSpecies';


export class AlbinoCoat extends CoatType {
  constructor() {
    super();
    this.name = 'Albino';
    this.canonName = 'albino';
  }
}

export class AlbinoArko extends SpriteCoat {
  constructor() {
    super();
    this.coat = new AlbinoCoat();
    this.species = new Arko();
  }
}

export class AlbinoChirling extends SpriteCoat {
  constructor() {
    super();
    this.coat = new AlbinoCoat();
    this.species = new Chirling();
  }
}

export class AlbinoNibian extends SpriteCoat {
  constructor() {
    super();
    this.coat = new AlbinoCoat();
    this.species = new Nibian();
  }
}

export class AlbinoGam extends SpriteCoat {
  constructor() {
    super();
    this.coat = new AlbinoCoat();
    this.species = new Gam();
  }
}

export class AlbinoSenrix extends SpriteCoat {
  constructor() {
    super();
    this.coat = new AlbinoCoat();
    this.species = new Senrix();
  }
}

export class AlbinoFleuran extends SpriteCoat {
  constructor() {
    super();
    this.coat = new AlbinoCoat();
    this.species = new Fleuran();
  }
}

export class AlbinoVela extends SpriteCoat {
  constructor() {
    super();
    this.coat = new AlbinoCoat();
    this.species = new Vela();
  }
}

export class AlbinoEydrun extends SpriteCoat {
  constructor() {
    super();
    this.coat = new AlbinoCoat();
    this.species = new Eydrun();
  }
}

export class AlbinoGorbin extends SpriteCoat {
  constructor() {
    super();
    this.coat = new AlbinoCoat();
    this.species = new Gorbin();
  }
}

export class AlbinoLoxi extends SpriteCoat {
  constructor() {
    super();
    this.coat = new AlbinoCoat();
    this.species = new Loxi();
  }
}
