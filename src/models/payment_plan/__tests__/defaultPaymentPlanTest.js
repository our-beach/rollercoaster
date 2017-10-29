import defaultPaymentPlan from '../defaultPaymentPlan'

jest.unmock('../defaultPaymentPlan')

describe('defaultPaymentPlan', () => {
  let plan
  beforeEach(() => plan = defaultPaymentPlan())

  it('has a monthly payment of 0', () => {
    expect(plan.monthlyPayment).toEqual(0)
  })

  it('has a repayment period of 0', () => {
    expect(plan.repaymentTerm).toEqual(0)
  })
})