import { identifyNegativeNums } from './index'

function parseInputString(string) {
  const inputToArray = string.replace(/\s+/, '').split(/(\D)/).filter(Boolean)

  const inputWithRemovedDots = []

  for (let i = 0; i < inputToArray.length; i += 1) {
    if (inputToArray[i] === '.') {
      inputWithRemovedDots.pop()
      inputWithRemovedDots.push(`${inputToArray[i - 1]}.${inputToArray[i + 1]}`)
      i += 1
    } else {
      inputWithRemovedDots.push(inputToArray[i])
    }
  }
  const inputReadyForParsing = identifyNegativeNums(inputWithRemovedDots)
  const parsedInput = inputReadyForParsing.map((item) => {
    if (Number.isNaN(Number(item))) {
      return item
    }
    return Number(item)
  })

  return parsedInput
}

export { parseInputString }
