export const ENCOUNTERIDS = {
  START: "START",
  FINDCOINS: "FINDCOINS",
  REST: "REST",
  PLAY: "PLAY",
};

export const encounters = [
  {
    id: ENCOUNTERIDS.START,
    text: "Adventure awaits!",
    choices: [
      {
        text: "Let's go!",
      },
    ],
  },
  {
    id: ENCOUNTERIDS.FINDCOINS,
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
    id: ENCOUNTERIDS.REST,
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
    id: ENCOUNTERIDS.PLAY,
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
];

export const randomEncounterIDs = [
  ENCOUNTERIDS.FINDCOINS,
  ENCOUNTERIDS.REST,
  ENCOUNTERIDS.PLAY,
];
