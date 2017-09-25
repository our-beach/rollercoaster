import React from 'react'
import { shallow } from 'enzyme'
import CalculateButton from '../CalculateButton'
import Button from '../Button'

jest.unmock('../CalculateButton')
jest.unmock('../Button')

describe('<CalculateLoanButton />', () => {
  describe('when rendered', () => {
    let component
    beforeEach(() => component = shallow(<CalculateButton />))

    it('renders a Button component', () =>
       expect(component.find(Button).length).toBeTruthy())

    it('says "Calculate"', () =>
       expect(component.render().text()).toEqual('Calculate'))
  })
})
