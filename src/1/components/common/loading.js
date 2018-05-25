import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  min-width: 100px;
  min-height: ${props => (props.height ? props.height : '30px')};
  margin-bottom: ${props => (props.empty ? '5px' : 'initial')};
  background: ${props => (props.empty ? '#eee' : 'initial')};
`

const Loading = props => (
  <Container height={props.height} empty={props.empty}>
    {props.children}
  </Container>
)

export default Loading
