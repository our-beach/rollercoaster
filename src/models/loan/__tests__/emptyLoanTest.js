import emptyLoan from '../emptyLoan'

jest.unmock('../emptyLoan')

describe('emptyLoan', () => {
  const loan = emptyLoan()

  it('has an interest rate of 0', () =>
     expect(loan.interestRate).toEqual(0))

  it('has a title that is an empty string', () =>
     expect(loan.title).toEqual(''))

  it('has an amount owed of 0', () =>
     expect(loan.amountOwed).toEqual(0))

  it('has 0 months to pay off the loan', () =>
     expect(loan.monthsToPayOffLoan).toEqual(0))

  it('has a monthly payment of 0', () =>
     expect(loan.monthlyPayment).toEqual(0))

  describe('when an id is provided', () => {
    const id = 0
    const loan = emptyLoan(id)

    it('has an id that matches the id passed in', () =>
       expect(loan.id).toEqual(id))
  })

  describe('when an id is not provided', () => {
    const loan = emptyLoan()

    it('has null as an id', () =>
       expect(loan.id).toBeNull())
  })
})
