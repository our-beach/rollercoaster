const emptyLoan = id => ({
  id: typeof id === 'undefined' ? null : id,
  title: '',
  amountOwed: 0,
  interestRate: 0,
  monthlyPayment: 0,
  monthsToPayOffLoan: 0
})

export default emptyLoan
