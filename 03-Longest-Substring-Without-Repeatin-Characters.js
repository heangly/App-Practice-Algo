const lengthOfLongestSubString = (s) => {
  let i = 0
  let j = 0
  let longest = 0
  const seen = {}

  while (j < s.length) {
    const char = s[j]
    if (char in seen) {
      i = Math.max(i, seen[char] + 1)
    }
    seen[char] = j
    longest = Math.max(longest, j - i + 1)

    j++
  }

  return longest
}

console.log(lengthOfLongestSubString('abcabcbb'))
