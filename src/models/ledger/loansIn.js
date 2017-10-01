import { assoc, converge, compose, keys, map, merge, prop, sortBy, values, zipWith } from 'ramda'

const idObject = id => ({ id })
const numericalIdObject = compose(idObject, Number)

const idObjects = compose(map(numericalIdObject), keys)

const denormalize = compose(
  converge(zipWith(merge), [idObjects, values]),
  prop('database')
)

const loansIn = denormalize

export default loansIn
