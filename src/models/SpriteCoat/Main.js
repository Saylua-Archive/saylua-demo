import SpriteSpecies from 'models/SpriteSpecies';
import CoatVariant from './CoatVariant';

import { COATS } from './constants';

function _speciesId(coatKey) {
  return coatKey[0];
}

function _variantId(coatKey) {
  return coatKey[1];
}

export const coatsList = Object.values(COATS);

export const coatsIndexSpeciesId = coatsList.reduce((acc, v) => {
  let coats = acc[_speciesId(v)] || [];
  coats = coats.concat([v]);

  return Object.assign(acc, { [_speciesId(v)]: coats });
}, {});

export const coatsIndexVariantId = coatsList.reduce((acc, v) => {
  let coats = acc[_variantId(v)] || [];
  coats = coats.concat([v]);

  return Object.assign(acc, { [_variantId(v)]: coats });
}, {});

export default class SpriteCoat {
  // Check if a coat combination is valid.
  static coatExists(speciesId, variantId) {
    return SpriteCoat.bySpecies(speciesId).find(coat => SpriteCoat.equals(
      coat,
      SpriteCoat.makeKey(speciesId, variantId),
    ));
  }

  // Create a key "tuple" given a speciesId, and a variantId.
  static makeKey(speciesId, variantId) {
    return [speciesId, variantId];
  }

  static stringKey(coatKey) {
    return `${coatKey[0]} ${coatKey[1]}`;
  }

  // Lookup functions.

  static bySpecies(speciesId) {
    if (!(speciesId in coatsIndexSpeciesId)) return null;
    return coatsIndexSpeciesId[speciesId];
  }

  static byVariant(variantId) {
    if (!(variantId in coatsIndexVariantId)) return null;
    return coatsIndexVariantId[variantId];
  }

  // Object helpers.

  static speciesId(coatKey) {
    return _speciesId(coatKey);
  }

  static variantId(coatKey) {
    return _variantId(coatKey);
  }

  static species(coatKey) {
    return SpriteSpecies.fromId(_speciesId(coatKey));
  }

  static variant(coatKey) {
    return CoatVariant.fromId(_variantId(coatKey));
  }

  static equals(a, b) {
    return _speciesId(a) === _speciesId(b) && _variantId(a) === _variantId(b);
  }

  static name(coatKey) {
    return `${SpriteCoat.variant(coatKey).name} ${SpriteCoat.species(coatKey).name}`;
  }

  static url(coatKey) {
    return `/guide/coats#${SpriteCoat.variant(coatKey).canonName}`;
  }

  static imageUrl(coatKey) {
    return `/img/sprites/${SpriteCoat.species(coatKey).canonName}/${
      SpriteCoat.variant(coatKey).canonName}.png`;
  }
}
