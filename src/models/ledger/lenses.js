import R from 'ramda'

export const currentId = R.lensProp('currentId')
export const database = R.lensProp('database')
export const loanAt = id => R.compose(database, R.lensProp(id))
