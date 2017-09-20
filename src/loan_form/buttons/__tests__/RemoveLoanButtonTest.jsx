import React from 'react'
import { shallow } from 'enzyme'
import RemoveButton from '../RemoveLoanButton'
import Button from '../Button'

jest.unmock('../RemoveLoanButton')
jest.unmock('../Button')

describe('<RemoveButton />', () => {
  describe('when rendered', () => {
    let component

    beforeEach(() => component = shallow(<RemoveButton />))

    it('renders a Button component', () =>
       expect(component.find(Button).length).toBeTruthy())

    it('contains text saying "Remove Loan"', () =>
       expect(component.render().text()).toEqual('Remove Loan'))
  })
})
