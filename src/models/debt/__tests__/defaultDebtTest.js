import defaultDebt from '../defaultDebt'
import defaultInterestRate from '../../interest_rate/defaultInterestRate'

jest.unmock('../defaultDebt')

describe('defaultDebt', () => {
  let loan
  beforeEach(() => loan = defaultDebt())

  it('has a title that is an empty string', () =>
     expect(loan.title).toEqual(''))

  it('has an amount owed of 0', () =>
     expect(loan.amountOwed).toEqual(0))

  it('has the default interest rate', () =>
    expect(defaultInterestRate).toHaveBeenCalled())
})
