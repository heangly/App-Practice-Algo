const search = (nums, target) => {
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    if (nums[mid] === target) return mid
    if (nums[start] === target) return start
    if (nums[end] === target) return end

    if (nums[mid] > target && nums[start] < target) {
      end = mid - 1
    } else if (nums[mid] < target && nums[start] > target) {
      start = mid + 1
    } else {
      start++
    }
  }

  return -1
}

console.log(search([3, 5, 1], 3))
