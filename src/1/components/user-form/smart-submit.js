import React from 'react'

class SmartSubmit extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }
  onChange = event => {
    this.setState({ value: event.target.value })
  }
  onSubmit = event => {
    event.preventDefault()
    this.props.onSubmit({ value: this.state.value })
  }
  render() {
    return (
      <div>{this.props.children(!this.state.value.length, this.onChange)}</div>
    )
  }
}

export default SmartSubmit
