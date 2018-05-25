import React from 'react'
import Repo from './repo'

import { Consumer } from '../../state'

const Repositories = () => (
  <Consumer>
    {({ data }) => (
      <div className="section repositories">
        {data.repos.map(repo => (
          <Repo
            key={repo.name}
            name={repo.name}
            url={repo.url}
            description={repo.description}
            stars={repo.stars}
          />
        ))}
      </div>
    )}
  </Consumer>
)

export default Repositories
