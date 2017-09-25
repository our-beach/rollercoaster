import React from 'react'
import { shallow } from 'enzyme'
import InterestRate from '../InterestRate'
import LoanEntryField from '../LoanEntryField'
import Enum from '../enum'

jest.unmock('../InterestRate')
jest.unmock('../LoanEntryField')

const { LOAN_ENTRY_COPY: { INTEREST_RATE: { label, placeholder } } } = Enum

describe('<InterestRate />', () => {
  const amount = 0
  const onChange = jest.fn()

  let component
  beforeEach(() => {
    component = shallow(
      <InterestRate amount={amount} onChange={onChange} />
    )
  })

  describe('when it renders', () => {
    it('displays a LoanEntryField', () =>
       expect(component.find(LoanEntryField).length).toBeTruthy())

    it("has 'loan-entry-interest-rate' as it's field class", () =>
       expect(component.render().find('input').prop('class')).toEqual('loan-entry-interest-rate'))

    it('has the correct label', () =>
       expect(component.render().find('label').text()).toEqual(label))

    it('has the correct placeholder text', () =>
       expect(component.render().find('input').prop('placeholder')).toEqual(placeholder))

    it('has the passed in amount as its value', () =>
       expect(component.render().find('input').prop('value')).toEqual(amount.toString()))
  })

  describe('when a user changes the title', () => {
    const newInterestRate = 0.5
    beforeEach(() => component.simulate('change', newInterestRate))

    it('calls the provided onChange with the new title and the field id', () =>
       expect(onChange).toHaveBeenCalledWith('interest-rate', newInterestRate))
  })
})
