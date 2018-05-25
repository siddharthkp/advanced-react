import React from 'react'
import Logo from '../common/logo'

class UserForm extends React.Component {
  onSubmit = event => {
    event.preventDefault()
    this.props.onChange({ username: event.target[0].value })
  }
  render() {
    return (
      <form className="user-form" onSubmit={event => this.onSubmit(event)}>
        <Logo big="true" />
        <div>
          <input type="text" placeholder="github username" />
          <button type="submit">See profile</button>
        </div>
      </form>
    )
  }
}

export default UserForm
