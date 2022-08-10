function selectionSort(array) {
  for(let i = 0; i < array.length - 1; i++) {
      let min = i
      for(let j = i + 1; j < array.length; j++) {
          if (array[j] < array[min]) {
              min = j
          }
      }
     if (min !== i) {
         swap(array, i, min)
     }
  }
  return array
}
function swap (array, idx1, idx2) {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]]
}


console.log(selectionSort([56, 1,3,1,-5,55, 2, 4]))
