import React from 'react'
import Logo from '../common/logo'

class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: '' }
  }
  onChange = event => {
    this.setState({ username: event.target.value })
  }
  onSubmit = event => {
    event.preventDefault()
    this.props.onSubmit({ username: this.state.username })
  }
  render() {
    return (
      <form className="user-form" onSubmit={this.onSubmit}>
        <Logo big />
        <input
          onChange={this.onChange}
          type="text"
          placeholder="github username"
        />
        <button type="submit" disabled={!this.state.username.length}>
          See profile
        </button>
      </form>
    )
  }
}

export default UserForm
