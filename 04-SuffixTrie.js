class SuffixTrie {
  constructor(string) {
    this.root = {}
    this.endSymbol = '*'
    this.populateSuffixTrieFrom(string)
  }

  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSubStringStartingAt(i, string)
    }
  }

  insertSubStringStartingAt(i, string) {
    let node = this.root
    for (let j = i; j < string.length; j++) {
      const char = string[j]
      if (!(char in node)) {
        node[char] = {}
      }

      node = node[char]
    }

    node[this.endSymbol] = true
  }

  contains(string) {
    let node = this.root
    for (let i = 0; i < string.length; i++) {
      const char = string[i]
      if (!(char in node)) return false
      node = node[char]
    }
    return this.endSymbol in node
  }
}

const suffixTrie = new SuffixTrie('babc')
