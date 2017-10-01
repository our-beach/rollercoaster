import R from 'ramda'
import * as DL from '../debt/lenses'
import * as PPL from '../payment_plan/lenses'

const isPropertyOf = R.flip(R.has)

const debt = R.lensProp('debt')
const paymentPlan = R.lensProp('paymentPlan')

const debtProp = propName => R.compose(debt, DL[propName])
const paymentPlanProp = propName => R.compose(paymentPlan, PPL[propName])

export const loanProp = R.cond([
  [isPropertyOf(DL), debtProp],
  [isPropertyOf(PPL), paymentPlanProp]
])

export const repaymentTerm = loanProp('repaymentTerm')
export const title = loanProp('title')
export const interestRate = loanProp('interestRate')
export const monthlyPayment = loanProp('monthlyPayment')
