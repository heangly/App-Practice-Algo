const threeSum = (nums) => {
  const target = 0
  nums.sort((a, b) => a - b)
  const ans = []

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1

    if (i > 0 && nums[i] === nums[i - 1]) continue

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum === target) {
        ans.push([nums[i], nums[left], nums[right]])

        while (nums[left] === nums[left + 1]) left++
        while (nums[right] === nums[right - 1]) right--
        left++
        right--
      } else if (sum > target) {
        right--
      } else {
        left++
      }
    }
  }

  return ans
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
