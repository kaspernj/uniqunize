const uniqunize = require("../index.cjs")

describe("uniqunize", () => {
  it("returns unique values when not given a callback", () => {
    const array = [1, 1, 3, 5]
    const result = uniqunize(array)

    expect(result).toEqual([1, 3, 5])
  })

  it("returns unique values when given a callback", () => {
    const array = [[2, 1], [1, 1], [3, 3], [1, 5]]
    const result = uniqunize(array, (value) => value[1])

    expect(result).toEqual([[2, 1], [3, 3], [1, 5]])
  })
})
