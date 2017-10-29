import React from 'react'
import { shallow } from 'enzyme'
import MonthlyPayment from '../MonthlyPayment'
import LoanEntryField from '../LoanEntryField'
import Enum from '../enum'

jest.unmock('../MonthlyPayment')
jest.unmock('../LoanEntryField')

const { LOAN_ENTRY_COPY: { MONTHLY_PAYMENT: { label, placeholder } } } = Enum

describe('<MonthlyPayment />', () => {
  const amount = 0
  const onChange = jest.fn()

  let component
  beforeEach(() => {
    component = shallow(
      <MonthlyPayment amount={amount} onChange={onChange} />
    )
  })

  describe('when it renders', () => {
    it('displays a LoanEntryField', () =>
       expect(component.find(LoanEntryField).length).toBeTruthy())

    it("has 'loan-entry-monthly-payment' as it's field class", () =>
       expect(component.render().find('input').prop('class')).toEqual('loan-entry-monthly-payment'))

    it('has the correct label', () =>
       expect(component.render().find('label').text()).toEqual(label))

    it('has the correct placeholder text', () =>
       expect(component.render().find('input').prop('placeholder')).toEqual(placeholder))

    it('has the passed in amount as its value', () =>
       expect(component.render().find('input').prop('value')).toEqual(amount.toString()))
  })

  describe('when a user changes the title', () => {
    const newMonthlyPayment = 10
    beforeEach(() => component.simulate('change', newMonthlyPayment))

    it('calls the provided onChange with the new title and the field id', () =>
       expect(onChange).toHaveBeenCalledWith('monthly-payment', newMonthlyPayment))
  })
})
