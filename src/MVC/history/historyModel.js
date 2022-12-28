class HistoryModel {
  constructor() {
    this.historyIds = []
    this.historyEntities = {}
    this.defaultId = 0
    this.maxNumOfItems = 10
  }
  concatExpression(expression, result){
    return `${expression} = ${result}`
  }
  appendHistoryItem(expression, result) {
    const item = this.concatExpression(expression, result)
    if (this.defaultId < this.maxNumOfItems) {
      const itemId = this.defaultId

      this.historyEntities[itemId] = expression
      this.historyIds.push(itemId)
      this.defaultId++

      return {item, itemId}
    } 
    this.defaultId = 0;

    const itemId = this.defaultId

    const removedItem = this.historyIds.shift()
    delete this.historyEntities[removedItem];
    
    this.historyEntities[this.defaultId] = expression
    this.historyIds.push(this.defaultId)
    this.defaultId++

      return {item, itemId}

  }
  getItemById = (id) => {

    return this.historyEntities[id]

  }
}

export { HistoryModel }
