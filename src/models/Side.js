export const SIDES = Object.freeze({
  SAYLEUS: 1,
  LUARIA: 2,
  DAWNLANDS: 3,
});

export const sidesList = [
  {
    id: SIDES.SAYLEUS,
    canonName: 'sayleus',
    name: 'Sayleus',
    adjective: 'saylian',
  },
  {
    id: SIDES.LUARIA,
    canonName: 'luaria',
    name: 'Luaria',
    adjective: 'luarian',
  },
  {
    id: SIDES.DAWNLANDS,
    canonName: 'dawnlands',
    name: 'Dawnlands',
    adjective: 'dawnish',
  },
];

export const sideIndexId = sidesList.reduce((acc, v) => {
  return Object.assign(acc, { [v.id]: v });
}, {});

export default class Side {
  static backgroundUrl(side) {
    return `/img/backgrounds/${side.canonName}.jpg`;
  }

  static fromId(id) {
    if (!(id in sideIndexId)) return null;
    return sideIndexId[id];
  }
}
