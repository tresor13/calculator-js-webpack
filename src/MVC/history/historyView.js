class HistoryView {
  constructor(controller) {
    this.controller = controller
    this.root = controller.root
    this._createHistoryContainer()

  }
  _createHistoryContainer() {
    this.historyContainer = document.createElement('div')
    this.historyContainer.setAttribute('class', 'list-group history-container')
    this.root.appendChild(this.historyContainer)
  }
  addLink(expression, id) {
    const link = document.createElement('a')
    link.setAttribute('class', 'list-group-item list-group-item-formula')
    link.setAttribute('aria-current', 'true')
    link.setAttribute("key", id)
    link.innerText = expression
    link.addEventListener('click', (e)=>{
      e.preventDefault()
      this.controller.returnExpressionToInput(id)
    })
    
    return link
  }
  updateHistory(expression, id) {
    const link = this.addLink(expression, id)

    if (this.historyContainer.children.length < 10) {

      this.historyContainer.insertBefore(link, this.historyContainer.firstChild)

    } else {

      this.historyContainer.removeChild(this.historyContainer.lastChild)
      this.historyContainer.insertBefore(link, this.historyContainer.firstChild)
    }
  }
}
export { HistoryView }
