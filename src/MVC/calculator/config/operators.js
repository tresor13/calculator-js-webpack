import { getResult } from '../utils/index'
const onClick = (button, expression) => {
  const newExpression = expression == 0 ? button : `${expression}${button}`
  return newExpression
}

const operatorEntities = {
  sin: {
    operator: 'sin(',
    onClick,
    type: 'unary',
    innerHtml: 'sin',
    count: (num) => Math.sin(num),
    className: 'sinus btn btn-outline-primary',
  },
  '!': {
    operator: '!',
    onClick,
    type: 'unary',
    innerHtml: 'n!',
    count: function factorialize(num) {
      if (num < 0) return -1
      else if (num == 0) return 1
      else {
        return num * factorialize(num - 1)
      }
    },
    className: 'factorial btn btn-outline-primary',
  },
  '+': {
    operator: '+',
    onClick,
    type: 'binary',
    innerHtml: '+',
    count: (left, right) => left + right,
    className: ' plus btn btn-outline-primary',
  },
  '-': {
    operator: '-',
    onClick,
    type: 'binary',
    innerHtml: '-',
    count: (left, right) => left - right,
    className: 'minus btn btn-outline-primary',
  },
  '*': {
    operator: '*',
    onClick,
    type: 'binary',
    innerHtml: '&times;',
    count: (left, right) => left * right,
    className: 'multiply btn btn-outline-primary',
  },
  '/': {
    operator: '/',
    onClick,
    type: 'binary',
    innerHtml: '&divide;',
    count: (left, right) => left / right,
    className: 'divide btn btn-outline-primary',
  },
  '(': {
    operator: '(',
    onClick,
    type: 'bracket',
    innerHtml: '(',
    count: null,
    className: 'lbrecket btn btn-outline-primary',
  },
  ')': {
    operator: ')',
    onClick,
    type: 'bracket',
    innerHtml: ')',
    count: null,
    className: 'rbrecket btn btn-outline-primary',
  },
  '.': {
    operator: '.',
    onClick,
    type: 'decimal',
    innerHtml: '.',
    count: null,
    className: 'dot btn btn-outline-primary',
  },
  '=': {
    operator: '=',
    onClick: (button, expression) => {
      const result = getResult(expression)
      return result
    },
    type: 'result',
    innerHtml: '=',
    count: null,
    className: 'equal btn btn-outline-success',
  },
}

const operatorIds = ['sin', '!', '+', '-', '*', '/', '(', ')', '.', '=']

const operatorsPriority = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
  '!': 3,
  sin: 3,
}

export { operatorsPriority, operatorEntities, operatorIds }
