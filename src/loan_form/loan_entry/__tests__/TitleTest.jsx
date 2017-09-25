import React from 'react'
import { shallow } from 'enzyme'
import Title from '../Title'
import LoanEntryField from '../LoanEntryField'
import Enum from '../enum'

jest.unmock('../Title')
jest.unmock('../LoanEntryField')
jest.unmock('../enum')

const { LOAN_ENTRY_COPY: { TITLE: { label, placeholder } } } = Enum

describe('<Title />', () => {
  const title = 'test'
  const onChange = jest.fn()

  let component
  beforeEach(() => {
    component = shallow(
      <Title title={title} onChange={onChange} />
    )
  })

  describe('when it renders', () => {
    it('displays a LoanEntryField', () =>
       expect(component.find(LoanEntryField).length).toBeTruthy())

    it("has 'loan-entry-title' as it's field class", () =>
       expect(component.render().find('input').prop('class')).toEqual('loan-entry-title'))

    it('has the correct label', () =>
       expect(component.render().find('label').text()).toEqual(label))

    it('has the correct placeholder text', () =>
       expect(component.render().find('input').prop('placeholder')).toEqual(placeholder))

    it('has the passed in title as its value', () =>
       expect(component.render().find('input').prop('value')).toEqual(title))
  })

  describe('when a user changes the title', () => {
    const newTitle = 'new title'
    beforeEach(() => component.simulate('change', newTitle))

    it('calls the provided onChange with the new title and the field type', () =>
       expect(onChange).toHaveBeenCalledWith('title', newTitle))
  })
})
