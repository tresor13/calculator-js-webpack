import { operatorEntities as operators } from '../config'
import { BINARY_OPERATOR_TYPE } from '../../index'

const calculateInBrackets = (prevNumStack, prevOperatorsStack) => {
  const operatorsStack = [...prevOperatorsStack]
  const numStack = [...prevNumStack]
  const [lastOperator] = operatorsStack.splice(-1)

  if (lastOperator === '(') {
    return { numStack, operatorsStack }
  }
  if (operators[lastOperator].type === BINARY_OPERATOR_TYPE) {
    const [left, right] = numStack.splice(-2)

    const result = operators[lastOperator].count(left, right)
    return calculateInBrackets([...numStack, result], operatorsStack)
  }
  const [lastNum] = numStack.splice(-1)

  const result = operators[lastOperator].count(lastNum)
  return calculateInBrackets([...numStack, result], operatorsStack)
}

export { calculateInBrackets }
