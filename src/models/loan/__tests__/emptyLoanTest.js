import emptyLoan from '../emptyLoan'
import defaultInterestRate from '../../interest_rate/defaultInterestRate'
import defaultCompoundingFrequency from '../../frequency/defaultCompoundingFrequency'

jest.unmock('../emptyLoan')

describe('emptyLoan', () => {
  let loan
  beforeEach(() => loan = emptyLoan())

  it('has the default interest rate', () =>
    expect(defaultInterestRate).toHaveBeenCalled())

  it('has the default compounding frequency', () =>
    expect(defaultCompoundingFrequency).toHaveBeenCalled())

  it('has a title that is an empty string', () =>
     expect(loan.title).toEqual(''))

  it('has an amount owed of 0', () =>
     expect(loan.amountOwed).toEqual(0))

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
