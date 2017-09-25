import Ledger from '../Ledger'
import removeLoanAt from '../removeLoanAt'
import loansIn from '../loansIn'

jest.disableAutomock()

describe('#removeLoanAt', () => {
  const removedLoan = { key: 'removed' }
  const keptLoan = { key: 'kept' }
  const ledger = Ledger.withLoans([removedLoan, keptLoan])
  const newLedger = removeLoanAt(0, ledger)

  it('should remove the loan matching the provided id from the ledger', () =>
     expect(loansIn(newLedger)).not.toContainEqual(removedLoan))

  it('should still contain the other loans', () =>
     expect(loansIn(newLedger)).toContainEqual(
       expect.objectContaining(keptLoan)))

  it('should have a smaller size', () =>
     expect(loansIn(newLedger).length).toEqual(1))
})
