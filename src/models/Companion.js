export default class Companion {
  constructor(args) {
    args = Object.assign({}, args);
    this.name = args.name;
    this.soulName = args.soulName || this.name.toLowerCase();

    this.epithet = args.epithet || 'Mighty';
    this.description = args.description || 'The bestest.';
    this.bondingDay = args.bondingDay || (new Date());
    this.favoriteThings = args.favoriteThings || [];

    this.species = args.species;
    this.coat = args.coat;
    this.hp = args.hp;
    this.energy = args.energy;
    this.level = args.level;
  }

  imageUrl() {
    return `/img/sprites/${this.species}/${this.coat}.png`;
  }

  url() {
    return `/sprite/${this.soulName}/`;
  }

  serialize() {
    return {
      name: this.name,
      soulName: this.soulName,
      epithet: this.epithet,
      description: this.description,
      bondingDay: this.bondingDay,
      favoriteThings: this.favoriteThings,
      species: this.species,
      coat: this.coat,
      hp: this.hp,
      energy: this.energy,
      level: this.level,
    };
  }
}
