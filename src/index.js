/**
 * Returns a unique array based on an optional projection callback.
 * @template T
 * @template U
 * @param {T[]} array - Array to uniqunize.
 * @param {(value: T) => U} [callback] - Optional projection to determine uniqueness.
 * @returns {T[]} Unique values preserving original order.
 */
export default function uniqunize(array, callback) {
  /** @type {(T | U)[]} */
  const valuesSeen = []
  /** @type {T[]} */
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
