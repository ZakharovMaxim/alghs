function radixSort (arr) {
  const buckets = new Array(10).fill('').map(() => [])
  let hasNext = true
  let offset = 0
  while(hasNext) {
      hasNext = false
      for(let i = 0; i < arr.length; i++) {
          let lastNum = numberByOffset(arr[i], offset)
          if (isNaN(lastNum)) {
              lastNum = 0
          } else {
              hasNext = true
          }
          buckets[lastNum].push(arr[i])
      }
      arr = []
      buckets.forEach((bucket, i) => {
          arr = [...arr, ...bucket]
          bucket = []
          buckets[i] = []
      })
      offset++
  }
  return arr
}
function numberByOffset (n, offset) {
  const str = n.toString()
  return +str[str.length - 1 - offset]
}
console.log(radixSort([1, 55, 124,22, 95, 4412, 51, 85, 0, 99, -5]))
