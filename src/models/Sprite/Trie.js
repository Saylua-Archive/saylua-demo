import { sRandomInt, randomSeed } from 'utils';

export class Trie {
  static insertNode(node, item) {
    if (node[item]) {
      node[item].count += 1;
    } else {
      node[item] = { count: 1 };
    }
    return node;
  }

  static removeNode(node, item) {
    if (node[item]) {
      node[item].count -= 1;
      if (node[item].count <= 0) {
        delete node[item];
      }
    }
    return node;
  }

  static addWord(node, word) {
    let currentNode = node;
    for (let i = 0; i < word.length; i++) {
      currentNode = Trie.insertNode(currentNode, word[i]);
      currentNode = currentNode[word[i]];
    }
    // Add the empty string to record word endings
    currentNode = Trie.insertNode(currentNode, "");
    return node;
  }

  static removeWord(node, word) {
    if (!Trie.contains(node, word)) {
      return false;
    }
    let currentNode = node;
    for (let i = 0; i < word.length; i++) {
      currentNode = Trie.removeNode(currentNode, word[i]);
      currentNode = currentNode[word[i]];
    }
    // Add the empty string to record word endings
    currentNode = Trie.removeNode(currentNode, "");
    return node;
  }

  static contains(node, word) {
    let currentNode = node;
    for (let i = 0; i < word.length; i++) {
      if (!currentNode[word[i]]) {
        return false;
      }
      currentNode = currentNode[word[i]];
    }
    // Require completed words
    if (!currentNode[""] || currentNode[""].count < 1) {
      return false;
    }
    return true;
  }

  static draw(node, seed) {
    const newSeed = seed || randomSeed();
    let total = 0;
    const keys = Object.keys(node).filter(key => key !== "count");
    for (let i = 0; i < keys.length; i++) {
      total += node[keys[i]].count;
    }
    let target = sRandomInt(newSeed, total + 1);
    let index = 0;
    target -= node[keys[0]].count;
    while (target > 0) {
      index += 1;
      target -= node[keys[index]].count;
    }
    return keys[index];
  }

  static randomWord(node, seed) {
    const newSeed = seed || randomSeed();
    const next = Trie.draw(node, newSeed);
    if (next !== "") {
      return next + Trie.randomWord(node[next], newSeed + 1);
    } else {
      return next;
    }
  }
}
