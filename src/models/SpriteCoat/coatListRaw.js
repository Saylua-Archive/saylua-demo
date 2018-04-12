export const coatVariantsList = [
  {
    canonName: 'albino',
    name: 'Albino',
  },
  {
    canonName: 'calico',
    name: 'Calico',
  },
  {
    canonName: 'dawnish',
    name: 'Dawnish',
  },
  {
    canonName: 'earthen',
    name: 'Earthen',
  },
  {
    canonName: 'luarian',
    name: 'Luarian',
  },
  {
    canonName: 'melanistic',
    name: 'Melanistic',
  },
  {
    canonName: 'piebald',
    name: 'Piebald',
  },
  {
    canonName: 'saylian',
    name: 'Saylian',
  },
];

export const coatVariants = coatVariantsList.reduce((acc, v) => (
  Object.assign(acc, { [v.canonName]: v })
), {});

const coatListRaw = [
  {
    variant: coatVariants.albino,
    speciesCanonName: 'arko',
  },
  {
    variant: coatVariants.albino,
    speciesCanonName: 'chirling',
  },
  {
    variant: coatVariants.albino,
    speciesCanonName: 'nibian',
  },
  {
    variant: coatVariants.albino,
    speciesCanonName: 'gam',
  },
  {
    variant: coatVariants.albino,
    speciesCanonName: 'senrix',
  },
  {
    variant: coatVariants.albino,
    speciesCanonName: 'fleuran',
  },
  {
    variant: coatVariants.albino,
    speciesCanonName: 'vela',
  },
  {
    variant: coatVariants.albino,
    speciesCanonName: 'eydrun',
  },
  {
    variant: coatVariants.albino,
    speciesCanonName: 'gorbin',
  },
  {
    variant: coatVariants.albino,
    speciesCanonName: 'loxi',
  },
  {
    variant: coatVariants.melanistic,
    speciesCanonName: 'arko',
  },
  {
    variant: coatVariants.melanistic,
    speciesCanonName: 'chirling',
  },
  {
    variant: coatVariants.melanistic,
    speciesCanonName: 'nibian',
  },
  {
    variant: coatVariants.melanistic,
    speciesCanonName: 'gam',
  },
  {
    variant: coatVariants.melanistic,
    speciesCanonName: 'senrix',
  },
  {
    variant: coatVariants.melanistic,
    speciesCanonName: 'fleuran',
  },
  {
    variant: coatVariants.melanistic,
    speciesCanonName: 'vela',
  },
  {
    variant: coatVariants.melanistic,
    speciesCanonName: 'eydrun',
  },
  {
    variant: coatVariants.melanistic,
    speciesCanonName: 'gorbin',
  },
  {
    variant: coatVariants.melanistic,
    speciesCanonName: 'loxi',
  },
  {
    variant: coatVariants.piebald,
    speciesCanonName: 'arko',
  },
  {
    variant: coatVariants.piebald,
    speciesCanonName: 'chirling',
  },
  {
    variant: coatVariants.piebald,
    speciesCanonName: 'nibian',
  },
  {
    variant: coatVariants.piebald,
    speciesCanonName: 'gam',
  },
  {
    variant: coatVariants.piebald,
    speciesCanonName: 'senrix',
  },
  {
    variant: coatVariants.piebald,
    speciesCanonName: 'fleuran',
  },
  {
    variant: coatVariants.piebald,
    speciesCanonName: 'vela',
  },
  {
    variant: coatVariants.piebald,
    speciesCanonName: 'eydrun',
  },
  {
    variant: coatVariants.piebald,
    speciesCanonName: 'gorbin',
  },
  {
    variant: coatVariants.piebald,
    speciesCanonName: 'loxi',
  },

  {
    variant: coatVariants.luarian,
    speciesCanonName: 'arko',
  },
  {
    variant: coatVariants.luarian,
    speciesCanonName: 'chirling',
  },
  {
    variant: coatVariants.luarian,
    speciesCanonName: 'nibian',
  },
  {
    variant: coatVariants.luarian,
    speciesCanonName: 'gam',
  },
  {
    variant: coatVariants.luarian,
    speciesCanonName: 'senrix',
  },
  {
    variant: coatVariants.luarian,
    speciesCanonName: 'fleuran',
  },
  {
    variant: coatVariants.luarian,
    speciesCanonName: 'vela',
  },
  {
    variant: coatVariants.luarian,
    speciesCanonName: 'eydrun',
  },
  {
    variant: coatVariants.luarian,
    speciesCanonName: 'gorbin',
  },
  {
    variant: coatVariants.luarian,
    speciesCanonName: 'loxi',
  },

  {
    variant: coatVariants.saylian,
    speciesCanonName: 'arko',
  },
  {
    variant: coatVariants.saylian,
    speciesCanonName: 'chirling',
  },
  {
    variant: coatVariants.saylian,
    speciesCanonName: 'nibian',
  },
  {
    variant: coatVariants.saylian,
    speciesCanonName: 'gam',
  },
  {
    variant: coatVariants.saylian,
    speciesCanonName: 'senrix',
  },
  {
    variant: coatVariants.saylian,
    speciesCanonName: 'fleuran',
  },
  {
    variant: coatVariants.saylian,
    speciesCanonName: 'vela',
  },
  {
    variant: coatVariants.saylian,
    speciesCanonName: 'eydrun',
  },
  {
    variant: coatVariants.saylian,
    speciesCanonName: 'gorbin',
  },
  {
    variant: coatVariants.saylian,
    speciesCanonName: 'loxi',
  },

  {
    variant: coatVariants.dawnish,
    speciesCanonName: 'vela',
  },

  {
    variant: coatVariants.earthen,
    speciesCanonName: 'arko',
  },
  {
    variant: coatVariants.earthen,
    speciesCanonName: 'senrix',
  },
  {
    variant: coatVariants.calico,
    speciesCanonName: 'fleuran',
  },
];

export default coatListRaw;
