import { chooseWeighted } from 'utils';
import { randomContinue } from '../encounterFuncs';

export class Outcome {
  constructor(func, nextID) {
    this._func = func;
    this._nextID = nextID;
  }
  get func() {
    return this._func;
  }
  get nextID() {
    return this._nextID;
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
    if (typeof this._outcomes === 'object') {
      return this._outcomes;
    } else if (typeof this._outcomes === 'function') {
      return new Outcome(this._outcomes);
    } else if (typeof this._outcomes[0] === 'object') {
      return chooseWeighted(this._outcomes);
    } else {
      return new Outcome(chooseWeighted(this._outcomes));
    }
  }
}

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
      return "Nothing much happens.";
    } else if (typeof this._props.mainText === 'function') {
      return this._mainText(this._seed);
    } else {
      return this._props.mainText;
    }
  }
  get choices() {
    return [new Choice(randomContinue(this._seed))];
  }
  get image() {
    return null;
  }
  get requirement() {
    return false;
  }
}
