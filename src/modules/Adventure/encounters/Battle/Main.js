import { updateConditionFunc } from 'modules/Adventure/encounterFuncs';
import { Encounter, Choice, Outcome } from '../Models';
import { setEncounterState } from 'SayluaStore';
import { store } from 'index';
import { sRandomInt } from 'utils';
import { speciesIndexRegion } from 'models/SpriteSpecies';
import Sprite from 'models/Sprite';


export class Battle extends Encounter {
  get mainText() {
    const localSprites = speciesIndexRegion.Universal.concat(speciesIndexRegion[this._state.area.region]);
    const opponent = Sprite.randomSprite(this._seed, localSprites);
    if (!this._state.encounterState ||
      !this._state.encounterState.opponent ||
      this._state.encounterState.opponent.soulName !== opponent.soulName) {
      store.dispatch(setEncounterState({ opponent })); // TODO: Move this outside the render.
    }
    if (!this._state.activeCompanion) {
      return "Where did your companion go?!?!?";
    } else {
      return `A wild ${Sprite.species(opponent).name} wants to battle!`;
    }
  }
  get img() {
    const localSprites = speciesIndexRegion.Universal.concat(speciesIndexRegion[this._state.area.region]);
    const opponent = Sprite.randomSprite(this._seed, localSprites);
    return { url: Sprite.imageUrl(opponent), tiny: true };
  }
  get choices() {
    return [
      new Choice(
        `Let's go, ${this._state.activeCompanion.name}!`,
        new Outcome(() => {}, "battleContinue"),
      ),
    ];
  }
}

export class BattleContinue extends Encounter {
  get opponent() {
    return this._state.encounterState.opponent;
  }
  get mainText() {
    const opponent = this._state.encounterState.opponent;
    if (!this._state.activeCompanion) {
      return "Where did your companion go?!?!?";
    } else {
      return `Health: ${opponent.health}, Stamina: ${opponent.stamina}`;
    }
  }
  get img() {
    const localSprites = speciesIndexRegion.Universal.concat(speciesIndexRegion[this._state.area.region]);
    const opponent = Sprite.randomSprite(this._seed, localSprites);
    return { url: Sprite.imageUrl(opponent), tiny: true };
  }
  get choices() {
    const opponent = this._state.encounterState.opponent;
    if (opponent.health < 0 || opponent.stamina < 0) {
      return [new Choice(
        `${this._state.activeCompanion.name} wins!`,
        new Outcome(() => {}, "battleEnd"),
      )];
    } else {
      const choices = [];
      choices.push(new Choice(
        "Charge!",
        new Outcome(() => {
          opponent.health += sRandomInt(this.seed + 1, -4, 0);
          opponent.stamina += sRandomInt(this.seed + 2, -4, 0);
          store.dispatch(setEncounterState({ opponent }));
          updateConditionFunc({
            stamina: sRandomInt(this.seed + 3, -4, 0),
            health: sRandomInt(this.seed + 4, -4, 0),
          })();
        }, "battleContinue"),
      ));
      if (this._state.activeCompanion.tags.includes("fur")) {
        choices.push(new Choice(
          "Furry Swipes!",
          new Outcome(() => {
            opponent.health += sRandomInt(this.seed + 1, -8, 0);
            opponent.stamina += sRandomInt(this.seed + 2, -4, 0);
            store.dispatch(setEncounterState({ opponent }));
            updateConditionFunc({
              stamina: sRandomInt(this.seed + 3, -2, 0),
              health: sRandomInt(this.seed + 4, -2, 0),
            })();
          }, "battleContinue"),
        ));
      }
      if (this._state.activeCompanion.tags.includes("swim")) {
        choices.push(new Choice(
          "Aqua Blast!",
          new Outcome(() => {
            opponent.health += sRandomInt(this.seed + 1, -8, 0);
            opponent.stamina += sRandomInt(this.seed + 2, -4, 0);
            store.dispatch(setEncounterState({ opponent }));
            updateConditionFunc({
              stamina: sRandomInt(this.seed + 3, -1, 0),
              health: sRandomInt(this.seed + 4, -2, 0),
            })();
          }, "battleContinue"),
        ));
      }
      if (this._state.activeCompanion.tags.includes("fly")) {
        choices.push(new Choice(
          "Swooping Strike!",
          new Outcome(() => {
            opponent.health += sRandomInt(this.seed + 1, -8, 0);
            opponent.stamina += sRandomInt(this.seed + 2, -4, 0);
            store.dispatch(setEncounterState({ opponent }));
            updateConditionFunc({
              stamina: sRandomInt(this.seed + 3, -1, 0),
              health: sRandomInt(this.seed + 4, -2, 0),
            })();
          }, "battleContinue"),
        ));
      }
      return choices;
    }
  }
}

export class BattleEnd extends Encounter {
  get mainText() {
    const localSprites = speciesIndexRegion.Universal.concat(speciesIndexRegion[this._state.area.region]);
    const opponent = Sprite.randomSprite(this._seed, localSprites);
    if (!this._state.activeCompanion) {
      return "Where did your companion go?!?!?";
    } else {
      return `The ${Sprite.species(opponent).name} beams up at you. It was a great battle!`;
    }
  }
  get img() {
    const localSprites = speciesIndexRegion.Universal.concat(speciesIndexRegion[this._state.area.region]);
    const opponent = Sprite.randomSprite(this._seed, localSprites);
    return { url: Sprite.imageUrl(opponent), tiny: true };
  }
  get choices() {
    const localSprites = speciesIndexRegion.Universal.concat(speciesIndexRegion[this._state.area.region]);
    const opponent = Sprite.randomSprite(this._seed, localSprites);
    return [
      new Choice(`Farewell, ${opponent.name}.`, () => {}),
    ];
  }
}
