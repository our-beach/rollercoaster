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

  const loan4 = { paymentPlan: { repaymentTerm: 100 } }
  const loan5 = { paymentPlan: { repaymentTerm: Infinity } }
  const ledger2 = Ledger.withLoans([loan4, loan5])
  const expectedRepaymentTerm2 = Infinity

  it('should calculate a repayment term of Infinity when one loan is unpayable', () => {
    expect(repaymentTerm(ledger2)).toEqual(expectedRepaymentTerm2)
  })
})
