import gaussian from 'gaussian';

export default class SpriteSpecies {
  constructor() {
    this.name = 'Sprite';
    this.canonName = 'sprite';

    this.plural = 'Sprites';

    this.canonicalCoat = 'common';
    this.description = 'I am an invisible sprite.';

    // Size is stored in inches.
    this.sizeMean = 40;
    this.sizeVariance = 5;
    this.sizeName = 'Height';

    // Weight is stored in pounds.
    this.weightMean = 50;
    this.weightVariance = 5;

    this.coats = [];
  }

  generateSizeAndWeight() {
    const size = gaussian(this.sizeMean, this.sizeVariance);
    const weight = gaussian(this.weightMean, this.weightVariance);
    return [size, weight];
  }

  imageUrl(coat) {
    return `/img/sprites/${this.canonName}/${coat || this.canonicalCoat}.png`;
  }

  url(coat) {
    return `/species/${this.canonName}/${coat || ''}`;
  }
}

export class Arko extends SpriteSpecies {
  constructor() {
    super();

    this.name = 'Arko';
    this.canonName = 'arko';
    this.plural = 'Arkos';

    this.canonicalCoat = 'common';
    this.description = `Arkos are pensive companions who are usually quite
      loyal to their human guardians. They don't bite, but they do have a
      tendency to be mouthy when showing their affection.`;

    // Size is stored in inches.
    this.sizeMean = 40;
    this.sizeVariance = 5;
    this.sizeName = 'Length';

    // Weight is stored in pounds.
    this.weightMean = 50;
    this.weightVariance = 5;

    this.coats = ['albino', 'common', 'melanistic', 'piebald'];
  }
}

export class Chirling extends SpriteSpecies {
  constructor() {
    super();

    this.name = 'Chirling';
    this.canonName = 'chirling';
    this.plural = 'Chirlings';

    this.canonicalCoat = 'common';
    this.description = `Chirlings are highly energetic sprites who can
      frequently be heard chirping across the forest. New guardians often find
      themselves overwhelmed with attention when caring for a Chirling.`;

    // Size is stored in inches.
    this.sizeMean = 50;
    this.sizeVariance = 10;
    this.sizeName = 'Wingspan';

    // Weight is stored in pounds.
    this.sizeMean = 20;
    this.sizeVariance = 5;

    this.coats = ['albino', 'common', 'melanistic', 'piebald'];
  }
}

export class Nibian extends SpriteSpecies {
  constructor() {
    super();

    this.name = 'Nibian';
    this.canonName = 'nibian';
    this.plural = 'Nibians';

    this.canonicalCoat = 'common';
    this.description = `Nibians are easygoing and cheerful critters who love to
      play in water and explore the land. Playing with a Nibian is a rewarding
      experience for those who aren't afraid of getting splashed frequently.`;

    // Size is stored in inches.
    this.sizeMean = 60;
    this.sizeVariance = 10;
    this.sizeName = 'Length';

    // Weight is stored in pounds.
    this.sizeMean = 40;
    this.sizeVariance = 5;

    this.coats = ['albino', 'common', 'melanistic', 'piebald'];
  }
}

export class Gam extends SpriteSpecies {
  constructor() {
    super();

    this.name = 'Gam';
    this.canonName = 'gam';
    this.plural = 'Gams';

    this.canonicalCoat = 'common';
    this.description = `Gams are hardy creatures who can be seen frolicking
      across many regions in Saylua.`;

    // Size is stored in inches.
    this.sizeMean = 48;
    this.sizeVariance = 10;
    this.sizeName = 'Height';

    // Weight is stored in pounds.
    this.sizeMean = 100;
    this.sizeVariance = 20;

    this.coats = ['albino', 'common', 'melanistic', 'piebald'];
  }
}

export class Senrix extends SpriteSpecies {
  constructor() {
    super();

    this.name = 'Senrix';
    this.canonName = 'senrix';
    this.plural = 'Senrices';

    this.canonicalCoat = 'piebald';
    this.description = `Senrices are cunning creatures who can live in a
      surprising number of different regions.`;

    // Size is stored in inches.
    this.sizeMean = 36;
    this.sizeVariance = 10;
    this.sizeName = 'Length';

    // Weight is stored in pounds.
    this.sizeMean = 50;
    this.sizeVariance = 10;

    this.coats = ['albino', 'common', 'melanistic', 'piebald'];
  }
}

