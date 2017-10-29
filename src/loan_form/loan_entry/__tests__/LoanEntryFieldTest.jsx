import React from 'react'
import { shallow } from 'enzyme'
import LoanEntryField from '../LoanEntryField'

jest.unmock('../LoanEntryField')

describe('<LoanEntry />', () => {
  let component
  const label = 'test label'
  const name = 'test-name'
  const value = 'test value'
  const onChange = jest.fn()
  const fieldId = 'test-id'
  const initial = 'test initial'

  beforeEach(() => {
    component = shallow(
      <LoanEntryField
        fieldClass={fieldId}
        initial={initial}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
      />
    )
  })

  describe('when it renders', () => {
    it('uses the passed in label', () =>
       expect(component.find('label').text()).toBe(label))

    it('displays an input field', () =>
       expect(component.find('input').length).toBeTruthy())

    it('is a text input field', () =>
       expect(component.find('input').prop('type')).toBe('text'))

    it('uses the passed in fieldClass, prepended with `loan-entry-` as the class', () =>
       expect(component.find('input').prop('className')).toBe(`loan-entry-${fieldId}`))

    it('uses the `initial` argument as a placeholder', () =>
       expect(component.find('input').prop('placeholder')).toBe(initial))

    it('uses the value passed in as the value of the input', () =>
       expect(component.find('input').prop('value')).toEqual(value))

    it('uses the provided name as the input name', () =>
       expect(component.find('input').prop('name')).toBe(name))
  })

  describe('when a user edits the field', () => {
    const newValue = 'test new value'
    beforeEach(() => component.find('input').simulate('change', { target: { value: newValue } }))

    it('calls the provided callback with the new value', () =>
       expect(onChange).toHaveBeenCalledWith(newValue))
  })
})
