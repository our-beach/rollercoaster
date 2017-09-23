import R from 'ramda'
import { rate } from '../interest_rate/lenses'

export const title = R.lensProp('title')
export const amountOwed = R.lensProp('amountOwed')
export const interestRate = R.compose(
  R.lensProp('interestRate'),
  rate
)
