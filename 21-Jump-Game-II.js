const jump = (array) => {
  const jumps = [0, ...new Array(array.length - 1).fill(Infinity)]
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] >= i - j) {
        jumps[i] = Math.min(jumps[j] + 1, jumps[i])
      }
    }
  }
  return jumps[jumps.length - 1]
}

const nums = [2, 3, 1, 1, 4]
console.log(jump(nums))
