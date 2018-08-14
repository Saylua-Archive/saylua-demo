export const ENCOUNTERS = Object.freeze({
  START: 1,
  FINDCOINS: 2,
  REST: 3,
  PLAY: 4,
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
    id: ENCOUNTERS.FINDCOINS,
    text: "You found some coins!",
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
    images: ["/img/sprites/gorbin/albino.png"],
    choices: [
      {
        text: "Have fun!",
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
]);
