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
})
