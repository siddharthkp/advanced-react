import React from 'react'
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
        <UserInfo data={null} />
        <Repositories repos={null} />
      </div>
    )
  }
}

export default App
