const nextPermutation = (nums) => {
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      const largetIdx = nextLarge(i, nums)
      swap(i, largetIdx, nums)
      reverse(i + 1, nums)
      return nums
    }
  }
  nums.reverse()
  return nums
}

const reverse = (i, nums) => {
  let start = i
  let end = nums.length - 1
  while (start < end) {
    swap(start, end, nums)
    start++
    end--
  }
}

const nextLarge = (idx, nums) => {
  for (let i = nums.length - 1; i > idx; i--) {
    if (nums[i] > nums[idx]) return i
  }
}

const swap = (i, j, arr) => {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

console.log(nextPermutation([1, 2, 3]))
