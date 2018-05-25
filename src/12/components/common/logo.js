import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.img`
  height: ${props => (props.big ? 60 : 30)}px;
  width: ${props => (props.big ? 60 : 30)}px;
`

const Logo = props => <StyledLogo {...props} src="logo.png" alt="logo" />

export default Logo
