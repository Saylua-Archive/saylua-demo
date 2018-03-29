import { chooseWeighted, check, randInt } from 'utils';

export class Encounter {
  constructor(id, props, seed) {
    this._id = id;
    this._seed = seed;
    this._props = props;
  }
  set seed(seed) {
    this._seed = seed;
  }
  get seed() {
    return this._seed;
  }
  set props(props) {
    this._props = props;
  }
  set state(state) {
    this._state = state;
  }
  get state() {
    return this.state;
  }
  get id() {
    return this._id;
  }
  get mainText() {
    if (!this._props || !this._props.mainText) {
      return "Nothing much happens." + this._seed;
    } else if (typeof this._props.mainText === 'function') {
      return this._mainText(this._seed);
    } else {
      return this._props.mainText;
    }
  }
  get choices() {
    return [new Choice("Ok")];
  }
  get image() {
    return null;
  }
  get requirement() {
    return false;
  }
}

export class Choice {
  constructor(text, outcomes, seed, state) {
    this._text = text;
    this._outcomes = outcomes || [() => {}];
    this._seed = seed;
    this._state = state;
  }
  get text() {
    if (typeof this._text === 'function') {
      return this._text(this._seed);
    } else {
      return this._text;
    }
  }
  get outcome() {
    if (typeof this._outcomes === 'function') {
      return this._outcomes;
    } else {
      return chooseWeighted(this._outcomes);
    }
  }
}
