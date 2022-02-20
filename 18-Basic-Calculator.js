const calculate = (s) => {
  const stacks = []
  let num = ''
  let sign = null

  for (let i = 0; i <= s.length; i++) {
    const curr = s[i]
    if (curr === ' ') continue
    if (!isNaN(curr)) num += curr
    if (isNaN(curr)) {
      num = +num
      switch (sign) {
        case '+':
        case null:
          stacks.push(num)
          break
        case '-':
          stacks.push(-num)
          break
        case '*':
          stacks.push(stacks.pop() * num)
          break
        case '/':
          stacks.push(Math.floor(stacks.pop() / num))
          break
      }

      sign = curr
      num = ''
    }
  }

  return stacks.reduce((acc, curr) => acc + curr, 0)
}

console.log(calculate('3-3*2'))
