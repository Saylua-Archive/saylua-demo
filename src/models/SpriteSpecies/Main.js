import gaussian from 'gaussian';

import SpriteCoat from 'models/SpriteCoat';
import { REGIONS } from './constants';
import { speciesList } from './speciesList';

export { speciesList } from './speciesList';
export const regionList = Object.values(REGIONS);

export const speciesIndexId = speciesList.reduce((acc, v) => {
  return Object.assign(acc, { [v.id]: v });
}, {});

export const speciesIndexCanonName = speciesList.reduce((acc, v) => {
  return Object.assign(acc, { [v.canonName]: v });
}, {});

export const speciesIndexRegion = speciesList.reduce((acc, v) => {
  let regionSpecies = acc[v.region] || [];
  regionSpecies = regionSpecies.concat([v]);

  return Object.assign(acc, { [v.region]: regionSpecies });
}, {});

export default class SpriteSpecies {
  // Lookup functions.
  static fromCanonName(canonName) {
    if (!(canonName in speciesIndexCanonName)) return null;
    return speciesIndexCanonName[canonName];
  }

  static fromId(id) {
    if (!(id in speciesIndexId)) return null;
    return speciesIndexId[id];
  }

  static byRegion(region) {
    if (!(region in speciesIndexRegion)) return null;
    return speciesIndexRegion[region];
  }

  // Object helpers.

  static equals(a, b) {
    return a.canonName === b.canonName;
  }

  static generateSize(species) {
    return gaussian(species.sizeMean, species.sizeVariance);
  }

  static generateWeight(species) {
    return gaussian(species.weightMean, species.weightVariance);
  }

  static imageUrl(species) {
    return SpriteCoat.imageUrl(SpriteCoat.makeKey(species.id, species.canonicalVariant));
  }

  static url(species) {
    return `/species/${species.canonName}/`;
  }

  static coats(species) {
    return SpriteCoat.bySpecies(species.id);
  }

  static variants(species) {
    return SpriteCoat.bySpecies(species.id).map(coat => SpriteCoat.variant(coat));
  }

  static hasTag(species, tag) {
    return species.tags.includes(tag);
  }
}
