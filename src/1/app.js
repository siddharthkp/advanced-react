import React from 'react'
import axios from 'axios'

import Header from './components/common/header'
import UserInfo from './components/user-info'
import UserForm from './components/user-form'
import Repositories from './components/repositories'
import { Provider } from './store'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: '', data: null }
  }
  onChange = ({ username }) => {
    this.setState({ username })
    axios
      .get(`https://github-user.now.sh/?username=${username}`)
      .then(response => this.setState({ data: response.data }))
  }
  render() {
    return (
      <Provider value={this.state.data}>
        <Header />
        <UserForm onChange={this.onChange} />
        {this.state.data ? (
          <div>
            <UserInfo />
            <Repositories />
          </div>
        ) : null}
      </Provider>
    )
  }
}

export default App
