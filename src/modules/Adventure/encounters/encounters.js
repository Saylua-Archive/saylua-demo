export const ENCOUNTERIDS = {
  FINDCOINS: "FINDCOINS",
  REST: "REST",
};

export const encounters = [
  {
    id: ENCOUNTERIDS.FINDCOINS,
    text: "You found some coins!",
    choices: [
      {
        text: "Take them.",
        coins: 5,
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
];
