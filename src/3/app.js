import React from 'react'
import axios from 'axios'
import Header from './components/common/header'
import UserInfo from './components/user-info'
import UserForm from './components/user-form'
import Repositories from './components/repositories'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: props.data }
  }
  render() {
    return (
      <div>
        <Header />
        <UserForm />
        {this.state.data.repos ? (
          <div>
            <UserInfo data={this.state.data} />
            <Repositories repos={this.state.data.repos} />
          </div>
        ) : null}
      </div>
    )
  }
}

export default App
