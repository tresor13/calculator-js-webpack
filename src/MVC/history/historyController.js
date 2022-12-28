import { HistoryView } from './historyView'
import { HistoryModel } from './historyModel'

class HistoryController {
  constructor(calculatorController) {
    this.root = calculatorController.root;
    this.calculatorController = calculatorController

    this.view = new HistoryView(this)
    this.model = new HistoryModel();
  }

  addItemToHistory = (expression, result) => {
    const {item, itemId} = this.model.appendHistoryItem(expression, result)

    this.view.updateHistory(item, itemId)
  }
  returnExpressionToInput = ( id) => {
    const expression = this.model.getItemById(id)

    this.calculatorController.setInput(expression)
  }
}

export { HistoryController }
