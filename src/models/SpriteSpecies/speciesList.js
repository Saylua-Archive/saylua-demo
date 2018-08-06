import { SPECIES, REGIONS, TAGS } from './constants';
import { COAT_VARIANTS } from 'models/SpriteCoat/constants';

export const speciesList = [
  {
    id: SPECIES.ARKO,

    name: 'Arko',
    canonName: 'arko',
    plural: 'Arkos',
    facesRight: true,
    portraitCoordinateX: 200,
    portraitCoordinateY: 80,
    portraitSize: 100,

    region: REGIONS.UNIVERSAL,
    canonicalVariant: COAT_VARIANTS.LUARIAN,
    description: `Arkos are pensive companions who are usually quite
      loyal to their human guardians. They don't bite, but they do have a
      tendency to be mouthy when showing their affection.`,

    // Size is stored in inches.
    sizeMean: 40,
    sizeVariance: 5,
    sizeName: 'Length',

    // Weight is stored in pounds.
    weightMean: 50,
    weightVariance: 5,

    // Tags for targeting
    tags: [TAGS.FUR],
  },

  {
    id: SPECIES.CHIRLING,

    name: 'Chirling',
    canonName: 'chirling',
    plural: 'Chirlings',
    facesRight: true,
    portraitCoordinateX: 70,
    portraitCoordinateY: 60,
    portraitSize: 100,

    region: REGIONS.UNIVERSAL,
    canonicalVariant: COAT_VARIANTS.SAYLIAN,
    description: `Chirlings are highly energetic sprites who can
      frequently be heard chirping across the forest. New guardians often find
      themselves overwhelmed with attention when caring for a Chirling.`,

    // Size is stored in inches.
    sizeMean: 50,
    sizeVariance: 10,
    sizeName: 'Wingspan',

    // Weight is stored in pounds.
    weightMean: 20,
    weightVariance: 5,


    // Tags for targeting
    tags: [TAGS.FLY],
  },

  {
    id: SPECIES.NIBIAN,

    name: 'Nibian',
    canonName: 'nibian',
    plural: 'Nibians',
    facesRight: false,
    portraitCoordinateX: 5,
    portraitCoordinateY: 170,
    portraitSize: 100,

    region: REGIONS.UNIVERSAL,
    canonicalVariant: COAT_VARIANTS.SAYLIAN,
    description: `Nibians are easygoing and cheerful critters who love to
      play in water and explore the land. Playing with a Nibian is a rewarding
      experience for those who aren't afraid of getting splashed frequently.`,

    // Size is stored in inches.
    sizeMean: 60,
    sizeVariance: 10,
    sizeName: 'Length',

    // Weight is stored in pounds.
    weightMean: 40,
    weightVariance: 5,


    // Tags for targeting
    tags: [TAGS.SWIM],
  },

  {
    id: SPECIES.GAM,

    name: 'Gam',
    canonName: 'gam',
    plural: 'Gams',
    facesRight: true,
    portraitCoordinateX: 180,
    portraitCoordinateY: 10,
    portraitSize: 100,

    region: REGIONS.UNIVERSAL,
    canonicalVariant: COAT_VARIANTS.SAYLIAN,
    description: `Gams are hardy creatures who can be seen frolicking
      across many regions in Saylua.`,

    // Size is stored in inches.
    sizeMean: 48,
    sizeVariance: 10,
    sizeName: 'Height',

    // Weight is stored in pounds.
    weightMean: 100,
    weightVariance: 20,


    // Tags for targeting
    tags: [TAGS.FUR],
  },

  {
    id: SPECIES.SENRIX,

    name: 'Senrix',
    canonName: 'senrix',
    plural: 'Senrices',
    facesRight: false,
    portraitCoordinateX: 5,
    portraitCoordinateY: 180,
    portraitSize: 100,

    region: REGIONS.UNIVERSAL,
    canonicalVariant: COAT_VARIANTS.PIEBALD,
    description: `Senrices are cunning creatures who can live in a
      surprising number of different regions.`,

    // Size is stored in inches.
    sizeMean: 36,
    sizeVariance: 10,
    sizeName: 'Length',

    // Weight is stored in pounds.
    weightMean: 50,
    weightVariance: 10,


    // Tags for targeting
    tags: [TAGS.FUR],
  },

  {
    id: SPECIES.FLEURAN,

    name: 'Fleuran',
    canonName: 'fleuran',
    plural: 'Fleurans',
    facesRight: true,
    portraitCoordinateX: 190,
    portraitCoordinateY: 220,
    portraitSize: 100,

    region: REGIONS.SAYLIAN,
    canonicalVariant: COAT_VARIANTS.CALICO,
    description: `Fleurans are found across Sayleus, in all sorts of
      bodies of water. These flowery fish have photosynthetic wens and fins,
      which allow them to absorb energy from the sun's constant rays.`,

    // Size is stored in inches.
    sizeMean: 40,
    sizeVariance: 15,
    sizeName: 'Length',

    // Weight is stored in pounds.
    weightMean: 80,
    weightVariance: 20,


    // Tags for targeting
    tags: [TAGS.SWIM],
  },

  {
    id: SPECIES.VELA,

    name: 'Vela',
    canonName: 'vela',
    plural: 'Vela',
    facesRight: true,
    portraitCoordinateX: 190,
    portraitCoordinateY: 90,
    portraitSize: 100,

    region: REGIONS.SAYLIAN,
    canonicalVariant: COAT_VARIANTS.SAYLIAN,
    description: `The Vela is an elusive Saylian creature which
      gathers clouds and mist on its body to protect itself from the sun's
      rays.`,

    // Size is stored in inches.
    sizeMean: 30,
    sizeVariance: 5,
    sizeName: 'Length',

    // Weight is stored in pounds.
    weightMean: 35,
    weightVariance: 10,


    // Tags for targeting
    tags: [TAGS.FLY, TAGS.FUR],
  },

  {
    id: SPECIES.EYDRUN,

    name: 'Eydrun',
    canonName: 'eydrun',
    plural: 'Eydruns',
    facesRight: false,
    portraitCoordinateX: 30,
    portraitCoordinateY: 40,
    portraitSize: 100,

    region: REGIONS.LUARIAN,
    canonicalVariant: COAT_VARIANTS.LUARIAN,
    description: `In the deep dark of the Luarian woods, Eydruns lurk
      silently, watching all who pass by. These quiet hunters use their many
      eyes to look in all directions while standing perfectly still in the
      dark.`,

    // Size is stored in inches.
    sizeMean: 40,
    sizeVariance: 5,
    sizeName: 'Height',

    // Weight is stored in pounds.
    weightMean: 150,
    weightVariance: 20,


    // Tags for targeting
    tags: [TAGS.FUR],
  },

  {
    id: SPECIES.GORBIN,

    name: 'Gorbin',
    canonName: 'gorbin',
    plural: 'Gorbins',
    facesRight: true,
    portraitCoordinateX: 130,
    portraitCoordinateY: 160,
    portraitSize: 200,

    region: REGIONS.LUARIAN,
    canonicalVariant: COAT_VARIANTS.LUARIAN,
    description: `Gorbins generally live in the cold, deep oceans of
      Luaria, keeping warm with their blubbery skin. However, wild Gorbins
      are known to occasionally explore estuaries and beaches where humans can
      see their lights from the shore.`,

    // Size is stored in inches.
    sizeMean: 50,
    sizeVariance: 10,
    sizeName: 'Length',

    // Weight is stored in pounds.
    weightMean: 200,
    weightVariance: 50,

    // Tags for targeting
    tags: [TAGS.SWIM],
  },

  {
    id: SPECIES.LOXI,

    name: 'Loxi',
    canonName: 'loxi',
    plural: 'Loxis',
    facesRight: false,
    portraitCoordinateX: 70,
    portraitCoordinateY: 80,
    portraitSize: 100,

    region: REGIONS.DAWNISH,
    canonicalVariant: COAT_VARIANTS.ALBINO,
    description: `Loxis are fierce wild creatures found in the Dawnlands.
      They are known for being highly territorial and have a tendency to only
      show respect to those who can defeat them in combat.`,

    // Size is stored in inches.
    sizeMean: 80,
    sizeVariance: 20,
    sizeName: 'Length',

    // Weight is stored in pounds.
    weightMean: 100,
    weightVariance: 10,

    // Tags for targeting
    tags: [TAGS.FUR],
  },
];
