import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledLogo = styled.img`
  height: ${props => (props.big ? 60 : 30)}px;
  width: ${props => (props.big ? 60 : 30)}px;
`

/**
 * This component gives you the GitHub logo
 */
const Logo = props => <StyledLogo {...props} src="logo.png" alt="logo" />

Logo.propTypes = {
  /** Pass big if you want the logo to be big */
  big: PropTypes.bool
}
Logo.defaultProps = {
  big: false
}

export default Logo
