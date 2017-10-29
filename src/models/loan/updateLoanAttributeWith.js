import R from 'ramda'
import { title, amountOwed, monthlyPayment, interestRate, repaymentTerm } from './lenses'

const updateLoanAttributeWith = R.curryN(3, (name, f, loan) => {
  switch(name) {
  case 'title':
    return R.over(title, f, loan)
  case 'amountOwed':
    return R.over(amountOwed, f, loan)
  case 'interestRate':
    return R.over(interestRate, f, loan)
  case 'monthlyPayment':
    return R.over(monthlyPayment, f, loan)
  case 'repaymentTerm':
    return R.over(repaymentTerm, f, loan)
  default:
    return loan
  }
})

export default updateLoanAttributeWith
