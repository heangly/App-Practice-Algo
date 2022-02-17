var compress = function (chars) {
  const ans = []
  const map = new Map()

  for (const char of chars) {
    map.set(char, map.get(char) + 1 || 1)
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) {
      ans.push(key)
    } else {
      ans.push(key, value + '')
    }
  }

  return ans
}
