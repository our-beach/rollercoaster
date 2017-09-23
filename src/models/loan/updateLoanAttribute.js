import R from 'ramda'
import updateLoanAttributeWith from './updateLoanAttributeWith'

const updateLoanAttribute = R.curryN(3, (name, value, loan) =>
                                     updateLoanAttributeWith(name, R.always(value), loan))

export default updateLoanAttribute
