import React from 'react'
import axios from 'axios'

const { Provider, Consumer } = React.createContext({})

class State extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: props.initialData || window.INITIAL_DATA || {} }
  }
  onChange = ({ username }) => {
    this.setState({ data: {} })
    axios
      .get(`https://github-user.now.sh/?username=${username}`)
      .then(response => this.dispatch('USER_CHANGE_COMPLETE', response.data))
  }
  dispatch = (action, data) => {
    if (action === 'USER_CHANGE_INIT') this.onChange(data)
    else if (action === 'USER_CHANGE_COMPLETE') this.setState({ data })
  }
  componentDidMount() {
    this.dispatch('USER_CHANGE_INIT', { username: 'siddharthkp' })
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
