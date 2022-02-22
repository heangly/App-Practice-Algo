var findSubstring = function (s, words) {
  let res = []
  let wordLength = words[0].length
  let wordCount = words.length
  let len = wordCount * wordLength
  const map = new Map()

  words.forEach((word) => {
    map.set(word, map.get(word) + 1 || 1)
  })

  for (let i = 0; i < s.length - len + 1; i++) {
    let sub = s.slice(i, i + len)
    if (isConcat(sub, map, wordLength)) res.push(i)
  }
  return res
}

const isConcat = (sub, map, wordLength) => {
  const seen = new Map()
  for (let i = 0; i < sub.length; i += wordLength) {
    let word = sub.slice(i, i + wordLength)
    seen.set(word, seen.get(word) + 1 || 1)
  }

  for (const key of map.keys()) {
    if (map.get(key) !== seen.get(key)) return false
  }
  return true
}
