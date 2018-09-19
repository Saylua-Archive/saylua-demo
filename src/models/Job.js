import { ITEMS } from 'models/Item';

export const JOBS = Object.freeze({
  ROCK_HUNTER: 1,
  WOOD_HERDER: 2,
});

export const jobsList = [
  {
    id: JOBS.ROCK_HUNTER,
    name: 'Rock Hunter',
    canonName: 'rock_hunter',
    perTick: ITEMS.ROCK,
    description: `Wild rocks roam abound. Will your sprite brave the
      wilderness to hunt these rocks?`,
  },
  {
    id: JOBS.WOOD_HERDER,
    name: 'Wood Herder',
    canonName: 'wood_herder',
    perTick: ITEMS.WOOD,
    description: `Tame the wood! Logs, twigs, and sticks... Herd them together,
      reign them in.`,
  },
];

export const jobsIndexId = jobsList.reduce((acc, v) => {
  return Object.assign(acc, { [v.id]: v });
}, {});

export default class Job {
  static fromId(id) {
    if (!(id in jobsIndexId)) return null;
    return jobsIndexId[id];
  }
}
