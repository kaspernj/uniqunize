module.exports = function uniqunize(array, callback) {
  const valuesSeen = []
  const uniqueArray = []

  for (const index in array) {
    const value = callback ? callback(array[index]) : array[index]

    if (!valuesSeen.includes(value)) {
      valuesSeen.push(value)
      uniqueArray.push(array[index])
    }
  }

  return uniqueArray
}
