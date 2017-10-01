import R from 'ramda'

const updateLoanWith = R.curryN(
  3, (loanId, updateFunction, ledger) =>
    R.over(R.lensPath(['database', loanId]), updateFunction, ledger)
)

export default updateLoanWith
