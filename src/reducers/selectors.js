import { createSelector } from 'reselect';

import SpriteCoat from 'models/SpriteCoat';

const spritesSelector = state => state.sayluaState.sprites;
const companionIdsSelector = state => state.sayluaState.companionIds;
const activeCompanionIdSelector = state => state.sayluaState.activeCompanionId;

// Returns a map of all sprite data with the soul names as the keys.
export const spritesBySoulNameSelector = createSelector(
  spritesSelector,
  sprites => Object.keys(sprites).reduce((acc, sId) => {
    const s = sprites[sId];
    return Object.assign(acc, { [s.soulName]: s });
  }, {}),
);

export const companionsSelector = createSelector(
  spritesSelector,
  companionIdsSelector,
  (sprites, companionIds) => companionIds.map(id => sprites[id]),
);

export const companionsBySpeciesSelector = createSelector(
  companionsSelector,
  (companions) => {
    const speciesMap = {};
    companions.forEach((comp) => {
      if (comp.speciesId in speciesMap) {
        speciesMap[comp.speciesId].push(comp);
      } else {
        speciesMap[comp.speciesId] = [comp];
      }
    });
    return speciesMap;
  },
);

export const companionsByCoatSelector = createSelector(
  companionsSelector,
  (companions) => {
    const speciesMap = {};
    companions.forEach((comp) => {
      const key = SpriteCoat.stringKey(SpriteCoat.makeKey(comp.speciesId, comp.variantId));
      if (key in speciesMap) {
        speciesMap[key].push(comp);
      } else {
        speciesMap[key] = [comp];
      }
    });
    return speciesMap;
  },
);

export const activeCompanionSelector = createSelector(
  spritesSelector,
  activeCompanionIdSelector,
  (sprites, activeCompanionId) => (activeCompanionId ? sprites[activeCompanionId] : null),
);

export const maxSpriteIdFunc = (sprites) => {
  const ids = Object.keys(sprites);
  if (!ids.length) return 0;
  return Math.max(...ids);
};

export const maxSpriteIdSelector = createSelector(
  spritesSelector,
  maxSpriteIdFunc,
);
