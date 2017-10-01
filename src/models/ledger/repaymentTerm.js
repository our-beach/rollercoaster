import { compose, map, max, path, prop, transduce } from 'ramda'
import loansIn from './loansIn'

const loanRepaymentTerm = path(['paymentPlan', 'repaymentTerm'])

const repaymentTerm = compose(
  transduce(map(loanRepaymentTerm), max, 0),
  loansIn
)

export default repaymentTerm
