function bubbleSort(array) {
  for(let i = array.length - 1; i > 0; i--) {
      for(let j = 0; j < i; j++) {
          if (array[j] > array[j + 1]) {
              swap(array, j, j + 1)
          }
      }
  }
  return array
}

function swap (array, idx1, idx2) {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]]
}

console.log(bubbleSort([1,5,1,77,2,4]))
