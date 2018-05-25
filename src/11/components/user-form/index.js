import React from 'react'
import Logo from '../common/logo'
import SmartSubmit from './smart-submit'
import { Consumer } from '../../state'

class UserForm extends React.Component {
  onSubmit = (event, dispatch) => {
    event.preventDefault()
    dispatch('USER_CHANGE_INIT', { username: event.target[0].value })
  }
  render() {
    return (
      <Consumer>
        {({ data, dispatch }) => (
          <form
            className="user-form"
            onSubmit={event => this.onSubmit(event, dispatch)}>
            <Logo big />
            <SmartSubmit>
              {({ disabled, onChange }) => (
                <div>
                  <input
                    onChange={onChange}
                    type="text"
                    placeholder="github username"
                  />
                  <button type="submit" disabled={disabled}>
                    See profile
                  </button>
                </div>
              )}
            </SmartSubmit>
          </form>
        )}
      </Consumer>
    )
  }
}

export default UserForm
