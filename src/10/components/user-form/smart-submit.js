import React from 'react'

class SmartSubmit extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }
  onChange = event => {
    this.setState({ value: event.target.value })
  }
  render() {
    return this.props.children({
      disabled: !this.state.value.length,
      onChange: this.onChange
    })
  }
}

export default SmartSubmit
