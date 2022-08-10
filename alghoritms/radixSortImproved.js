function radixSort (arr) {
  let maxDigitCount = getMaxDigitCount(arr)
  for(let k = 0; k < maxDigitCount; k++) {
      let buckets = Array.from({length: 10}, () => [])
      for(let i = 0; i < arr.length; i++) {
          const lastDigit = getDigit(arr[i], k)
          buckets[lastDigit].push(arr[i])
      }
      arr = [].concat(...buckets)
  }
  return arr
}

function getDigit (n, i) {
  const str = n.toString()
  return Math.floor(Math.abs(n) / Math.pow(10, i)) % 10
}

function getDigitCount (n) {
  if (n === 0) return 1
  return Math.floor(Math.log10(Math.abs(n))) + 1
}

function getMaxDigitCount (arr) {
  let max = 0
  for(let i = 0; i < arr.length; i++) {
      max = Math.max(max, getDigitCount(arr[i]))
  }
  return max
}

console.log(radixSort([23, 345, 6542, 12, 4,124, 1211]))
