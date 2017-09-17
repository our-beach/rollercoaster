import defaultCompoundingFrequency from '../defaultCompoundingFrequency'

jest.unmock('../defaultCompoundingFrequency')

describe('defaultFrequency', () => {
  let frequency
  beforeEach(() => frequency = defaultCompoundingFrequency())

  it('returns the string: \'Daily\'', () =>
    expect(frequency).toEqual('Daily'))

})