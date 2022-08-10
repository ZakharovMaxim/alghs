function binarySearchRec (array, value, min = 0, max = array.length - 1) {
  console.log(min, max)
  if (min > max) return -1
  const middle = Math.floor((min + max) / 2)

  if (array[middle] === value) {
      return middle
  }
  if (array[middle] < value) {
      return binarySearchRec(array, value, middle + 1, max)
  } else {
      return binarySearchRec(array, value, min, middle - 1)
  }
  
}

binarySearchRec([1,2,3,4,56,77, 111], 2)
