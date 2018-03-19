"use strict";

import moment from 'moment';

// Return a random integer from 1 to max, inclusive
export function randInt(max) {
  return Math.floor((Math.random() * max) + 1);
}

export function chooseWeighted(options) {
  let total = 0;
  for (var i = 0; i < options.length; i++) {
    total += options[i].weight || 1;
  }
  let target = Math.floor((Math.random() * total) + 1);
  let index = 0;
  target -= options[0].weight || 1;
  while (target > 0) {
    index++;
    target -= options[index].weight || 1;
  }
  return options[index].value || options[index];
}

export function check(dice, check) {
  return randInt(dice) >= check;
}

export function canonize(name) {
  name = name.replace(/(\s|\W)+/, '_');
  return name.toLowerCase();
}

export function pluralize(count, singular_noun, plural_noun) {
  if (!plural_noun) {
    plural_noun = singular_noun + 's';
  }
  if (count == 1) {
    return formatNumber(count) + ' ' + singular_noun;
  }
  return formatNumber(count) + ' ' + plural_noun;
}

export function datetime(time) {
  time = moment(time);
  return time.format('MMM DD, Y hh:mm A') + ' SMT';
}

export function expandedRelativeTime(time) {
  time = moment(time);
  return datetime(time) + ` (${time.fromNow()})`;
}

// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
export function formatNumber(n) {
  return n.toLocaleString('en-IN');
}

// http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript
export function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}