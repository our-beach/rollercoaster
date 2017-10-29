import Ledger from './Ledger'
import _addLoan from './addLoan'
import _removeLoanAt from './removeLoanAt'
import _repaymentTerm from './repaymentTerm'
import _loansIn from './loansIn'
import _updateLoanWith from './updateLoanWith'

export default Ledger
export const addLoan = _addLoan
export const removeLoanAt = _removeLoanAt
export const repaymentTerm = _repaymentTerm
export const loansIn = _loansIn
export const updateLoanWith = _updateLoanWith
