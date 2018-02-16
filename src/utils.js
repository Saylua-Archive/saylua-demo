// Return a random integer from 1 to max, inclusive
function randInt(max) {
  return Math.floor((Math.random() * max) + 1);
}

function chooseWeighted(options) {
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

function check(dice, check) {
  return randInt(dice) >= check;
}

export {chooseWeighted, check, randInt};
