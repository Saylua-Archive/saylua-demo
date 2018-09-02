import { ITEMS } from 'models/Item';

export const CHARACTERS = Object.freeze({
  VERA: 1,
  RUFUS: 2,
  LUANA: 3,
});

export const charactersList = [
  {
    id: CHARACTERS.VERA,
    name: 'Vera Everly',
    canonName: 'vera',
    description: `An energetic girl who's a bit older than she looks. Vera
      has made it her life's mission to make sure that no sprite on Saylua goes
      unloved.`,
    shop: {
      greeting: `I'm afraid I don't own a shop. Perhaps you're looking for
        the reserve?`,
    },
    giftPreferences: {
      loves: [],
      likes: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    id: CHARACTERS.RUFUS,
    name: 'Rufus Scippio',
    canonName: 'rufus',
    description: `A warm-spirited man who enjoys helping others. Rufus has
      earned a reputation for his quirky emporium where he'll buy any
      item a customer brings him, regardless of where it came from.`,
    shop: {
      name: `The Emporium of Everything`,
      greeting: `Hey there, welcome to my shop. If you need it, I might have
        it.`,
      stock: [
        { id: ITEMS.NAME_TAG, price: 10000 },
        { id: ITEMS.SHINE_PEPPER, price: 1000 },
      ],
    },
    giftPreferences: {
      loves: [],
      likes: [],
      dislikes: [],
      hates: [],
    },
  },
  {
    id: CHARACTERS.LUANA,
    name: 'Luana Liddic',
    canonName: 'luana',
    description: `A soft-spoken but ambitious girl who is deeply absorbed in
      her work.`,
    shop: {
      greeting: `...Hmm? I don't think I have a shop. Do you mean the museum?`,
    },
    giftPreferences: {
      loves: [],
      likes: [],
      dislikes: [],
      hates: [],
    },
  },
];

export const charactersIndexId = charactersList.reduce((acc, v) => {
  return Object.assign(acc, { [v.id]: v });
}, {});

export const charactersIndexCanonName = charactersList.reduce((acc, v) => {
  return Object.assign(acc, { [v.canonName]: v });
}, {});

export default class Character {
  static fromId(id) {
    if (!(id in charactersIndexId)) return null;
    return charactersIndexId[id];
  }

  static fromCanonName(canonName) {
    if (!(canonName in charactersIndexCanonName)) return null;
    return charactersIndexCanonName[canonName];
  }

  static imageUrl(character) {
    return `/img/characters/${character.canonName}.png`;
  }

  static portraitUrl(character) {
    return `/img/characters/portraits/${character.canonName}.png`;
  }
}
