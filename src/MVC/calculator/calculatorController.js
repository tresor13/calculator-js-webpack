import { CalculatorModel } from './index'
import { CalculatorView } from './index'
import { HistoryController } from '../history'

class CalculatorController {
  constructor() {
    this.root = document.getElementById('root')

    this.view = new CalculatorView(this)
    this.model = new CalculatorModel()
    this.historyController = new HistoryController(this)

    this.addSpecialSymbols()
    this.addNumbers()
    this.addOperators()
  }
  addNumbers() {
    const { numIds, numEntities } = this.model.numbers

    this.view.addNumbers(numIds, numEntities)
  }
  addOperators() {
    const { operatorEntities, operatorIds } = this.model.operators

    const getResult = this.model.getResult
    const addHistory = this.historyController.addItemToHistory
    this.view.addOperators(operatorIds, operatorEntities, getResult, addHistory)
  }
  addSpecialSymbols() {
    const { specSymbolIds, specSymbolEntities } = this.model.specialSymbols

    this.view.addSpecialSymbols(specSymbolIds, specSymbolEntities)
  }
setInput = (valueStr) => {
  this.view.input.value = valueStr
}
  onClickButton = (e, button) => {
    const expression = this.view.input.value
    const newInputValue = this.model.onClick(e, button, expression)

      if (button === '=') {
  
  this.historyController.addItemToHistory(expression, newInputValue)
}
    this.setInput(newInputValue)
  }
}
export { CalculatorController }
