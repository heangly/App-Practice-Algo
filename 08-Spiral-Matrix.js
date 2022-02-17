const spiralOrder = (matrix) => {
  const ans = []

  while (matrix.length) {
    ans.push(...matrix.shift())

    for (let j = 0; j < matrix.length; j++) {
      const value = matrix[j].pop()
      value && ans.push(value)
      matrix[j].reverse()
    }

    matrix.reverse()
  }
  return ans
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
)
