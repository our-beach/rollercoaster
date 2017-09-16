import emptyLoan from '../emptyLoan'
import defaultDebt from '../../debt/defaultDebt'
import defaultPaymentPlan from '../../payment_plan/defaultPaymentPlan'

jest.unmock('../emptyLoan')

describe('emptyLoan', () => {
  let loan
  beforeEach(() => loan = emptyLoan())

  it('has the default debt', () =>
    expect(defaultDebt).toHaveBeenCalled())

  it('has the default compounding frequency', () =>
    expect(defaultPaymentPlan).toHaveBeenCalled())

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
