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
    const Component = this.props.Component
    return (
      <Component
        onChange={this.onChange}
        disabled={!this.state.value}
        {...this.props}
      />
    )
  }
}

const smartSubmitHOC = Component => {
  return props => <SmartSubmit Component={Component} />
}

export default smartSubmitHOC
