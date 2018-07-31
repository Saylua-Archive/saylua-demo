export const ITEMS = Object.freeze({
  GLOW_FRUIT: 1,
  MUSHROOM: 2,
  SHINE_PEPPER: 3,
});

export const itemsList = [
  {
    id: ITEMS.GLOW_FRUIT,
    name: 'Glow Fruit',
    canonName: 'glow_fruit',
    category: 'treat',
    description: 'A tasty treat for your sprite.',
    buybackPrice: 100,
  },
  {
    id: ITEMS.MUSHROOM,
    name: 'Mushroom',
    canonName: 'mushroom',
    category: 'treat',
    description: 'A tasty treat for your sprite.',
    buybackPrice: 100,
  },
  {
    id: ITEMS.SHINE_PEPPER,
    name: 'Shine Pepper',
    canonName: 'shine_pepper',
    category: 'treat',
    description: 'A tasty treat for your sprite.',
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
  static fromCanonName(canonName) {
    if (!(canonName in itemsIndexCanonName)) return null;
    return itemsIndexCanonName[canonName];
  }

  static imageUrl(item) {
    return `/img/items/${item.category}/${item.canonName}.png`;
  }
}
