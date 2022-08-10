function insertionSort (arr) {
  for(let i = 1; i < arr.length; i++) {
      const currentVal = arr[i]
      let j = i - 1;
      for(; j >= 0 && arr[j] > currentVal; j--) {
          arr[j + 1] = arr[j]
      }
      arr[j + 1] = currentVal
  }
  return arr
}
function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

console.log(insertionSort([5,2,1,5,22,4, -5]))
