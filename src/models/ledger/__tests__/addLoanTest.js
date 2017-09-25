import addLoan from '../addLoan'
import Ledger from '../Ledger'
import loansIn from '../loansIn'

jest.disableAutomock()

describe('#addLoan', () => {
  const newLoan = { key: 'added' }
  const ledger = Ledger.withLoans([{ key: 'already there' }])
  const newLedger = addLoan(ledger, newLoan)

  it('should return a new ledger with the loan added', () =>
     expect(loansIn(newLedger)).toContainEqual(
       expect.objectContaining(newLoan)))
})
