import repaymentTerm from '../repaymentTerm'
import Ledger from '../Ledger'

jest.disableAutomock()

describe('#repaymentTerm', () => {
  const loan1 = { paymentPlan: { repaymentTerm: 100 } }
  const loan2 = { paymentPlan: { repaymentTerm: 10 } }
  const loan3 = { paymentPlan: { repaymentTerm: 200 } }
  const ledger = Ledger.withLoans([loan1, loan2, loan3])
  const expectedRepaymentTerm = 200

  it('should calculate the repayment term for the entire ledger', () => {
    expect(repaymentTerm(ledger)).toEqual(expectedRepaymentTerm)
  })
})
