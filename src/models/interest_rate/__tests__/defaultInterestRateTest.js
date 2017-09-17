import defaultInterestRate from '../defaultInterestRate'
import interestRate from '../interestRate'
import FREQUENCY from '../../frequency/frequencyEnum'

jest.unmock('../defaultInterestRate')
jest.unmock('../interestRate')

describe('defaultInterestRate', () => {
  let interest
  beforeEach(() => {
    interest = defaultInterestRate()
  })

  it('has a rate of 0', () =>
    expect(interest).toHaveProperty('rate', 0))

  it('has a type of Yearly', () =>
    expect(interest).toHaveProperty('type', 'Yearly'))

})