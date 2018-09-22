import {
  sRandomInt, randomChoice, seedChoice, seedChoiceMany,
  seedChoiceWeighted, capitalizeFirst,
} from 'utils';
import SpriteCoat from 'models/SpriteCoat';
import CoatVariant from 'models/SpriteCoat/CoatVariant';
import SpriteSpecies, { speciesList } from 'models/SpriteSpecies';
import { itemsList } from 'models/Item';
import { nameList } from './nameList';
import soulName from './soulName';

export const epithets = ['Mighty', 'Speedy', 'Crafty', 'Charming', 'Amazing',
  'Wonderful', 'Besty Bestest', 'Most Wonderful', '1337'];

export function randomName(seed) {
  if (seed) {
    return seedChoice(seed, nameList);
  }
  return randomChoice(nameList);
}

export default class Sprite {
  static create(args, seed, pickList) {
    args = args || {};
    seed = seed || (new Date()).getTime();
    pickList = pickList || speciesList;

    const newSprite = {};

    newSprite.soulName = args.soulName || soulName(seed);
    newSprite.name = args.name || capitalizeFirst(newSprite.soulName);

    newSprite.epithet = args.epithet || seedChoice(seed, epithets);
    newSprite.description = args.description || 'The bestest.';
    newSprite.bondingDay = args.bondingDay || Math.round((new Date()).getTime() / 1000);
    newSprite.favoriteThings = args.favoriteThings || seedChoiceMany(seed, itemsList, 3).map(item => item.id);

    if (args.coat) {
      newSprite.speciesId = SpriteCoat.speciesId(args.coat);
      newSprite.variantId = SpriteCoat.variantId(args.coat);
    } else if (args.speciesId && args.variantId) {
      newSprite.speciesId = args.speciesId;
      newSprite.variantId = args.variantId;
    } else {
      const compSpecies = seedChoiceWeighted(seed, pickList);
      const compCoat = seedChoice(seed + 1, SpriteSpecies.coats(compSpecies));
      newSprite.speciesId = compSpecies.id;
      newSprite.variantId = SpriteCoat.variantId(compCoat);
    }

    newSprite.baseHealth = args.baseHealth || sRandomInt(seed + 3, 5, 50);
    newSprite.baseStamina = args.baseStamina || sRandomInt(seed + 3, 5, 50);
    newSprite.health = args.health || newSprite.baseHealth;
    newSprite.stamina = args.stamina || newSprite.baseStamina;
    newSprite.exp = args.exp || 0;
    return newSprite;
  }

  static level(sprite) {
    return Math.sqrt(sprite.exp);
  }

  static maxHealth(sprite) {
    return Math.max(Math.floor((sprite.baseHealth * (Sprite.level(sprite) / 100)) + sprite.baseHealth), 1);
  }

  static maxStamina(sprite) {
    return Math.max(Math.floor((sprite.baseStamina * (Sprite.level(sprite) / 100)) + sprite.baseStamina), 1);
  }

  static species(sprite) {
    return SpriteSpecies.fromId(sprite.speciesId);
  }

  static variant(sprite) {
    return CoatVariant.fromId(sprite.variantId);
  }

  static coatKey(sprite) {
    return SpriteCoat.makeKey(sprite.speciesId, sprite.variantId);
  }

  static coatName(sprite) {
    return SpriteCoat.name(Sprite.coatKey(sprite));
  }

  static fullName(sprite) {
    return `${sprite.name} the ${sprite.epithet} ${Sprite.coatName(sprite)}`;
  }

  static imageUrl(sprite) {
    return SpriteCoat.imageUrl(Sprite.coatKey(sprite));
  }

  static url(sprite) {
    return `/sprite/${sprite.soulName}/`;
  }
}
