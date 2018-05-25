import React from 'react'
import { Consumer } from '../../state'
import styled from 'styled-components'

const StyledImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 5px;
  background: #eee;
`

const Avatar = () => (
  <Consumer>
    {({ data }) => {
      const src = data.avatar || 'grey.png'
      return <StyledImage src={src} alt="avatar" />
    }}
  </Consumer>
)

export default Avatar
