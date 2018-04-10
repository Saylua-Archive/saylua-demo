import SpriteCoat, { CoatType } from './Main';

import {
  Arko, Chirling, Nibian, Gam, Senrix, Fleuran, Vela,
  Eydrun, Gorbin, Loxi,
} from 'models/SpriteSpecies';


export class PiebaldCoat extends CoatType {
  constructor() {
    super();
    this.name = 'Piebald';
    this.canonName = 'piebald';
  }
}

export class PiebaldArko extends SpriteCoat {
  constructor() {
    super();
    this.coat = new PiebaldCoat();
    this.species = new Arko();
  }
}

export class PiebaldChirling extends SpriteCoat {
  constructor() {
    super();
    this.coat = new PiebaldCoat();
    this.species = new Chirling();
  }
}

export class PiebaldNibian extends SpriteCoat {
  constructor() {
    super();
    this.coat = new PiebaldCoat();
    this.species = new Nibian();
  }
}

export class PiebaldGam extends SpriteCoat {
  constructor() {
    super();
    this.coat = new PiebaldCoat();
    this.species = new Gam();
  }
}

export class PiebaldSenrix extends SpriteCoat {
  constructor() {
    super();
    this.coat = new PiebaldCoat();
    this.species = new Senrix();
  }
}

export class PiebaldFleuran extends SpriteCoat {
  constructor() {
    super();
    this.coat = new PiebaldCoat();
    this.species = new Fleuran();
  }
}

export class PiebaldVela extends SpriteCoat {
  constructor() {
    super();
    this.coat = new PiebaldCoat();
    this.species = new Vela();
  }
}

export class PiebaldEydrun extends SpriteCoat {
  constructor() {
    super();
    this.coat = new PiebaldCoat();
    this.species = new Eydrun();
  }
}

export class PiebaldGorbin extends SpriteCoat {
  constructor() {
    super();
    this.coat = new PiebaldCoat();
    this.species = new Gorbin();
  }
}

export class PiebaldLoxi extends SpriteCoat {
  constructor() {
    super();
    this.coat = new PiebaldCoat();
    this.species = new Loxi();
  }
}
