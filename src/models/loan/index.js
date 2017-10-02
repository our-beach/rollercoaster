import _emptyLoan from './emptyLoan'
import _updateLoanAttribute from './updateLoanAttribute'
import _updateLoanAttributeWith from './updateLoanAttributeWith'
import { calculateRepaymentTerm, calculateMonthlyPayment } from './paymentCalculations'

export const emptyLoan = _emptyLoan
export const updateLoanAttribute = _updateLoanAttribute
export const updateLoanAttributeWith = _updateLoanAttributeWith
export { calculateRepaymentTerm, calculateMonthlyPayment }