const majorityElement = (nums) => {
  const len = nums.length
  const map = new Map()
  nums.forEach((num) => {
    map.set(num, map.get(num) + 1 || 1)
  })

  for (const [key, value] of map.entries()) {
    if (value > len / 2) return key
  }
}
