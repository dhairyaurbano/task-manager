import { writable } from 'svelte/store';

export let result = writable([]);  // Stores search results
export let query = writable("");   // Stores input query
let wordMap = new Map();           // Internal storage for dictionary

export function gettingDictionaryReady(dictionary = []) {
  wordMap.clear();
  dictionary.forEach(word => {
    wordMap.set(word, true);
  });
}

// Auto-search when query changes
query.subscribe(value => {
  search(value);
});

export function search(prefixWord) {
  if (!prefixWord.trim()) {
    result.set([]);  // Empty input, clear results
    return;
  }

  let matches = [];
  for (let [word, _] of wordMap) {
    if (word.toLowerCase().startsWith(prefixWord.toLowerCase())) {
      matches.push(word);
    }
  }

  result.set(matches);
}