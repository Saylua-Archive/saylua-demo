import SpriteCoat, { CoatType } from './Main';

import {
  Arko, Chirling, Nibian, Gam, Senrix, Fleuran, Vela,
  Eydrun, Gorbin, Loxi,
} from 'models/SpriteSpecies';


export class SaylianCoat extends CoatType {
  constructor() {
    super();
    this.name = 'Saylian';
    this.canonName = 'saylian';
  }
}

export class SaylianArko extends SpriteCoat {
  constructor() {
    super();
    this.coat = new SaylianCoat();
    this.species = new Arko();
  }
}

export class SaylianChirling extends SpriteCoat {
  constructor() {
    super();
    this.coat = new SaylianCoat();
    this.species = new Chirling();
  }
}

export class SaylianNibian extends SpriteCoat {
  constructor() {
    super();
    this.coat = new SaylianCoat();
    this.species = new Nibian();
  }
}

export class SaylianGam extends SpriteCoat {
  constructor() {
    super();
    this.coat = new SaylianCoat();
    this.species = new Gam();
  }
}

export class SaylianSenrix extends SpriteCoat {
  constructor() {
    super();
    this.coat = new SaylianCoat();
    this.species = new Senrix();
  }
}

export class SaylianFleuran extends SpriteCoat {
  constructor() {
    super();
    this.coat = new SaylianCoat();
    this.species = new Fleuran();
  }
}

export class SaylianVela extends SpriteCoat {
  constructor() {
    super();
    this.coat = new SaylianCoat();
    this.species = new Vela();
  }
}

export class SaylianEydrun extends SpriteCoat {
  constructor() {
    super();
    this.coat = new SaylianCoat();
    this.species = new Eydrun();
  }
}

export class SaylianGorbin extends SpriteCoat {
  constructor() {
    super();
    this.coat = new SaylianCoat();
    this.species = new Gorbin();
  }
}

export class SaylianLoxi extends SpriteCoat {
  constructor() {
    super();
    this.coat = new SaylianCoat();
    this.species = new Loxi();
  }
}
