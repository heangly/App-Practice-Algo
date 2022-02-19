var isHappy = function (n) {
  const seen = new Map()
  seen.set(n, true)

  while (true) {
    let sum = 0
    for (const char of String(n)) {
      sum = sum + parseInt(char) ** 2
    }
    n = sum

    if (n === 1) return true
    if (seen.get(n)) return false
    seen.set(n, true)
  }
}

console.log(isHappy(2))
