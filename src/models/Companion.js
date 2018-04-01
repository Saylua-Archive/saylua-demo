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

export const species = [
  ['arko', ['albino', 'common', 'melanistic', 'piebald']],
  ['chirling', ['albino', 'common', 'melanistic', 'piebald']],
  ['eydrun', ['albino', 'common', 'melanistic', 'piebald']],
  ['fleuran', ['albino', 'common', 'melanistic', 'piebald']],
  ['gam', ['albino', 'common', 'melanistic', 'piebald']],
  ['gorbin', ['albino', 'common', 'melanistic', 'piebald']],
  ['loxi', ['albino', 'common', 'melanistic', 'piebald']],
  ['nibian', ['albino', 'common', 'melanistic', 'piebald']],
  ['senrix', ['albino', 'common', 'melanistic', 'piebald']],
  ['vela', ['albino', 'common', 'melanistic', 'piebald']],
];
