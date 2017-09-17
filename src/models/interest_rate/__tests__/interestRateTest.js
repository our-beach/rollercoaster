import interestRate from '../interestRate'

jest.unmock('../interestRate')

describe('interestRate', () => {
  let interest
  beforeEach(() => interest = interestRate(0, 'Yearly'))

  it('has a rate of 0', () => 
    expect(interest).toHaveProperty('rate', 0))

  it('has a type of "Yearly"', () =>
    expect(interest).toHaveProperty('type', 'Yearly'))
})