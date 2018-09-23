import { Trie } from './Trie';
import { nameList } from './nameList';

const prefixTrie = {};
const syllableTrie = {};
const SLICE_SIZE = 4;

for (let i = 0; i < nameList.length; i++) {
  Trie.addWord(prefixTrie, nameList[i].toLowerCase().slice(0, SLICE_SIZE));
}

for (let i = 0; i < nameList.length; i++) {
  for (let j = 1; j < nameList[i].length; j++) {
    Trie.addWord(syllableTrie, nameList[i].slice(j, j + SLICE_SIZE));
  }
}


export { prefixTrie, syllableTrie };
