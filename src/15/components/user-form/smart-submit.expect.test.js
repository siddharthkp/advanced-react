import React from 'react'
import { shallow } from 'enzyme'
import SmartSubmit from './smart-submit'

test('Smart submit', () => {
  const component = shallow(
    <SmartSubmit>
      {({ disabled, onChange }) => {
        return (
          <div>
            <input onChange={onChange} />
            <button disabled={disabled} type="submit">
              click me
            </button>
          </div>
        )
      }}
    </SmartSubmit>
  )

  expect(component.find('button').prop('disabled')).toBeTruthy()

  component.find('input').simulate('change', { target: { value: 'a' } })
  expect(component.find('button').prop('disabled')).toBeFalsy()

  component.find('input').simulate('change', { target: { value: '' } })
  expect(component.find('button').prop('disabled')).toBeTruthy()
})
