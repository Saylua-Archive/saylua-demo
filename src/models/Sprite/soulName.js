import { prefixTrie, syllableTrie } from './nameTries';
import { Trie } from './Trie';
import { badList } from './badList';

const MIN_LENGTH = 5;

export default function soulName(seed) {
  let currentSeed = seed || Math.floor(Math.random() * 10000000000);
  let name = Trie.randomWord(prefixTrie);
  do {
    currentSeed += 1;
    name += Trie.randomWord(syllableTrie[name.slice(-1)], currentSeed);
  } while (name.length < MIN_LENGTH);
  for (let i = 0; i < badList.length; i++) {
    if (name.indexOf(badList[i]) !== -1) {
      return (soulName(seed + 1));
    }
  }
  return name;
}
