import { operatorsPriority, operatorEntities as operators } from '../config'
import { BINARY_OPERATOR_TYPE } from '../../index'

function obtainOperators(currentOperator, prevNumStack, prevOperatorsStack) {
  const operatorsStack = [...prevOperatorsStack]
  const numStack = [...prevNumStack]
  const [lastOperator] = operatorsStack.splice(-1)

  if (operatorsStack.length === 0 && !lastOperator) {
    return {
      numStack,
      operatorsStack: [currentOperator],
    }
  } else if (
    operatorsPriority[currentOperator] > operatorsPriority[lastOperator] ||
    lastOperator === '('
  ) {
    return {
      numStack,
      operatorsStack: [...operatorsStack, lastOperator, currentOperator],
    }
  } else {
    if (operators[lastOperator].type === BINARY_OPERATOR_TYPE) {
      const [left, right] = numStack.splice(-2)
      const result = operators[lastOperator].count(left, right)
      return obtainOperators(currentOperator, [...numStack, result], operatorsStack)
    }
    const [lastNumber] = numStack.splice(-1)
    const result = operators[lastOperator].count(lastNumber)
    return obtainOperators(currentOperator, [...numStack, result], operatorsStack)
  }
}

export { obtainOperators }
