const maxSubArray = (nums) => {
  let largest = -Infinity
  let sum = 0
  for (const num of nums) {
    sum += num
    largest = Math.max(largest, sum)
    if (sum < 0) {
      sum = 0
    }
  }
  return largest
}

console.log(maxSubArray([4, -1, 2, 1]))
