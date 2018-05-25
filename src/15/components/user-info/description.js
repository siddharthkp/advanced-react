import React from 'react'
import { Consumer } from '../../state'

const Description = () => (
  <Consumer>
    {({ data }) => <div className="description">{data.description}</div>}
  </Consumer>
)

Description.displayName = 'Repository Description'

export default Description
