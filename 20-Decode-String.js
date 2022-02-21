const decodeString = (s) => {
  const numStack = []
  const charStack = []
  let ansArr = []
  let i = 0

  while (i < s.length) {
    //when you see the numner
    if (!isNaN(s[i])) {
      let count = 0
      while (!isNaN(s[i])) {
        count = 10 * count + s[i]
        i++
      }
      numStack.push(count)
    } else if (s[i] === '[') {
      charStack.push(ansArr.join(''))
      ansArr.length = 0
      i++
    } else if (s[i] === ']') {
      const num = numStack.pop()
      const char = [charStack.pop()]
      char.push(ansArr.join('').repeat(num))
      ansArr = char
      i++
    } else {
      //when you see letter
      ansArr.push(s[i])
      i++
    }
  }
  return ansArr.join('')
}

const s = '3[a]2[bc]'
console.log(decodeString(s))
