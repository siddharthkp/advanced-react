import React from 'react'
import styled from 'styled-components'

const StyledStar = styled.div`
  float: right;

  &::after {
    content: ' \\2605';
    color: gold;
  }
`

const Stars = props => <StyledStar>{props.stars}</StyledStar>

export default Stars
