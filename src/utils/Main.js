import moment from 'moment';

// Return a random integer from 1 to max, inclusive
export function randInt(max) {
  return Math.floor((Math.random() * max) + 1);
}

export function chooseWeighted(options) {
  let total = 0;
  for (let i = 0; i < options.length; i++) {
    total += options[i].weight || 1;
  }
  let target = Math.floor((Math.random() * total) + 1);
  let index = 0;
  target -= options[0].weight || 1;
  while (target > 0) {
    index += 1;
    target -= options[index].weight || 1;
  }
  return options[index].value || options[index];
}

export function check(dice, goal) {
  return randInt(dice) >= goal;
}

export function canonize(name) {
  name = name.replace(/(\s|\W)+/, '_');
  return name.toLowerCase();
}

export function datetime(time) {
  time = moment(time);
  return `${time.format('MMM DD, Y hh:mm A')} SMT`;
}

export function expandedRelativeTime(time) {
  time = moment(time);
  return `${datetime(time)} (${time.fromNow()})`;
}

// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
export function formatNumber(n) {
  return n.toLocaleString('en-IN');
}

// http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript
export function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function pluralize(count, singularNoun, pluralNoun) {
  if (!pluralNoun) {
    pluralNoun = `${singularNoun}s`;
  }
  if (count === 1) {
    return `${formatNumber(count)} ${singularNoun}`;
  }
  return `${formatNumber(count)} ${pluralNoun}`;
}

export function sRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// max exclusive, optional min inclusive
export function sRandomInt(seed, max, min) {
  seed = seed || 0;
  min = min || 0;
  return min + Math.floor(sRandom(seed) * (max - min));
}

export function seedChoice(seed, choices) {
  return choices[sRandomInt(seed, choices.length)];
}

export function seedChoiceWeighted(seed, options) {
  let total = 0;
  for (let i = 0; i < options.length; i++) {
    total += options[i].weight || 1;
  }
  let target = sRandomInt(seed, total + 1);
  let index = 0;
  target -= options[0].weight || 1;
  while (target > 0) {
    index += 1;
    target -= options[index].weight || 1;
  }
  return options[index].value || options[index];
}
