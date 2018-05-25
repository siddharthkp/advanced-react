import React from 'react'
import axios from 'axios'
import Header from './components/common/header'
import UserInfo from './components/user-info'
import UserForm from './components/user-form'
import Repositories from './components/repositories'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: {} }
  }
  onChange = ({ username }) => {
    this.setState({ data: {} })
    axios
      .get(`https://github-user.now.sh/?username=${username}`)
      .then(response => this.setState({ data: response.data }))
  }
  componentDidMount() {
    this.onChange({ username: 'siddharthkp' })
  }

  render() {
    return (
      <div>
        <Header />
        <UserForm onChange={this.onChange} />
        {this.state.data.repos ? (
          <React.Fragment>
            <UserInfo data={this.state.data} />
            <Repositories data={this.state.data} />
          </React.Fragment>
        ) : null}
      </div>
    )
  }
}

export default App
