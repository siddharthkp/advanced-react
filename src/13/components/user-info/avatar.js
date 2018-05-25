import React from 'react'
import { Consumer } from '../../state'
import styled from 'styled-components'

const StyledImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 5px;
`

const Avatar = () => (
  <Consumer>
    {({ data }) => {
      return <StyledImage src={data.avatar} alt="avatar" />
    }}
  </Consumer>
)

export default Avatar
