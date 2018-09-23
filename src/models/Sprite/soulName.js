import { prefixTrie, syllableTrie } from './nameTries';
import { Trie } from './Trie';
import { badList } from './badList';
import { randomSeed } from 'utils';

const MIN_LENGTH = 5;

export default function soulName(seed) {
  let currentSeed = seed || randomSeed();
  let name = Trie.randomWord(prefixTrie, currentSeed);
  do {
    currentSeed += 1;
    name += Trie.randomWord(syllableTrie[name.slice(-1)], currentSeed);
  } while (name.length < MIN_LENGTH);
  const problem = badList.find(word => name.indexOf(word) !== -1);
  return problem ? soulName(currentSeed + 1) : name;
}
