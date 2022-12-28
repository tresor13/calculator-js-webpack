import { operatorEntities, operatorIds, operatorsPriority } from './config'
import { numIds, numEntities } from './config'
import { specSymbolIds, specSymbolEntities } from './config'

class CalculatorModel {
  constructor() {
    this.numbers = { numIds, numEntities }

    this.operators = { operatorEntities, operatorIds, operatorsPriority }

    this.specialSymbols = { specSymbolIds, specSymbolEntities }
  }

  onClick = (e, button, expression) => {
    e.preventDefault()

    if (numIds.includes(button)) {

      return numEntities[button].onClick(button, expression)

    }
    if (operatorIds.includes(button)) {

      return operatorEntities[button].onClick(button, expression)

    }

    return specSymbolEntities[button].onClick(expression)

  }
}

export { CalculatorModel }
