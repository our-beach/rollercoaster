import defaultInterestRate from '../interest_rate/defaultInterestRate'
import defaultFrequency from '../frequency/defaultFrequency'

const emptyLoan = id => ({
  id: id,
  title: '',
  amountOwed: 0,
  interestRate: defaultInterestRate(),
  frequency: defaultFrequency()
})

export default emptyLoan
