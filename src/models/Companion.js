import SpriteCoat from 'models/SpriteCoat';
import SpriteSpecies from 'models/SpriteSpecies';

export default class Companion {
  constructor(args) {
    args = Object.assign({
      epithet: 'Mighty',
      description: 'The bestest.',
      bondingDay: (new Date()).toDateString(),
      favoriteThings: [],
    }, args);
    this.name = args.name;
    this.soulName = args.soulName || this.name.toLowerCase();

    this.epithet = args.epithet;
    this.description = args.description;
    this.bondingDay = args.bondingDay;
    this.favoriteThings = args.favoriteThings;

    this.speciesId = args.speciesId || args.species.id;
    this.coatId = args.coatId;
    this.maxHealth = args.maxHealth || args.health;
    this.maxStamina = args.maxStamina || args.stamina;
    this.maxFocus = args.maxFocus || args.focus;
    this.health = args.health;
    this.stamina = args.stamina;
    this.focus = args.focus;
    this.level = args.level;
    this.tags = SpriteSpecies.fromId(this.speciesId).tags;
  }

  get species() {
    return SpriteSpecies.fromId(this.speciesId);
  }

  get coat() {
    return SpriteCoat.fromId(this.coatId);
  }

  coatName() {
    return this.coat.fullName();
  }

  fullName() {
    return `${this.name} the ${this.epithet} ${this.coatName()}`;
  }

  imageUrl() {
    return this.coat.imageUrl();
  }

  url() {
    return `/sprite/${this.soulName}/`;
  }

  serialize() {
    return {
      name: this.name,
      soulName: this.soulName,
      epithet: this.epithet,
      description: this.description,
      bondingDay: this.bondingDay,
      favoriteThings: this.favoriteThings,
      speciesId: this.speciesId,
      coatId: this.coatId,
      health: this.health,
      stamina: this.stamina,
      focus: this.focus,
      maxHealth: this.maxHealth,
      maxStamina: this.maxStamina,
      maxFocus: this.maxFocus,
      level: this.level,
    };
  }
}
