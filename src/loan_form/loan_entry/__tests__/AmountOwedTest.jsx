import React from 'react'
import { shallow } from 'enzyme'
import AmountOwed from '../AmountOwed'
import LoanEntryField from '../LoanEntryField'
import Enum from '../enum'

jest.unmock('../AmountOwed')
jest.unmock('../LoanEntryField')

const { LOAN_ENTRY_COPY: { AMOUNT_OWED: { label, placeholder } } } = Enum

describe('<AmountOwed />', () => {
  const amount = 0
  const onChange = jest.fn()

  let component
  beforeEach(() => {
    component = shallow(
      <AmountOwed amount={amount} onChange={onChange} />
    )
  })

  describe('when it renders', () => {
    it('displays a LoanEntryField', () =>
       expect(component.find(LoanEntryField).length).toBeTruthy())

    it("has 'loan-entry-amount-owed' as it's field class", () =>
       expect(component.render().find('input').prop('class')).toEqual('loan-entry-amount-owed'))

    it('has the correct label', () =>
       expect(component.render().find('label').text()).toEqual(label))

    it('has the correct placeholder text', () =>
       expect(component.render().find('input').prop('placeholder')).toEqual(placeholder))

    it('has the passed in amount as its value', () =>
       expect(component.render().find('input').prop('value')).toEqual(amount.toString()))
  })

  describe('when a user changes the title', () => {
    const newAmountOwed = 'new title'
    beforeEach(() => component.simulate('change', newAmountOwed))

    it('calls the provided onChange with the new title and the field id', () =>
       expect(onChange).toHaveBeenCalledWith('amount-owed', newAmountOwed))
  })
})