export class Fleuran extends SpriteSpecies {
  constructor() {
    super();

    this.name = 'Fleuran';
    this.canonName = 'fleuran';
    this.plural = 'Fleurans';

    this.canonicalCoat = 'common';
    this.description = `Fleurans are found across Sayleus, in all sorts of
      bodies of water. These flowery fish have photosynthetic wens and fins,
      which allow them to absorb energy from the sun's constant rays.`;

    // Size is stored in inches.
    this.sizeMean = 40;
    this.sizeVariance = 15;
    this.sizeName = 'Length';

    // Weight is stored in pounds.
    this.sizeMean = 80;
    this.sizeVariance = 20;

    this.coats = ['albino', 'common', 'melanistic', 'piebald', 'saylian'];
  }
}

export class Vela extends SpriteSpecies {
  constructor() {
    super();

    this.name = 'Vela';
    this.canonName = 'vela';
    this.plural = 'Vela';

    this.canonicalCoat = 'saylian';
    this.description = `The Vela is an elusive Saylian creature which
      gathers clouds and mist on its body to protect itself from the sun's
      rays.`;

    // Size is stored in inches.
    this.sizeMean = 30;
    this.sizeVariance = 5;
    this.sizeName = 'Length';

    // Weight is stored in pounds.
    this.sizeMean = 35;
    this.sizeVariance = 10;

    this.coats = ['albino', 'common', 'melanistic', 'piebald', 'saylian'];
  }
}

export class Eydrun extends SpriteSpecies {
  constructor() {
    super();

    this.name = 'Eydrun';
    this.canonName = 'eydrun';
    this.plural = 'Eydruns';

    this.canonicalCoat = 'common';
    this.description = `In the deep dark of the Luarian woods, Eydruns lurk
      silently, watching all who pass by. These quiet hunters use their many
      eyes to look in all directions while standing perfectly still in the
      dark.`;

    // Size is stored in inches.
    this.sizeMean = 40;
    this.sizeVariance = 5;
    this.sizeName = 'Height';

    // Weight is stored in pounds.
    this.sizeMean = 150;
    this.sizeVariance = 20;

    this.coats = ['albino', 'common', 'melanistic', 'piebald', 'saylian'];
  }
}

export class Gorbin extends SpriteSpecies {
  constructor() {
    super();

    this.name = 'Gorbin';
    this.canonName = 'gorbin';
    this.plural = 'Gorbins';

    this.canonicalCoat = 'melanistic';
    this.description = `Gorbins generally live in the cold, deep oceans of
      Luaria, keeping warm with their blubbery skin. However, wild Gorbins
      are known to occasionally explore estuaries and beaches where humans can
      see their lights from the shore.`;

    // Size is stored in inches.
    this.sizeMean = 50;
    this.sizeVariance = 10;
    this.sizeName = 'Length';

    // Weight is stored in pounds.
    this.sizeMean = 200;
    this.sizeVariance = 50;

    this.coats = ['albino', 'common', 'melanistic', 'piebald', 'saylian'];
  }
}

export class Loxi extends SpriteSpecies {
  constructor() {
    super();

    this.name = 'Loxi';
    this.canonName = 'loxi';
    this.plural = 'Loxis';

    this.canonicalCoat = 'albino';
    this.description = `Loxis are fierce wild creatures found in the Dawnlands.
      They are known for being highly territorial and have a tendency to only
      show respect to those who can defeat them in combat.`;

    // Size is stored in inches.
    this.sizeMean = 80;
    this.sizeVariance = 20;
    this.sizeName = 'Length';

    // Weight is stored in pounds.
    this.sizeMean = 100;
    this.sizeVariance = 10;

    this.coats = ['albino', 'common', 'melanistic', 'piebald', 'saylian'];
  }
}

export const speciesList = [
  new Arko(),
  new Chirling(),
  new Nibian(),

  new Gam(),
  new Senrix(),

  new Fleuran(),
  new Vela(),

  new Eydrun(),
  new Gorbin(),

  new Loxi(),
];

export const speciesIndex = speciesList.reduce((acc, v) => Object.assign(acc, { [v.canonName]: v }), {});
