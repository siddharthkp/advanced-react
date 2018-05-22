import React from 'react'

class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  onChange(event) {}
  render() {
    return (
      <div className="user-form">
        <img src="logo.png" className="big logo" />
        <input
          onChange={this.onChange.bind(this)}
          type="text"
          placeholder="github username"
        />
        <button disabled={true}>See profile</button>
      </div>
    )
  }
}

export default UserForm
