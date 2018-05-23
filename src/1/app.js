import React from 'react'
import axios from 'axios'

import Header from './components/common/header'
import UserInfo from './components/user-info'
import UserForm from './components/user-form'
import Repositories from './components/repositories'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: '', data: null }
  }
  onSubmit = ({ username }) => {
    this.setState({ username })
    axios
      .get(`https://github-user.now.sh/?username=${username}`)
      .then(response => this.setState({ data: response.data }))
  }
  render() {
    return (
      <div>
        <Header />
        <UserForm onSubmit={this.onSubmit} />
        {this.state.data ? (
          <div>
            <UserInfo data={this.state.data} />
            <Repositories data={this.state.data} />
          </div>
        ) : null}
      </div>
    )
  }
}

export default App
