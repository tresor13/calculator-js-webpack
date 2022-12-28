class CalculatorView {
  constructor(controller) {
    this.controller = controller

    this.root = controller.root
    this.root.setAttribute('class', 'd-flex justify-content-center')

    this.defaultValue = 0

    this._createCalcContainer()
    this._createInput()
  }

  _createCalcContainer() {
    this.calcContainer = document.createElement('div')
    this.calcContainer.setAttribute('class', 'calculator card border border-dark')
    this.root.appendChild(this.calcContainer)
  }

  _createInput() {
    let value = this.defaultValue
    this.input = document.createElement('input')
    this.input.setAttribute('value', value)
    this.calcContainer.appendChild(this.input)
  }

  addNumbers(ids, entities) {
    ids.forEach((id) => {
      const { num, style } = entities[id]

      const button = document.createElement('button')
      button.innerText = num
      button.setAttribute('type', 'button')
      button.setAttribute('class', style)
      button.addEventListener('click', (e) => {
        this.controller.onClickButton(e, num)
      })

      this.calcContainer.appendChild(button)
    })
  }

  addOperators(ids, entities) {
    ids.forEach((id) => {
      const { className, innerHtml, operator } = entities[id]

      const button = document.createElement('button')
      button.innerHTML = innerHtml
      button.setAttribute('type', 'button')
      button.setAttribute('class', className)
      button.addEventListener('click', (e) => {
        this.controller.onClickButton(e, operator)
      })

      this.calcContainer.appendChild(button)
    })
  }
  addSpecialSymbols(ids, entities) {
    ids.forEach((id) => {
      const { symbol, className, innerHtml } = entities[id]

      const button = document.createElement('button')
      button.setAttribute('class', className)
      button.innerHTML = innerHtml
      button.addEventListener('click', (e) => {
        this.controller.onClickButton(e, symbol)
      })

      this.calcContainer.appendChild(button)
    })
  }
}

export { CalculatorView }
