function merge(arr, arr2) {
  const concated = []
  let i = 0, j = 0
  
  while(i < arr.length || j < arr2.length) {
      console.log(i, j)
      if (i >= arr.length || arr[i] >= arr2[j]) {
          concated.push(arr2[j])
          j++
          continue;
      }
      if (j >= arr2.length || arr[i] < arr2[j]) {
          concated.push(arr[i])
          i++
          continue;
      }
  }

  return concated
}
function mergeSort(arr) {
  if (arr.length < 2) return arr

  const middle = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, middle))
  const right = mergeSort(arr.slice(middle))
  return merge(left, right)
}

console.log(mergeSort([5,1,2,66,3, 22, 4,7,3,6,4,5,21,5,7,8,-5, 22]))
