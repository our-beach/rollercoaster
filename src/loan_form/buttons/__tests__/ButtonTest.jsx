import React from 'react'
import { shallow } from 'enzyme'
import Button from '../Button'

jest.unmock('../Button')

describe('<Button />', () => {
  describe('when rendered', () => {
    const text = 'test text'
    let component

    beforeEach(() => component = shallow(<Button text={text} />))

    it('displays any passed in text', () =>
       expect(component.text()).toEqual(text))
  })

  describe('when clicked', () => {
    const clickHandler = jest.fn()

    beforeEach(() => {
      shallow(<Button onClick={clickHandler} />).simulate('click')
    })

    it('fires the passed in click handler', () =>
       expect(clickHandler).toHaveBeenCalled())
  })
})
