import { ITEMS } from 'models/Item';

export const JOBS = Object.freeze({
  ROCK_FINDER: 1,
});

export const jobsList = [
  {
    id: JOBS.ROCK_FINDER,
    name: 'Rock Finder',
    canonName: 'rock_finder',
    perTick: [ITEMS.ROCK],
    description: `Your sprite will go out, searching for rocks! Will they find
      normal rocks or normal rocks?`,
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
