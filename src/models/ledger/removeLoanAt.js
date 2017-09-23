import R from 'ramda'

const removeLoanAt = (loanId, ledger) =>
      R.dissocPath(['database', loanId.toString()], ledger)

export default removeLoanAt
