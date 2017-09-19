import defaultInterestRate from '../interest_rate/defaultInterestRate'

const defaultDebt = () => ({
  title: '',
  amountOwed: 0,
  interestRate: defaultInterestRate()
})

export default defaultDebt
