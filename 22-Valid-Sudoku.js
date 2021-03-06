const isValidSudoku = (board) => {
  let seen = new Set()
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let cell = board[i][j]
      if (cell === '.') continue
      let colCell = `cell: ${j} ${cell}`
      let rowCell = `row: ${i} ${cell}`
      let subBoxCell = `subBox: ${parseInt(i / 3)}-${parseInt(j / 3)} ${cell}`

      if (!seen.has(colCell) && !seen.has(rowCell) && !seen.has(subBoxCell)) {
        seen.add(colCell)
        seen.add(rowCell)
        seen.add(subBoxCell)
      } else {
        return false
      }
    }
  }
  return true
}

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
]

console.log(isValidSudoku(board))
