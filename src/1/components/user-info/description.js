import React from 'react'
import { Consumer } from '../../state'
import Loading from '../common/loading'

const Description = () => (
  <Consumer>
    {({ data }) => (
      <Loading empty={!data.description}>
        <div className="description">{data.description}</div>
      </Loading>
    )}
  </Consumer>
)

Description.displayName = 'Repository Description'

export default Description
