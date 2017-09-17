import FREQUENCY from '../frequencyEnum'

jest.unmock('../frequencyEnum')

describe('frequencyEnum', () => {

  it('has a property CONTINOUSLY with a value of "Continuously"', () =>
    expect(FREQUENCY.CONTINUOUSLY).toEqual('Continuously'))

  it('has a property DAILY with a value of "Daily"', () =>
    expect(FREQUENCY.DAILY).toEqual('Daily'))

  it('has a property MONTHLY with a value of "Monthly"', () =>
    expect(FREQUENCY.MONTHLY).toEqual('Monthly'))

  it('has a property YEARLY with a value of "Yearly"', () =>
    expect(FREQUENCY.YEARLY).toEqual('Yearly'))

})