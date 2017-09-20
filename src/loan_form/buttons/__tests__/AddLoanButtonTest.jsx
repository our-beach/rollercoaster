import React from 'react'
import { shallow } from 'enzyme'
import AddLoanButton from '../AddLoanButton'
import Button from '../Button'

jest.unmock('../AddLoanButton')
jest.unmock('../Button')

describe('<AddLoanButton />', () => {
  describe('when it renders', () => {
    let component
    beforeEach(() => component = shallow(<AddLoanButton />))

    it('renders a button component', () =>
       expect(component.find(Button).length).toBeTruthy())

    it('displays "Add Loan"', () =>
       expect(component.render().text()).toEqual('Add Loan'))
  })
})
