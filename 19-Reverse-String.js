var reverseString = function (s) {
  let start = 0
  let end = s.length - 1
  while (start < end) {
    swap(start, end, s)
    start++
    end--
  }
  return s
}

const swap = (i, j, arr) => {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}
console.log(reverseString(['h', 'e', 'l', 'l', 'o']))
