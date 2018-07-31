import SpriteSpecies from 'models/SpriteSpecies';
import _coatList from './coatListRaw';

export { coatVariantsList } from './coatListRaw';

export default class SpriteCoat {
  constructor(args) {
    args = Object.assign({}, args);

    this.variant = args.variant;
    this.speciesCanonName = args.speciesCanonName;
  }

  get id() {
    return _coatList.findIndex(coat => this.equals(coat)) + 1;
  }

  get species() {
    return SpriteSpecies.fromCanonName(this.speciesCanonName);
  }

  equals(other) {
    return this.species.canonName === other.speciesCanonName && this.variant.canonName === other.variant.canonName;
  }

  name() {
    return this.variant.name;
  }

  fullName() {
    return `${this.variant.name} ${this.species.name}`;
  }

  url() {
    return `/coats#${this.variant.canonName}`;
  }

  imageUrl() {
    return `/img/sprites/${this.species.canonName}/${this.variant.canonName}.png`;
  }
}

export const coatList = _coatList.map(coat => (new SpriteCoat(coat)));

SpriteCoat.fromId = (id) => {
  const zeroIndexed = id - 1;
  return coatList[zeroIndexed];
};

SpriteCoat.fromSpeciesAndVariant = (speciesCanonName, variantCanonName) => {
  return coatList.find((coat) => {
    return speciesCanonName === coat.speciesCanonName && variantCanonName === coat.variant.canonName;
  });
};

SpriteCoat.bySpecies = (canonName) => {
  return coatList.filter(coat => (canonName === coat.speciesCanonName));
};

SpriteCoat.byVariant = (canonName) => {
  return coatList.filter(coat => (canonName === coat.variant.canonName));
};
