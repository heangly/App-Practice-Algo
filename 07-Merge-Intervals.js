// Time: O(nlog(n)) where nlog(n) because of sorting | Space: O(i) where i is the unique interval
const merge = (intervals) => {
  if (intervals.length === 1) return intervals

  intervals.sort((a, b) => a[0] - b[0])
  const stack = [intervals[0]]

  for (const currentValue of intervals) {
    const valueInStack = stack.pop()

    if (currentValue[0] <= valueInStack[1]) {
      const firstValue = valueInStack[0]
      const secondValue = Math.max(valueInStack[1], currentValue[1])
      stack.push([firstValue, secondValue])
    } else {
      stack.push(valueInStack)
      stack.push(currentValue)
    }
  }

  return stack
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
  ])
)
