import { variantsList } from './variantsList';

export { variantsList } from './variantsList';

export const variantsIndexId = variantsList.reduce((acc, v) => {
  return Object.assign(acc, { [v.id]: v });
}, {});

export const variantsIndexCanonName = variantsList.reduce((acc, v) => {
  return Object.assign(acc, { [v.canonName]: v });
}, {});

export default class CoatVariant {
  // Lookup functions.
  static fromCanonName(canonName) {
    if (!(canonName in variantsIndexCanonName)) return null;
    return variantsIndexCanonName[canonName];
  }

  static fromId(id) {
    if (!(id in variantsIndexId)) return null;
    return variantsIndexId[id];
  }

  // Object helpers.
  static equals(a, b) {
    return a.id === b.id;
  }

  static url(variant) {
    return `/guide/coats#${variant.canonName}`;
  }
}
