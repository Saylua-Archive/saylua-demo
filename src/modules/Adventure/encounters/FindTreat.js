import { updateConditionFunc, getItemFunc, randomItem } from '../encounterFuncs';
import { Encounter, Choice } from './Models';
import Item from 'models/Item';

export default class FindCoins extends Encounter {
  get mainText() {
    const item = randomItem(this._seed);
    if (this._state.activeCompanion) {
      return (`You spot a tasty looking ${item.name} on the ground. ${
        this._state.activeCompanion.name} is excited to eat the treat.`);
    } else {
      return `You spot a tasty looking ${item.name} on the ground`;
    }
  }

  get img() {
    const item = randomItem(this._seed);
    return { url: Item.imageUrl(item) };
  }

  get choices() {
    const item = randomItem(this._seed);
    return [
      new Choice("Take the treat", () => {
        getItemFunc(item)();
      }, this._seed),
      new Choice(`Give the treat to ${this._state.activeCompanion.name}`, () => {
        updateConditionFunc({ stamina: 20 })();
      }, this._seed),
      new Choice("Leave the treat"),
    ];
  }
}
