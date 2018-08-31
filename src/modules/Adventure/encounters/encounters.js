import { ITEMS } from 'models/Item';
import Sprite from 'models/Sprite';
import { sRandomInt } from 'utils';

export const ENCOUNTERS = Object.freeze({
  START: 1,
  END: 2,
  FINDCOINS: 3,
  REST: 4,
  PLAY: 5,
  BREEZE: 6,
  FINDPEPPER: 7,
  WANTPEPPER: 8,
  BATTLE: 9,
  PEPPERADOPT: 10,
});

export const SIZES = Object.freeze({
  SPRITE: { width: 33, height: 33 },
  ITEM: { width: 10, height: 10 },
  NPC: { width: 50, height: 100 },
});

export const encountersList = Object.freeze([
  {
    id: ENCOUNTERS.START,
    text: "Adventure awaits!",
    choices: [
      {
        text: "Let's go!",
      },
    ],
  },
  {
    id: ENCOUNTERS.END,
    text: (e, s, p) => `${p.activeCompanion.name} is unable to continue. The adventure ends here.`,
  },
  {
    id: ENCOUNTERS.FINDCOINS,
    text: (e, s) => `You found ${sRandomInt(s, 200)} coins.`,
    choices: [
      {
        text: "Take them.",
        coins: (e, s) => sRandomInt(s, 200),
        stamina: -2,
      },
      {
        text: "Leave them.",
        coins: 0,
      },
    ],
  },
  {
    id: ENCOUNTERS.REST,
    text: "You find a nice spot to rest.",
    choices: [
      {
        text: "Ahhhh...",
        stamina: 15,
        health: 5,
      },
    ],
  },
  {
    id: ENCOUNTERS.PLAY,
    text: (e, s) => `The ${Sprite.species(Sprite.create({}, s)).name} wants to play!`,
    images: (e, s) => [
      { src: Sprite.imageUrl(Sprite.create({}, s)), size: SIZES.SPRITE },
    ],
    choices: [
      {
        text: (e, s, p) => `Have fun, ${p.activeCompanion.name}!`,
        stamina: 15,
        health: 5,
      },
    ],
  },
  {
    id: ENCOUNTERS.BREEZE,
    text: "A soft breeze blows past.",
    choices: [
      {
        text: "Delightful!",
      },
    ],
  },
  {
    id: ENCOUNTERS.FINDPEPPER,
    text: "A delicious glowing pepper is growing beside the trail.",
    images: [
      { src: "/img/items/treat/shine_pepper.png", size: SIZES.ITEM },
    ],
    choices: [
      {
        text: "Take it!",
        addItem: ITEMS.SHINE_PEPPER,
      },
      {
        text: (e, s, p) => `Feed it to ${p.activeCompanion.name}.`,
        stamina: 15,
        health: 5,
      },
    ],
  },
  {
    id: ENCOUNTERS.WANTPEPPER,
    text: `"Do you happen to have a shine pepper to sell? It's for a special sprite."`,
    images: [
      { src: "/img/characters/vera.png", size: SIZES.NPC },
    ],
    choices: [
      {
        text: "Here you are!",
        addItem: ITEMS.SHINE_PEPPER,
        addItemCount: -1,
        coins: 300,
        needItem: ITEMS.SHINE_PEPPER,
        needItemCount: 1,
      },
      {
        text: "Sorry, Vera...",
      },
    ],
  },
  {
    id: ENCOUNTERS.BATTLE,
    text: "Battle!",
    images: (e, s, p) => [{ src: Sprite.imageUrl(p.activeCompanion), size: SIZES.SPRITE },
      { src: Sprite.imageUrl(Sprite.create({}, s)), size: SIZES.SPRITE }],
    opponent: (e, s, p) => p.opponent || Sprite.create({}, s),
    opponentAttack: (e, s, p) => sRandomInt(s, 10),
    choices: (e, s, p) => {
      const choices = [
        {
          text: "Flail!",
          needOpponent: true,
          health: () => e.opponentAttack(e, s, p) * -1,
          attack: 5,
          repeat: true,
        },
        {
          text: "Victory!",
          noOpponent: true,
        },
      ];
      return choices.concat(p.deck.map(card => ({
        text: card.text,
        needOpponent: true,
        repeat: true,
        health: () => ((card.health || 0) - e.opponentAttack(e, s, p)),
        attack: card.attack,
        staminaAttack: card.staminaAttack,
        stamina: card.stamina,
        cardID: card.id,
      })));
    },
  },
  {
    id: ENCOUNTERS.PEPPERADOPT,
    text: (e, s) => (`"This little ${Sprite.species(Sprite.create({}, s)).name} is looking for a new home.
    But, ${Sprite.create({}, s).name} needs 10 shine peppers first!"`),
    images: (e, s) => [
      { src: "/img/characters/vera.png", size: SIZES.NPC },
      { src: Sprite.imageUrl(Sprite.create({}, s)), size: SIZES.SPRITE },
    ],
    choices: [
      {
        text: "Welcome home!",
        addItem: ITEMS.SHINE_PEPPER,
        addItemCount: -10,
        needItem: ITEMS.SHINE_PEPPER,
        needItemCount: 10,
        adoptee: (e, s) => Sprite.create({}, s),
      },
      {
        text: (e, s) => `Sorry, ${Sprite.create({}, s).name}...`,
      },
    ],
  },
]);

export const randomEncounters = Object.freeze([
  ENCOUNTERS.FINDCOINS,
  ENCOUNTERS.REST,
  ENCOUNTERS.PLAY,
  ENCOUNTERS.BREEZE,
  ENCOUNTERS.FINDPEPPER,
  ENCOUNTERS.WANTPEPPER,
  ENCOUNTERS.BATTLE,
  ENCOUNTERS.PEPPERADOPT,
]);
