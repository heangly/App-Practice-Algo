const rotate = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      swap(i, j, matrix)
    }
  }

  matrix.forEach((arr) => arr.reverse())

  return matrix
}

const swap = (i, j, array) => {
  ;[array[i][j], array[j][i]] = [array[j][i], array[i][j]]
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(rotate(matrix))
