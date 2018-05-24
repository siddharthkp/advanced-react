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
    const Component = this.props.Component

    return (
      <Component
        {...this.props}
        SmartSubmit_disabled={!this.state.value.length}
        onChange={this.onChange}
      />
    )
  }
}

const SmartSubmitHOC = Component => {
  return props => <SmartSubmit Component={Component} {...props} />
}

export default SmartSubmitHOC
