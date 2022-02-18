const romanToInt = (s) => {
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ])

  if (s.length === 1) return map.get(s)

  let ans = 0

  for (let i = 0; i < s.length; i++) {
    const nextVal = map.get(s[i + 1]) || 0
    const currValue = map.get(s[i])

    if (currValue < nextVal) {
      ans += nextVal - currValue
      i++
    } else {
      ans += currValue
    }
  }

  return ans
}

console.log(romanToInt('MDCXCV'))
