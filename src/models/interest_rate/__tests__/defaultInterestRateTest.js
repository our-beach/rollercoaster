import defaultInterestRate from '../defaultInterestRate'
import FREQUENCY from '../../frequency/frequencyEnum'

jest.unmock('../defaultInterestRate')

describe('defaultInterestRate', () => {
  let interest
  beforeEach(() => {
    interest = defaultInterestRate()
  })

  it('has a rate of 0', () =>
    expect(interest).toHaveProperty('rate', 0))

  it('has a nominal frequency of Yearly', () =>
    expect(interest).toHaveProperty('nominalFrequency', 'Yearly'))

  it('has a compounding frequency of Daily', () =>
    expect(interest).toHaveProperty('compoundingFrequency', 'Daily'))

})