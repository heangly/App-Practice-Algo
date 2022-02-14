var findMedianSortedArrays = function (nums1, nums2) {
  const sorted = [...nums1, ...nums2].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)

  if (sorted.length % 2 !== 0) return sorted[mid]
  return (sorted[mid] + sorted[mid - 1]) / 2
}
