export const DAWNLANDS = 0;
export const SAYLEUS = 1;
export const LUARIA = 2;

export const SIDES = {
  DAWNLANDS,
  SAYLEUS,
  LUARIA,
};

export const SIDES_LIST = [
  {
    id: 0,
    canonName: 'dawnlands',
    name: 'Dawnlands',
    adjective: 'dawnish',
  },
  {
    id: 1,
    canonName: 'sayleus',
    name: 'Sayleus',
    adjective: 'saylian',
  },
  {
    id: 2,
    canonName: 'luaria',
    name: 'Luaria',
    adjective: 'luarian',
  },
];

export default class SideHelper {
  static backgroundUrl(side) {
    return `/img/backgrounds/${side.canonName}.jpg`;
  }

  static getById(id) {
    return SIDES_LIST[id];
  }
}
