import React from 'react'
import ReactDOM from 'react-dom'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    overflow: hidden;
  }
`

const keyCodes = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
}

const step = 10

const Level = styled.div`
  background: #13a213;
  width: 600px;
  height: 500px;
  transform: rotate(-25deg);
  position: absolute;
  top: 150px;
  left: 150px;
  border-bottom: 20px solid green;
  border-left: 20px solid green;
`

const Mario = styled.div`
  height: 50px;
  background: url('${props =>
    props.moving ? 'mario-moving.png' : 'mario-still.png'}') no-repeat;
  width: ${props => (props.moving ? 48 : 40)}px;
  background-size: cover;
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  transform: ${props =>
    props.direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)'};
`

class World extends React.Component {
  constructor() {
    super()
    this.state = { top: 300, left: 300, moving: false, direction: 'right' }
  }
  componentDidMount() {
    document.addEventListener('keydown', ({ keyCode }) => {
      this.move(keyCodes[keyCode])
    })
  }
  move = newDirection => {
    this.setState(({ top, left, direction }) => {
      if (newDirection === 'left') left = left - step
      else if (newDirection === 'right') left = left + step
      else if (newDirection === 'down') top = top + step
      else if (newDirection === 'up') top = top - step

      if (['left', 'right'].includes(newDirection)) direction = newDirection

      return { top, left, moving: true, direction }
    })
    setTimeout(_ => this.setState({ moving: false }), 50)
  }
  render() {
    return (
      <div>
        <Level />
        <Mario
          top={this.state.top}
          left={this.state.left}
          moving={this.state.moving}
          direction={this.state.direction}
        />
      </div>
    )
  }
}

ReactDOM.render(<World />, document.getElementById('root'))
