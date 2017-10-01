import Ledger from '../Ledger'
import loansIn from '../loansIn'

jest.disableAutomock()

describe('#loansIn', () => {
  const loan1 = { name: 'test' }
  const ledger = Ledger.withLoans([loan1])
  const expectedLoans = [{ name: 'test', id: 0 }]

  it('should return a list containing the loans in a ledger', () =>
     expect(loansIn(ledger)).toEqual(expectedLoans))
})
