import { ITEMS } from 'models/Item';

export const ENCOUNTERS = Object.freeze({
  START: 1,
  END: 2,
  FINDCOINS: 3,
  REST: 4,
  PLAY: 5,
  BREEZE: 6,
  FINDPEPPER: 7,
});

export const SIZES = Object.freeze({
  SPRITE: { width: 33, height: 33 },
  ITEM: { width: 10, height: 10 },
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
    text: e => `You found ${e.coins} coins`,
    coins: 5,
    choices: [
      {
        text: "Take them.",
        coins: e => e.coins,
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
    text: "A gorbin wants to play!",
    images: [
      { src: "/img/sprites/gorbin/albino.png", size: SIZES.SPRITE },
    ],
    choices: [
      {
        text: "Have fun!",
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
]);

export const randomEncounters = Object.freeze([
  ENCOUNTERS.FINDCOINS,
  ENCOUNTERS.REST,
  ENCOUNTERS.PLAY,
  ENCOUNTERS.BREEZE,
  ENCOUNTERS.FINDPEPPER,
]);
