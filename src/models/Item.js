export default class Item {
  static imageUrl(item) {
    return `/img/items/${item.category}/${item.canonName}.png`;
  }
}

export const ITEMS_LIST = [
  {
    name: 'Glow Fruit',
    canonName: 'glow-fruit',
    category: 'treat',
    description: 'A tasty treat for your sprite.',
    buybackPrice: 100,
  },
  {
    name: 'Mushroom',
    canonName: 'mushroom',
    category: 'treat',
    description: 'A tasty treat for your sprite.',
    buybackPrice: 100,
  },
  {
    name: 'Shine Pepper',
    canonName: 'shine-pepper',
    category: 'treat',
    description: 'A tasty treat for your sprite.',
    buybackPrice: 100,
  },
];

export const ITEMS_BY_CANON_NAME = ITEMS_LIST.reduce((acc, val) => {
  acc[val.canonName] = val;
  return acc;
}, {});
