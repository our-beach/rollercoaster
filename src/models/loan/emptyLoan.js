import defaultInterestRate from '../interest_rate/defaultInterestRate'
import defaultCompoundingFrequency from '../frequency/defaultCompoundingFrequency'

const emptyLoan = id => ({
  id: typeof id === 'undefined' ? null : id,
  title: '',
  amountOwed: 0,
  interestRate: defaultInterestRate(),
  frequency: defaultCompoundingFrequency()
})

export default emptyLoan
