import { createSelector } from 'reselect';

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

export const activeCompanionSelector = createSelector(
  spritesSelector,
  activeCompanionIdSelector,
  (sprites, activeCompanionId) => (activeCompanionId ? sprites[activeCompanionId] : null),
);

export const maxSpriteIdFunc = sprites => Math.max(...Object.keys(sprites).map(num => Number.parseInt(num)));

export const maxSpriteIdSelector = createSelector(
  spritesSelector,
  maxSpriteIdFunc,
);
