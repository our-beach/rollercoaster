import Ledger from '..'
import { emptyLoan } from '../../loan'
import loansIn from '../loansIn'

jest.disableAutomock()

describe('Ledger', () => {
  describe('.empty', () => {
    const ledger = Ledger.empty()

    it('should create a ledger with no loans', () =>
       expect(loansIn(ledger).length).toBe(0))
  })

  describe('.withLoans', () => {
    const loans = [emptyLoan(), emptyLoan()]
    const ledger = Ledger.withLoans(loans)

    it('should create a ledger containing the passed in loans', () =>
       loans.forEach((loan, id) =>
                     expect(loansIn(ledger)).toContainEqual(
                       expect.objectContaining({
                         id: id,
                         debt: loan.debt,
                         paymentPlan: loan.paymentPlan
                       }))))
  })
})
