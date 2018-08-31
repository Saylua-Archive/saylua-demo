export const CARDS = Object.freeze({
  BAP: 1,
  SLAM: 2,
  MANUVER: 3,
  CRUNCH: 4,
  TAUNT: 5,
  PUNCH: 6,
  CHARGE: 7,
  TAKEDOWN: 8,
  JAB: 9,
});

export const cardsList = Object.freeze([
  {
    id: CARDS.BAP,
    attack: 6,
    text: "Bap!",
  },
  {
    id: CARDS.SLAM,
    attack: 20,
    stamina: -5,
    text: "Slam!",
  },
  {
    id: CARDS.MANUVER,
    attack: 0,
    staminaAttack: 15,
    stamina: -5,
    text: "Manuver!",
  },
  {
    id: CARDS.CRUNCH,
    attack: 10,
    stamina: -5,
    text: "Crunch!",
  },
  {
    id: CARDS.TAUNT,
    staminaAttack: 10,
    text: "Taunt!",
  },
  {
    id: CARDS.PUNCH,
    attack: 15,
    stamina: -3,
    text: "Punch!",
  },
  {
    id: CARDS.CHARGE,
    attack: 20,
    health: -5,
    text: "Charge!",
  },
  {
    id: CARDS.TAKEDOWN,
    attack: 20,
    stamina: -10,
    text: "Takedown!",
  },
  {
    id: CARDS.JAB,
    attack: 8,
    stamina: -1,
    text: "Jab!",
  },
]);
