const identifyNegativeNums = (inputArr) => {
  const resultArr = []

  for (let i = 0; i < inputArr.length; i++) {
    const itemIsMinusAndPrevItemIsBracket = inputArr[i] === '-' && inputArr[i - 1] === '('
    const itemIsMinusAndPrevItemNotExist = inputArr[i] === '-' && !inputArr[i - 1]
    if (itemIsMinusAndPrevItemIsBracket || itemIsMinusAndPrevItemNotExist) {
      resultArr.push(`${inputArr[i]}${inputArr[i + 1]}`)
      i++
    } else {
      resultArr.push(inputArr[i])
    }
  }
  return resultArr
}

export { identifyNegativeNums }
