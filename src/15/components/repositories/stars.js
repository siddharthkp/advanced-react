import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledStar = styled.div`
  float: right;

  &::after {
    content: ' \\2605';
    color: gold;
  }
`

/** This component renders stars with the symbol */
const Stars = props => <StyledStar>{props.stars}</StyledStar>

Stars.propTypes = {
  /** How many stars to show */
  stars: PropTypes.number
}

export default Stars
