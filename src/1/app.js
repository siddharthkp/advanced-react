import React from 'react'
import Header from './components/common/header'
import UserInfo from './components/user-info'
import UserForm from './components/user-form'
import Repositories from './components/repositories'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: '' }
  }
  onSubmit = ({ username }) => {
    this.setState({ username })
  }
  render() {
    return (
      <div>
        <Header />
        <UserForm onSubmit={this.onSubmit} />
        <UserInfo data={this.props.data} />
        <Repositories data={this.props.data} />
      </div>
    )
  }
}

export default App
