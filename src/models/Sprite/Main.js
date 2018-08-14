import { sRandomInt, randomChoice, seedChoice, seedChoiceMany, seedChoiceWeighted } from 'utils';
import SpriteCoat from 'models/SpriteCoat';
import SpriteVariant from 'models/SpriteCoat/SpriteVariant';
import SpriteSpecies, { speciesList } from 'models/SpriteSpecies';
import { itemsList } from 'models/Item';
import { nameList } from './nameList';

export const epithets = ['Mighty', 'Speedy', 'Crafty', 'Charming', 'Amazing',
  'Wonderful', 'Besty Bestest', 'Most Wonderful', '1337'];

export function randomName(seed) {
  if (seed) {
    return seedChoice(seed, nameList);
  }
  return randomChoice(nameList);
}

export default class Sprite {
  static create(args) {
    const newSprite = {};

    newSprite.name = args.name || randomName();
    newSprite.soulName = args.soulName || newSprite.name.toLowerCase();

    newSprite.epithet = args.epithet || randomChoice(epithets);
    newSprite.description = args.description || 'The bestest.';
    newSprite.bondingDay = args.bondingDay || (new Date()).toDateString();
    newSprite.favoriteThings = args.favoriteThings || [];
    newSprite.tags = SpriteSpecies.fromId(args.speciesId).tags || [];

    if (args.coat) {
      newSprite.speciesId = SpriteCoat.speciesId(args.coat);
      newSprite.variantId = SpriteCoat.variantId(args.coat);
    } else {
      newSprite.speciesId = args.speciesId;
      newSprite.variantId = args.variantId;
    }

    newSprite.baseHealth = args.baseHealth || 30;
    newSprite.baseStamina = args.baseStamina || 30;
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
    return SpriteVariant.fromId(sprite.variantId);
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

  static randomSprite(seed, list) {
    const pickList = list || speciesList;
    const compSpecies = seedChoiceWeighted(seed, pickList);
    const compCoat = seedChoice(seed + 1, SpriteSpecies.coats(compSpecies));
    const health = sRandomInt(seed + 3, 5, 50);
    const stamina = sRandomInt(seed + 3, 5, 50);
    const favoriteThings = seedChoiceMany(seed + 10, itemsList, 3).map(item => item.id);
    return Sprite.create({
      name: randomName(seed + 2),
      favoriteThings,
      speciesId: compSpecies.id,
      variantId: SpriteCoat.variantId(compCoat),
      health,
      baseHealth: health,
      stamina,
      baseStamina: stamina,
    });
  }
}
