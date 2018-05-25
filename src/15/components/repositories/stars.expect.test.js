import React from 'react'
import { shallow } from 'enzyme'
import Stars from './stars'

test('Works', () => {
  const component = shallow(<Stars stars={24} />)
  expect(component.childAt(0).text()).toEqual('24')
})
