import React from 'react'
import axios from 'axios'

const { Provider, Consumer } = React.createContext({})

class State extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: {} }
  }
  onChange = ({ username }) => {
    axios
      .get(`https://github-user.now.sh/?username=${username}`)
      .then(response => this.setState({ data: response.data }))
  }
  dispatch = (action, data) => {
    if (action === 'USER_CHANGED') this.onChange(data)
  }
  componentDidMount() {
    this.dispatch('USER_CHANGED', { username: 'siddharthkp' })
  }
  render() {
    const store = Object.assign(
      {},
      { data: this.state.data },
      { dispatch: this.dispatch }
    )
    return <Provider value={store}>{this.props.children}</Provider>
  }
}

export default State
export { Consumer }
