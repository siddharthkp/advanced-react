import React from 'react'
import Logo from '../common/logo'
import SmartSubmit from './smart-submit'

class UserForm extends React.Component {
  onSubmit = event => {
    event.preventDefault()
    this.props.onChange({ username: event.target[0].value })
  }
  render() {
    return (
      <form className="user-form" onSubmit={event => this.onSubmit(event)}>
        <Logo big="true" />
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
    )
  }
}

export default UserForm
