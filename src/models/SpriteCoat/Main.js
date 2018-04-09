import SpriteSpecies from 'models/SpriteSpecies';

export default class SpriteCoat {
  constructor() {
    this.coatName = 'Coat';
    this.canonName = 'species/coat';
    this.species = new SpriteSpecies();
  }

  fullName() {
    return `${this.coatName} ${this.species.name}`;
  }

  imageUrl(coat) {
    return `/img/sprites/${this.canonName}.png`;
  }
}
