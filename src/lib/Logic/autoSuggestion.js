// trie.js

class TrieNode {
    constructor() {
      this.children = {};
      this.isEnd = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (const char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEnd = true;
    }
  
    dfs(node, prefix, results) {
      if (node.isEnd) results.push(prefix);
  
      for (const char in node.children) {
        this.dfs(node.children[char], prefix + char, results);
      }
    }
  
    search(prefix) {
      let node = this.root;
      for (const char of prefix) {
        if (!node.children[char]) return [];
        node = node.children[char];
      }
      const results = [];
      this.dfs(node, prefix, results);
      return results;
    }
  }
  
//   const trie = new Trie();
  
//   const defaultDictionary = [
//     "dhairya", "dhyey", "aman", "amiab", "rhekha", "jaya",
//     "sushma", "naman", "pankaj", "dharmesh", "dhavan"
//   ];
  
//   defaultDictionary.forEach(word => trie.insert(word));
  
//   // Helper functions
//   export function insertWord(word) {
//     trie.insert(word);
//   }
  
//   export function insertMultipleWords(words) {
//     words.forEach(word => trie.insert(word));
//   }
  
//   export function getFilteredWords(query) {
//     if (!query) return [];
//     return trie.search(query.toLowerCase());
//   }
  
export function createTrie(dictionary = []) {
    const trie = new Trie();
    dictionary.forEach(word => trie.insert(word));
    console.log(word+" added sucessfully");
    return trie;
  }

