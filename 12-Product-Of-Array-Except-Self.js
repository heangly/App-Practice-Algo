const productExceptSelf = (nums) => {
  const dpLeft = new Array(nums.length).fill(1)
  const dpRight = new Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
    dpLeft[i] = dpLeft[i - 1] * nums[i - 1]
  }

  for (let j = nums.length - 2; j >= 0; j--) {
    dpRight[j] = dpRight[j + 1] * nums[j + 1]
    dpLeft[i] *= dpRight[i]
  }

  return dpLeft
}

console.log(productExceptSelf([1, 2, 3, 4]))
