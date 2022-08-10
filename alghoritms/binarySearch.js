function binarySearch (array, value) {
  let middle = Math.floor(array.length / 2)
  let left = 0
  let right = array.length - 1
  while(left <= right) {
      if (array[middle] === value) {
          return middle
      }
      if (array[middle] < value) {
          left = middle + 1
      } else {
          right = middle - 1
      }
      middle = Math.floor((left + right) / 2)
  }
  return -1
}

console.log(binarySearch([1,2,3,4,56,77, 111], 1111))
