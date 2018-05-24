import React from 'react'
import { Consumer } from '../../store'

const Description = () => (
  <Consumer>
    {data => <div className="description">{data.description}</div>}
  </Consumer>
)

export default Description
