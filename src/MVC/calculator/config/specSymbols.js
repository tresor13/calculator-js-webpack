const specSymbolEntities = {
  clear: {
    symbol: 'clear',
    innerHtml: 'C',
    className: 'clear btn btn-outline-warning',
    onClick: () => 0,
  },
  back: {
    symbol: 'back',
    innerHtml: '	&larr;',
    className: 'back btn btn-outline-warning',
    onClick: (expression) => {
     
      if (expression.length > 1) {
        const newExpression = expression.slice(0, -1)
        return newExpression
      }
      return 0
    },
  },
}

const specSymbolIds = ['clear', 'back']

export { specSymbolIds, specSymbolEntities }
