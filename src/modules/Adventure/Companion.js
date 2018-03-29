export default function Companion(name, species, coloration, hp, energy, lvl) {
  this.name = name;
  this.species = species;
  this.coloration = coloration;
  this.hp = hp;
  this.energy = energy;
  this.lvl = lvl;
}

export const species = [
  ['arko', ['albino', 'common', 'melanistic', 'piebald']],
  ['chirling', ['albino', 'common', 'melanistic']],
  ['eydrun', ['albino', 'common', 'melanistic']],
  ['fleuran', ['albino', 'common', 'melanistic']],
  ['gam', ['albino', 'common', 'melanistic']],
  ['gorbin', ['albino', 'common', 'melanistic']],
  ['loxi', ['albino', 'common', 'melanistic']],
  ['nibian', ['albino', 'common', 'melanistic']],
  ['vela', ['albino', 'common', 'melanistic']],
];
