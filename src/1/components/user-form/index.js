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
      <form className="user-form" onSubmit={this.onSubmit}>
        <Logo big />
        <div>
          <input
            onChange={this.props.onChange}
            type="text"
            placeholder="github username"
          />
          <button type="submit" disabled={this.props.disabled}>
            See profile
          </button>
        </div>
      </form>
    )
  }
}

export default SmartSubmit(UserForm)
