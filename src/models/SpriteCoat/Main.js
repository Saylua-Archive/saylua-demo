import SpriteSpecies from 'models/SpriteSpecies';

export class CoatType {
  constructor() {
    this.name = 'Coat';
    this.canonName = 'coat';
  }
}

export default class SpriteCoat {
  constructor() {
    this.coat = new CoatType();
    this.species = new SpriteSpecies();
  }

  fullName() {
    return `${this.coat.name} ${this.species.name}`;
  }

  imageUrl(coat) {
    return `/img/sprites/${this.species.canonName}/${this.coat.canonName}.png`;
  }
}
