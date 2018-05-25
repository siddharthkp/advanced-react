import React from 'react'
import Logo from '../common/logo'

class UserForm extends React.Component {
  render() {
    return (
      <form className="user-form">
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
