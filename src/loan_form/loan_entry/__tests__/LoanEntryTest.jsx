import React from 'react'
import { shallow, mount } from 'enzyme'
import LoanEntry from '../LoanEntry'

jest.disableAutomock()

describe('<LoanEntry />', () => {
  let component
  const id = 0
  const debt = {
    title: 'test',
    amountOwed: 0,
    interestRate: { rate: 0 }
  }
  const paymentPlan = {
    monthlyPayment: 0
  }
  const onChange = jest.fn()
  const onRemove = jest.fn()

  beforeEach(() => {
    component = mount(
      <LoanEntry
        id={id}
        debt={debt}
        paymentPlan={paymentPlan}
        onFieldChange={onChange}
        onRemove={onRemove}
      />
    )
  })

  describe('when it renders', () => {
    it('displays a title field', () =>
       expect(component.find('Title').length).toBeTruthy())

    it('displays an interest rate field', () =>
       expect(component.find('InterestRate').length).toBeTruthy())

    it('displays a monthly payment field', () =>
       expect(component.find('MonthlyPayment').length).toBeTruthy())

    it('displays a remove loan button', () =>
       expect(component.find('RemoveLoanButton').length).toBeTruthy())
  })

  describe('when a user the title', () => {
    const newTitle = 'new title'
    beforeEach(() => component
               .find('Title')
               .find('LoanEntryField')
               .find('input')
               .simulate('change',  { target: { value: newTitle } }))

    it('calls onChange with the id, field id, and new value', () =>
       expect(onChange).toHaveBeenCalledWith(id, 'title', newTitle))
  })

  describe('when a user updates the interest rate', () => {
    const newInterestRate = 10
    beforeEach(() => component
               .find('InterestRate')
               .find('LoanEntryField')
               .find('input')
               .simulate('change',  { target: { value: newInterestRate } }))

    it('calls onChange with the id, field id, and new value', () =>
       expect(onChange).toHaveBeenCalledWith(id, 'interest-rate', newInterestRate))
  })

  describe('when a user updates the monthly payment', () => {
    const newMonthlyPayment = 10
    beforeEach(() => component
               .find('MonthlyPayment')
               .find('LoanEntryField')
               .find('input')
               .simulate('change',  { target: { value: newMonthlyPayment } }))

    it('calls onChange with the id, field id, and new value', () =>
       expect(onChange).toHaveBeenCalledWith(id, 'monthly-payment', newMonthlyPayment))
  })

  describe('when a user removes the loan', () => {
    beforeEach(() => component
               .find('RemoveLoanButton')
               .find('button')
               .simulate('click'))

    it('calls onRemove with the loan id', () =>
       expect(onRemove).toHaveBeenCalledWith(id))
  })
})
