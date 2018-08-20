export const ITEMS = Object.freeze({
  GLOW_FRUIT: 1,
  MUSHROOM: 2,
  SHINE_PEPPER: 3,
  ROCK: 4,
  NAME_TAG: 5,
});

export const itemsList = [
  {
    id: ITEMS.GLOW_FRUIT,
    name: 'Glow Fruit',
    canonName: 'glow_fruit',
    category: 'treat',
    description: `A delicious fruit found growing on wild Luarian starvines.`,
    rufusDescription: `Make sure the spit the seeds out when you eat a glowing
      fruit.`,
    buybackPrice: 100,
  },
  {
    id: ITEMS.MUSHROOM,
    name: 'Mushroom',
    canonName: 'mushroom',
    category: 'treat',
    description: `These mushrooms can be seen glowing in woods across Luaria.`,
    rufusDescription: `Whenever I go to Luaria, I make sure to bring home a
      backpack full of glowing mushrooms.`,
    buybackPrice: 100,
  },
  {
    id: ITEMS.SHINE_PEPPER,
    name: 'Shine Pepper',
    canonName: 'shine_pepper',
    category: 'treat',
    description: `The light on this pepper is only slightly hot. But the pepper
      itself is really hot.`,
    rufusDescription: `These little peppers pack a lot more spice than you'd
      think at first. Keep some sugar water nearby if you're tyring one for the
      first time. `,
    buybackPrice: 200,
  },
  {
    id: ITEMS.ROCK,
    name: 'Rock',
    canonName: 'rock',
    category: 'material',
    description: `If you name it, it can become a pet rock!`,
    rufusDescription: `Honestly, I really don't know why people keep selling me
      rocks, but I'll buy 'em.`,
    buybackPrice: 10,
  },
  {
    id: ITEMS.NAME_TAG,
    name: 'Name Tag',
    canonName: 'name_tag',
    category: 'specialty',
    description: `Give your companion a brand new name with this name tag.`,
    rufusDescription: `Name changes, huh? I like my name, but I think changing
      names every now and then could be exciting.`,
    buybackPrice: 1000,
  },
];

export const itemsIndexId = itemsList.reduce((acc, v) => {
  return Object.assign(acc, { [v.id]: v });
}, {});

export const itemsIndexCanonName = itemsList.reduce((acc, v) => {
  return Object.assign(acc, { [v.canonName]: v });
}, {});

export default class Item {
  static fromId(id) {
    if (!(id in itemsIndexId)) return null;
    return itemsIndexId[id];
  }

  static fromCanonName(canonName) {
    if (!(canonName in itemsIndexCanonName)) return null;
    return itemsIndexCanonName[canonName];
  }

  static imageUrl(item) {
    return `/img/items/${item.category}/${item.canonName}.png`;
  }
}
