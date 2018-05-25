import React from 'react'
import renderer from 'react-test-renderer'
import SmartSubmit from './smart-submit'

test('Smart submit', () => {
  const component = renderer.create(
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

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree.children[0].props.onChange({ target: { value: 'a' } })
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree.children[0].props.onChange({ target: { value: '' } })
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
