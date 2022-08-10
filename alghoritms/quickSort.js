function split (arr, left = 0, right = arr.length) {
  console.log(arr)
  const pivotIdx = Math.floor((left + right) / 2)
  const pivot = arr[pivotIdx]

  while(right >= left) {
      while(arr[left] < pivot) {
          left++
      }
      while(arr[right] > pivot) {
          right--
      }
      if (right >= left) {
          swap(arr, left, right)
          left++
          right--
      }
  }
  return left
}
function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
function qsort (arr, left = 0, right = arr.length - 1) {
  if (left < right) {
      const index = split(arr, left, right)
      qsort(arr, left, index - 1)
      qsort(arr, index, right)
  }
  
  return arr
}

console.log(qsort([4,2,1,4,3, 56,1,4,2,1]))
