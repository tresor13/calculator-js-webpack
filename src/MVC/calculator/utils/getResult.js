import { calculateInBrackets } from './index'
import { obtainOperators } from './index'
import { parseInputString } from './index'
import { operatorEntities as operators } from '../config'
import { UNARY_OPERATOR_TYPE } from '../../index'

function isNumber(item) {
  if (typeof item === 'number') {
    return true
  } else return false
}

function getResult(inputString) {
  const inputArr = parseInputString(inputString)
  let numStack = []
  let operatorsStack = []

  for (let item of inputArr) {
    if (!isNumber(item) && !operators[item]) {
      return NaN
    } else if (isNumber(item)) {
      numStack = [...numStack, item]
    } else if (item === '(') {
      operatorsStack = [...operatorsStack, item]
    } else if (item === ')') {
      const result = calculateInBrackets(numStack, operatorsStack)
      numStack = result.numStack
      operatorsStack = result.operatorsStack
    } else {
      const result = obtainOperators(item, numStack, operatorsStack)
      numStack = result.numStack
      operatorsStack = result.operatorsStack
    }
  }
  if (operatorsStack.length === 0 && numStack.length === 1) {
    const result = numStack[0]
    return result
  } else {
    do {
      const lastOperator = operatorsStack.pop()
      if (operators[lastOperator].type === UNARY_OPERATOR_TYPE) {
        const lastNum = numStack.pop()
        const result = operators[lastOperator].count(lastNum)
        numStack.push(result)
      } else {
        const [left, right] = numStack.splice(-2)
        const result = operators[lastOperator].count(left, right)
        numStack.push(result)
      }
    } while (operatorsStack.length > 0)
    return numStack.length === 1 && operatorsStack.length === 0 ? numStack[0] : NaN
  }
}

export { getResult }
