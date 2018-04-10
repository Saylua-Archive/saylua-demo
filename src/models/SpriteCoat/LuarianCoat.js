import SpriteCoat, { CoatType } from './Main';

import {
  Arko, Chirling, Nibian, Gam, Senrix, Fleuran, Vela,
  Eydrun, Gorbin, Loxi,
} from 'models/SpriteSpecies';


export class LuarianCoat extends CoatType {
  constructor() {
    super();
    this.name = 'Luarian';
    this.canonName = 'luarian';
  }
}

export class LuarianArko extends SpriteCoat {
  constructor() {
    super();
    this.coat = new LuarianCoat();
    this.species = new Arko();
  }
}

export class LuarianChirling extends SpriteCoat {
  constructor() {
    super();
    this.coat = new LuarianCoat();
    this.species = new Chirling();
  }
}

export class LuarianNibian extends SpriteCoat {
  constructor() {
    super();
    this.coat = new LuarianCoat();
    this.species = new Nibian();
  }
}

export class LuarianGam extends SpriteCoat {
  constructor() {
    super();
    this.coat = new LuarianCoat();
    this.species = new Gam();
  }
}

export class LuarianSenrix extends SpriteCoat {
  constructor() {
    super();
    this.coat = new LuarianCoat();
    this.species = new Senrix();
  }
}

export class LuarianFleuran extends SpriteCoat {
  constructor() {
    super();
    this.coat = new LuarianCoat();
    this.species = new Fleuran();
  }
}

export class LuarianVela extends SpriteCoat {
  constructor() {
    super();
    this.coat = new LuarianCoat();
    this.species = new Vela();
  }
}

export class LuarianEydrun extends SpriteCoat {
  constructor() {
    super();
    this.coat = new LuarianCoat();
    this.species = new Eydrun();
  }
}

export class LuarianGorbin extends SpriteCoat {
  constructor() {
    super();
    this.coat = new LuarianCoat();
    this.species = new Gorbin();
  }
}

export class LuarianLoxi extends SpriteCoat {
  constructor() {
    super();
    this.coat = new LuarianCoat();
    this.species = new Loxi();
  }
}
