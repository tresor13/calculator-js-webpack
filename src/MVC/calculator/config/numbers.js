const onClick = (button, expression) => {
  const newExpression = expression == 0 ? button : `${expression}${button}`
  return newExpression
}

const defaultStyle = 'btn btn-outline-info'

const numEntities = {
  0: { num: 0, style: 'zero btn btn-outline-secondary', onClick },
  1: { num: 1, style: defaultStyle, onClick },
  2: { num: 2, style: defaultStyle, onClick },
  3: { num: 3, style: defaultStyle, onClick },
  4: { num: 4, style: defaultStyle, onClick },
  5: { num: 5, style: defaultStyle, onClick },
  6: { num: 6, style: defaultStyle, onClick },
  7: { num: 7, style: defaultStyle, onClick },
  8: { num: 8, style: defaultStyle, onClick },
  9: { num: 9, style: defaultStyle, onClick },
}

const numIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export { numIds, numEntities }
