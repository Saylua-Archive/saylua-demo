export default class Companion {
  constructor(args) {
    args = Object.assign({}, args);
    this.name = args.name;
    this.species = args.species;
    this.coat = args.coat;
    this.hp = args.hp;
    this.energy = args.energy;
    this.level = args.level;
  }

  imageUrl() {
    return `/img/pets/${this.species}/${this.coat}.png`;
  }

  serialize() {
    return {
      name: this.name,
      species: this.species,
      coat: this.coat,
      hp: this.hp,
      energy: this.energy,
      level: this.level,
    };
  }
}
